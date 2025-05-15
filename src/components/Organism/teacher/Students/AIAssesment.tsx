import React from 'react';
import Image from 'next/image';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import IMAGES from '@/assets/images';

const AIAssesment = () => {
    return (
        <Dialog>
            <DialogTrigger className='flex items-center gap-2 px-2 text-gray-900 hover:text-[#2196F3] focus:outline-none cursor-pointer py-2'>AI Tutor Assessment
            </DialogTrigger>
            <DialogContent
                title=""
                className="bg-[#00235a] border border-[#E4E4E7] shadow-shadow-sm rounded-[8px] px-[24px] py-[18px] w-[459px]"
            >
                <DialogTitle className="flex items-center justify-between w-full gap-1 text-white text-[22px] tracking-[-0.40px] leading-[22px]">
                    <span>AI Assessment</span>
                    <div className="w-10 h-10 bg-[#edf4ff33] rounded overflow-hidden flex items-center justify-center">
                        <Image
                            className="w-[23px] h-6"
                            alt="G"
                            src={IMAGES.AI}
                            height={23}
                            width={24}
                        />
                    </div>
                </DialogTitle>
                <p className="text-white text-[16px] leading-[22px] font-medium tracking-[0.16px] mt-2">
                    Doing well another subject but biology. Recommend Specking to in person about how you might help.
                </p>
            </DialogContent>
        </Dialog>
    );
};

export default AIAssesment;
