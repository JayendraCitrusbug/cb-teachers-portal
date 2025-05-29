"use client";
import { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { MessageCircle, Link2, Send, Smile, SquarePen } from "lucide-react";

import SearchInput from "@/components/Atoms/SearchInput";

import { ChatProvider, useChatContext } from "@/context/chatContext";

import { Button } from "@/components/ui/button";

import "./style.css";
import IMAGES from "@/assets/images";

interface ChatListItemProps {
  avatarUrl: string;
  name: string;
  role: string;
  time: string;
  messagePreview: string;
  unreadCount: number;
  online?: boolean;
  id: string;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  avatarUrl,
  name,
  role,
  time,
  messagePreview,
  unreadCount,
  online = false,
  id,
}) => {
  const { selectedChatId } = useChatContext();
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 hover:bg-gray-100 transition cursor-pointer w-full ${
        selectedChatId === id ? "bg-gray-100" : ""
      }`}
    >
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
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2 text-sm text-foreground font-sans">
            <span className="font-bold text-black">{name}</span>
            <span className="text-foreground font-medium text-[11px] font-sans">
              {role}
            </span>
          </div>
          <div className="text-sm text-muted-foreground font-sans font-normal truncate max-w-[170px]">
            {messagePreview}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-foreground font-medium text-[12px] font-sans">
          {time}
        </span>
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
  const router = useRouter();

  const { chatItems, setSelectedChatId } = useChatContext();

  return (
    <div className="chat-sidebar border border-[#E4E4E7] rounded-lg bg-white md:flex flex-col shadow-sm">
      <div className="px-6 w-full pt-6">
        <SearchInput />
      </div>

      <div className="flex justify-between items-center w-full gap-1 p-6">
        <p className="font-semibold">Conversation</p>
        <Button
          onClick={() => router.push("/family/compose")}
          className="bg-[#00235A] text-white cursor-pointer"
        >
          Compose <SquarePen />
        </Button>
      </div>

      <div className="chat-messages-container overflow-y-auto flex flex-col gap-1 items-start">
        {chatItems.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChatId(chat.id)}
            className="w-full"
          >
            <ChatListItem {...chat} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MessageInput() {
  const { sendMessage } = useChatContext();
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="w-full flex items-center gap-2 px-4 bg-white rounded-b-lg absolute bottom-0 flex-wrap">
      <input
        type="text"
        placeholder="Type your message"
        className="flex-1 px-4 py-2 border border-[#E4E4E7] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00235A] text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="flex gap-2 px-4 py-3">
        <button className="p-2 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer">
          <Smile size={18} className="text-white" />
        </button>

        <button className="p-2 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer">
          <Link2 size={18} className="text-white transform -rotate-45" />
        </button>

        <button
          className="p-2 rounded-md bg-blue-900 hover:bg-blue-950 cursor-pointer"
          onClick={handleSend}
        >
          <Send size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}

function ChatWindow() {
  const { chatItems, selectedChatId, messagesForSelectedChat } =
    useChatContext();

  const chat = chatItems.find((c) => c.id === selectedChatId);
  if (!chat) return null;

  return (
    <div className="border border-[#E4E4E7] rounded-lg w-full max-w-full max-h-[calc(100vh-62px)] overflow-y-hidden relative shadow-sm bg-white">
      <div className="bg-white p-4 rounded-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-3">
            <Image
              src={chat.avatarUrl}
              alt="Avatar"
              width={48}
              height={48}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{chat.name}</span>
                <div className="text-sm text-gray-600">{chat.role}</div>
              </div>
              <span
                className={`text-sm ${
                  chat.online
                    ? "text-[var(--color-success)]"
                    : "text-[var(--color-rejected)]"
                }`}
              >
                {chat.online ? "Online" : "Offline"}
              </span>
            </div>
          </div>

          <button className="cursor-pointer flex items-center gap-1 border px-3 py-1 rounded-md text-sm hover:bg-gray-100">
            <Image src={IMAGES.TRANSLATE} alt="translate" />
            Translate
          </button>
        </div>

        {/* Chat */}
        <div className="mt-1 py-2 space-y-4 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-62px)] chat-window">
          {messagesForSelectedChat.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "items-start gap-2"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-md text-sm max-w-[70%] ${
                  msg.sender === "me"
                    ? "bg-[#00235A] text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {msg.content}
                <div
                  className={`text-xs mt-1 ${
                    msg.sender === "me" ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MessageInput />
    </div>
  );
}

export default function ChatUI() {
  return (
    <ChatProvider>
      <div className="flex gap-6 w-full max-h-[calc(100vh-128px)] h-screen chat-content-wrapper">
        <Sidebar />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}
