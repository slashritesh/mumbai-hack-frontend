import { register } from "@/actions/auth.action";
import AuthWarp from "@/components/AuthWarp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const SignUp = () => {

  return (
    <main className="h-screen flex justify-center items-center">
      <AuthWarp props={{ title: "Sign Up", description: "Create New account" }}>
        <form action={register} className="space-y-4">
          <div>
            <Label>Full name</Label>
            <Input name="fullname" placeholder="Enter your email" />
            <p className="text-sm text-red-600"></p>
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" placeholder="Enter your email" />
            <p className="text-sm text-red-600"></p>
          </div>
          <div>
            <Label>Password</Label>
            <Input name="password" placeholder="Enter Password" />
            <p className="text-sm text-red-600"></p>
          </div>
          <Button className="bg-blue-700 mt-9 shadow-none w-full my-5">
            Submit
          </Button>
        </form>
      </AuthWarp>
    </main>
  );
};

export default SignUp;
