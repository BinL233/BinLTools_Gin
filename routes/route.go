package routes

import (
	"BinLTools_Gin/handlers"
	"github.com/gin-gonic/gin"
)

func InitRoutes(r *gin.Engine) {
	idx := r.Group("/")
	{
		idx.GET("/", handlers.Index)
		idx.GET("/reaction_test", handlers.ReactionTest)
		idx.GET("/digit_converter", handlers.DigitConverter)
		idx.GET("/register", handlers.Register)
		idx.POST("/register_process", handlers.RegisterProcess)
	}
}
