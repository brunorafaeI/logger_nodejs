import os from "node:os"

import { AppLogger } from "@common/libs/log/log4js"
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify"

export const onRequest = (
  req: FastifyRequest,
  res: FastifyReply,
  done: HookHandlerDoneFunction
) => {
  const { method, url, ip, headers } = req
  const hostname = os.hostname()

  console.log({ hostname, method, url, ip })
  AppLogger.info(method, url, ip, `[${hostname}]`, headers['user-agent'])

  done()
}