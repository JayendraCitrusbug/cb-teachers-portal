"use client";
import { useState } from "react";
import Image from "next/image";

import { MessageCircle, Paperclip, Send, Smile, SquarePen } from "lucide-react";

import SearchInput from "@/components/Atoms/SearchInput";

import { chatListData } from ".";

import { Button } from "@/components/ui/button";

import "./style.css";

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
    <div className="chat-sidebar border border-[#E4E4E7] rounded-lg bg-white hidden md:flex flex-col p-3 gap-6">
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

function MessageInput() {
  return (
    <div className="w-full flex items-center gap-2 p-4 bg-white rounded-b-lg absolute bottom-0">
      {/* Input */}
      <input
        type="text"
        placeholder="Type your message"
        className="flex-1 px-4 py-2 border border-[#E4E4E7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00235A] text-sm"
      />

      {/* Emoji Button */}
      <button className="p-2 rounded-md bg-gray-500 hover:bg-gray-600">
        <Smile size={18} className="text-white" />
      </button>

      {/* Attachment Button */}
      <button className="p-2 rounded-md bg-gray-500 hover:bg-gray-600">
        <Paperclip size={18} className="text-white" />
      </button>

      {/* Send Button */}
      <button className="p-2 rounded-md bg-blue-900 hover:bg-blue-950">
        <Send size={18} className="text-white" />
      </button>
    </div>
  );
}

function ChatWindow() {
  return (
    <div className="border border-[#E4E4E7] rounded-lg w-full max-w-full h-screen relative">
      <div className="bg-white p-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-3">
            <Image
              src={chatListData[0].avatarUrl}
              alt="Avatar"
              width={48}
              height={48}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="flex flex-wr items-center gap-2">
                <span className="font-semibold">Taylor Wilson’s Guardian</span>
                <div className="text-sm text-gray-600">
                  Guardian of Taylor Wilson
                </div>
              </div>
              <span className="text-green-600 text-sm">Online</span>
            </div>
          </div>

          <button className="flex items-center gap-1 border px-3 py-1 rounded-md text-sm hover:bg-gray-100">
            <MessageCircle size={16} />
            Translate
          </button>
        </div>

        {/* Chat */}
        <div className="mt-4 space-y-4">
          {/* Incoming Message */}
          <div className="flex items-start gap-2">
            <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm max-w-[70%]">
              Hi, how can I help you today?
              <div className="text-xs text-gray-500 mt-1">10:00AM</div>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end">
            <div className="bg-[#00235A] text-white px-4 py-2 rounded-md text-sm max-w-[70%]">
              Hey, I'm having trouble with my account.
              <div className="text-xs text-gray-200 mt-1">10:00AM</div>
            </div>
          </div>
        </div>
      </div>
      <MessageInput />
    </div>
  );
}

export default function ChatUI() {
  return (
    <div className="flex gap-6 w-full overflow-auto h-screen chat-content-wrapper">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
