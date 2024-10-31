import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <section className="h-screen">
      <div>
        <h1 className="text-xl font-semibold">Account Settings</h1>
      </div>
      <Tabs defaultValue="account" className=" my-5">
        <TabsList className="space-x-3 h-auto p-3">
          <TabsTrigger className="p-2 px-4" value="company">Company</TabsTrigger>
          <TabsTrigger className="p-2 px-4" value="password">Role And Permissions</TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="company">
          <form
            className="mt-5 rounded-lg p-8 border space-y-3"
            action=""
            method="post"
          >
            <div className="space-y-2">
              <Label>Company Email Address</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Company Phone</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Company Address</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Industry </Label>
              <Input />
            </div>
            <Button>Update Details</Button>
          </form>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
};

export default page;
