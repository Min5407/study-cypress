"use client";
import ChatHeader from "./header";
import ChatContent from "./content";
import ChatForm from "./form";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const Schema = z.object({
  text: z.string().min(1),
});

export type FormType = z.infer<typeof Schema>;
const Chat = () => {
  const [messages, setMessages] = useState<string[]>([
    "Hi, how can I help you today?",
    "Hey, I am having trouble with my account.",
    "What seems to be the problem?",
    "I can not log in.",
  ]);
  const form = useForm<FormType>({
    defaultValues: {
      text: "",
    },
    mode: "onChange",
    resolver: zodResolver(Schema),
  });

  const onSubmit: SubmitHandler<FormType> = ({ text }) => {
    setMessages((prev) => [...prev, text]);
    form.reset();
  };
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <ChatHeader />
      <ChatContent messages={messages} />
      <ChatForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default Chat;
