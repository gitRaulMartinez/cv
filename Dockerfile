FROM node:18-alpine

RUN apk update && apk add --no-cache git

WORKDIR /app

VOLUME /app

CMD ["tail", "-f", "/dev/null"]