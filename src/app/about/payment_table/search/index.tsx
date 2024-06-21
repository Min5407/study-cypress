import SelectBox from "@/components/select_box/base";
import { Input } from "@/components/ui/input";

const options = [
  { label: "All", value: "all" },
  { label: "Paid", value: "paid" },
  { label: "Unpaid", value: "unpaid" },
  { label: "Pending", value: "pending" },
] as const;

const Search = () => {
  return (
    <div className="mb-4 flex items-center gap-4">
      <Input placeholder="Filter emails..." />

      <SelectBox options={options} onChange={console.log} defaultValue="all" />
    </div>
  );
};

export default Search;
