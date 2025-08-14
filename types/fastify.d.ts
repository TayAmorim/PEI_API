import { SupabaseClient } from "@supabase/supabase-js";
import { User } from '@supabase/supabase-js';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      SUPABASE_URL: string;
      SUPABASE_KEY: string;
      STAGE: string
    };

    supabase: SupabaseClient;
  }
}



declare module 'fastify' {
  interface FastifyRequest {
    user?: User;
  }
}
