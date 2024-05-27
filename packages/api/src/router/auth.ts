import type { TRPCRouterRecord } from "@trpc/server";

import { protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = {
  try: publicProcedure.query(() => {
    return { success: "HEY I AM THE ONE" };
  }),
  test: publicProcedure.mutation(() => {
    return { success: "HEY I AM THE ONE" };
  }),
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can see this secret message!";
  }),
} satisfies TRPCRouterRecord;
