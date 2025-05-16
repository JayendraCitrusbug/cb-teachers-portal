"use client";
import React from "react";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";

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

export const subject = [
    {
        name: "Period 1 Biology",
        lesson: "Cell Division",
        dnaStructure: { score: 45, color: "#FF3B30" },
        cellularRespiration: { score: 90, color: "#34C759" },
        aiAssesment: { score: 65, color: "#F97316" },
        overallMastery: { score: "40%", color: "#F97316" },
        memoryRecall: {
            text: "Trending Down",
            borderColor: "#FF3B30",
        },
        teacherAction: false,
    },
    {
        name: "Period 2 Biology",
        lesson: "DNA Structure",
        dnaStructure: { score: 90, color: "#34C759" },
        cellularRespiration: { score: 45, color: "#FF3B30" },
        aiAssesment: { score: 90, color: "#34C759" },
        overallMastery: { score: "70%", color: "#ff9500" },
        memoryRecall: {
            text: "Memorizing",
            borderColor: "#FF3B30",
        },
        teacherAction: true,
    },
    {
        name: "Period 3 Math",
        lesson: "Fractions",
        dnaStructure: { score: 45, color: "#FF3B30" },
        cellularRespiration: { score: 65, color: "#F97316" },
        aiAssesment: { score: 45, color: "#FF3B30" },
        overallMastery: { score: "95%", color: "#5856D6" },
        memoryRecall: {
            text: "Top Performance",
            borderColor: "#FF3B30",
        },
        teacherAction: true,
    },
    {
        name: "Period 2 English",
        lesson: "Cell Division",
        dnaStructure: { score: 30, color: "#FF3B30" },
        cellularRespiration: { score: 45, color: "#FF3B30" },
        aiAssesment: { score: 90, color: "#34C759" },
        overallMastery: { score: "85%", color: "#34c759" },
        memoryRecall: {
            text: "Trending Up",
            borderColor: "#34C759",
        },
        teacherAction: false,
    },
    {
        name: "Period 4 Science",
        lesson: "DNA Structure",
        dnaStructure: { score: 45, color: "#FF3B30" },
        cellularRespiration: { score: 90, color: "#34C759" },
        aiAssesment: { score: 90, color: "#34C759" },
        overallMastery: { score: "20%", color: "re" },
        memoryRecall: {
            text: "Needs Attention",
            borderColor: "#FF9500",
        },
        teacherAction: true,
    },
];

const SubjectTable = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-end gap-5 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
                <div className="flex items-center justify-between w-full flex-wrap gap-2">
                    <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
                        Subject List
                    </h2>
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center border border-[#E4E4E7] rounded-md h-auto overflow-hidden bg-white justify-center">
                            <AIAssesment />
                        </div>
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
                        <Table className="w-full rounded-lg">
                            <TableHeader>
                                <TableRow className="h-[65px] border-b border-zinc-200">
                                    <TableHead className="h-12 text-center">
                                        Subjects
                                    </TableHead>
                                    <TableHead className="h-12 text-center">
                                        <div className="flex flex-col items-center">
                                            <span>Lesson</span>
                                        </div>
                                    </TableHead>
                                    <TableHead className="h-12 text-center">
                                        <div className="flex flex-col items-center">
                                            <span>AI Tutor Assessment</span>

                                        </div>
                                    </TableHead>
                                    <TableHead className="h-12 text-center">
                                        <div className="flex flex-col items-center">
                                            <span>Memory Recall</span>
                                        </div>
                                    </TableHead>
                                    <TableHead className="h-12 text-center">
                                        Teacher Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {subject.map((currentSubject, index) => (
                                    <TableRow
                                        key={index}
                                        className="h-[65px] border-b border-zinc-200"
                                    >
                                        <TableCell className="h-12 text-center cursor-pointer" onClick={() => router.push(`/students/StudentID/${currentSubject.name}`)}>
                                            <span className="font-medium text-[#1d1d1d] text-sm">
                                                {currentSubject.name}
                                            </span>
                                        </TableCell>
                                        <TableCell className="h-12 text-center">
                                            <div
                                                className="inline-flex w-[240px] h-8 items-center justify-center rounded text-[#1d1d1d]"
                                            >
                                                {currentSubject.lesson}
                                            </div>
                                        </TableCell>
                                        <TableCell className="h-12 text-center">
                                            <div
                                                className="inline-flex w-8 h-8 items-center justify-center rounded text-[#1d1d1d]"
                                                style={{
                                                    backgroundColor: currentSubject.aiAssesment.color
                                                }}
                                            >
                                                {currentSubject.aiAssesment.score}
                                            </div>
                                        </TableCell>
                                        <TableCell className="h-12 text-center">
                                            <span
                                                className={`font-extrabold text-lg`}
                                            >
                                                <Badge
                                                    className="px-3.5 py-2 font-medium"
                                                    variant="outline"
                                                    style={{
                                                        backgroundColor: currentSubject.memoryRecall.borderColor,
                                                        color: "#FFFFFF",
                                                        opacity: "40%",
                                                    }}
                                                >
                                                    {currentSubject.memoryRecall.text}
                                                </Badge>
                                            </span>
                                        </TableCell>
                                        <TableCell className="h-12 text-center">
                                            {currentSubject.teacherAction &&
                                                <Badge
                                                    className="px-3.5 py-2 font-medium"
                                                    variant="outline"
                                                    style={{
                                                        backgroundColor: "#00B2D61A",
                                                        color: "#00B2D6",
                                                        borderColor: "#00B2D6",
                                                    }}
                                                >
                                                    Workshop
                                                </Badge>}
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

export default SubjectTable;
