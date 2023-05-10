import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/global.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useUpdateEffect } from "ahooks";
import { useSystemStore } from "./stores";

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

export default function App() {
  const systemStore = useSystemStore();
  const [darkTheme, setDarkTheme] = useState<any>(
    createTheme({
      palette: {
        mode: "light",
      },
    })
  );

  // 初始化
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      systemStore.saveTheme("dark");
    } else {
      systemStore.saveTheme("light");
    }
    return () => {
      systemStore.initTheme();
    };
  }, []);

  // 更新
  useUpdateEffect(() => {
    console.log(systemStore.theme, "systemStore.theme");
    setDarkTheme(
      createTheme({
        palette: {
          mode: systemStore.theme,
        },
      })
    );
  }, [systemStore.theme]);

  return (
    <html lang="en" className={classNames(systemStore.theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
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
