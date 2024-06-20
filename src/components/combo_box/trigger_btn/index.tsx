import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { ComponentProps } from "react";

type Props = ComponentProps<"button">;
const TriggerBtn = ({ children, ...props }: Props) => {
  return (
    <Button
      {...props}
      variant="outline"
      role="combobox"
      className="w-[200px] justify-between"
    >
      {children}
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );
};

export default TriggerBtn;
