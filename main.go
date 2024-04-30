package main

import (
	"BinLTools_Gin/models"
	"BinLTools_Gin/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	models.InitDB()
	//port := viper.GetString(`app.port`)

	//Create the server
	r := gin.Default()

	//Load HTML
	r.LoadHTMLGlob("web/build/*.html")

	//Load static files
	// r.Static("/static", "./src/static")
	// r.Static("/js", "./src/JSFunctions")

	routes.InitRoutes(r)
	//http.ListenAndServe(":"+port, r)

	err := r.Run(":8080")
	//err := r.Run()
	if err != nil {
		return
	}
}
