FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN yarn global add @nestjs/cli
COPY . .

ENV CHOKIDAR_USEPOLLING=true
CMD ["yarn run start"]



