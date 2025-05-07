FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 4001
CMD ["node", "dist/main.js"]
