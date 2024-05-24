package handlers

import (
	"BinLTools_Gin/Responses"
	"BinLTools_Gin/Services"
	"BinLTools_Gin/dto"
	"BinLTools_Gin/middlewares"
	"BinLTools_Gin/models"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func Login(c *gin.Context) {
	// Get user information and session
	userInfo := Services.GetUserInfo(c)

	// Check whether login
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign In"
	}

	c.JSON(http.StatusOK, userInfo)
}

func LoginProcess(c *gin.Context) {
	//Initialize database
	DB := models.GetDB()

	//Fetch data
	userName := c.PostForm("user")
	password := c.PostForm("pwd")

	var user models.User

	//Check username
	DB.Where("user_name = ?", userName).First(&user)
	if len(userName) == 0 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Username cannot be null")
		return
	}

	if user.ID == 0 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Username not exist")
		return
	}

	//Check password
	if len(password) == 0 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Password cannot be null")
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Incorrect password")
		return
	}

	//token
	token, err := middlewares.ReleaseToken(user)

	if err != nil {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "Server Error")
		return
	}

	//Success
	if user.ID > 0 {
		Services.SaveAuthSession(c, string(strconv.Itoa(int(user.ID))))
	} else {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "System error")
	}

	Responses.Success(c, gin.H{"token": token}, "Success!")
}

func Info(c *gin.Context) {
	user, _ := c.Get("user")
	Responses.Success(c, gin.H{"user": dto.ToUserDto(user.(models.User))}, "Success!")
}
