package handlers

import (
	"BinLTools_Gin/Responses"
	"BinLTools_Gin/Services"
	"BinLTools_Gin/models"
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

func GetReactionTestRanks(c *gin.Context) {
	users := models.FindTopTen()
	ranks := make([]map[string]interface{}, len(users))

	for i, user := range users {
		ranks[i] = map[string]interface{}{
			"id":       i + 1,
			"userName": user.UserName,
			"score":    user.Score,
		}
	}

	c.JSON(http.StatusOK, ranks)
}

func HandleReactionB(c *gin.Context) {
	DB := models.GetDB()

	// Get the value of "reactionB" from the AJAX request
	reactionB := c.PostForm("reactionB")
	fmt.Printf("Get reactionB: %s\n", reactionB)
	intB := strings.Split(reactionB, " ")[0]
	B, err := strconv.Atoi(intB)
	if err != nil {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "System error: convert error")
	}

	if B < 0 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "System error")
		return
	}

	//Find userName and check
	userInfo := Services.GetUserInfo(c)
	userName, ok := userInfo["username"].(string)
	if !ok {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "System error: username is not string")
		return
	}

	if len(userInfo) == 0 {
		c.Redirect(http.StatusFound, "/login")
	}

	//If user not exist, Create record
	if !models.IsUserNameExistInRTR(DB, userName) {
		//Create score for new user
		newScore := models.ReactionTest{
			UserName: userName,
			Score:    B,
		}
		DB.Create(&newScore)
	} else {
		//Update user score
		userInfo2 := models.FindUserInRank(userName)
		userScore := userInfo2.Score
		fmt.Printf("user_name: %s\n", userName)
		fmt.Printf("userscore: %d\n", userScore)
		fmt.Printf("reactionB: %d\n", B)

		//Update new record
		if userScore > B {
			var user models.ReactionTest
			DB.AutoMigrate(&models.ReactionTest{})
			DB.Where("user_name = ?", userName).Find(&user)
			DB.Model(&user).Where("user_name = ?", userName).Update("score", B)
		}
	}
}
