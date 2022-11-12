import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
import { createServer } from "ultra/server.ts";
import App from "./src/app.tsx";

import { Webview, SizeHint } from 'https://deno.land/x/webview@0.7.5/mod.ts'

const webview = new Webview(true, {
  width: 800,
  height: 600,
  hint: SizeHint.FIXED
})

webview.navigate('http://localhost:8000/')

const server = await createServer({
  importMapPath: Deno.env.get("ULTRA_MODE") === "development"
    ? import.meta.resolve("./importMap.dev.json")
    : import.meta.resolve("./importMap.json"),
  browserEntrypoint: import.meta.resolve("./client.tsx"),
});

server.get("*", async (context) => {
  /**
   * Render the request
   */
  const result = await server.render(<App />);

  return context.body(result, 200, {
    "content-type": "text/html; charset=utf-8",
  });
});

serve(server.fetch);
webview.run();

