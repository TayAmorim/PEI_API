import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import fastifyEnv from '@fastify/env';
import { schema } from '../../types/env.types.js';

async function supabasePlugin(fastify: FastifyInstance) {
  const { SUPABASE_URL, SUPABASE_KEY } = process.env;

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Missing environment variables SUPABASE_URL or SUPABASE_KEY');
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  fastify.decorate('supabase', supabase);
}

export default fastifyPlugin(supabasePlugin);
