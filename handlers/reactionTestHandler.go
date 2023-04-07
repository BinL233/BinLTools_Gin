package handlers

import (
	"BinLTools_Gin/Responses"
	"BinLTools_Gin/Services"
	"BinLTools_Gin/models"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
	"strings"
)

func ReactionTest(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	users := models.FindTopTen()
	rank := []map[string]interface{}{
		{"id": 1, "userName": users[0].UserName, "score": users[0].Score},
		{"id": 2, "userName": users[1].UserName, "score": users[1].Score},
		{"id": 3, "userName": users[2].UserName, "score": users[2].Score},
		{"id": 4, "userName": users[3].UserName, "score": users[3].Score},
		{"id": 5, "userName": users[4].UserName, "score": users[4].Score},
		{"id": 6, "userName": users[5].UserName, "score": users[5].Score},
		{"id": 7, "userName": users[6].UserName, "score": users[6].Score},
		{"id": 8, "userName": users[7].UserName, "score": users[7].Score},
		{"id": 9, "userName": users[8].UserName, "score": users[8].Score},
		{"id": 10, "userName": users[9].UserName, "score": users[9].Score},
	}
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign Up"
	}
	c.HTML(http.StatusOK, "reaction.html", gin.H{
		"title":    "反应测试ReactionTest",
		"userName": userInfo,
		"rank":     rank,
	})
}

func HandleReactionB(c *gin.Context) {
	fmt.Println("Enter HandleReactionB...\n")
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
