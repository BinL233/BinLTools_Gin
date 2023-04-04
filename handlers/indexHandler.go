package handlers

import (
	"BinLTools_Gin/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title":      "BinLTools",
		"image_logo": "/static/images/logo.png",
	})
}

func Register(c *gin.Context) {
	c.HTML(http.StatusOK, "register.html", gin.H{})
}

func RegisterProcess(c *gin.Context) {
	//Initialize database
	db := models.InitDB()

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
		userName = models.RandomString(10)
	}

	if models.IsUserNameExist(db, userName) {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code": 422,
			"msg":  "Name already exist",
		})
		return
	}

	//Create account
	newUser := models.User{
		UserName: userName,
		Password: password,
	}
	db.Create(&newUser)

	c.JSON(http.StatusOK, gin.H{
		"msg": "Success!",
	})
}
