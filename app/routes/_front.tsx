import { Outlet } from "@remix-run/react";
import classNames from "classnames";
import { baseStyles } from "~/constants";

const Index = () => {
  return (
    <div
      className={classNames(
        "w-full h-screen flex justify-center items-center",
        baseStyles.componentTheme
      )}
    >
      <span className="font-bold italic text-5xl">Hello Front</span>
      <Outlet />
    </div>
  );
};

export default Index;
