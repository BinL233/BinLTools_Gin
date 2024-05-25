package handlers

import (
	"BinLTools_Gin/Services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Index(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign In"
	}
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title":      "BinLTools",
		"image_logo": "/static/images/logo.png",
		"userName":   userInfo,
	})
}

func AuthorProfile(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign In"
	}
	c.HTML(http.StatusOK, "authorHomePage.html", gin.H{
		"title":    "about_me",
		"userName": userInfo,
		//"profile":  "/static/markdown/author_profile.md",
	})
}
