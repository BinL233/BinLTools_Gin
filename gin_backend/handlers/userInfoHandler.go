package handlers

import (
	"BinLTools_Gin/Responses"
	"BinLTools_Gin/Services"
	"BinLTools_Gin/models"
	"log"
	"net/http"
	"regexp"

	"golang.org/x/text/unicode/norm"

	"github.com/gin-gonic/gin"
)

func ChangeUserName(c *gin.Context) {
	// Get user info
	userInfo := Services.GetUserInfo(c)

	// Check whether login
	if len(userInfo) == 0 {
		log.Println("User does not sign in")
		userInfo["username"] = "Login"
		userInfo["id"] = "?"
		c.JSON(http.StatusNotFound, userInfo)
		return
	}

	//Initialize database
	DB := models.GetDB()

	//Fetch data
	userName := c.PostForm("user")
	userNameRegex := regexp.MustCompile(`^[\p{L}\p{N}_]{4,20}$`)
	normalizedUserName := norm.NFC.String(userName)
	matched := userNameRegex.MatchString(normalizedUserName)

	if !matched {
		if len(userName) < 4 || len(userName) > 20 {
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

	// Modify username in DB
	var user models.User

	if err := DB.First(&user, userInfo["id"]).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	user.UserName = userName

	if err := DB.Save(&user).Error; err != nil {
		Responses.ErrorResponse(c, http.StatusInternalServerError, 500, nil, "Failed to update username")
		return
	}

	Responses.SuccessResponse(c, nil, "Success!")
}

func GetUserNameById(c *gin.Context) {
	id := c.Param("id")

	user := models.FindUserByField(id)
	c.JSON(http.StatusOK, user.UserName)
}
