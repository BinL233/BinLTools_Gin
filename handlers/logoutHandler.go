package handlers

import (
	"BinLTools_Gin/Services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func LogoutProcess(c *gin.Context) {
	Services.DeleteAuthSession(c)
	c.JSON(http.StatusOK, gin.H{"message": "Successfully logged out"})
}
