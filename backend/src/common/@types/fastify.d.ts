declare namespace Fastify {
  export interface FastifyError extends Error {
    statusCode: number;
  }
}