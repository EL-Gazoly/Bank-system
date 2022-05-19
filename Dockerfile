FROM node:16.15.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_URL =  mongodb+srv://elgazoly:elgazoly11@projectscluster.zh7z2.mongodb.net/bankSystem?retryWrites=true&w=majority
ENV PORT = 5000 
ENV NODE_ENV = 'production'

EXPOSE 5000

CMD  ["npm", "start" ]

