FROM node:alpine3.13

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .

EXPOSE 3001

CMD ["yarn", "start"]
