package Services

import (
	"BinLTools_Gin/models"
	"log"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func EnableCookieSession() gin.HandlerFunc {
	store := cookie.NewStore([]byte(viper.GetString(`app.cookie_key`)))

	//Set Session expire time
	store.Options(sessions.Options{
		MaxAge: 86400 * 7,
	})

	return sessions.Sessions("go-gin-binltools", store)
}

func SaveAuthSession(c *gin.Context, info interface{}) {
	session := sessions.Default(c)
	session.Set("id", info)
	// c.SetCookie("user_id",string(info.(map[string]interface{})["b"].(uint)), 1000, "/", "localhost", false, true)
	session.Save()
}

func GetSessionUserInfo(c *gin.Context) map[string]interface{} {
	session := sessions.Default(c)
	log.Printf("Session: %v", session)
	id := session.Get("id")
	data := make(map[string]interface{})
	if id != nil {
		user := models.FindUserByField(id.(string))
		data["username"] = user.UserName
	}
	return data
}
