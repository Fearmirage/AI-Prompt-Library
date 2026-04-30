FROM node:18-alpine

RUN npm install -g serve

COPY . .

EXPOSE 8080

CMD ["serve", "-s", ".", "-l", "8080"]