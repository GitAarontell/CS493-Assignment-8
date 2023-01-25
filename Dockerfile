FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=8000
ENV GOOGLE_APPLICATION_CREDENTIALS='./key.json'
EXPOSE ${PORT}
CMD [ "npm", "start" ]