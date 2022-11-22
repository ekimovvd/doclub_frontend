FROM node:14.16.0

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /app/

RUN npm install

COPY . .

RUN npm build

EXPOSE 3000