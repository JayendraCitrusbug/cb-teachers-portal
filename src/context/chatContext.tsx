"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

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
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within ChatProvider");
  }
  return context;
};

const dummyChatItems: ChatItem[] = [
  {
    id: "1",
    avatarUrl: "/avatars/avatar1.jpg",
    name: "Taylor Wilson’s Guardian",
    role: "Guardian",
    time: "10:00AM",
    messagePreview: "Hi, how can I help you today?",
    unreadCount: 2,
    online: true,
  },
  {
    id: "2",
    avatarUrl: "/avatars/avatar2.jpg",
    name: "Anna Smith",
    role: "Parent",
    time: "09:30AM",
    messagePreview: "Thank you for the update!",
    unreadCount: 0,
    online: false,
  },
];

const dummyMessages: ChatMessage[] = [
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

  const chatItems = dummyChatItems;
  const chatMessages = dummyMessages;

  useEffect(() => {
    const initialId =
      window.location.hash.replace("#", "") || dummyChatItems[0].id;
    setSelectedChatId(initialId);
    window.location.hash = initialId;
  }, []);

  const messagesForSelectedChat = chatMessages.filter(
    (msg) => msg.chatId === selectedChatId
  );

  useEffect(() => {
    window.location.hash = selectedChatId;
  }, [selectedChatId]);

  return (
    <ChatContext.Provider
      value={{
        chatItems,
        chatMessages,
        selectedChatId,
        setSelectedChatId,
        messagesForSelectedChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
