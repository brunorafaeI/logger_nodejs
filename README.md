# Logger nodejs
A simple project to know how to apply the logs with nodejs (inside container docker or not)

## Requirements
- nodejs
- typescript
- prisma
- zod
- log4js
- pnpm (optional)
- docker (optional)

## Installation (optional)
### install pnpm via bash
```sh
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
```

## Getting started
``` 
cd backend
pnpm i
pnpm run dev
```

## Command prisma
```sh
npx prisma migrate dev
```

## References
[NodeJS Console Logs in Docker Containers: Hidden No More](https://medium.com/geekculture/nodejs-console-logs-in-docker-containers-hidden-no-more-d04bcfe1dc5c)