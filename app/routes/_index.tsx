import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="w-full h-screen bg-slate-500 flex justify-center items-center">
      <span className=" text-white font-bold italic text-5xl">
        Hello Profile Plus
      </span>
    </div>
  );
}
