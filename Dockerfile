FROM node:latest

WORKDIR /client

COPY . .

RUN npm i \
&& npm run build \
&& npm i -g http-server

EXPOSE ${CLIENT_LOCAL_PORT}

CMD http-server dist -p ${CLIENT_LOCAL_PORT} --proxy http://server:${SERVER_LOCAL_PORT}
