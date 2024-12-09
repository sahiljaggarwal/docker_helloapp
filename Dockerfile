FROM node:20.15.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm run install

COPY . .

RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "run", "start" ]