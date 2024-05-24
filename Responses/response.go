package Responses

import (
	"BinLTools_Gin/Services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ErrorResponse(c *gin.Context, httpStatus int, code int, data gin.H, msg string) {
	userInfo := Services.GetUserInfo(c)
	if userInfo == nil {
		userInfo["username"] = "Sign Up"
	}
	c.HTML(httpStatus, "error_page.html", gin.H{
		"code":     code,
		"data":     data,
		"msg":      msg,
		"userName": userInfo,
	})
}

// func SuccessResponse(c *gin.Context, httpStatus int, code int, data gin.H, msg string) {
// 	userInfo := Services.GetUserInfo(c)
// 	if userInfo == nil {
// 		userInfo["username"] = "Sign Up"
// 	}
// 	c.HTML(httpStatus, "success_page.html", gin.H{
// 		"code":     code,
// 		"data":     data,
// 		"msg":      msg,
// 		"userName": userInfo,
// 	})
// }

func Success(c *gin.Context, data gin.H, msg string) {
	// Redirect to the homepage
	c.Redirect(http.StatusFound, "/")

	// SuccessResponse(c, http.StatusOK, 200, data, msg)
}

//func Fail(c *gin.Context, msg string, data gin.H) {
//	Response(c, http.StatusOK, 400, data, msg)
//}
