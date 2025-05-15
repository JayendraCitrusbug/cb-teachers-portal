import React from "react";
import Image from "next/image";

import { Plus } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardTitle } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { StudentsTable } from "@/components/Organism/teacher/Students";

import IMAGES from "@/assets/images";

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

        <div className="flex-col items-start gap-3 flex-1 grow flex">
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

      {/* <Card className="w-full md:w-[538px] bg-[#00235a] border-zinc-200 shadow-shadow-sm">
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-[22px] tracking-[-0.40px] leading-[22px]">
              AI Assessment
            </CardTitle>
            <div className="w-10 h-10 bg-[#edf4ff33] rounded overflow-hidden flex items-center justify-center">
              <Image
                className="w-[23px] h-6"
                alt="G"
                src={IMAGES.AI}
                height={23}
                width={24}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-white text-base leading-[22px]">
            Overall class mastery on 'Unit 4: Photosynthesis` is 78%.
            <br />4 students show improvement since last week.
            <br />
            While 2 students require additional attention.
          </p>
        </CardContent>
      </Card> */}

      <section className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-5 w-full">
          <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
            Action Center
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
            <Card className="w-full shadow-shadow-sm h-full border-[#ccc]">
              <CardContent className="p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6 h-full">
                  <CardTitle className="text-zinc-950 text-[20px] tracking-[-0.40px] leading-[22px]">
                    Performance
                  </CardTitle>
                  <div className="bg-[#ff3b301a] w-10 h-10 rounded overflow-hidden flex items-center justify-center">
                    <Image
                      src={IMAGES.GRAPH_DOWNWARDS}
                      alt="G"
                      height={23}
                      width={24}
                    />
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-6">
                      <div className="w-[87px] h-auto">
                        <div className="font-normal text-zinc-900 text-[27.7px] leading-[30.7px]">
                          <span className="font-bold">3 </span>
                          <span className="text-sm">Students</span>
                        </div>
                      </div>
                    </div>
                    <div className="font-medium text-zinc-500 text-md leading-5">
                      Period 1 Biology
                    </div>
                  </div>

                  <Button className="bg-[#ff3b30] hover:bg-[#ff3b30]/90 cursor-pointer text-white w-[80px] h-[30px] rounded-[4px]">
                    Fix
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full shadow-shadow-sm h-full border-[#ccc]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-6">
                  <CardTitle className="text-zinc-950 text-[20px] tracking-[-0.40px] leading-[22px]">
                    Add New Lesson
                  </CardTitle>
                  <div className="bg-[#34c7591a] w-10 h-10 rounded overflow-hidden flex items-center justify-center">
                    <div className="w-[22px] h-[22px]">
                      <Plus color="#34C759" />
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-6">
                      <div className="w-[151px] h-auto">
                        <div className="font-bold text-zinc-900 text-[24.7px] leading-[30.7px]">
                          Life Cycles
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-[#34c759] hover:bg-[#34c759]/90 cursor-pointer text-white w-[80px] h-[30px] rounded-[4px]">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
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
