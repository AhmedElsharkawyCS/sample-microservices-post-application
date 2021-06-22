FROM node:14
# Add the following line 
ENV CI=true
WORKDIR /client-app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build
CMD [ "npm","start" ]

