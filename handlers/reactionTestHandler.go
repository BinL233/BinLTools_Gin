package handlers

import (
	"BinLTools_Gin/Services"
	"github.com/gin-gonic/gin"
	"net/http"
)

func ReactionTest(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign Up"
	}
	c.HTML(http.StatusOK, "reaction.html", gin.H{
		"title":    "反应测试ReactionTest",
		"userName": userInfo,
	})
}
