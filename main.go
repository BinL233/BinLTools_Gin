package main

import (
	"BinLTools_Gin/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	//Create the server
	r := gin.Default()

	//Load HTML
	r.LoadHTMLGlob("templates/**/*")

	//Load static files
	r.Static("/static", "./static")

	routes.InitRoutes(r)

	err := r.Run()
	if err != nil {
		return
	}
	//r.Run(":8000")
}
