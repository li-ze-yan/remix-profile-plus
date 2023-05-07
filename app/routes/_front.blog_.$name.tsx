import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader({ params }: LoaderArgs) {
  return params;
}

const Index = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <span className=" text-black font-bold italic text-5xl">{data.name}</span>
  );
};

export default Index;
