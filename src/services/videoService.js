import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://skurylehqedmqvzgouim.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrdXJ5bGVocWVkbXF2emdvdWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzA3MzcsImV4cCI6MTk4Mzc0NjczN30.oRskTvlHrs4g2BL5aWROX4SU0wPG8Xcibw3kVYOlXlY'
const supabase = createClient(supabaseUrl, supabaseKey)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
        }
    }
}