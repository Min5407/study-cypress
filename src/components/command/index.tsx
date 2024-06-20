import React, { ReactNode } from "react";
import {
  Command as CommandContainer,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type Props = {
  placeholder?: string;
  emptyText?: string;
  children: ReactNode;
};
const Command = ({
  emptyText = "No Data Found",
  placeholder,
  children,
}: Props) => {
  return (
    <CommandContainer>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{emptyText}</CommandEmpty>
        <CommandGroup>{children}</CommandGroup>
      </CommandList>
    </CommandContainer>
  );
};

Command.Item = CommandItem;

export default Command;
