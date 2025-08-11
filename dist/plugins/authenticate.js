import fastifyPlugin from 'fastify-plugin';
async function authenticate(request, reply) {
    if (!request.headers.authorization) {
        return reply.code(401).send({ error: 'você não tem permissão para acessar' });
    }
    const token = request.headers.authorization.replace('Bearer ', '');
    const { data: { user }, error } = await request.server.supabase.auth.getUser(token);
    if (error) {
        return reply.code(401).send({ error: 'Token invalido' });
    }
    request.user = user;
}
export default fastifyPlugin(authenticate);
