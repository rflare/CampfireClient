source .env
http-server out -p $CLIENT_LOCAL_PORT --proxy http://127.0.0.1:$SERVE_LOCAL_PORT
