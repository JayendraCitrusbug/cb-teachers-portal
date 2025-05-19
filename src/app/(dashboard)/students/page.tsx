import React from "react";
import Image from "next/image";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StudentsTable } from "@/components/Organism/teacher/Students";

import IMAGES from "@/assets/images";
import ActionCard from "@/components/Molecules/actionCard";

const Students: React.FC = () => {
  return (
    <section className="flex flex-col p-4 gap-y-6">
      <header className="flex items-center justify-between relative self-stretch w-full">
        <h1 className="font-semibold text-zinc-950 text-2xl tracking-[-0.40px] leading-6 whitespace-nowrap">
          Students
        </h1>

        <div className="inline-flex items-center gap-[11px]">
          <div className="inline-flex h-[42px] items-center justify-center gap-6"></div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row items-start gap-6 relative self-stretch w-full">
        <div className="flex flex-col w-full md:w-[538px] items-start gap-3">
          <label className="font-semibold text-zinc-900 text-xl leading-5">
            Class
          </label>

          <Select>
            <SelectTrigger className="w-full bg-white focus:offset-0 outline-0 border border-[#ccc] shadow-none focus:ring-0 cursor-pointer">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent style={{ background: "white" }} className="shadow-sm">
              <SelectItem value="class1" className="cursor-pointer font-regular">Class 1</SelectItem>
              <SelectItem value="class2" className="cursor-pointer font-regular">Class 2</SelectItem>
              <SelectItem value="class3" className="cursor-pointer font-regular">Class 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-full md:w-[538px] items-start gap-3">
          <label className="font-semibold text-zinc-900 text-xl leading-5">
            Students
          </label>

          <Select>
            <SelectTrigger className="w-full bg-white focus:offset-0 outline-0 border border-[#ccc] shadow-none focus:ring-0 cursor-pointer">
              <SelectValue placeholder="Select Student" />
            </SelectTrigger>
            <SelectContent style={{ background: "white" }} className="shadow-sm">
              <SelectItem value="student1" className="cursor-pointer font-regular">Alex Johnson</SelectItem>
              <SelectItem value="student2" className="cursor-pointer font-regular">Sarah Khan</SelectItem>
              <SelectItem value="student3" className="cursor-pointer font-regular">David SK</SelectItem>
              <SelectItem value="student4" className="cursor-pointer font-regular">Jhon Michal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" className="h-10 mt-auto cursor-pointer border border-[#ccc]">
          Manage Classes
        </Button>
      </div>

      <section className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
            Action Center
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
            <ActionCard
              title="Performance"
              icon={
                <Image
                  src={IMAGES.GRAPH_DOWNWARDS}
                  alt="G"
                  height={23}
                  width={24}
                />
              }
              iconBgColor="#ff3b301a"
              heading="3"
              subHeading="Period 1 Biology"
              buttonLabel="Fix"
              buttonColor="#ff3b30"
            />

            <ActionCard
              title="Add New Lesson"
              icon={
                <div className="w-[22px] h-[22px]">
                  <Plus color="#34C759" />
                </div>
              }
              iconBgColor="#34c7591a"
              heading="Life Cycles"
              subHeading=""
              buttonLabel="Add"
              buttonColor="#34c759"
            />

          </div>
        </div>

        <div className="flex flex-col items-end gap-5 w-full">
          <StudentsTable />
        </div>
      </section>
    </section>
  );
};

export default Students;
