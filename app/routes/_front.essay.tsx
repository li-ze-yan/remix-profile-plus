import { Outlet } from "@remix-run/react";

const Index = () => {
  return (
    <span className=" text-black font-bold italic text-5xl">
      Hello Essay
      <Outlet />
    </span>
  );
};

export default Index;