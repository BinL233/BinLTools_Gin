package handlers

import "github.com/gin-gonic/gin"

// This is the handler which handle file download

func DownloadFile(c *gin.Context) {
	fileName := c.Param("filename")
	filePath := "/app/download_path/" + fileName

	c.FileAttachment(filePath, fileName)
}
