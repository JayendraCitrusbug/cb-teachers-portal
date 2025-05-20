// components/DashboardCard.tsx
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

type ActionCardProps = {
    title: string
    icon?: ReactNode
    iconBgColor: string
    heading: string
    subHeading: React.ReactNode
    buttonLabel: string
    buttonColor: string
    buttonClickHandler?: () => void
}

const ActionCard = ({
    title,
    icon,
    iconBgColor,
    heading,
    subHeading,
    buttonLabel,
    buttonColor,
    buttonClickHandler
}: ActionCardProps) => {
    return (
        <Card className="w-full shadow-shadow-sm h-full border-[#ccc]">
            <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-6">
                    <CardTitle className="text-zinc-950 text-[20px] tracking-[-0.40px] leading-[22px]">
                        {title}
                    </CardTitle>
                    <div
                        className="w-10 h-10 rounded overflow-hidden flex items-center justify-center"
                        style={{ backgroundColor: iconBgColor }}
                    >
                        {icon}
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3 md:gap-6">
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-6">
                            <div className="h-auto">
                                <div className="text-zinc-900 leading-[30.7px]">
                                    <span className="font-bold text-[27.7px]">{heading} </span>
                                    <span className="text-sm font-normal">
                                        {heading && heading !== "Life Cycles" && "Students"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="font-medium text-zinc-500 text-md leading-5">
                            {subHeading}
                        </div>
                    </div>

                    <Button
                        className="cursor-pointer text-white w-[80px] h-[30px] rounded-[4px] mt-4"
                        style={{ backgroundColor: buttonColor }}
                        onClick={buttonClickHandler}
                    >
                        {buttonLabel}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ActionCard
