import Fastify from 'fastify';
import dotenv from 'dotenv';
import cors from '@fastify/cors';
// import authenticate from '../plugins/authenticate.js' 
import supabasePlugin from '../plugins/supabase.js';
import rootRoutes from './rootRoutes.js'; 
import activityRoutes from './activies.js'; 


dotenv.config({ path: '.env' });

const app = Fastify({
  logger: true,
});


app.register(cors, { origin: true });
app.register(supabasePlugin);
// app.addHook('onRequest', authenticate)
app.register(rootRoutes);
app.register(activityRoutes, { prefix: 'activities' });

if (process.env.NODE_ENV === 'development') {
  const start = async () => {
    try {
      const port = Number(process.env.PORT) || 3000;
      await app.listen({ port, host: '0.0.0.0' });
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  start();
}

export default async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
};