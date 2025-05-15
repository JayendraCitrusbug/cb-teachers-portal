"use client";
import React, { useState } from "react";

import { Search, Filter, ChevronDown, Plus } from "lucide-react";

import {
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import IMAGES from "@/assets/images";

const LessonTable = () => {
  const statusList = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "in-active" },
  ];

  const statusMap: Record<string, { className: string; label: string }> = {
    active: {
      className: "text-[#34C759] border border-[#34C759]",
      label: "Active",
    },
    "in-active": {
      className: "text-[#00235A] border border-[#00235A]",
      label: "Inactive",
    },
  };

  const [tableData, setTableData] = useState<
    {
      id: string;
      subject: string;
      lesson: string;
      status: string;
    }[]
  >([
    {
      id: "1",
      subject: "Biology (Grade 3)",
      lesson: "Photosynthesis",
      status: "active",
    },
    {
      id: "2",
      subject: "Math (Grade 3)",
      lesson: "Addition and Subtraction",
      status: "in-active",
    },
    {
      id: "3",
      subject: "English (Grade 3)",
      lesson: "Reading Comprehension",
      status: "active",
    },
  ]);

  const handleSelectAction = (value: string, rowId: string) => {
    setTableData((prev) => {
      return prev.map((row) => {
        if (row.id === rowId) {
          return {
            ...row,
            status: value,
          };
        }
        return row;
      });
    });
  };

  return (
    <>
      {/* Table Header */}
      <div className="mb-4 flex justify-between items-center flex-wrap mt-3">
        <h1 className="font-semibold text-2xl">Lessons List</h1>
        <div className="flex gap-4 flex-wrap items-center">
          <div className="flex items-center border border-[#E4E4E7] rounded-md max-w-full h-10 overflow-hidden bg-white">
            <span className="pl-3 pr-2 text-gray-400">
              <Search />
            </span>
            <input
              type="text"
              placeholder="search"
              className="flex-1 h-full border-none outline-none px-2 bg-transparent text-gray-700 placeholder:text-gray-400 focus:ring-0"
            />
          </div>
          <div className="flex items-center border border-[#E4E4E7] rounded-md w-[102px] h-10 overflow-hidden bg-white justify-center">
            <button className="flex items-center gap-2 px-2 text-gray-900 hover:text-[#2196F3] focus:outline-none cursor-pointer">
              {/* Filter icon from lucide-react */}
              <Filter color="black" width={16} height={16}/>
              <span className="text-sm">Filters</span>
            </button>
          </div>
          <div className="flex items-center border border-[#E4E4E7] rounded-md w-[102px] h-10 overflow-hidden bg-white">
            <button className="flex items-center gap-2 px-2 text-gray-900 hover:text-[#2196F3] focus:outline-none cursor-pointer">
              {/* Filter icon from lucide-react */}
              <Plus color="black" width={16} height={16}/>
              <span className="text-sm">Lesson</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div
        className="border border-gray-200 rounded-lg shadow-sm w-min-[768px] overflow-x-auto"
        style={{ minWidth: "100%" }}
      >
        <Table className="">
          <TableHeader className="h-[60px]">
            <TableRow className="even:bg-gray-50 hover:bg-blue-50 transition-colors border-[#E4E4E7]">
              <TableHead className="text-center px-2 py-2 font-semibold text-gray-500 h-auto">
                Subject
              </TableHead>
              <TableHead className="text-center px-2 py-2 font-semibold text-gray-500 h-auto">
                Lesson
              </TableHead>
              <TableHead className="text-center px-2 py-2 font-semibold text-gray-500 h-auto">
                Status
              </TableHead>
              <TableHead className="text-center px-2 py-2 font-semibold text-gray-500 h-auto">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((item) => (
              <TableRow
                key={item.subject}
                className="even:bg-gray-50 hover:bg-blue-50 transition-colors border-[#E4E4E7] h-[65px]"
              >
                <TableCell className="text-center px-2 py-2 text-gray-800">
                  {item.subject}
                </TableCell>
                <TableCell className="text-center px-2 py-2 text-gray-800">
                  {item.lesson}
                </TableCell>
                <TableCell className="text-center px-2 py-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`${
                        statusMap[item.status].className
                      } w-[100px] h-[36px] rounded-[6px] gap-10 border-2 cursor-pointer flex items-center justify-center m-auto focus:offset-0 outline-0`}
                    >
                      <div className="flex justify-center items-center gap-2 p-2">
                        <span>{statusMap[item.status].label}</span>
                        <ChevronDown />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[white] shadow-sm border border-[#ccc]">
                      <DropdownMenuGroup>
                        {statusList.map((statusOption) => (
                          <DropdownMenuItem
                            key={statusOption.value}
                            className="text-center cursor-pointer hover:text-[#2b7fff]"
                            onSelect={() =>
                              handleSelectAction(statusOption.value, item.id)
                            }
                          >
                            {statusOption.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>  
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell className="text-center px-2 py-2">
                  <button className="p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                    <span className="sr-only">Actions</span>
                    <Image
                      src={IMAGES.HAMBURGER}
                      width={25}
                      height={24}
                      alt=""
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default LessonTable;
