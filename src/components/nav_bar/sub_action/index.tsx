import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const SubAction = () => {
  return (
    <div className="ml-auto flex items-center space-x-4">
      <div>
        <Input placeholder="Search..." type="search" />
      </div>
      <Button variant="ghost">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
          <Image
            className="aspect-square h-full w-full"
            alt="avatar"
            src="https://avatar.vercel.sh/personal.png"
            width={100}
            height={100}
          />
        </span>
      </Button>
    </div>
  );
};

export default SubAction;
