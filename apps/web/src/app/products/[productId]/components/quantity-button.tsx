import { useState } from "react";

import { Button } from "@pulzeup/ui/components/ui/button";
import { Input } from "@pulzeup/ui/components/ui/input";

import { Minus, Plus } from "lucide-react";

export type QuantityButtonProps = {
  quantity: number;
  onChange: (quantity: number) => void;
};

export default function QuantityButton({
  quantity,
  onChange,
}: QuantityButtonProps) {
  const [value, setValue] = useState(quantity);

  return (
    <div className="mt-2 flex flex-row items-center max-w-36">
      <Button
        variant="outline"
        size="icon"
        className="min-w-10 border-r-0 rounded-r-none"
        onClick={() => {
          if (value > 1) {
            setValue(value - 1);
            onChange(value - 1);
          }
        }}
      >
        <Minus className="w-4 h-4" />
      </Button>
      <Input
        className="border-x-0 rounded-none text-center"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
          onChange(parseInt(e.target.value));
        }}
      />
      <Button
        variant="outline"
        size="icon"
        className="min-w-10 border-l-0 rounded-l-none"
        onClick={() => {
          setValue(value + 1);
          onChange(value + 1);
        }}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
}
