package handlers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func ReactionTest(c *gin.Context) {
	c.HTML(http.StatusOK, "reaction.html", gin.H{
		"title": "反应测试ReactionTest",
	})
}
