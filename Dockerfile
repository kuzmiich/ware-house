FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install --production

COPY . .

CMD ["node", "src/server.js"]