import "dotenv/config"
import "reflect-metadata"

import path from "node:path"
import { DataSource } from "typeorm"
import { getenv } from "@common/libs/env/dotenv"
import { SystemLogger } from "@common/libs/log/log4js"

const ENV_DEBUG = getenv('NODE_ENV') !== "production"
const DB_URL = getenv('DATABASE_URL')

export const entityManager = new DataSource({
  type: "postgres",
  url: DB_URL,
  synchronize: ENV_DEBUG,
  logging: ENV_DEBUG,
  migrationsRun: ENV_DEBUG,
  maxQueryExecutionTime: 3000,
  entities: [path.resolve(__dirname, "..", "databases", "typeorm", "entities", "**", "*.js")],
  migrations: [path.resolve(__dirname, "..", "databases", "typeorm", "migrations", "**", "*.js")],
})

entityManager.initialize()
  .then(() => SystemLogger.info(''))
  .catch(err => SystemLogger.error(err))
