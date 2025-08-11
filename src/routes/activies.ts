import { SupabaseClient } from "@supabase/supabase-js"

async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      try {
        const supabase = request.server.supabase as SupabaseClient
        console.log('supabase', supabase)
        const {data, error} = await supabase.from('atividades').select("*")

        if (error) { throw new Error("Algum erro detectado", error)}
        return { message: 'Conexão com Supabase a ser testada aqui!', data }
      } catch (e) {
          reply.code(500).send({ error: 'Erro ao conectar com o Supabase' })
      }
    
  })
}

export default routes