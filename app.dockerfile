FROM node:latest
MAINTAINER leandronsp
COPY . /var/www
WORKDIR /var/www
RUN npm install
CMD npm run build && npm run server:dev
EXPOSE 8080
