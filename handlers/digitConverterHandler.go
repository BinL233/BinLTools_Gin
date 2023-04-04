package handlers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func DigitConverter(c *gin.Context) {
	c.HTML(http.StatusOK, "digit_converter.html", gin.H{
		"title":         "进制转换器DigitConverter",
		"image_dc_logo": "/static/images/DigitConverter_logo.png",
	})
}
