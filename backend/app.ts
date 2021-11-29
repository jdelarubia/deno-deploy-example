// deno run --allow-net ./backend/app.ts

import { serve } from "https://deno.land/std@0.116.0/http/server.ts";

console.log("Listening on http://localhost:8000");
serve((_req) => {
    return new Response("Hello World of Deno!", {
        headers: { "content-type": "text/plain" },
    });
});
