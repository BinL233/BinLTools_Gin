package handlers

import (
	"BinLTools_Gin/Responses"
	"BinLTools_Gin/Services"
	"BinLTools_Gin/models"
	"net/http"
	"regexp"
	"strconv"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"golang.org/x/text/unicode/norm"
)

func Register(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)

	if userInfo == nil {
		userInfo["username"] = "Sign In"
	}

	c.JSON(http.StatusOK, userInfo)
}

func RegisterProcess(c *gin.Context) {
	//Initialize database
	DB := models.GetDB()

	//Fetch data
	userName := c.PostForm("user")
	password := c.PostForm("pwd")
	confirmPwd := c.PostForm("cpwd")
	userNameRegex := regexp.MustCompile(`^[\p{L}\p{N}_]{4,20}$`)
	normalizedUserName := norm.NFC.String(userName)
	matched := userNameRegex.MatchString(normalizedUserName)

	//Check password
	if len(password) < 6 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Password cannot less than 6")
		return
	}

	if password != confirmPwd {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "two Password fields not match")
		return
	}

	if !matched {
		if len(userName) < 5 || len(userName) > 20 {
			Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Invalid username format: The length of username only accepts 5 to 20")
		} else {
			Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Invalid username format: Username only accepts letters, numbers and underline")
		}
		return
	}

	if models.IsUserNameExist(DB, userName) {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Name exist")
		return
	}

	//Create account
	phasedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "Encrypt error")
		return
	}

	newUser := models.User{
		UserName: userName,
		Password: string(phasedPassword),
	}
	DB.Create(&newUser)
	if newUser.ID > 0 {
		Services.SaveAuthSession(c, strconv.Itoa(int(newUser.ID)))
	} else {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "System error")
	}

	Responses.SuccessResponse(c, nil, "Success!")
}
