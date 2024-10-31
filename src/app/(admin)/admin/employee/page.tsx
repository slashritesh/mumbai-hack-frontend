import { Button } from "@/components/ui/button";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">All Employees</h3>
        <Button>Add Employee</Button>
      </div>
      <div className="mt-7">
        <Table className="border">
          <TableHeader>
            <TableRow className="">
              <TableHead className="w-[100px]">Emp id</TableHead>
              <TableHead>Emp Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Desigination</TableHead>
              <TableHead className="">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const SingleRow = () => {
  return (
    <TableRow>
      <TableCell className="font-medium">EM001</TableCell>
      <TableCell>Yogesh Thorat</TableCell>
      <TableCell className="">Information Technology</TableCell>
      <TableCell>Software Engineer</TableCell>
      <TableCell>
        <p className="p-1 px-4 bg-yellow-400 w-fit rounded-full text-sm">Online</p>
      </TableCell>
      {/* <TableCell className="">
        <Button size={"sm"} variant={"secondary"}>Send Email</Button>
      </TableCell> */}

    </TableRow>
  );
};

export default page;
