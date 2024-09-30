package models

//import (
//	"github.com/gin-gonic/gin"
//	"net/http"
//)
//
//// url?userid=()&username=()
//r.GET("/user/info", func(c *gin.Context) {
//	userid := c.Query("userid")
//	username := c.Query("username")
//	c.JSON(http.StatusOK, gin.H{
//		"userid":   userid,
//		"username": username,
//	})
//
//})
//
////Frontend to Backend
//r.POST("json", func(c *gin.Context) {
//	data, _ := c.GetRawData()
//	var m map[string]interface{}
//
//	//Pack as Json
//	_ = json.Unmarshal(data, &m)
//	c.JSON(http.StatusOK, m)
//})
//
//r.POST("/user/add", func(c *gin.Context) {
//	username := c.PostForm("username")
//	password := c.PostForm("password")
//	c.JSON(http.StatusOK, gin.H{
//		"msg":      "ok",
//		"username": username,
//		"password": password,
//	})
//})
