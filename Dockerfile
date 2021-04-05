FROM node:8-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 7070

CMD [ "npm", "start" ]