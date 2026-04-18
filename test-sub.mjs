import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djjclzqwyydoatmxwyez.supabase.co';
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqamNsenF3eXlkb2F0bXh3eWV6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTE2ODIyNiwiZXhwIjoyMDc2NzQ0MjI2fQ.4kAQWGx89CTbqFiYPhrzN3hnazPS0Su5ZwTxLVsOTFs';

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
