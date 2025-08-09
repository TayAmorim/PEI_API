import dotenv from 'dotenv'
dotenv.config()

import Fastify from 'fastify'
import supabasePlugin from '../plugins/supabase'
import routes from './teste'

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