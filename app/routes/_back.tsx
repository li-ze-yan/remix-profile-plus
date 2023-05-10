import { Outlet } from "@remix-run/react";
import classNames from "classnames";
import { baseStyles } from "~/constants";

const Index = () => {
  return (
    <div
      className={classNames(
        "w-full h-screen flex justify-center items-center",
        baseStyles.layoutTheme
      )}
    >
      <div
        className={classNames("w-72 h-full", baseStyles.componentTheme)}
      ></div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
