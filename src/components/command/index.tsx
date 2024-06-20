import React, { ComponentProps } from "react";
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
};
const Command = ({ placeholder, emptyText = "No Data Found" }: Props) => {
  return (
    <CommandContainer>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{emptyText}</CommandEmpty>
        <CommandGroup>
          {options.map((item) => (
            <CommandItem
              key={item.value}
              value={item.value}
              onSelect={(currentValue) => {
                onChange(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === item.value ? "opacity-100" : "opacity-0"
                )}
              />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandContainer>
  );
};

export default Command;
