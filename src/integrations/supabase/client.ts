// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nsclpswsshikeogqsxgt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zY2xwc3dzc2hpa2VvZ3FzeGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMTY1NzMsImV4cCI6MjA2MjY5MjU3M30.8sF5GhjTYVzfeqo5wFXpc-YcWCjvm3QdsU1zqqHddKA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);