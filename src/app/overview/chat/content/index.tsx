import { cn } from "@/lib/utils";

type Props = {
  messages: string[];
};

const ChatContent = ({ messages }: Props) => {
  return (
    <div className="p-6 pt-0">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted",
              {
                "bg-muted": index % 2 === 0,
                "ml-auto bg-primary text-primary-foreground": index % 2 === 1,
              }
            )}
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatContent;
