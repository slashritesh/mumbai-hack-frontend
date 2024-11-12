import { auth } from "@/lib/auth";
import React from "react";
import { Button } from "../ui/button";




const AdminNavbar = async () => {
  const user = await auth.getSessionUser()

  if (!user) {
    return <h1>User Null</h1>
  }
  
  return (
    <div className="border-b flex justify-between p-[0.88rem]">
      <div>
      </div>
      <div className="flex gap-5">
        <p className="p-2 rounded-full px-5 bg-blue-200 text-sm">{user.email}</p>
        <SignOutButton />
      </div>
    </div>
  );
};

export default AdminNavbar;

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await auth.signOut();
      }}
    >
      <Button variant={"outline"} type="submit">
        Sign Out
      </Button>
    </form>
  );
}
