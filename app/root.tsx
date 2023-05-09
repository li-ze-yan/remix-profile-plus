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
import { Button, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from "./hooks";
import { useEffect, useState } from "react";

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
  const [theme, setTheme] = useTheme();
  const [darkTheme, setDarkTheme] = useState<any>(
    createTheme({
      palette: {
        mode: "light",
      },
    })
  );
  useEffect(() => {
    setDarkTheme(
      createTheme({
        palette: {
          mode: theme,
        },
      })
    );
    console.log(theme, "darkTheme");
  }, [theme]);
  return (
    <html lang="en" className={theme as string}>
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
          <Button
            variant="contained"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Hello World
          </Button>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
