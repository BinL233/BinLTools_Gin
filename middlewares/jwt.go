package middlewares

import (
	"BinLTools_Gin/models"
	"github.com/golang-jwt/jwt"
	"time"
)

var jwtKet = []byte("a_secret_create")

type Claims struct {
	UserId uint
	jwt.StandardClaims
}

func ReleaseToken(user models.User) (string, error) {
	expirationTime := time.Now().Add(7 * 24 * time.Hour)
	claims := &Claims{
		UserId: user.ID,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
			IssuedAt:  time.Now().Unix(),
			Issuer:    "BinLTools.fun",
			Subject:   "user token",
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKet)

	if err != nil {
		return "", err
	}

	return tokenString, nil
}
