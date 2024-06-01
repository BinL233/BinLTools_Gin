package main

import (
	"BinLTools_Gin/models"
	"BinLTools_Gin/routes"
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	models.InitDB()

	log.Println("DB init success.")
	//port := viper.GetString(`app.port`)

	//Create the server
	r := gin.Default()

	//Load static files
	r.Static("/static", "./web/build/static")
	r.Static("/scripts", "./web/build/scripts")
	r.Static("/Resources", "./web/build/Resources")
	r.StaticFile("/favicon.ico", "./web/build/favicon.ico")
	r.StaticFile("/manifest.json", "./web/build/manifest.json")

	routes.InitRoutes(r)

	r.NoRoute(func(c *gin.Context) {
		path := c.Request.URL.Path
		if !fileExists("./web/build" + path) {
			c.File("./web/build/index.html")
		} else {
			c.File("./web/build" + path)
		}
	})

	log.Println("Start run...")

	err := r.Run("0.0.0.0:3000")
	if err != nil {
		return
	}
}

func fileExists(path string) bool {
	_, err := os.Stat(path)
	return !os.IsNotExist(err)
}
