import { createClient } from '@supabase/supabase-js'
import { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import {fastifyEnv} from '@fastify/env'
import { schema } from '../types/env.types.js';


/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 * 
 */

async function supabasePlugin(fastify: FastifyInstance, options) {
    await fastify.register(fastifyEnv, {
    confKey: 'config', 
    schema: schema,
    dotenv: true 
  });
  const supabase = createClient(
    fastify.config.SUPABASE_URL,
    fastify.config.SUPABASE_KEY
  );
    fastify.decorate('supabase', supabase);
}

export default fastifyPlugin(supabasePlugin);