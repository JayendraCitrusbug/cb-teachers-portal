import ChatSection from "./ChatSection";
import FamilySection from "./FamilyCard";

import { CHAT_IMAGES } from "@/assets/images";

export { ChatSection, FamilySection };

export const chatListData = [
  {
    id: 1,
    name: "Zilan",
    role: "Admin1",
    avatarUrl: CHAT_IMAGES[0],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 2,
    online: true,
  },
  {
    id: 2,
    name: "Sarah",
    role: "Student",
    avatarUrl: CHAT_IMAGES[1],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: false,
  },
  {
    id: 3,
    name: "zara",
    role: "Ambassador",
    avatarUrl: CHAT_IMAGES[2],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: true,
  },
  {
    id: 4,
    name: "Zilan",
    role: "Agent2",
    avatarUrl: CHAT_IMAGES[3],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: false,
  },
  {
    id: 5,
    name: "Zilan",
    role: "Admin1",
    avatarUrl: CHAT_IMAGES[4],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: true,
  },
  {
    id: 6,
    name: "Zilan",
    role: "Ambassador",
    avatarUrl: CHAT_IMAGES[5],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 5,
    online: false,
  },
  {
    id: 7,
    name: "Zilan",
    role: "Admin1",
    avatarUrl: CHAT_IMAGES[1],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: true,
  },
  {
    id: 8,
    name: "Zilan",
    role: "Ambassador",
    avatarUrl: CHAT_IMAGES[1],
    time: "12:34 PM",
    messagePreview: "Thank you very much, I am wai...",
    unreadCount: 0,
    online: false,
  },
];
