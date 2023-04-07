package handlers

import (
	"BinLTools_Gin/Services"
	"github.com/gin-gonic/gin"
	"net/http"
)

func DigitConverter(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign Up"
	}
	c.HTML(http.StatusOK, "digit_converter.html", gin.H{
		"title":         "进制转换器DigitConverter",
		"image_dc_logo": "/static/images/DigitConverter_logo.png",
		"userName":      userInfo,
	})
}
