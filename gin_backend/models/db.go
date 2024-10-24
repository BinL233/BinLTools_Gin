package models

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() *gorm.DB {
	//driverName := "mysql"
	host := "localhost"
	host2 := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	database := "binltools"
	username := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	charset := "utf8"

	// Try local database
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true",
		username, password, host, port, database, charset)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err == nil {
		log.Println("Connected to local database.")
		db.AutoMigrate(&User{}, &Article{}, &ReactionTest{})
		DB = db
		return db
	}

	log.Printf("Failed to connect to local database: %v. Try remote database...\n", err)

	// try remote database
	dsn = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true",
		username, password, host2, port, database, charset)

	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err == nil {
		log.Println("Connected to remote database.")
		errMi := db.AutoMigrate(&User{})
		if errMi != nil {
			log.Fatalf("AutoMigrate failed: %v", errMi)
		}
		log.Println("DB migrate success.")
		DB = db
		return db
	}

	log.Fatalf("Failed to connect to remote database: %v.", err)
	return nil
}

func GetDB() *gorm.DB {
	return DB
}
