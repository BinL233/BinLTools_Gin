# BinLTools_Gin

> 基于Gin框架的项目
> Gin Framework-based projects

> Website: http://binltools.fun

## 技术栈 Tech
- Frame: Gin
- Frontend: HTML + CSS
- Backend: Go + JavaScript
- Database: Mysql

## 功能 Feature
1. 登陆/注册 Login/Registation
    - 密码加密 Password encryption
    - 防止重复登录/注册 Prevent duplicate logins/registrations
    - 错误处理 Error handlers

2. 反应测试 Reaction Test
    - 成绩自动上传 Automatic upload of scores
    - 排名系统 Ranking System
    
3. 进制转换器 Digit Converter
    - 进制快速转换 Fast conversion of digits
    
## 结构 Structure
``` 
.
├── README.md
├── Responses
│   └── response.go
├── Services
│   ├── javascript
│   │   └── submitForm.js
│   ├── session.go
│   └── userServices.go
├── config
│   └── application.yml
├── dto
│   └── userDto.go
├── go.mod
├── go.sum
├── handlers
│   ├── digitConverterHandler.go
│   ├── indexHandler.go
│   └── reactionTestHandler.go
├── main.go
├── middlewares
│   ├── authMiddleware.go
│   └── jwt.go
├── models
│   ├── reactionTestRank.go
│   ├── test.go
│   └── user.go
├── routes
│   └── route.go
├── static
│   ├── css
│   │   ├── button1.css
│   │   ├── input
│   │   ├── input.css
│   │   └── style.css
│   └── images
│       ├── DigitConverter_logo.png
│       └── logo.png
├── templates
│   └── default
│       ├── base.html
│       ├── digit_converter.html
│       ├── error_page.html
│       ├── footer.html
│       ├── index.html
│       ├── login.html
│       ├── reaction.html
│       ├── register.html
│       └── success_page.html
├── tmp
│   └── runner-build
└── util
    └── util.go
``` 
## TODO
- [x] 反应测试排名系统 Reaction test ranking system
- [ ] 完善进制转换器 Improve Digit Converter
- [ ] 完善登出功能 Inprove log out function
- [ ] 个人主页 Personal homepage
