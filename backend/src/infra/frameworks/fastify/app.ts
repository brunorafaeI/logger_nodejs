import fastify from "fastify"
import { onRequest, onError } from "@infra/frameworks/fastify/middlewares";
import { userRouter } from "./routes";

const appFastify = fastify({})

// Routers
appFastify.register(userRouter)

// Hooks
appFastify.addHook('onRequest', onRequest)
appFastify.addHook('onError', onError)

export default appFastify
