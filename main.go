package main

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	//Create the server
	r := gin.Default()

	//Load HTML
	r.LoadHTMLGlob("templates/**/*")

	//Load static files
	r.Static("/static", "./static")

	//Route Request
	////header
	//r.GET("/base", func(c *gin.Context) {
	//	c.HTML(http.StatusOK, "base.html", gin.H{})
	//})
	//
	////footer
	//r.GET("/footer", func(c *gin.Context) {
	//	c.HTML(http.StatusOK, "footer.html", gin.H{})
	//})

	//index
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title":      "BinLTools",
			"image_logo": "/static/images/logo.png",
		})
	})

	r.GET("/reaction_test", func(c *gin.Context) {
		c.HTML(http.StatusOK, "reaction.html", gin.H{
			"title": "反应测试ReactionTest",
		})
	})

	r.GET("/digit_converter", func(c *gin.Context) {
		c.HTML(http.StatusOK, "digitconverter.html", gin.H{
			"title":         "进制转换器DigitConverter",
			"image_dc_logo": "/static/images/DigitConverter_logo.png",
		})
	})

	// url?userid=()&username=()
	r.GET("/user/info", func(c *gin.Context) {
		userid := c.Query("userid")
		username := c.Query("username")
		c.JSON(http.StatusOK, gin.H{
			"userid":   userid,
			"username": username,
		})

	})

	//Frontend to Backend
	r.POST("json", func(c *gin.Context) {
		data, _ := c.GetRawData()
		var m map[string]interface{}

		//Pack as Json
		_ = json.Unmarshal(data, &m)
		c.JSON(http.StatusOK, m)
	})

	r.POST("/user/add", func(c *gin.Context) {
		username := c.PostForm("username")
		password := c.PostForm("password")
		c.JSON(http.StatusOK, gin.H{
			"msg":      "ok",
			"username": username,
			"password": password,
		})
	})

	err := r.Run()
	if err != nil {
		return
	}
	//r.Run(":8000")
}
