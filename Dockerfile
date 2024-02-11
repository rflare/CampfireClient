FROM node:latest

WORKDIR /client

COPY . .

RUN npm i \
&& npm run build \
&& npm i -g http-server \
&& chmod +x scripts/serve.sh

EXPOSE ${CLIENT_LOCAL_PORT}

CMD scripts/serve.sh
