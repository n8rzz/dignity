FROM node:13-alpine as builder

ENV NODE_ENV "development"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN npm run build

FROM builder

ENV NODE_ENV "production"
ENV CLIENT_ENV "production"

WORKDIR /usr/src/app
RUN npm run build

EXPOSE 3000

# CMD [ "npm", "start" ]
CMD [ "node", "./server.js" ]
