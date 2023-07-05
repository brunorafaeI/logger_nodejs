
import { PrismaClient } from "@prisma/client"
import { FastifyInstance } from "fastify"
import { z } from "zod"

const prisma = new PrismaClient()

export const userRouter = async (
  fastify: FastifyInstance,
  options: Record<string, any>
) => {

  fastify.get('/users', async (_, reply) => {
    const users = await prisma.user.findMany()
    reply.status(200).send({ users })
  })

  fastify.post('/users', async (request, reply) => {
    const createUserSchema = z.object({
      name: z.string(),
      email: z.string().email()
    })

    const { name, email } = createUserSchema.parse(request.body)

    await prisma.user.create({
      data: {
        name,
        email
      }
    })

    reply.status(201).send()
  })
}
