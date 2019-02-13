#!/usr/bin/env bash

echo "[Starting G53IVP API]"

echo -n "Port: "
read port

echo -n "Path to SQLite3 db file: "
read sqlite_path

echo "PORT=$port" > .env
echo "SQLITE_PATH=$sqlite_path" >> .env

npm install

pm2 start server.js --name="G53IVP_API"
