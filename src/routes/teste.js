async function routesUser (fastify, options) {
    fastify.get('/', async (request, reply) => {
    return { message: 'usuario logando...' }
  })
}

module.exports = routesUser