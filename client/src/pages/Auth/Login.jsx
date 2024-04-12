import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const FormSchema = z.object({
    email: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-screen flex"
      >
        <img src="assets/login_bg.jpg" alt="logo" className="w-1/2 h-screen" />
        <section className="w-1/2">
          <div className="text-end font-semibold text-3xl w-full bg-red-500">
            <p>Welcome Back!</p>
            <p>Please Login here</p>
          </div>
          <div className="flex flex-col w-2/3 mx-auto gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </div>
          <p>or login via</p>
          <div>
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </div>
        </section>
      </form>
    </Form>
  );
}
