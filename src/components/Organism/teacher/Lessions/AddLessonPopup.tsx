import * as React from 'react';
import Image from 'next/image';

import { ChevronDownIcon, Cross, Plus, ArrowUpToLine } from 'lucide-react';

import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';

import IMAGES from '@/assets/images';

type SelectProps = {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
};

interface AddLessonCardProps {
    title: string;
    description: string;
    children: React.ReactNode
}

const RadixSelect: React.FC<SelectProps> = ({ placeholder, value, onChange, options }) => {
    return (
        <Select.Root value={value} onValueChange={onChange}>
            <Select.Trigger
                className="inline-flex items-center justify-between rounded-md px-4 py-2 bg-white border border-gray-300 text-sm text-gray-700 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={placeholder}
            >
                <Select.Value placeholder={placeholder} />
                <Select.Icon className="ml-2">
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    className="bg-white rounded-md shadow-lg border border-gray-200 z-[9999]"
                    position="popper"
                >
                    <Select.Viewport className="p-1">
                        {options.map((option) => (
                            <Select.Item
                                key={option}
                                value={option}
                                className="text-sm px-4 py-2 rounded hover:bg-gray-100 cursor-pointer focus:outline-none"
                            >
                                <Select.ItemText>{option}</Select.ItemText>
                            </Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};


const AddLessonCard: React.FC<AddLessonCardProps> = ({ title, description, children }) => {
    return (
        <div className="rounded-lg border border-gray-200 p-6 w-full max-w-md bg-white shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mb-4">{description}</p>

            <div className="flex flex-col items-center gap-4">
                {/* Sparkles icon */}
                {children}
            </div>
        </div>
    );
};


const ManualLessonDialog: React.FC = () => {
    const [grade, setGrade] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [lesson, setLesson] = React.useState('');

    const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
    const subjects = ['Math', 'Science', 'English'];
    const lessons = ['Algebra', 'Geometry', 'Measurement'];

    return (
        <Dialog.Root>
            <Dialog.Trigger className="flex items-center gap-2 px-2 text-gray-900 hover:text-[#2196F3] focus:outline-none cursor-pointer">
                {/* Filter icon from lucide-react */}
                <Plus color="black" width={16} height={16} />
                <span className="text-sm">Lesson</span>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 z-[9998]" />
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-full max-w-5xl shadow-lg focus:outline-none"
                >
                    <p className='font-[family-name:var(--font-geist-sans)]'>Tell your AI teacher assistant What you are teaching in Class this week.</p>
                    <Dialog.Title className="text-xl font-semibold mb-1">Manual</Dialog.Title>
                    <Dialog.Description className="text-sm text-gray-500 mb-4">
                        Create manual lessons
                    </Dialog.Description>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <RadixSelect
                            placeholder="Select Grade"
                            value={grade}
                            onChange={setGrade}
                            options={grades}
                        />
                        <RadixSelect
                            placeholder="Select Subject"
                            value={subject}
                            onChange={setSubject}
                            options={subjects}
                        />
                        <RadixSelect
                            placeholder="Select Lesson"
                            value={lesson}
                            onChange={setLesson}
                            options={lessons}
                        />
                    </div>

                    <p className="text-sm text-gray-700 mb-4">
                        Learning standard: <span className="font-medium">CCSS.MATH.CONTENT.</span>
                    </p>

                    <div className="flex justify-between">
                        <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                            Add to List
                        </button>

                    </div>

                    <div className='w-full mt-4 flex gap-4'>

                        <AddLessonCard title='AI' description='Create by AI' >
                            <Image
                                className="w-[55px] h-[55px]"
                                alt="G"
                                src={IMAGES.AIBlue}
                                height={55}
                                width={55}
                            />
                            <button className="w-[165px] h-10 bg-[#00235A] text-white px-4 py-2 rounded-md hover:bg-[#00235A] transition text-sm">
                                Generate with AI
                            </button>
                        </AddLessonCard>

                        <AddLessonCard title='Upload' description='Upload Many Lessons ( eBook, Lessons Plans etc )' >
                            <Image
                                className="w-[55px] h-[55px]"
                                alt="G"
                                src={IMAGES.UPLOAD}
                                height={55}
                                width={55}
                            />
                            <button className="w-[165px] h-10 bg-[#00235A] text-white px-4 py-2 rounded-md hover:bg-[#00235A] transition text-sm">
                                Upload / Drag Here
                            </button>
                        </AddLessonCard>

                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ManualLessonDialog;
