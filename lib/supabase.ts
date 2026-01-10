import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

// Helper to create admin client lazily or safely
export const supabaseAdmin = supabaseServiceRoleKey
    ? createClient(supabaseUrl || '', supabaseServiceRoleKey)
    : createClient(supabaseUrl || '', supabaseAnonKey || '') // Fallback to anon (will fail rights check but prevents crash) 
