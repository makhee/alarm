FROM node:14.3.0

LABEL MAINTAINER="MAKHEE"

RUN mkdir -p /app
WORKDIR /app

ENTRYPOINT cd /app/backend && npm install && npm run dev