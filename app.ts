// Manual work for starting up a server:
// function handler(_req: Request): Response {
//     return new Response("Hello World!");
// }
// Deno.serve({ port: 3000, hostname: "localhost" }, handler);

// With Oak (Middleware package):
import { Application } from "https://deno.land/x/oak@v16.1.0/mod.ts";

import todoRoutes from './routes/todos.ts';

const app = new Application();

app.use(async (ctx, next) => {
    ctx.response.body = "Some other middleware!";
    await next();
});

app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());

await app.listen({ port: 3000 });