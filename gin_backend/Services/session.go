package Services

import (
	"BinLTools_Gin/models"
	"fmt"
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

func DeleteAuthSession(c *gin.Context) {
	session := sessions.Default(c)
	session.Delete("id")
	fmt.Println("Deleted session info.")
	session.Save()
}

func SaveAuthSession(c *gin.Context, info interface{}) {
	session := sessions.Default(c)
	idString := fmt.Sprintf("%v", info)
	session.Set("id", idString)
	log.Printf("session_info: %v", idString)

	err := session.Save()
	if err != nil {
		log.Printf("error: %v", err)
	}
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

	fmt.Println("Session data: ", data)
	return data
}
