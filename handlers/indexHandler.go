package handlers

import (
	"BinLTools_Gin/dto"
	"BinLTools_Gin/middlewares"
	"BinLTools_Gin/models"
	"BinLTools_Gin/util"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"net/http"
)

func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title":      "BinLTools",
		"image_logo": "/static/images/logo.png",
	})
}

func Login(c *gin.Context) {
	c.HTML(http.StatusOK, "login.html", gin.H{})
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
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 422,
			"msg":  "Username cannot be null",
		})
		return
	}

	if user.ID == 0 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 422,
			"msg":  "Username not exist",
		})
		return
	}

	//Check password
	if len(password) == 0 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 422,
			"msg":  "Password cannot be null",
		})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"code": 400,
			"msg":  "Incorrect password",
		})
		return
	}

	//token
	token, err := middlewares.ReleaseToken(user)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code": 500,
			"msg":  "Server Error",
		})
		return
	}

	//Success
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": gin.H{"token": token},
		"msg":  "Success!",
	})
}

func Info(c *gin.Context) {
	user, _ := c.Get("user")
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": gin.H{"user": dto.ToUserDto(user.(models.User))},
	})
}

func Register(c *gin.Context) {
	c.HTML(http.StatusOK, "register.html", gin.H{})
}

func RegisterProcess(c *gin.Context) {
	//Initialize database
	DB := models.GetDB()

	//Fetch data
	userName := c.PostForm("user")
	password := c.PostForm("pwd")

	//Check password
	if len(password) < 6 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 422,
			"msg":  "Password cannot less than 6.",
		})
		return
	}

	//Check userName
	if len(userName) == 0 {
		userName = util.RandomString(10)
	}

	if models.IsUserNameExist(DB, userName) {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 422,
			"msg":  "Name already exist",
		})
		return
	}

	//Create account
	phasedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code": 500,
			"msg":  "Encrypt error",
		})
		return
	}
	newUser := models.User{
		UserName: userName,
		Password: string(phasedPassword),
	}
	DB.Create(&newUser)

	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  "Success!",
	})
}
