
import { createClient } from '@supabase/supabase-js'
import { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 * 
 */

async function supabasePlugin(fastify: FastifyInstance, options) {
    const supabaseUrl = process.env.SUPABASE_URL as string
    const supabaseKey = process.env.SUPABASE_KEY as string
    const supabase = createClient(supabaseUrl, supabaseKey as string)

     fastify.decorate('supabase', supabase)
}

export default fastifyPlugin(supabasePlugin)
