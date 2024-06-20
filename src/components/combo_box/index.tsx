"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import PopOver from "../pop_over";
import TriggerBtn from "./trigger_btn";

type Props<T extends readonly { label: string; value: string }[]> = {
  value: T[number]["value"];
  onChange: (value: T[number]["value"]) => void;
  placeholder?: string;
  options: T;
};
export const ComboBox = <
  T extends readonly { label: string; value: string }[]
>({
  onChange,
  value,
  placeholder,
  options,
}: Props<T>) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <PopOver
      TriggerElement={
        <TriggerBtn>
          {value
            ? options.find((item) => item.value === value)?.label
            : placeholder}
        </TriggerBtn>
      }
      open={isShow}
      onOpenChange={setIsShow}
    >
      <Command>
        <CommandInput placeholder="Search framework..." />
        <CommandList>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {options.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
                  setIsShow(false);
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
      </Command>
    </PopOver>
  );
};
