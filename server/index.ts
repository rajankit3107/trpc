import { publicProcedure, router } from './trpc';
import { z } from 'zod'

const todoInputType = z.object({
    title : z.string(),
    description : z.string()
})
 

const appRouter = router({
  createTodo : publicProcedure
  .input()
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;