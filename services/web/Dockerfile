FROM node:20-alpine

ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
