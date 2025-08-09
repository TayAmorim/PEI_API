const routesUser = require('./teste')

const fastify = require('fastify')({
  logger: true
})

fastify.register(routesUser)

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }})