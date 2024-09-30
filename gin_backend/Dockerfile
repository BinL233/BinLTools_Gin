FROM golang:1.22

ENV GO111MODULE=on \
    GOPROXY=https://goproxy.cn,direct \
    GIN_MODE=release

RUN apt-get update && apt-get install -y npm

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

WORKDIR /app
COPY . .

WORKDIR /app
RUN go build -o binltools .

EXPOSE 8080

ENTRYPOINT ["./binltools"]
