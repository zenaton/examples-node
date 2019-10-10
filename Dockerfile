FROM node:stretch

RUN apt-get update && apt-get install -y curl

WORKDIR /app

EXPOSE 4001

COPY Recursive /app/Recursive
COPY Tasks /app/Tasks
COPY Workflows /app/Workflows
COPY launch* /app/
COPY boot.js client.js /app/

COPY ./start_zenaton /app/start_zenaton
COPY package.json yarn.lock ./

# Install application dependencies
RUN yarn

# Install Zenaton
RUN curl https://install.zenaton.com | sh

# Launch agent initialization script
CMD ["./start_zenaton"]
