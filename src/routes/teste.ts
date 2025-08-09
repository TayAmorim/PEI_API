import { SupabaseClient } from "@supabase/supabase-js"

async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      try {
        const supabase = request.server.supabase as SupabaseClient
        const {data, error} = await supabase.from('atividades').select("*")

        console.log('oi', data)

        if (error) { throw new Error("Algum erro detectado", error)}
        return { message: 'Conexão com Supabase a ser testada aqui!', data }
      } catch (e) {
          reply.code(500).send({ error: 'Erro ao conectar com o Supabase' })
      }
    
  })
}

export default routes