import { Outlet } from "@remix-run/react";

const Index = () => {
  return (
    <div className="w-full h-screen bg-slate-500 flex justify-center items-center">
      <span className=" text-white font-bold italic text-5xl">Hello Back</span>
      <Outlet />
    </div>
  );
};

export default Index;
