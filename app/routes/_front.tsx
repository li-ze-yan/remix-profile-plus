import { Button } from "@mui/material";
import { Outlet } from "@remix-run/react";
import { useTheme } from "~/hooks";

const Index = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div className="w-full h-screen bg-white dark:bg-[#0a1929] flex justify-center items-center transition duration-500 ease-in-out">
      <span className=" text-[#0a1929] dark:text-white font-bold italic text-5xl">
        Hello Front
      </span>
      <Button
        variant="contained"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Hello World
      </Button>
      <Outlet />
    </div>
  );
};

export default Index;
