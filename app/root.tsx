import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./styles/global.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import classNames from "classnames";
import { useUpdateEffect } from "ahooks";
import type { Theme } from "./utils/theme-provider";
import {
  NonFlashOfWrongThemeEls,
  ThemeProviderOwn,
  useTheme,
} from "./utils/theme-provider";
import { getThemeSession } from "./utils/theme.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Vector | Mandalorian" },
    {
      name: "description",
      content: "Vector | Mandalorian - A blog website built by tkx.cool.",
    },
  ];
};
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

function App() {
  // const systemStore = useSystemStore();
  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();
  const [darkTheme, setDarkTheme] = useState<any>(
    createTheme({
      palette: {
        mode: (theme as any) ?? "light",
      },
    })
  );

  // 初始化
  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     systemStore.saveTheme("dark");
  //   } else {
  //     systemStore.saveTheme("light");
  //   }
  //   return () => {
  //     systemStore.initTheme(
  //       window.matchMedia &&
  //         window.matchMedia("(prefers-color-scheme: dark)").matches
  //         ? "dark"
  //         : "light"
  //     );
  //   };
  // }, []);

  // 更新
  useUpdateEffect(() => {
    // console.log(systemStore.theme, "systemStore.theme");
    setDarkTheme(
      createTheme({
        palette: {
          mode: (theme as any) ?? "light",
        },
      })
    );
  }, [theme]);

  return (
    <html lang="en" className={classNames(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();
  return (
    <ThemeProviderOwn specifiedTheme={data.theme}>
      <App />
    </ThemeProviderOwn>
  );
}
