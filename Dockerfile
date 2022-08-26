FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -f
# If you are building your code for production

# Bundle app source
COPY . .
RUN npm run build

ARG MONGO_URL
ARG TIMER_INTERVAL
ARG COINLAYER_KEY
ARG NODE_ENV

ENV NODE_ENV=${NODE_ENV}
ENV MONGO_URL=${MONGO_URL}
ENV TIMER_INTERVAL=${TIMER_INTERVAL}
ENV COINLAYER_KEY=${COINLAYER_KEY}
ENV PORT=4000

EXPOSE 4000

CMD [ "npm", "start" ]