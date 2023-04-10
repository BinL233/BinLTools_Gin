package handlers

import (
	"BinLTools_Gin/Services"
	"github.com/gin-gonic/gin"
	"net/http"
)

func DigitConverter(c *gin.Context) {
	userInfo := Services.GetUserInfo(c)
	if len(userInfo) == 0 {
		userInfo["username"] = "Sign Up"
	}
	c.HTML(http.StatusOK, "digit_converter.html", gin.H{
		"title":         "进制转换器DigitConverter",
		"image_dc_logo": "/static/images/DigitConverter_logo.png",
		"userName":      userInfo,
	})
}

/*func DigitConverterProcess(c *gin.Context) {
	//Fetch data from frontend
	input := c.PostForm("input")
	sel1 := c.PostForm("sel1")
	sel2 := c.PostForm("sel2")

	//check input
	for _, r := range input {
		if !unicode.IsDigit(r) {
			Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 422, nil, "Please enter numbers")
		}
	}

	input1, err := strconv.Atoi(input)
	if err != nil {
		Responses.ErrorResponse(c, http.StatusUnprocessableEntity, 500, nil, "Convert error")
	}

	//Process
	if sel1 == "2" {
		if sel2 == "2" {
			DC := models.DigitConverter{
				Output: input,
			}
		}
	}
}*/
