FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx nx build angular-auth-app --prod

EXPOSE 4300

CMD ["npx", "nx", "serve", "angular-auth-app", "--port", "4300"]
