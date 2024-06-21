import { Button } from "@/components/ui/button";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-end space-x-2 pt-4">
      <div className="flex-1 text-sm text-muted-foreground">
        0 of 5 row(s) selected.
      </div>
      <div className="space-x-2">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
};

export default Pagination;
