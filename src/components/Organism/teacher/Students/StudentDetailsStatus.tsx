import React from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    StudentDetailsHeader,
    StudentsTable,
} from "@/components/Organism/teacher/Students";
import IMAGES from "@/assets/images";
import Image from "next/image";

const StudentDetailsStatus = () => {
    return (
        <section className="flex flex-col items-start gap-6 w-full mt-1">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 w-full">
                <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
                    <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[20px] justify-between">
                        <div className="flex items-start justify-between w-full gap-1 flex-col">
                            <CardTitle className="text-zinc-950 text-[24px] tracking-[-0.40px] leading-[26px] font-semibold">
                                Engagement Metrics
                            </CardTitle>
                            <p className="text-sm text-[#71717A] font-regular">Based on assigned materials</p>
                        </div>
                        <div className="flex items-start w-full gap-5 flex-col">
                            <div className="flex flex-col items-start gap-[2px] w-full">
                                <span className="text-[#18181B] text-[14px] font-medium">Pattern</span>
                                <p className="text-[14px] font-regular text-[#18181B]">Consistently forgets to carry the one in addition.</p>
                            </div>
                            <div className="flex flex-col items-start gap-[2px] w-full">
                                <span className="text-[#18181B] text-[14px] font-medium">Pattern</span>
                                <p className="text-[14px] font-regular text-[#18181B]">Consistently forgets to carry the one in addition.</p>
                            </div>
                            <div className="flex flex-col items-start gap-[2px] w-full">
                                <span className="text-[#18181B] text-[14px] font-medium">Pattern</span>
                                <p className="text-[14px] font-regular text-[#18181B]">Consistently forgets to carry the one in addition.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
                    <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[20px] justify-between">
                        <div className="flex items-start justify-between w-full gap-1 flex-col">
                            <CardTitle className="text-zinc-950 text-[24px] tracking-[-0.40px] leading-[26px] font-semibold">
                                Recent AI Tutor Interactions
                            </CardTitle>
                            <p className="text-sm text-[#71717A] font-regular">Based on assigned materials</p>
                        </div>
                        <div className="flex items-start w-full gap-5 flex-col">
                            <div className="flex flex-col items-start gap-[2px] w-full">
                                <span className="text-[#18181B] text-[14px] font-medium">Pattern</span>
                                <p className="text-[14px] font-regular text-[#18181B]">Consistently forgets to carry the one in addition.</p>
                            </div>
                            <div className="flex flex-col items-start gap-[2px] w-full">
                                <span className="text-[#18181B] text-[14px] font-medium">Pattern</span>
                                <p className="text-[14px] font-regular text-[#18181B]">Consistently forgets to carry the one in addition.</p>
                            </div>
                            <div className="flex flex-col items-start gap-[2px] w-full">
                                <span className="text-[#18181B] text-[14px] font-medium">Pattern</span>
                                <p className="text-[14px] font-regular text-[#18181B]">Consistently forgets to carry the one in addition.</p>
                            </div>
                        </div>
                        <Button variant="outline" className="h-10 mt-auto cursor-pointer border border-[#00235A] bg-[#00235A] text-white">
                            View All Log
                        </Button>
                    </CardContent>

                </Card>
            </div>
        </section>
    )
}

export default StudentDetailsStatus
