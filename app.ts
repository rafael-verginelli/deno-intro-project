// Manual work for starting up a server:
// function handler(_req: Request): Response {
//     return new Response("Hello World!");
// }
// Deno.serve({ port: 3000, hostname: "localhost" }, handler);

// With Oak (Middleware package):
import { Application } from "https://deno.land/x/oak@v16.1.0/mod.ts";

const app = new Application();
app.use((ctx) => {
    ctx.response.body = "Hello world!";
});

await app.listen({ port: 3000 });