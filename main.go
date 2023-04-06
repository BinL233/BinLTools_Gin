package main

import (
	"BinLTools_Gin/models"
	"BinLTools_Gin/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	models.InitDB()
	//Create the server
	r := gin.Default()

	//Load HTML
	r.LoadHTMLGlob("templates/**/*")

	//Load static files
	r.Static("/static", "./static")

	routes.InitRoutes(r)

	err := r.Run("binltools.fun:80")
	if err != nil {
		return
	}
	//r.Run(":8000")
}
