package main

import (
	"BinLTools_Gin/models"

	"github.com/gin-gonic/gin"
)

func main() {
	models.InitDB()
	//port := viper.GetString(`app.port`)

	//Create the server
	r := gin.Default()

	//Load HTML
	// r.LoadHTMLGlob("web/build/*.html")

	//Load static files
	r.Static("/", "./web/build")

	// routes.InitRoutes(r)
	//http.ListenAndServe(":"+port, r)

	r.NoRoute(func(c *gin.Context) {
		c.File("./web/build/index.html")
	})

	err := r.Run(":8080")
	//err := r.Run()
	if err != nil {
		return
	}
}
