import Fastify from 'fastify'
import cors from '@fastify/cors'
import supabasePlugin from '../plugins/supabase.js'
import routes from './activies.js'
import authenticate from '../plugins/authenticate.js'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin: true,
})

fastify.addHook('onRequest', authenticate)
fastify.register(supabasePlugin)
fastify.register(routes)

fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }})