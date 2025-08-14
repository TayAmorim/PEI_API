import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import fastifyEnv from '@fastify/env';
import { schema } from '../../types/env.types.js';

declare module 'fastify' {
  interface FastifyInstance {
    supabase: SupabaseClient;
    config: {
      SUPABASE_URL: string
      SUPABASE_KEY: string;
    }
  }
}

async function supabasePlugin(fastify: FastifyInstance) {
  await fastify.register(fastifyEnv, {
    confKey: 'config',
    schema,
  });

  const supabase = createClient(
    fastify.config.SUPABASE_URL,
    fastify.config.SUPABASE_KEY
  );

  fastify.decorate('supabase', supabase);
}

export default fastifyPlugin(supabasePlugin);
