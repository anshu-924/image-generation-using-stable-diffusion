import { createClient } from "npm:@supabase/supabase-js@2.39.7";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, style } = await req.json();
    
    if (!prompt) {
      throw new Error("Prompt is required");
    }

    // Combine prompt with style
    const fullPrompt = `${prompt} in ${style} style`;

    // Here we would normally call the Python script
    // For now, we'll simulate the response with a placeholder
    const imageUrl = "https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg";

    return new Response(
      JSON.stringify({ imageUrl }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});