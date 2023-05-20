import { createCookieSessionStorage, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";

import { db } from "./db.server";

type LoginForm = {
  username: string;
  email: string;
  password: string;
};

// 不提供注册
// export async function register({ password, email }: LoginForm) {
//   const pwd = await bcrypt.hash(password, 10);
//   const user = await db.user.create({
//     data: { password: pwd, email },
//   });
//   return { id: user.id, email };
// }

export async function login({ username, email, password }: LoginForm) {
  const user = await db.user.findUnique({
    where: { email },
  });
  if (!user) {
    return null;
  }
  if (user.name !== username) {
    return null;
  }
  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (!isCorrectPassword) {
    return null;
  }

  return { ...user };
}

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "Vector",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getid(request: Request) {
  const session = await getUserSession(request);
  const id = session.get("id");
  if (!id || typeof id !== "string") {
    return null;
  }
  return id;
}

export async function requireid(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const id = session.get("id");
  if (!id || typeof id !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return id;
}

export async function createUserSession(id: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("id", id);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function getUser(request: Request) {
  const id = await getid(request);
  if (typeof id !== "string") {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      select: { id: true, email: true },
      where: { id: id },
    });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
