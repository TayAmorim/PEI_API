import Fastify from 'fastify';
import dotenv from 'dotenv';
import cors from '@fastify/cors';
import supabasePlugin from '../src/plugins/supabase.js';
import rootRoutes from '../src/routes/rootRoutes.js';
import activityRoutes from '../src/routes/activies.js';
import { IncomingMessage, ServerResponse } from 'http';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env' });
}

const app = Fastify({
  logger: true,
});

app.register(cors, { origin: true });
app.register(supabasePlugin);
app.register(rootRoutes);
app.register(activityRoutes, { prefix: '/activities' });


let isReady = false;

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    if (!isReady) {
      await app.ready();
      isReady = true;
    }
    app.server.emit('request', req, res);
  } catch (error) {
    console.error('Fastify error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};
