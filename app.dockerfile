FROM node:latest
MAINTAINER leandronsp
COPY . /var/www
WORKDIR /var/www
RUN npm install \
    npm run build
EXPOSE 8080
