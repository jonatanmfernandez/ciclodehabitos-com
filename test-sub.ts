import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Missing keys!");
  process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

async function testSub() {
  try {
    const email = `test-${Date.now()}@example.com`;
    console.log("Attempting insert:", email);
    const { data, error } = await supabaseAdmin
      .from('subscribers')
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error) {
      console.error("SUPABASE ERROR:", error);
    } else {
      console.log("SUCCESS!", data);
    }
  } catch (err) {
    console.error("JS EXCEPTION:", err);
  }
}

testSub();
