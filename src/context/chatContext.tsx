"use client";

import { CHAT_IMAGES } from "@/assets/images";
import React, { createContext, useContext, useEffect, useState } from "react";

function generateRandomString(length: number = 8): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

interface ChatItem {
  id: string;
  avatarUrl: string;
  name: string;
  role: string;
  time: string;
  messagePreview: string;
  unreadCount: number;
  online?: boolean;
}

interface ChatMessage {
  id: string;
  chatId: string;
  sender: "me" | "them";
  content: string;
  time: string;
}

interface ChatContextProps {
  chatItems: ChatItem[];
  chatMessages: ChatMessage[];
  selectedChatId: string;
  setSelectedChatId: (id: string) => void;
  messagesForSelectedChat: ChatMessage[];
  sendMessage: (content: string) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within ChatProvider");
  }
  return context;
};

export const chatListData: ChatItem[] = [
  {
    id: "1",
    name: "Zilan",
    role: "Admin1",
    avatarUrl: CHAT_IMAGES[0],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 2,
    online: true,
  },
  {
    id: "2",
    name: "Sarah",
    role: "Student",
    avatarUrl: CHAT_IMAGES[1],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: false,
  },
  {
    id: "3",
    name: "zara",
    role: "Ambassador",
    avatarUrl: CHAT_IMAGES[2],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: true,
  },
  {
    id: "4",
    name: "Zilan",
    role: "Agent2",
    avatarUrl: CHAT_IMAGES[3],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: false,
  },
  {
    id: "5",
    name: "Zilan",
    role: "Admin1",
    avatarUrl: CHAT_IMAGES[4],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: true,
  },
  {
    id: "6",
    name: "Zilan",
    role: "Ambassador",
    avatarUrl: CHAT_IMAGES[5],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 5,
    online: false,
  },
  {
    id: "7",
    name: "Zilan",
    role: "Admin1",
    avatarUrl: CHAT_IMAGES[1],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: true,
  },
  {
    id: "8",
    name: "Zilan",
    role: "Ambassador",
    avatarUrl: CHAT_IMAGES[1],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: false,
  },
];

const initialMessages: ChatMessage[] = [
  {
    id: "m1",
    chatId: "1",
    sender: "them",
    content: "Hi, how can I help you today?",
    time: "10:00AM",
  },
  {
    id: "m2",
    chatId: "1",
    sender: "me",
    content: "Hey, I'm having trouble with my account.",
    time: "10:01AM",
  },
  {
    id: "m3",
    chatId: "2",
    sender: "me",
    content: "Appreciate the response!",
    time: "09:29AM",
  },
];

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedChatId, setSelectedChatId] = useState<string>("");
  const [chatMessages, setChatMessages] =
    useState<ChatMessage[]>(initialMessages);

  useEffect(() => {
    const initialId =
      window.location.hash.replace("#", "") || chatListData[0].id;
    setSelectedChatId(initialId);
    window.location.hash = initialId;
  }, []);

  useEffect(() => {
    window.location.hash = selectedChatId;
  }, [selectedChatId]);

  const sendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: generateRandomString(),
      chatId: selectedChatId,
      sender: "me",
      content,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setChatMessages((prev) => [...prev, newMessage]);
  };

  const messagesForSelectedChat = chatMessages.filter(
    (msg) => msg.chatId === selectedChatId
  );

  return (
    <ChatContext.Provider
      value={{
        chatItems: chatListData,
        chatMessages,
        selectedChatId,
        setSelectedChatId,
        messagesForSelectedChat,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
