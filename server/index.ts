import { publicProcedure, router } from './trpc';
import { z } from 'zod'
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const todoInputType = z.object({
    title : z.string(),
    description : z.string()
})
 

const appRouter = router({
  createTodo : publicProcedure
  .input(todoInputType)
  .mutation(async (opts) => {
    const title = opts.input.title;
    const description = opts.input.description;


    return {
        id : "1",
    }
  })
});

const server = createHTTPServer({
    router: appRouter,
  });
   
  server.listen(3000);
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;