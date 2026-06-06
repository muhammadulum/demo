import { Elysia, t } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/users", async () => {
    try {
      const allUsers = await db.select().from(users);
      return allUsers;
    } catch (error: any) {
      return { error: error.message };
    }
  })
  .post(
    "/users",
    async ({ body }) => {
      try {
        await db.insert(users).values({
          name: body.name,
          email: body.email,
        });
        return { success: true, message: "User created successfully" };
      } catch (error: any) {
        return { error: error.message };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
      }),
    }
  )
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
