import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Settings } from "lucide-react";

const invoices = [
  {
    name: "INV001",
    status: "Paid",
    totalAmount: "$250.00",
  },
  {
    name: "INV002",
    status: "Pending",
    totalAmount: "$150.00",
  },
  {
    name: "INV003",
    status: "Unpaid",
    totalAmount: "$350.00",
  },
  {
    name: "INV004",
    status: "Paid",
    totalAmount: "$450.00",
  },
];
const PTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead className="w-[100px]">Status</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(({ name, status, totalAmount }) => (
          <TableRow key={name}>
            <TableCell className="font-medium">
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">{status}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell className="text-right">{totalAmount}</TableCell>
            <TableCell>
              <Button size="sm" variant="ghost">
                <Settings size={14} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PTable;
