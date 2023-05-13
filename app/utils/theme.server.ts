import { createCookieSessionStorage } from "@remix-run/node";
import type { Theme } from "~/utils/theme-provider";
import { isTheme } from "~/utils/theme-provider";

// const sessionSecret = process.env.SESSION_SECRET;
// console.log("sessionSecret", sessionSecret);
// if (!sessionSecret) {
//   throw new Error("SESSION_SECRET must be set");
// }

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "my_remix_theme",
    secure: true,
    secrets: ["r3m1xr0ck5"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };
