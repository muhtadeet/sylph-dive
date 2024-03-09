"use client";
import { Input } from "@nextui-org/react";

import React, { useMemo, useState } from "react";

type SearchProps = {
  value?: string;
  onValueChange?: (value: string) => void;
};

const Search = (props: SearchProps) => {
  const [value, setValue] = useState("");

  const isInvalid = useMemo(() => {
    if (value === "") return false;
  }, [value]);

  return (
    <>
      <Input
        isClearable
        type="Search"
        variant={isInvalid ? "bordered" : "underlined"}
        label="Search for a City  "
        labelPlacement={"outside"}
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "default"}
        value={value}
        onValueChange={setValue}
        errorMessage={isInvalid && "Please enter a valid City name"}
        className="w-[60%] max-w-xs"
      />
    </>
  );
};

export default Search;
