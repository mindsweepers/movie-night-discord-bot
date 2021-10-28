FROM node

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

COPY package.json /usr/src/bot
RUN npm i

COPY . /usr/src/bot

WORKDIR /usr/src/bot/src
CMD ["node", "index.js"]