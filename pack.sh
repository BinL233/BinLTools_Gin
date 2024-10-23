#!/bin/bash

# Build backend image
cd gin_backend
sudo docker buildx build --platform linux/amd64 -t binl2333/binltools_backend:test . 

# Build frontend image
cd ../web
sudo docker buildx build --no-cache --platform linux/amd64 -t binl2333/binltools_web:test . 

# Save images to .tar file
cd ..
sudo docker save -o binltools_backend.tar binl2333/binltools_backend:test
sudo docker save -o binltools_web.tar binl2333/binltools_web:test

# Send files to the server
scp binltools_backend.tar ubuntu@124.222.134.63:/home/ubuntu/binltools_backend.tar
scp binltools_web.tar ubuntu@124.222.134.63:/home/ubuntu/binltools_web.tar
