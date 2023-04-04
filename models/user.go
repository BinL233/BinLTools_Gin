package models

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"math/rand"
	"time"
)

type User struct {
	gorm.Model
	UserName string `gorm:"type:varchar(20);not null"`
	Password string `gorm:"type:varchar(255);not null"`
}

func InitDB() *gorm.DB {
	//driverName := "mysql"
	host := "localhost"
	port := "3306"
	database := "binltools"
	username := "root"
	password := "123456"
	charset := "utf8"
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true",
		username, password, host, port, database, charset)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database, err: " + err.Error())
	}
	db.AutoMigrate(&User{})

	return db
}

func RandomString(n int) string {
	letters := []byte("qazxswedcvfrtgbnhyujmkiolpQAZXSWEDCVFRTGBNHYUJMKIOLP")
	result := make([]byte, n)

	rand.Seed(time.Now().Unix())
	for i := range result {
		result[i] = letters[rand.Intn(len(letters))]
	}

	return string(result)
}

func IsUserNameExist(db *gorm.DB, userName string) bool {
	var user User
	db.Where("user_name = ?", userName).First(&user)
	if user.ID != 0 {
		return true
	}

	return false
}
