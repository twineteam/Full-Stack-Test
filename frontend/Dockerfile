FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn global add react-scripts
RUN yarn install 
COPY . .

ENV CHOKIDAR_USEPOLLING=true
CMD [ "yarn", "start"]


