import React from "react";

import { Mic, Send } from "lucide-react";

interface AIChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onVoiceInput?: () => void;
  placeholder?: string;
  disabled?: boolean;
}

const AIChatInput: React.FC<AIChatInputProps> = ({
  value,
  onChange,
  onSend,
  onVoiceInput,
  placeholder = "Ask the AI Assistant…",
  disabled = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1.5px solid #2196F3",
        borderRadius: 8,
        padding: 4,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(33,150,243,0.07)",
        width: "100%",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: 16,
          padding: "10px 12px",
          background: "transparent",
        }}
        disabled={disabled}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend();
        }}
      />
      {onVoiceInput && (
        <button
          onClick={onVoiceInput}
          aria-label="Voice input"
          disabled={disabled}
          className="w-[26px] h-[26px] justify-center flex items-center p-0 cursor-pointer rounded-full border-[#2196f3] border mr-[8px] ml-[2px]"
        >
          <Mic width={14} height={14} color="#2196f3"/>
        </button>
      )}
      <button
        onClick={onSend}
        aria-label="Send"
        disabled={disabled || !value.trim()}
        className="w-[30px] h-[30px] justify-center flex items-center p-0 cursor-pointer rounded-[6px] border-0 bg-[#0A2540] mr-[10px] ml-[2px]"
      >
        {/* Arrow SVG */}
        <svg width="14" height="14" fill="#fff" viewBox="0 0 24 24">
          <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
};

export default AIChatInput;
