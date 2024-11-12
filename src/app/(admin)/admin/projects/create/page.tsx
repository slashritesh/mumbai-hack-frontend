"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { projectSchema } from "@/schema/admin.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SubmitForm = () => {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
  });

  const submitProject = () => {};

  return (
    <section className="h-screen">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Create New Project</h3>
      </div>
      <Form {...form}>
        <form
          className="mt-5 grid grid-cols-2 gap-5 items-center rounded-lg p-8 border"
          onSubmit={form.handleSubmit(submitProject)}
        >
          <FormField
            name="name"
            control={form.control}
            render={() => {
              return (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="name"
            control={form.control}
            render={() => {
              return (
                <FormItem>
                  <FormLabel>Client Full Name</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="client_email"
            control={form.control}
            render={() => {
              return (
                <FormItem>
                  <FormLabel>Client Email</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="client_contact"
            control={form.control}
            render={() => {
              return (
                <FormItem>
                  <FormLabel>Client Phone Number</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="description"
            control={form.control}
            render={() => {
              return (
                <FormItem className="col-span-2">
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="col-span-2 flex gap-5 w-full">
            <FormField
              name="startDate"
              control={form.control}
              render={() => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Project Starting date</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="deadline"
              control={form.control}
              render={() => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Project Deadline Date</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="budget"
              control={form.control}
              render={() => {
                return (
                  <FormItem className="flex-1">
                    <FormLabel>Budget</FormLabel>
                    <FormControl>
                      <Input type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <FormField
            name="attachments"
            control={form.control}
            render={() => {
              return (
                <FormItem className="col-span-2">
                  <FormLabel>Attactments</FormLabel>
                  <FormControl>
                    <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center">
                                         <span className="text-sm font-medium text-gray-500">
                        Drag and drop a file or click to browse
                      </span>
                      <span className="text-xs text-gray-500">
                        PDF, image, video, or audio
                      </span>
                    </div>
                    {/* <Input type="file" multiple /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button className="w-fit self-end">Save Project</Button>
        </form>
      </Form>
    </section>
  );
};

export default SubmitForm;
