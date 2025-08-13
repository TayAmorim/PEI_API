import Fastify from 'fastify'
import cors from '@fastify/cors'
import {fastifyEnv} from '@fastify/env'
import supabasePlugin from '../plugins/supabase.js'
import activityRoutes from './activies.js'
// import authenticate from '../plugins/authenticate.js' // Se precisar, descomente
import rootRoutes from './rootRutes.js'
import { schema } from '../types/env.types.js'



const app = Fastify({
  logger: true
})

app.register(cors, { origin: true })
app.register(supabasePlugin)
// app.addHook('onRequest', authenticate) // Descomente para proteger todas as rotas
app.register(rootRoutes)
app.register(activityRoutes, { prefix: 'activities' })

await app.register(fastifyEnv, {
    confKey: 'init', 
    schema: schema,
    dotenv: true 
  });

export default async (req, res) => {
  await app.ready()
  app.server.emit('request', req, res)
}

if (process.env.STAGE === 'dev') {
  const start = async () => {
    try {
      const port = 3000
      await app.listen({ port: port, host: '0.0.0.0' })
      console.log(`🚀 Servidor local rodando em http://localhost:${port}`)
    } catch (err) {
      app.log.error(err)
      process.exit(1)
    }
  }
  start()
}