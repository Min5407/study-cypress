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
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Must be a valid email"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function Home() {
  const { push } = useRouter();

  const form = useForm<FormSchemaType>({
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    push("/overview");
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-md">
      <div className="flex flex-col space-y-5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Log In
        </h3>
        <p className="text-sm text-muted-foreground">
          Log in to your account to continue
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="my-4">
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input data-cy="email-input" {...field} />
                    </FormControl>
                    <FormMessage data-cy="email-error" />
                  </FormItem>
                )}
                name="email"
                control={form.control}
              />
            </div>
            <div>
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input data-cy="name-input" {...field} />
                    </FormControl>
                    <FormMessage data-cy="name-error" />
                  </FormItem>
                )}
                name="name"
                control={form.control}
              />
            </div>
            <Button type="submit" data-cy="login-btn" className="w-full mt-8">
              submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
