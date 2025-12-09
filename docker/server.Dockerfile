FROM node:22

WORKDIR /app
COPY ../server/package*.json ./
RUN npm install
COPY ../server .

EXPOSE 6000
CMD ["npx", "nodemon", "src/index.js"]