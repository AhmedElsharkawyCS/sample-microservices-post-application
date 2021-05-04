FROM node:14
WORKDIR /client-app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build
CMD [ "npm","start" ]

