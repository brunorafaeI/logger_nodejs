FROM node:lts-alpine3.17 AS logger_builder

WORKDIR /usr/src/app

COPY ./backend/package.json ./backend/package-lock.json ./

## SSL Certificate
COPY ./docker/certs /usr/local/share/ca-certificates/
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/CACERT.pem

## Update npm to latest version
RUN npm i -g npm@latest

## Install packages
RUN npm i -g typescript pm2 \
  && npm ci --silent

RUN chown -R node:node ./node_modules

USER node

FROM logger_builder AS logger_backend

COPY --from=logger_builder /usr/src/app ./

EXPOSE 4554

ENTRYPOINT [ -d "node_modules" ] && pm2-runtime process.json || npm i --save && pm2-runtime process.json