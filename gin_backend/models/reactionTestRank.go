package models

import (
	"gorm.io/gorm"
)

type ReactionTest struct {
	UserName string `gorm:"type:varchar(20);not null"`
	Score    int    `gorm:"type:int;not null"`
}

// TableName Set the name of table in database
func (ReactionTest) TableName() string {
	return "reaction_test"
}

func IsUserNameExistInRTR(db *gorm.DB, userName string) bool {
	var user ReactionTest
	db.Where("user_name = ?", userName).First(&user)
	return user.UserName != ""
}

func FindUserInRank(userName string) ReactionTest {
	var u ReactionTest
	DB.Where("user_name = ?", userName).First(&u)
	return u
}

func FindTopTen() []ReactionTest {
	var user []ReactionTest
	if err := DB.First(&user).Error; err != nil {
		for i := len(user); i < 10; i++ {
			user = append(user, ReactionTest{})
		}
		return user
	}

	DB.Order("score asc").Limit(10).Find(&user)

	if len(user) < 10 {
		for i := len(user); i < 10; i++ {
			user = append(user, ReactionTest{})
		}
	}
	return user
}
