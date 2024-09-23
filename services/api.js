import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.PROJECT_URL
const supabaseKey = process.env.SUPABASE_KEY
const api = createClient(supabaseUrl, supabaseKey)

export { api };
