"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Filter } from "lucide-react";

import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";
import AIAssesment from "./AIAssesment";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const students = [
  {
    name: "Alex Johnson",
    dnaStructure: { score: 45, color: "#FF3B30" },
    cellularRespiration: { score: 90, color: "#34C759" },
    cellDivision: { score: 65, color: "#F97316" },
    overallMastery: { score: "40%", color: "#F97316" },
    status: {
      text: "Trending Down",
      color: "#FFFFFF",
      bgColor: "#FF3B3099",
      borderColor: "#ff3b30",
    },
  },
  {
    name: "Sarah Khan",
    dnaStructure: { score: 90, color: "#34C759" },
    cellularRespiration: { score: 45, color: "#FF3B30" },
    cellDivision: { score: 90, color: "#34C759" },
    overallMastery: { score: "70%", color: "#ff9500" },
    status: {
      text: "Needs Attention",
      color: "#FFFFFF",
      bgColor: "#FF950099",
      borderColor: "#ff9500",
    },
  },
  {
    name: "David SK",
    dnaStructure: { score: 45, color: "#FF3B30" },
    cellularRespiration: { score: 65, color: "#F97316" },
    cellDivision: { score: 45, color: "#FF3B30" },
    overallMastery: { score: "95%", color: "#5856D6" },
    status: {
      text: "Top Performance",
      color: "#FFFFFF",
      bgColor: "#5856D699",
      borderColor: "#5856d6",
    },
  },
  {
    name: "Jhon Michal",
    dnaStructure: { score: 30, color: "#FF3B30" },
    cellularRespiration: { score: 45, color: "#FF3B30" },
    cellDivision: { score: 90, color: "#34C759" },
    overallMastery: { score: "85%", color: "#34c759" },
    status: {
      text: "Trending Up",
      color: "#FFFFFF",
      bgColor: "#34C75999",
      borderColor: "#34c759",
    },
  },
  {
    name: "Alex Johnson",
    dnaStructure: { score: 45, color: "#FF3B30" },
    cellularRespiration: { score: 90, color: "#34C759" },
    cellDivision: { score: 90, color: "#34C759" },
    overallMastery: { score: "20%", color: "re" },
    status: {
      text: "Needs Attention",
      color: "#FFFFFF",
      bgColor: "#FF950099",
      borderColor: "#ff9500",
    },
  },
];

const StudentsTable = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-end gap-5 w-full">
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex items-center justify-between w-full flex-wrap gap-2">
          <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
            Student List
          </h2>
          {/* <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center border border-[#E4E4E7] rounded-md h-auto overflow-hidden bg-white justify-center">
              <AIAssesment />
            </div>
            <div className="flex items-center border border-[#E4E4E7] rounded-md w-[102px] h-auto overflow-hidden bg-white justify-center">
              <button className="flex items-center gap-2 px-2 text-gray-900 hover:text-[#2196F3] focus:outline-none cursor-pointer py-2">
                Filter icon from lucide-react
                <Filter color="black" width={16} height={16} />
                <span className="text-sm">Filters</span>
              </button>
            </div>
          </div> */}

        </div>

        <div className="w-full">
          <Card className="border-zinc-200">
            <Table className="w-full rounded-lg">
              <TableHeader>
                <TableRow className="h-[65px] border-b border-zinc-200">
                  <TableHead className="h-12 text-center">
                    Student Name
                  </TableHead>
                  <TableHead className="h-12 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">DNA Structure</span>
                      <div className="w-[156px] h-2.5 mt-2">
                        <div className="w-[156px] h-2 bg-[#e5e5ea] rounded-lg" />
                        <div className="w-12 h-2.5 -mt-2.5 bg-[#ff3b30] rounded-lg" />
                      </div>
                    </div>
                  </TableHead>
                  <TableHead className="h-12 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">Cellular Respiration</span>
                      <div className="w-[156px] h-2.5 mt-2">
                        <div className="w-[156px] h-2 bg-[#e5e5ea] rounded-lg" />
                        <div className="w-[82px] h-2.5 -mt-2.5 bg-orange-500 rounded-lg" />
                      </div>
                    </div>
                  </TableHead>
                  <TableHead className="h-12 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">Cell Division</span>
                      <div className="w-[156px] h-2.5 mt-2">
                        <div className="w-[156px] h-2 bg-[#e5e5ea] rounded-lg" />
                        <div className="w-[121px] h-2.5 -mt-2.5 bg-[#34c759] rounded-lg" />
                      </div>
                    </div>
                  </TableHead>
                  <TableHead className="h-12 text-center">
                    Overall Mastery
                  </TableHead>
                  <TableHead className="h-12 text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow
                    key={index}
                    className="h-[65px] border-b border-zinc-200"
                  >
                    <TableCell className="h-12 text-center cursor-pointer" onClick={() => router.push(`/students/${student.name}`)}>
                      <span className="font-medium text-base leading-6 text-center text-[#3E71C0]">
                        {student.name}
                      </span>
                    </TableCell>
                    <TableCell className="h-12 text-center">
                      <div
                        className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                        style={{ backgroundColor: student.dnaStructure.color }}
                      >
                        {student.dnaStructure.score}
                      </div>
                    </TableCell>
                    <TableCell className="h-12 text-center">
                      <div
                        className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                        style={{
                          backgroundColor: student.cellularRespiration.color,
                        }}
                      >
                        {student.cellularRespiration.score}
                      </div>
                    </TableCell>
                    <TableCell className="h-12 text-center">
                      <div
                        className="inline-flex w-8 h-8 items-center justify-center rounded text-white"
                        style={{ backgroundColor: student.cellDivision.color }}
                      >
                        {student.cellDivision.score}
                      </div>
                    </TableCell>
                    <TableCell className="h-12 text-center">
                      <span
                        className={`!text-[${student.overallMastery.color}] font-extrabold text-lg`}
                        style={{
    
                          color: student.overallMastery.color,
                      
                        }}
                      >
                        {student.overallMastery.score}
                      </span>
                    </TableCell>
                    <TableCell className="h-12 text-center">
                      <Badge
                        className="px-3.5 py-2 min-w-[130px] items-center text-center max-w-[130px] font-medium"
                        variant="outline"
                        style={{
                          backgroundColor: student.status.bgColor,
                          color: student.status.color,
                          justifyContent: "center",
                        }}
                      >
                        {student.status.text}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>

      <Pagination className="justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default StudentsTable;
