"use client";
import React, { useState } from "react";

import { useParams } from "next/navigation";

import {
    StudentDetailsHeader
} from "@/components/Organism/teacher/Students";
import StudentDetailsOverview from "@/components/Organism/teacher/Students/StudentDetailsOverview";
import StudentDetailsLearningInsights from "@/components/Organism/teacher/Students/StudentDetailsLearningInsights";
import StudentDetailsStatus from "@/components/Organism/teacher/Students/StudentDetailsStatus";

export const students = [
    {
        name: "Alex Johnson",
        dnaStructure: { score: 45, color: "#FF3B30" },
        cellularRespiration: { score: 90, color: "#34C759" },
        cellDivision: { score: 65, color: "#F97316" },
        overallMastery: { score: "40%", color: "#F97316" },
        status: {
            text: "Trending Down",
            color: "#F97316",
            bgColor: "#ff3b301a",
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
            color: "#ff9500",
            bgColor: "#ff95001a",
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
            color: "#5856D6",
            bgColor: "#5856d61a",
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
            color: "#34c759",
            bgColor: "#34c7591a",
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
            color: "#ff9500",
            bgColor: "#ff95001a",
            borderColor: "#ff9500",
        },
    },
];

const StudentDetailsPage = () => {
    const { student_id } = useParams();
    const currentStudent = students?.find((student) => student.name === decodeURI(student_id as string));

    const [activeTab, setActiveTab] = useState<"learning_insights" | "overview" | "status">("overview");

    return (
        <>
            <div className="flex flex-col p-4 gap-y-6">
                {currentStudent && (
                    <>
                        <StudentDetailsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                        {activeTab === "overview" && <StudentDetailsOverview />}
                        {activeTab === "learning_insights" && <StudentDetailsLearningInsights />}
                        {activeTab === "status" && <StudentDetailsStatus />}
                    </>
                )}
            </div>
        </>
    );
};

export default StudentDetailsPage;
