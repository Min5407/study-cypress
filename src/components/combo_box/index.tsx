"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import PopOver from "../pop_over";
import Command from "../command";
import { Button } from "../ui/button";

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
        <Button className="w-[200px] justify-between" variant="outline">
          {value
            ? options.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      }
      open={isShow}
      onOpenChange={setIsShow}
    >
      <Command>
        {options.map((item) => (
          <Command.Item
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
          </Command.Item>
        ))}
      </Command>
    </PopOver>
  );
};
