import { SystemLogger } from "@common/libs/log/log4js"
import { FastifyError, FastifyReply, FastifyRequest } from "fastify"

export const onError = (
  request: FastifyRequest,
  reply: FastifyReply,
  error: FastifyError
) => {
  const { message, statusCode } = error

  SystemLogger.error(message)

  if (!statusCode) {
    return reply.status(500).send({ message: "Internal server error." })
  }

  return  reply.status(statusCode).send({ message })
}