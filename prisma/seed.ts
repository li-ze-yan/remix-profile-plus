import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const db = new PrismaClient();

async function seed() {
  const vector = await db.user.create({
    data: {
      email: "lizeyan1998@outlook.com",
      name: "lizeyan",
      password: await bcrypt.hash("15123485419tan", 10),
    },
  });

  console.log(vector);
}

seed();
