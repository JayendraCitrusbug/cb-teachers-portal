"use client";
import React from "react";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div className="relative flex items-center">
      <span className="absolute left-3 text-gray-400">
        <SearchIcon size={18} />
      </span>
      <Input type="text" placeholder="Search..." className="pl-10 border-[#E4E4E7]" />
    </div>
  );
};

export default SearchInput;
