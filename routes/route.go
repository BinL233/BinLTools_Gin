package routes

import (
	"BinLTools_Gin/Services"
	"BinLTools_Gin/handlers"
	"BinLTools_Gin/middlewares"
	"github.com/gin-gonic/gin"
)

func InitRoutes(r *gin.Engine) {
	idx := r.Group("/", Services.EnableCookieSession())
	{
		idx.GET("/", handlers.Index)
		idx.GET("/reaction_test", handlers.ReactionTest)
		idx.POST("/handle-reaction-b", handlers.HandleReactionB)
		idx.GET("/digit_converter", handlers.DigitConverter)
		idx.GET("/login", handlers.Login)
		idx.GET("/register", handlers.Register)
		idx.POST("/login_process", handlers.LoginProcess)
		idx.POST("/register_process", handlers.RegisterProcess)
		idx.GET("/user_info", middlewares.AuthMiddleware(), handlers.Info)
		idx.GET("/author_homepage", handlers.AuthorProfile)
		idx.GET("/download/:filename", handlers.DownloadFile)
	}
}
