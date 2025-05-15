import React from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
    StudentsTable,
} from "@/components/Organism/teacher/Students";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import IMAGES from "@/assets/images";

const StudentDetailsOverview = () => {
    return (
        <section className="flex flex-col gap-y-6 mt-2">

            <section className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                    <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
                        Action Center
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
                            <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[40px] justify-between">
                                <div className="flex items-center justify-between w-full gap-1">
                                    <CardTitle className="text-zinc-950 text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                                        Trending down
                                    </CardTitle>
                                    <div className="bg-[#ff3b301a] w-10 h-10 rounded-[4px] overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={IMAGES.GRAPH_DOWNWARDS}
                                            alt="G"
                                            height={22}
                                            width={24}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between w-full gap-1">
                                    <div className="font-medium text-[#FF3B30] text-[18px] leading-[22px]">
                                        In biology concepts
                                    </div>

                                    <Button className="bg-[#ff3b30] hover:bg-[#ff3b30]/90 text-white w-[90px] h-[36px] rounded-[4px] text-base font-medium leading-normal">
                                        Fix
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
                            <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[40px] justify-between">
                                <div className="flex items-center justify-between w-full gap-1">
                                    <CardTitle className="text-zinc-950 text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                                        Improving Math
                                    </CardTitle>
                                    <div className="bg-[#34C7591A] w-10 h-10 rounded-[4px] overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={IMAGES.GRAPH_DOWNWARDS}
                                            alt="G"
                                            height={22}
                                            width={24}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between w-full gap-1">
                                    <div className="font-medium text-[#34C759] text-[18px] leading-[22px]">
                                        Better understanding Fractions
                                    </div>

                                    <Button className="bg-[#34C759] hover:bg-[#34C759]/90 text-white w-[90px] h-[36px] rounded-[4px] text-base font-medium leading-normal">
                                        More
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
                            <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[40px] justify-between">
                                <div className="flex items-center justify-between w-full gap-1">
                                    <CardTitle className="text-zinc-950 text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                                        Send Message
                                    </CardTitle>
                                    <div className="bg-[#00B2D61A] w-10 h-10 rounded-[4px] overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={IMAGES.GRAPH_DOWNWARDS}
                                            alt="G"
                                            height={22}
                                            width={24}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between w-full gap-1">
                                    <div className="font-medium text-[#00B2D6] text-[18px] leading-[22px]">
                                        To guardian re: Biology
                                    </div>

                                    <Button className="bg-[#00B2D6] hover:bg-[#00B2D6]/90 text-white w-[90px] h-[36px] rounded-[4px] text-base font-medium leading-normal">
                                        Send
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
    )
}

export default StudentDetailsOverview
