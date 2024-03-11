FROM node:21.7-bookworm-slim

WORKDIR /client

COPY . .

RUN npm i \
&& npm run build

EXPOSE ${CLIENT_LOCAL_PORT}

CMD npm start
