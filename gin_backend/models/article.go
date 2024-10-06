package models

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Article struct {
	gorm.Model
	AuthorId    int       `gorm:"not null"`
	PublishedAt time.Time `gorm:"type:datetime"`
	UpdatedAt   time.Time `gorm:"type:datetime"`
	Content     string    `gorm:"type:text;not null"`
	Category    string    `gorm:"type:varchar(255)"`
	Title       string    `gorm:"type:varchar(255);not null"`
	Tags        string    `gorm:"type:varchar(255)"`
	Views       int       `gorm:"not null"`
}

func FindArticleList(c *gin.Context) []Article {
	var articles []Article
	result := DB.Find(&articles)

	if result.Error != nil {
		fmt.Println("Error fetching data:", result.Error)
	}

	return articles
}

func FindArticleById(id int) Article {
	var article Article

	// Find article
	DB.Where("id = ?", id).First(&article)

	// Add view count
	DB.Model(&article).Where("id = ?", id).UpdateColumn("views", gorm.Expr("views + ?", 1))

	return article
}

func PostArticle(title string, category string, tags string, content string, userID int) Article {
	article := Article{
		AuthorId:    userID,
		Title:       title,
		Category:    category,
		Tags:        tags,
		Content:     content,
		PublishedAt: time.Now(),
	}

	DB.Create(&article)
	return article
}
