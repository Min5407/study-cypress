import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../../ui/select";
type Props<T extends readonly { label: string; value: string }[]> = {
  options: T;
  onChange: (value: T[number]["value"]) => void;
  defaultValue?: string;
  placeholder?: string;
};

const SelectBox = <T extends readonly { label: string; value: string }[]>({
  options,
  onChange,
  defaultValue = "",
  placeholder,
}: Props<T>) => {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectBox;
