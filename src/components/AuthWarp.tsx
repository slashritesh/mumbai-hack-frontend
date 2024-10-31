import React, { ReactNode } from "react";
import { Button } from "./ui/button";

interface AuthWarpProps {
  title: string;
  description: string;
}

const AuthWarp = ({
  children,
  props,
}: {
  children: ReactNode;
  props: AuthWarpProps;
}) => {
  const { title, description } = props;
  return (
    <section className="flex-col space-y-4 rounded-lg w-[320px] p-6 border">
      <h1 className="text-lg text-center font-semibold">
        blue<span className="text-blue-700">Circle</span>.
      </h1>
      <div className="flex flex-col my-5 items-center">
        <h1 className="text-lg font-medium">{title}</h1>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
      <div>{children}</div>
      <hr className="my-5" />
      <div>
        <Button variant={"secondary"} className="w-full">
          Sign in With Google
        </Button>
      </div>
    </section>
  );
};

export default AuthWarp;
