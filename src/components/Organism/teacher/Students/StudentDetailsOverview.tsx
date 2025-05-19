import React from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SubjectTable from "./SubjectTable";


import IMAGES from "@/assets/images";
import ActionCard from "@/components/Molecules/actionCard";

const StudentDetailsOverview = () => {
    return (
        <section className="flex flex-col gap-y-6 mt-2">

            <section className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                    <h2 className="font-semibold text-zinc-950 text-xl tracking-[-0.40px] leading-5">
                        Action Center
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <ActionCard
                            title="Trending down"
                            heading=""
                            icon={
                                <Image
                                    src={IMAGES.GRAPH_DOWNWARDS}
                                    alt="G"
                                    height={22}
                                    width={24}
                                />
                            }
                            iconBgColor="#ff3b301a"
                            buttonLabel="Fix"
                            buttonColor="#ff3b30"
                            subHeading={<div className="font-medium text-[#FF3B30] text-[18px] leading-[22px]">
                                In biology concepts
                            </div>}
                        />

                        <ActionCard
                            title="Improving Math"
                            heading=""
                            icon={
                                <Image
                                    src={IMAGES.GRAPH_UP}
                                    alt="G"
                                    height={22}
                                    width={24}
                                />
                            }
                            iconBgColor="#34C7591A"
                            buttonLabel="More"
                            buttonColor="#34C759"
                            subHeading={
                                <div className="font-medium text-[#34C759] text-[18px] leading-[22px]">
                                    Better understanding Fractions
                                </div>
                            }
                        />

                        <ActionCard
                            title="Send Message"
                            heading=""
                            icon={
                                <Image
                                    src={IMAGES.MAIL}
                                    alt="G"
                                    height={22}
                                    width={24}
                                />
                            }
                            iconBgColor="#00B2D61A"
                            buttonLabel="Send"
                            buttonColor="#00B2D6"
                            subHeading={
                                <div className="font-medium text-[#00B2D6] text-[18px] leading-[22px]">
                                    To guardian re: Biology
                                </div>
                            }
                        />

                    </div>
                </div>

                <div className="flex flex-col items-end gap-5 w-full">
                    <SubjectTable />
                </div>
            </section>
        </section>
    )
}

export default StudentDetailsOverview
