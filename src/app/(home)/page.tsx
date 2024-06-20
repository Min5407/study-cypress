"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Apple, CreditCard, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-md">
      <div className="flex flex-col space-y-5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Payment Method
        </h3>
        <p className="text-sm text-muted-foreground">
          Add a new payment method to your account.
        </p>

        <RadioGroup
          defaultValue="comfortable"
          onValueChange={(e) => console.log(e)}
          className="grid grid-cols-3 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" className="sr-only" />
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary"
              htmlFor="r1"
            >
              <CreditCard size={36} className="mb-3 inline-block" />
              Card
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" className="sr-only" />
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary"
              htmlFor="r1"
            >
              <DollarSign size={36} className="mb-3 inline-block" />
              Cash
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" className="sr-only" />
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary"
              htmlFor="r1"
            >
              <Apple size={36} className="mb-3 inline-block" />
              Apple
            </label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
