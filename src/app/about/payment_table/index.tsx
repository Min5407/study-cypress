"use client";

import Pagination from "./pagination";
import Search from "./search";
import PTable from "./p_table";

const PaymentTable = () => {
  return (
    <div className="p-6 pt-0">
      <Search />
      <PTable />
      <Pagination />
    </div>
  );
};

export default PaymentTable;
