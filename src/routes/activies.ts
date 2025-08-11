import { SupabaseClient } from "@supabase/supabase-js"

async function routes (fastify, options) {
    fastify.get('/activities', async (request, reply) => {
      try {
        const supabase = request.server.supabase as SupabaseClient
        const {data, error} = await supabase.from('atividades').select("*")

        if (error) { throw new Error("Algum erro detectado", error)}
        return { message: 'Listagem retornada com sucesso', data }
      } catch (e) {
          reply.code(500).send({ error: 'Erro ao conectar com o Supabase' })
      }
    
  })
}

export default routes