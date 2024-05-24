package Responses

import (
	"BinLTools_Gin/Services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ErrorResponse(c *gin.Context, httpStatus int, code int, data gin.H, msg string) {
	userInfo := Services.GetUserInfo(c)
	if userInfo == nil {
		userInfo = make(map[string]interface{})
		userInfo["username"] = "Sign Up"
	}
	c.JSON(httpStatus, gin.H{
		"code":     code,
		"data":     data,
		"msg":      msg,
		"userName": userInfo,
	})
}

func SuccessResponse(c *gin.Context, data gin.H, msg string) {
	userInfo := Services.GetUserInfo(c)
	if userInfo == nil {
		userInfo = make(map[string]interface{})
		userInfo["username"] = "Sign Up"
	}
	c.JSON(http.StatusOK, gin.H{
		"code":     200,
		"data":     data,
		"msg":      msg,
		"userName": userInfo,
	})
}

//func Fail(c *gin.Context, msg string, data gin.H) {
//	Response(c, http.StatusOK, 400, data, msg)
//}
