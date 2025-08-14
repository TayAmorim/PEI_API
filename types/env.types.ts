export const schema = {
  type: 'object',
  required: [ 'SUPABASE_URL', 'SUPABASE_KEY', 'STAGE' ],
  properties: {
    SUPABASE_URL: { type: 'string' },
    SUPABASE_KEY: { type: 'string' },
    STAGE: {type: "string"}
  }
};