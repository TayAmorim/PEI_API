import { FastifyInstance } from "fastify";



async function rootRoutes(fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
    return { 
        status: 'online',
        message: 'Bem-vindo à API da Plataforma de Educação Inclusiva (Pei)!',
        timestamp: new Date().toISOString()
    }
    })
}

export default rootRoutes