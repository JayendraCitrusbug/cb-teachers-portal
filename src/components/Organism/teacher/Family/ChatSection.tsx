"use client";
import { useState } from "react";
import Image from "next/image";

import { Send, Paperclip, ImageIcon, SquarePen } from "lucide-react";

import SearchInput from "@/components/Atoms/SearchInput";

import { chatListData } from ".";

import { cn } from "@/lib/utils";
import IMAGES from "@/assets/images";
import { Button } from "@/components/ui/button";

interface ChatListItemProps {
  avatarUrl: string;
  name: string;
  role: string;
  time: string;
  messagePreview: string;
  unreadCount: number;
  online?: boolean;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  avatarUrl,
  name,
  role,
  time,
  messagePreview,
  unreadCount,
  online = false,
}) => {
  return (
    <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 transition cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="relative w-[46px] h-[46px]">
          <Image
            src={avatarUrl}
            alt={name}
            width={100}
            height={100}
            className="rounded-full object-cover w-[46px] h-[46px]"
          />
          {online ? (
            <span className="absolute bottom-0 right-0 w-[12px] h-[12px] bg-green-500 rounded-full border-3 border-white" />
          ) : (
            <span className="absolute bottom-0 right-0 w-[12px] h-[12px] bg-[#C7044C] rounded-full border-3 border-white" />
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-black">{name}</span>
            <span className="text-gray-500">{role}</span>
          </div>
          <div className="text-sm text-gray-500 truncate max-w-[170px]">
            {messagePreview}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-gray-500">{time}</span>
        {unreadCount > 0 && (
          <div className="bg-green-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

function Sidebar() {
  return (
    <div className="w-[350px] border border-[#E4E4E7] rounded-lg bg-white hidden md:flex flex-col p-3 gap-6">
      <SearchInput />

      <div className="flex justify-between items-center h-[32px]">
        <p className="font-semibold">Conversation</p>
        <Button className="bg-[#00235A] text-white cursor-pointer">
          Compose <SquarePen />
        </Button>
      </div>

      <div className="overflow-y-auto flex flex-col gap-1">
        {chatListData.map((chat, i) => (
          <ChatListItem key={chat.id} {...chat} />
        ))}
      </div>
    </div>
  );
}

function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: "them", text: "Hi, how can I help you today?", time: "10:00AM" },
    {
      sender: "me",
      text: "Hey, I'm having trouble with my account.",
      time: "10:00AM",
    },
    { sender: "them", text: "What seems to be the problem?", time: "10:00AM" },
    { sender: "me", text: "Hey, I'm having trouble.", time: "10:00AM" },
    {
      sender: "me",
      text: "Hey, I'm having trouble with my account.",
      time: "10:00AM",
    },
    { sender: "them", text: "What seems to be the problem?", time: "10:00AM" },
  ]);

  return (
    <div className="flex-1 flex flex-col bg-gray-50 border border-[#E4E4E7] rounded-lg">
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <p className="text-sm font-medium">Taylor Wilson's Guardian</p>
            <p className="text-xs text-green-600">Online</p>
          </div>
        </div>
        <button className="px-3 py-1 text-sm rounded border bg-white hover:bg-gray-100">
          Translate
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={cn(
              "max-w-[80%] p-3 rounded-lg text-sm",
              msg.sender === "me"
                ? "bg-blue-900 text-white self-end"
                : "bg-gray-100 text-black self-start"
            )}
          >
            <p>{msg.text}</p>
            <p className="text-xs mt-1 text-right opacity-70">{msg.time}</p>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-white flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message"
          className="flex-1 rounded-full border px-4 py-2 text-sm"
        />
        <button className="text-muted-foreground hover:text-black">
          <ImageIcon size={20} />
        </button>
        <button className="text-muted-foreground hover:text-black">
          <Paperclip size={20} />
        </button>
        <button className="bg-blue-900 hover:bg-blue-800 p-2 rounded-full text-white">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

export default function ChatUI() {
  return (
    <div className="flex gap-6 w-full overflow-hidden">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
