
import Fastify from 'fastify'
import supabasePlugin from '../plugins/supabase.js'
import routes from './activies.js'


const fastify = Fastify({
  logger: true
})
fastify.register(supabasePlugin)
fastify.register(routes)

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }})