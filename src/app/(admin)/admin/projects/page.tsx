import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Create New Project</h3>
        <Link className={cn(buttonVariants())} href={"/admin/projects/create"}>
          Add Project
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 grid-rows-3 mt-5">
        <div className="p-5 border">
          <h1>Project Name</h1>
        </div>
        <div className="p-5 border">
          <h1>Project Name</h1>
        </div>
        <div className="p-5 border">
          <h1>Project Name</h1>
        </div>
        <div className="p-5 border">
          <h1>Project Name</h1>
        </div>
      </div>
    </section>
  );
};

export default page;
