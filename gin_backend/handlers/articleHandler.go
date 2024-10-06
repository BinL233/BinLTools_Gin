package handlers

import (
	"BinLTools_Gin/Responses"
	"BinLTools_Gin/Services"
	"BinLTools_Gin/models"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetArticleList(c *gin.Context) {
	articles := models.FindArticleList(c)
	c.JSON(http.StatusOK, articles)
}

func GetArticleById(c *gin.Context) {
	id_ := c.Param("id")
	id, err := strconv.Atoi(id_)

	if err != nil {
		c.JSON(http.StatusServiceUnavailable, nil)
	}

	article := models.FindArticleById(id)
	c.JSON(http.StatusOK, article)
}

func PostArticle(c *gin.Context) {
	// fetch data
	title := c.PostForm("title")
	category := c.PostForm("category")
	tags := c.PostForm("tags")
	content := c.PostForm("markdownText")

	//Find userName and check
	userInfo := Services.GetUserInfo(c)
	userName, ok := userInfo["username"].(string)
	if !ok {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "System error: username is not string")
		return
	}

	if len(userInfo) == 0 {
		c.Redirect(http.StatusFound, "/login")
	}

	userId := models.FindUserByName(userName).ID

	// // Check id
	// intUserID, err := strconv.Atoi(userID)
	// if err != nil {
	// 	c.JSON(http.StatusServiceUnavailable, nil)
	// }

	// Check role
	isAdmin, ok2 := userInfo["admin"].(bool)
	if !ok2 {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "System error: isAdmin is not bool")
		return
	}

	if !isAdmin {
		Responses.ErrorResponse(c, http.StatusForbidden, 403, nil, "Permission denied: User is not an admin")
		return
	}

	article := models.PostArticle(title, category, tags, content, int(userId))

	if article.ID > 0 {
		Services.SaveAuthSession(c, strconv.Itoa(int(article.ID)))
	} else {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "System error")
	}

	Responses.SuccessResponse(c, nil, "Success!")
}
