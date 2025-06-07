
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vruhqdatmgllgfadpyif.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydWhxZGF0bWdsbGdmYWRweWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNzI4MjgsImV4cCI6MjA2NDg0ODgyOH0.PRivAE-8Ik_xXjtp4IClV3YKIsdctpiKvegMwke3Ldw"
export const supabase = createClient(supabaseUrl, supabaseKey as string)