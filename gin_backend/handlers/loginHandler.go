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
	user, exists := c.Get("user")
	if !exists {
		Responses.ErrorResponse(c, http.StatusUnauthorized, 401, nil, "User not authenticated")
		return
	}

	userInfo := gin.H{
		"username": user.(models.User).UserName,
		"id":       user.(models.User).ID,
	}

	c.JSON(http.StatusOK, userInfo)
}

func LoginProcess(c *gin.Context) {
	// Initialize database
	DB := models.GetDB()

	// Fetch data
	userName := c.PostForm("user")
	password := c.PostForm("pwd")

	if len(userName) == 0 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Username cannot be null")
		return
	}

	// Check password
	if len(password) == 0 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Password cannot be null")
		return
	}

	var user models.User

	// Check if user exists in database
	result := DB.Where("user_name = ?", userName).First(&user)
	if result.Error != nil {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Username not exist")
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Incorrect password")
		return
	}

	// Token
	token, err := middlewares.ReleaseToken(user)
	if err != nil {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "Server Error")
		return
	}

	// Success
	if user.ID > 0 {
		Services.SaveAuthSession(c, string(strconv.Itoa(int(user.ID))))
		c.JSON(http.StatusOK, gin.H{
			"code": 200,
			"data": gin.H{"token": token},
			"msg":  "Success!",
		})
	} else {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "System error")
	}
}

func Info(c *gin.Context) {
	user, _ := c.Get("user")
	Responses.SuccessResponse(c, gin.H{"user": dto.ToUserDto(user.(models.User))}, "Success!")
}
