package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName string `gorm:"type:varchar(20);not null"`
	Password string `gorm:"type:varchar(255);not null"`
	Admin    bool   `gorm:"type:varchar(255);not null"`
}

func IsUserNameExist(db *gorm.DB, userName string) bool {
	var user User
	db.Where("user_name = ?", userName).First(&user)
	return user.ID != 0
}

func FindUserByName(userName string) User {
	var user User
	DB.Where("user_name = ?", userName).First(&user)
	return user
}

func FindUserByField(value string) User {
	var u User
	DB.Where("id = ?", value).First(&u)
	return u
}

func checkUserRole(id int) bool {
	var user User
	DB.Where("id = ?", id).First(&user)
	return user.Admin
}

func getUserCreateDate(id int) time.Time {
	var user User
	DB.Where("id = ?", id).First(&user)
	return user.CreatedAt
}
