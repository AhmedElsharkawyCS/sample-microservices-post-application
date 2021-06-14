FROM node:14
WORKDIR /event-bus-service
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build
CMD [ "npm","start" ]
