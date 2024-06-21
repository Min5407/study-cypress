import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

const ChatHeader = () => {
  return (
    <div className="space-y-1.5 p-6 flex flex-row items-center">
      <div className="flex items-center space-x-4">
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            className="aspect-square h-full w-full"
            alt="Image"
            src="https://avatar.vercel.sh/personal.png"
            width={50}
            height={50}
          />
        </span>
        <div>
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">m@example.com</p>
        </div>
      </div>
      <Button variant="outline" className="rounded-[50%] ml-auto">
        <Plus size={14} />
      </Button>
    </div>
  );
};

export default ChatHeader;
