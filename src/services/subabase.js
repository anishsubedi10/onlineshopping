import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://srsjhagxcstyzprahbst.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyc2poYWd4Y3N0eXpwcmFoYnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4NDQ1MDUsImV4cCI6MjA0NDQyMDUwNX0.VbuUPqAhRljb6ASzPswua-14qvk_KK5FWXadHT6GUxY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
