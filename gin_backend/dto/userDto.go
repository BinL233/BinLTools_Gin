package dto

import "BinLTools_Gin/models"

type UserDto struct {
	UserName string `json:"user_name"`
}

func ToUserDto(user models.User) UserDto {
	return UserDto{
		UserName: user.UserName,
	}
}
