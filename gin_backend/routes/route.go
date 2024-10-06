package routes

import (
	"BinLTools_Gin/Services"
	"BinLTools_Gin/handlers"
	"BinLTools_Gin/middlewares"

	"github.com/gin-gonic/gin"
)

func InitRoutes(r *gin.Engine) {

	apiIdx := r.Group("/api", Services.EnableCookieSession())
	{
		// Download
		apiIdx.GET("/download/:filename", handlers.DownloadFile)

		reactionRoute := apiIdx.Group("/reaction")
		{
			// Update ReactionTest record
			reactionRoute.POST("/handle_reaction_b", handlers.HandleReactionB)

			// Get ReactionTest Rank
			reactionRoute.GET("/reaction_test_rank", handlers.GetReactionTestRanks)
		}

		ArticleRoute := apiIdx.Group("/article")
		{
			// Get certain article by ID
			ArticleRoute.GET("/:id", handlers.GetArticleById)

			// Get article list
			ArticleRoute.GET("/article_list", handlers.GetArticleList)

			// Post new article
			ArticleRoute.POST("/post_article", handlers.PostArticle)
		}

		userRoute := apiIdx.Group("/user")
		{
			// Get login info
			userRoute.GET("/login", handlers.Login)

			// Post login username and password
			userRoute.POST("/login_process", handlers.LoginProcess)

			// Get register info
			userRoute.GET("/register", handlers.Register)

			// Post register username and password
			userRoute.POST("/register_process", handlers.RegisterProcess)

			// Get user info
			userRoute.GET("/user_info", middlewares.AuthMiddleware(), handlers.Info)

			// User Logout
			userRoute.POST("/logout_process", handlers.LogoutProcess)

			// Change username
			userRoute.POST("/change_username", handlers.ChangeUserName)

			// Get user name by Id
			userRoute.GET("/:id", handlers.GetUserNameById)
		}
	}
}
