// src/supabase.js
import { createClient } from '@supabase/supabase-js';

// Vite වලදී env variables ගන්නේ import.meta.env මගින්
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// මේ පේළි දෙකෙන් බ්‍රවුසරයේ Console එකට Keys එනවාදැයි බලාගත හැක
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseKey);