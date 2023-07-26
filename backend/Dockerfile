FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
ENV CHOKIDAR_USEPOLLING=true
COPY . .
CMD [ "yarn", "start"]


