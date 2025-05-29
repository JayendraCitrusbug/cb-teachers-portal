"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Search, Filter, ChevronDown, Plus } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import Table from "@/components/Molecules/Table";

import AddLessonPopup from "./AddLessonPopup";

import IMAGES from "@/assets/images";
import { Button } from "@/components/ui/button";

const LessonTable = () => {
  const router = useRouter();
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
      date: string;
    }[]
  >([
    {
      id: "1",
      subject: "Biology (Grade 3)",
      lesson: "Photosynthesis",
      status: "active",
      date: "9:15 May 21",
    },
    {
      id: "2",
      subject: "Biology (Grade 3)",
      lesson: "Addition and Subtraction",
      status: "in-active",
      date: "9:15 May 21",
    },
    {
      id: "3",
      subject: "Biology (Grade 3)",
      lesson: "Reading Comprehension",
      status: "active",
      date: "9:15 May 21",
    },
    {
      id: "4",
      subject: "Biology (Grade 3)",
      lesson: "World War II",
      status: "in-active",
      date: "10:45 April 21",
    },
    {
      id: "5",
      subject: "Biology (Grade 3)",
      lesson: "Photosynthesis",
      status: "active",
      date: "9:15 May 21",
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
      <div className="w-full flex justify-end">
        <Button
          onClick={() => router.push("/lessons/create/")}
          className="bg-[var(--color-primary)] text-white rounded-sm px-4 py-2 flex items-center gap-2"
        >
          <Image src={IMAGES.AI} alt="img" width={20} height={20} />
          <span className="text-sm">Add Lesson with AI</span>
        </Button>
      </div>
      <div className="mb-4 flex justify-between items-center flex-wrap mt-3">
        <h1 className="font-semibold text-2xl">Calendar list</h1>
        <div className="flex w-full max-w-[700px] gap-4 flex-wrap items-center">
          <div className="flex w-[400px]  items-center border border-[#E4E4E7] rounded-md max-w-full h-10 overflow-hidden bg-white">
            <span className="pl-3 pr-2 text-gray-400">
              <Search />
            </span>
            <input
              type="text"
              placeholder="search"
              className="w-full h-full border-none outline-none px-2 bg-transparent text-gray-700 placeholder:text-gray-400 focus:ring-0"
            />
          </div>
          <button className="flex items-center gap-1 px-4 h-10 rounded-md border border-[#E4E4E7] bg-white text-sm font-medium text-black hover:bg-gray-50">
            <span>
              Sort: <strong>Newest</strong>
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <div className="flex items-center border border-[#E4E4E7] rounded-md w-[102px] h-10 overflow-hidden bg-white justify-center">
            <button className="flex items-center gap-2 px-2 text-gray-900 hover:text-[#2196F3] focus:outline-none cursor-pointer">
              {/* Filter icon from lucide-react */}
              <Filter color="black" width={16} height={16} />
              <span className="text-sm">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div
        className="border border-gray-200 rounded-lg shadow-sm w-min-[768px] overflow-x-auto"
        style={{ minWidth: "100%" }}
      >
        <Table
          title="Lesson Schedule"
          headers={[
            { label: "Date & Time", key: "date" },
            { label: "Status", key: "status" },
            { label: "Subject", key: "subject" },
            { label: "Lesson", key: "lesson" },
            { label: "Lesson Plan", key: "lessonPlan" },
          ]}
          data={tableData.map((item) => ({
            date: (
              <span className="font-medium text-base leading-6 text-center text-[#3E71C0] cursor-pointer">
                {item.date}
              </span>
            ),
            subject: (
              <span className="font-medium text-base leading-6 text-center text-[#71717A] font-inter text-[14px] tracking-[0%] cursor-pointer">
                {item.subject}
              </span>
            ),
            status: (
              <div className="flex justify-center">
                <Switch
                  checked={item.status === "active"}
                  onCheckedChange={() =>
                    handleSelectAction(
                      item.status === "active" ? "in-active" : "active",
                      item.id
                    )
                  }
                  className="h-[30px] w-[62px] cursor-pointer"
                />
              </div>
            ),
            lesson: (
              <span className="font-medium text-base leading-6 text-center text-[#3E71C0] cursor-pointer">
                {item.lesson}
              </span>
            ),
            lessonPlan: (
              <div className="flex justify-start cursor-pointer">
                <Image src={IMAGES.LESSON_ICON} alt="lesson" />
              </div>
            ),
          }))}
        />
      </div>
    </>
  );
};

export default LessonTable;
