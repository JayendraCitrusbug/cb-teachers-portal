"use client";
import React from "react";
import Link from "next/link";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";

import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";
import Table from "@/components/Molecules/Table";

import { COLORS } from "@/constants";

const SubjectTable = () => {
  const router = useRouter();

  const subject = [
    {
      name: (
        <Link
          className="text-[#1D1D1D]  cursor-pointer"
          href={`/students/StudentID/Period 1 Biology`}
        >
          Period 1 Biology
        </Link>
      ),
      aiAssesment: (
        <div
          className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
          style={{ backgroundColor: COLORS.SUCCESS }}
        >
          90
        </div>
      ),
      lesson: (
        <span className="text-[#3E71C0]  cursor-pointer">Cell Division</span>
      ),
      memoryRecall: (
        <Badge
          className="px-3.5 py-2 font-medium rounded-[6px] opacity-50 max-w-[130px] flex justify-center"
          variant="default"
          style={{
            backgroundColor: COLORS.REJECTED,
            color: "#FFFFFF",
          }}
        >
          Reinforcing
        </Badge>
      ),
      action: (
        <Badge
          className="px-3.5 py-2 font-medium rounded-[6px] max-w-[130px] flex justify-center border-[var(--color-ai-blue)]"
          variant="outline"
          style={{
            backgroundColor: "#00B2D61A",
            color: COLORS.AI_BLUE,
          }}
        >
          Workshop
        </Badge>
      ),
    },
    {
      name: (
        <span className="text-[#1D1D1D]  cursor-pointer">Period 1 Biology</span>
      ),
      aiAssesment: (
        <div
          className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
          style={{ backgroundColor: COLORS.REJECTED }}
        >
          45
        </div>
      ),
      lesson: (
        <span className="text-[#3E71C0]  cursor-pointer">DNA Structure</span>
      ),
      memoryRecall: (
        <Badge
          className="px-3.5 py-2 font-medium rounded-[6px] opacity-50 max-w-[130px] flex justify-center"
          variant="default"
          style={{
            backgroundColor: COLORS.WARNING,
            color: "#FFFFFF",
          }}
        >
          Memorizing
        </Badge>
      ),
    },
    {
      name: (
        <span className="text-[#1D1D1D]  cursor-pointer">Period 3 Math</span>
      ),
      aiAssesment: (
        <div
          className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
          style={{ backgroundColor: COLORS.WARNING }}
        >
          65
        </div>
      ),
      lesson: <span className="text-[#3E71C0]  cursor-pointer">Fractions</span>,
      memoryRecall: (
        <Badge
          className="px-3.5 py-2 font-medium rounded-[6px] opacity-50 max-w-[130px] flex justify-center"
          variant="default"
          style={{
            backgroundColor: COLORS.SUCCESS,
            color: "#FFFFFF",
          }}
        >
          Revising
        </Badge>
      ),
      action: (
        <Badge
          className="px-3.5 py-2 font-medium rounded-[6px] max-w-[130px] flex justify-center border-[var(--color-ai-blue)]"
          variant="outline"
          style={{
            backgroundColor: "#00B2D61A",
            color: COLORS.AI_BLUE,
          }}
        >
          Workshop
        </Badge>
      ),
    },
    {
      name: (
        <span className="text-[#1D1D1D]  cursor-pointer">Period 2 English</span>
      ),
      aiAssesment: (
        <div
          className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
          style={{ backgroundColor: COLORS.REJECTED }}
        >
          45
        </div>
      ),
      lesson: (
        <span className="text-[#3E71C0]  cursor-pointer">Cell Division</span>
      ),
      memoryRecall: (
        <Badge
          className="px-3.5 py-2 font-medium rounded-[6px] opacity-50 max-w-[130px] flex justify-center"
          variant="default"
          style={{
            backgroundColor: COLORS.SUCCESS,
            color: "#FFFFFF",
          }}
        >
          Revising
        </Badge>
      ),
      action: (
        <Badge
          className="px-3.5 py-2 font-medium rounded-[6px] max-w-[130px] flex justify-center border-[var(--color-ai-blue)]"
          variant="outline"
          style={{
            backgroundColor: "#00B2D61A",
            color: COLORS.AI_BLUE,
          }}
        >
          Workshop
        </Badge>
      ),
    },
    {
      name: (
        <span className="text-[#1D1D1D]  cursor-pointer">Period 4 Science</span>
      ),
      aiAssesment: (
        <div
          className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
          style={{ backgroundColor: COLORS.SUCCESS }}
        >
          90
        </div>
      ),
      lesson: (
        <span className="text-[#3E71C0]  cursor-pointer">DNA Structure</span>
      ),
      memoryRecall: (
        <Badge
          className="px-3.5 py-2 font-medium rounded-[6px] opacity-50 max-w-[130px] flex justify-center"
          variant="default"
          style={{
            backgroundColor: COLORS.WARNING,
            color: "#FFFFFF",
          }}
        >
          Memorizing
        </Badge>
      ),
    },
  ];

  const headers = [
    { label: "Subjects", key: "name", className: "text-start" },
    { label: "Lesson", key: "lesson", className: "text-start" },
    {
      label: "AI Tutor Assessment",
      key: "aiAssesment",
      className: "text-start",
    },
    { label: "Memory Recall", key: "memoryRecall", className: "text-start" },
    { label: "Teacher Action", key: "action", className: "text-start" },
  ];

  return (
    <div className="flex flex-col items-end gap-5 w-full">
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex items-center justify-between w-full flex-wrap gap-2">
          <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
            Lesson
          </h2>
          <div className="flex items-center gap-4 flex-wrap">
            {/* <div className="flex items-center border border-[#E4E4E7] rounded-md h-auto overflow-hidden bg-white justify-center">
                            <AIAssesment />
                        </div> */}
            <div className="flex items-center border border-[#E4E4E7] rounded-md w-[102px] h-auto overflow-hidden bg-white justify-center">
              <button className="flex items-center gap-2 px-2 text-gray-900 hover:text-[#2196F3] focus:outline-none cursor-pointer py-2">
                {/* Filter icon from lucide-react */}
                <Filter color="black" width={16} height={16} />
                <span className="text-sm">Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Card className="border-zinc-200">
            <Table title="" headers={headers} data={subject} />
          </Card>
        </div>
      </div>

      <Pagination className="justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious size={"default"} href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size={"default"} href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size={"default"} href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size={"default"} href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext size={"default"} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default SubjectTable;
