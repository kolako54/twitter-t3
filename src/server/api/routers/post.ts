import { publicProcedure } from "./../trpc";
import { createTRPCRouter } from "~/server/api/trpc";
export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      include: {
        author: {
          select: {
            image: true,
            email: true,
            name: true,
          },
        },
      },
    });
    return posts;
  }),
});
