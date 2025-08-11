import dotenv from 'dotenv'
dotenv.config()
import { createClient } from '@supabase/supabase-js'
import { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import {fastifyEnv} from '@fastify/env'

const schema = {
  type: 'object',
  required: [ 'SUPABASE_URL', 'SUPABASE_KEY' ],
  properties: {
    SUPABASE_URL: { type: 'string' },
    SUPABASE_KEY: { type: 'string' }
  }
};



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