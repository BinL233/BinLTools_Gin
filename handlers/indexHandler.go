package handlers

import (
	"BinLTools_Gin/Responses"
	"BinLTools_Gin/Services"
	"BinLTools_Gin/dto"
	"BinLTools_Gin/middlewares"
	"BinLTools_Gin/models"
	"BinLTools_Gin/util"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"strconv"
)

func Index(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign Up"
	}
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title":      "BinLTools",
		"image_logo": "/static/images/logo.png",
		"userName":   userInfo,
	})
}

func Login(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign Up"
	}
	c.HTML(http.StatusOK, "login.html", gin.H{
		"title":    "Login",
		"userName": userInfo,
	})
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

func Register(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	if userInfo == nil {
		userInfo["username"] = "Sign Up"
	}
	c.HTML(http.StatusOK, "register.html", gin.H{
		"title":    "Sign Up",
		"userName": userInfo,
	})
}

func RegisterProcess(c *gin.Context) {
	//Initialize database
	DB := models.GetDB()

	//Fetch data
	userName := c.PostForm("user")
	password := c.PostForm("pwd")

	//Check password
	if len(password) < 6 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Password cannot less than 6")
		return
	}

	//Check userName
	if len(userName) == 0 {
		userName = util.RandomString(10)
	}

	if models.IsUserNameExist(DB, userName) {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Name already exist")
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

	Responses.Success(c, nil, "Success!")
}
