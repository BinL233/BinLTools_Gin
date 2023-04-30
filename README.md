# BinLTools_Gin

- 基于Gin框架的项目 Gin Framework-based project
- Website: http://binltools.fun

## 技术栈 Tech
- Framework: Gin
- Frontend: HTML + CSS + JavaScript
- Backend: Go
- Database: Mysql

## 功能 Feature
1. 登陆/注册 Login/Registation
    - 密码加密 Password encryption
    - JWT身份认证 JWT web tokens for users
    - 防止重复登录/注册 Prevent duplicate logins/registrations
    - 错误处理 Error handlers

2. 反应测试 Reaction Test
    - 成绩自动上传 Automatic upload of scores
    - 排名系统 Ranking System

3. Live2D看板娘部件 Live2D Widgit
    - 鼠标追踪 Mousemove tracking
    - *感谢[拉莫斯的壳](https://space.bilibili.com/6769942/?spm_id_from=333.999.0.0)制作的Live2D模型！！！*
    
3. 进制转换器 Digit Converter
    - 进制快速转换 Fast conversion of digits
    - 支持二进制、八进制、十进制和十六进制的相互转换 Support Binary, Octal, Decimal and Hexdecimal conversions.
    
## 结构 Structure
``` 
.
├── README.md
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
├── responses
│   └── response.go
├── routes
│   └── route.go
├── services
│   ├── session.go
│   └── userServices.go
├── static
│   ├── css
│   │   ├── a0d73-0rp1k-001.ico
│   │   ├── button1.css
│   │   ├── button2.css
│   │   ├── input
│   │   ├── input.css
│   │   ├── live2d.css
│   │   ├── select.css
│   │   ├── style.css
│   │   └── textarea.css
│   ├── images
│   │   ├── BinLTools_logo.ico
│   │   ├── BinLTools_logo.png
│   │   ├── DigitConverter_logo.png
│   │   └── logo.png
│   └── live2d
│       ├── Resources
│       │   ├── Domino0
│       │   │   ├── Domino0.2048
│       │   │   │   └── texture_00.png
│       │   │   ├── Domino0.cdi3.json
│       │   │   ├── Domino0.moc3
│       │   │   ├── Domino0.model3.json
│       │   │   ├── Domino0.physics3.json
│       │   │   └── motions
│       │   │       └── idle.motion3.json
│       │   ├── Domino2
│       │   │   ├── Domino.2048
│       │   │   │   └── texture_00.png
│       │   │   ├── Domino.cdi3.json
│       │   │   ├── Domino.moc3
│       │   │   ├── Domino.model3.json
│       │   │   ├── Domino.physics3.json
│       │   │   └── motions
│       │   │       └── idle.motion3.json
│       │   └── XumoQ
│       │       ├── XumoQ.cdi3.json
│       │       ├── XumoQ.moc3
│       │       ├── XumoQ.model3.json
│       │       ├── XumoQ.physics3.json
│       │       ├── motions
│       │       │   ├── akimbo.motion3.json
│       │       │   ├── idle.motion3.json
│       │       │   └── stoop.motion3.json
│       │       └── textures
│       │           └── texture_00.png
│       ├── frame
│       │   └── pixi.min.js
│       ├── go.mod
│       ├── l2d.js
│       ├── live2dcubismframework.js
│       ├── live2dcubismpixi.js
│       └── main.js
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
- [x] 完善进制转换器 Improve Digit Converter
- [x] Live2d部件 Live2d widget
- [ ] 完善登出功能 Improve log out function
- [ ] 个人主页 Personal homepage
