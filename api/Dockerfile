FROM node:18-alpine
WORKDIR /clothes-app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]