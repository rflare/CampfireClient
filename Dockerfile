FROM node:latest

WORKDIR /client

COPY . .

RUN npm i \
&& npm run build

EXPOSE 42067

CMD bash scripts/serve.sh
