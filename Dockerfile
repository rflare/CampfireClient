FROM node:latest

WORKDIR /client

COPY . .

RUN npm i \
&& npm run build \
&& npm i -g http-server

EXPOSE 42067

CMD http-server dist -p 42067 --proxy http://server:53342
