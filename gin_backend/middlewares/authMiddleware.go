package middlewares

import (
	"BinLTools_Gin/Responses"
	"BinLTools_Gin/models"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		//Fetch authorization header
		tokenString := c.GetHeader("Authorization")

		//check token format
		if tokenString == "" || !strings.HasPrefix(tokenString, "Bearer ") {
			Responses.ErrorResponse(c, http.StatusUnauthorized, 401, nil, "Not authorized: Token format incorrect")
			c.Abort()
			return
		}

		tokenString = tokenString[7:]
		token, claims, err := ParseToken(tokenString)

		if err != nil || !token.Valid {
			Responses.ErrorResponse(c, http.StatusUnauthorized, 401, nil, "Not authorized")
			c.Abort()
			return
		}

		//Success to get token
		userID := claims.UserId
		DB := models.GetDB()
		var user models.User
		DB.First(&user, userID)

		//user not exist
		if user.ID == 0 {
			Responses.ErrorResponse(c, http.StatusUnauthorized, 401, nil, "Not authorized")
			return
		}

		c.Set("user", user)
		c.Next()

	}
}
