package routes

import (
	"BinLTools_Gin/Services"
	"BinLTools_Gin/handlers"

	"github.com/gin-gonic/gin"
)

func InitRoutes(r *gin.Engine) {
	idx := r.Group("/", Services.EnableCookieSession())
	{
		idx.GET("/", handlers.Index)
		idx.GET("/login", handlers.Login)
		idx.GET("/register", handlers.Register)
		idx.GET("/about_me", handlers.AuthorProfile)
	}
}
