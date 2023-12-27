FROM node:18-alpine

WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install --production

COPY . .

EXPOSE 3030

CMD ["node", "src/server.js"]