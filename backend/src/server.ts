import "reflect-metadata"

import { SystemLogger } from '@common/libs/log/log4js';
import { getenv } from '@common/libs/env/dotenv';
import appFastify from '@infra/frameworks/fastify/app';

const APP_PORT = getenv('APP_PORT', 8080)

appFastify.listen({
  host: '0.0.0.0',
  port: APP_PORT
})
  .then(() => SystemLogger.info(`Server listening on port ${APP_PORT}`))
