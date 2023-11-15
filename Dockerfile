FROM golang:alpine

RUN go env -w GO111MODULE=on

RUN go env -w GOPROXY=https://goproxy.cn,direct

MAINTAINER "BinL"

ENV GIN_MODE=release

WORKDIR /app

ADD . .

CMD go mod init BinLTools_Gin

CMD go mod tidy

COPY go.mod .

COPY go.sum .

RUN go mod download

RUN go build -o main .

EXPOSE 8080

ENTRYPOINT ["./main"]