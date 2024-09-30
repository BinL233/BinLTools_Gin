package Services

import "github.com/gin-gonic/gin"

func GetUserInfo(c *gin.Context) map[string]interface{} {
	return GetSessionUserInfo(c)
}
