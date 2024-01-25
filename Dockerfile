FROM node:latest

WORKDIR /client

COPY . .

RUN npm i \
&& npm i -g http-server \
&& npm run build 

EXPOSE 42067

CMD npm run serve
