import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure
    .input(todoInputType)
    .mutation(async (opts: { input: z.infer<typeof todoInputType> }) => {
      const title = opts.input.title;
      const description = opts.input.description;

      return {
        id: "1",
      };
    }),
  signUp: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      let username = opts.input.username;
      let password = opts.input.password;

      let token = "`213131314e3";

      return {
        token,
      };
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3001);

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
