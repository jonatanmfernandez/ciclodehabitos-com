import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Note: We use the service role key here because this client will be used server-side
// to write to the database bypassing RLS (Row Level Security) if needed for simple subscriptions,
// or you can use the anon key if you have proper RLS set up.
// For security, do not expose SUPABASE_SERVICE_ROLE_KEY to the client side.

export const supabase = createClient(supabaseUrl, supabaseKey)
