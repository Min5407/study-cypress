import { ComponentProps, ReactNode, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type Props = {
  TriggerElement: ReactNode;
  children: ReactNode;
} & Omit<ComponentProps<typeof Popover>, "children">;
const PopOver = ({ TriggerElement, children, ...props }: Props) => {
  return (
    <Popover {...props}>
      <PopoverTrigger asChild>{TriggerElement}</PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">{children}</PopoverContent>
    </Popover>
  );
};

export default PopOver;
