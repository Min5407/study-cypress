import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { FormType } from "..";

type Props = {
  form: UseFormReturn<FormType>;
  onSubmit: SubmitHandler<FormType>;
};
const ChatForm = ({ form, onSubmit }: Props) => {
  const isDisabled = !form.formState.isValid;
  return (
    <div className="flex items-center p-6 pt-0">
      <Form {...form}>
        <form
          className="flex w-full items-center space-x-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormControl>
                    <Input {...field} placeholder="Type a message" />
                  </FormControl>
                </FormItem>
              );
            }}
          />

          <Button type="submit" disabled={isDisabled}>
            <Send size={14} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChatForm;
