"use client";
import { useParams } from "next/navigation";

import ChatSection from "./ChatSection";
import FamilySection from "./FamilyCard";
import ComposeMessage from "./ComposeMessage";

export { ChatSection, FamilySection };

import React, { useEffect, useState } from "react";

const MainContent = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="font-semibold text-2xl">
        {slug === "chat" ? "Messages" : "Compose Message"}
      </h1>
      {slug === "chat" ? <ChatSection /> : <ComposeMessage />}
    </>
  );
};

export default MainContent;
