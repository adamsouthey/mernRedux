FROM node:13

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5000
CMD [ "node", "server" ]