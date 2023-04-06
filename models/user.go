package models

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

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

	DB = db
	return db
}

func GetDB() *gorm.DB {
	return DB
}

func IsUserNameExist(db *gorm.DB, userName string) bool {
	var user User
	db.Where("user_name = ?", userName).First(&user)
	if user.ID != 0 {
		return true
	}

	return false
}

func FindUserByField(value string) User {
	var u User
	DB.Where("id = ?", value).First(&u)
	return u
}
