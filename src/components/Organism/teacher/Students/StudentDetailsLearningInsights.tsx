import React from "react";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import AIAssesment from "./AIAssesment";

import IMAGES from "@/assets/images";

const StudentDetailsLearningInsights = () => {
    return (
        <section className="flex flex-col gap-y-6 mt-2 w-full">
            <AIAssesment />
            <section className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                        <Card className="w-full shadow-shadow-sm border border-[#34C759] rounded-lg h-full bg-[#56FF801A]">
                            <CardContent className="px-6 py-4 w-full h-full flex flex-col items-start gap-[12px] justify-between">
                                <div className="flex items-center justify-between w-full gap-1">
                                    <CardTitle className="text-[#34C759] text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                                        Strengths
                                    </CardTitle>
                                    <div className="bg-white w-10 h-10 rounded-[4px] overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={IMAGES.GRAPH_UP}
                                            alt="G"
                                            height={22}
                                            width={24}
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <ul className="list-disc pl-[20px] flex flex-col gap-2">
                                        <li className="text-[#09090B] text-[16px] leading-[22px] font-regular tracking-[0.16px]">
                                            Strong grasp of basic photosynthesis steps.
                                        </li>
                                        <li className="text-[#09090B] text-[16px] leading-[22px] font-regular tracking-[0.16px]">
                                            Quickly identifies variables in simple equations.
                                        </li>
                                    </ul>

                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full shadow-shadow-sm border border-[#FF3B30] rounded-lg h-full bg-[#FF34280F]">
                            <CardContent className="px-6 py-4 w-full h-full flex flex-col items-start gap-[12px] justify-between">
                                <div className="flex items-center justify-between w-full gap-1">
                                    <CardTitle className="text-[#FF3B30] text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                                        Weaknesses
                                    </CardTitle>
                                    <div className="bg-white w-10 h-10 rounded-[4px] overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={IMAGES.GRAPH_DOWNWARDS}
                                            alt="G"
                                            height={22}
                                            width={24}
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <ul className="list-disc pl-[20px] flex flex-col gap-2">
                                        <li className="text-[#09090B] text-[16px] leading-[22px] font-regular tracking-[0.16px]">
                                            Difficultly applying cellular respiration concepts to word problems.
                                        </li>
                                        <li className="text-[#09090B] text-[16px] leading-[22px] font-regular tracking-[0.16px]">
                                            Frequent calculation errors in Multi-Step algebraic problems.
                                        </li>
                                    </ul>

                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-start gap-6 w-full mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                    <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
                        <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[30px] justify-between">
                            <div className="flex items-center justify-between w-full gap-1">
                                <CardTitle className="text-zinc-950 text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                                    Emotional Insights
                                </CardTitle>
                                {/* select component add */}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full shadow-shadow-sm border border-[#E4E4E7] rounded-lg h-full">
                        <CardContent className="p-6 w-full h-full flex flex-col items-start gap-[30px] justify-between">
                            <div className="flex items-start justify-between w-full gap-1 flex-col">
                                <CardTitle className="text-zinc-950 text-[22px] tracking-[-0.40px] leading-[22px] font-medium">
                                    Error Analysis (AI Identified)
                                </CardTitle>
                                <p className="text-sm text-[#71717A] font-regular">Based on interactions with assigned materials</p>
                            </div>
                            <div className="flex items-start w-full gap-6 flex-col">
                                <div className="flex flex-col items-start gap-[2px] w-full">
                                    <span className="text-[#FF3B30] text-[14px] font-medium">Misconception</span>
                                    <p className="text-[14px] font-regular text-[#18181B]">Confuses reactants and products in photosynthesis equation.</p>
                                </div>
                                <div className="flex flex-col items-start gap-[2px] w-full">
                                    <span className="text-[#18181B] text-[14px] font-medium">Pattern</span>
                                    <p className="text-[14px] font-regular text-[#18181B]">Consistently forgets to carry the one in addition.</p>
                                </div>
                                <div className="flex flex-col items-start gap-[2px] w-full">
                                    <span className="text-[#FF3B30] text-[14px] font-medium">Misconception</span>
                                    <p className="text-[14px] font-regular text-[#18181B]">Confuses reactants and products in photosynthesis equation.</p>
                                </div>
                                <div className="flex flex-col items-start gap-[2px] w-full">
                                    <span className="text-[#18181B] text-[14px] font-medium">Pattern</span>
                                    <p className="text-[14px] font-regular text-[#18181B]">Consistently forgets to carry the one in addition.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </section>
    )
}

export default StudentDetailsLearningInsights
