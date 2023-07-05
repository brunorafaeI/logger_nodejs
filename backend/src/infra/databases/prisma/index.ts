import { PrismaClient } from "@prisma/client"

export const entityManager = new PrismaClient()
export const disconnect = () => entityManager.$disconnect()