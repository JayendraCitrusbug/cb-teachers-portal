import React from "react";

import { Mic, ArrowUp } from "lucide-react";

import IMAGES from "@/assets/images";
import Image from "next/image";
import { COLORS } from "@/constants";

interface AIChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend?: () => void;
  onVoiceInput?: () => void;
  placeholder?: string;
  disabled?: boolean;
  containerStyle?: React.CSSProperties;
  prefixIcon?: keyof typeof IMAGES;
}

const AIChatInput: React.FC<AIChatInputProps> = ({
  value,
  onChange,
  onSend,
  onVoiceInput,
  placeholder = "Ask the AI Assistant…",
  disabled = false,
  containerStyle,
  prefixIcon,
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
        ...containerStyle,
      }}
    >
      {prefixIcon && (
        <Image
          src={prefixIcon ? IMAGES[prefixIcon] : ""}
          alt={prefixIcon ? prefixIcon : ""}
          width={24}
          height={24}
        />
      )}
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
          if (e.key === "Enter") onSend?.();
        }}
      />
      {onVoiceInput && (
        <button
          onClick={onVoiceInput}
          aria-label="Voice input"
          disabled={disabled}
          className="w-[26px] h-[26px] relative right-6 md:right-0 justify-center flex items-center p-0 cursor-pointer rounded-full mr-[8px] ml-[2px]"
        >
          <Image src={IMAGES.PLUS_ICON} alt="microphone" className="min-w-[28px]" width={14} height={14}/>
          {/* <Mic width={14} height={14} color={COLORS.PRIMARY} /> */}
        </button>
      )}
      {onSend && (
        <button
          onClick={onSend}
          aria-label="Send"
          disabled={disabled || !value.trim()}
          className="w-[30px] relative right-6 md:right-0 h-[30px] justify-center flex items-center p-0 cursor-pointer rounded-[50%] border-0  mr-[20px] md:mr-[10px] ml-[2px]"
        >
          <Image src={IMAGES.MIKE_ICON} alt="microphone" className="min-w-[28px]" width={14} height={14}/>
        </button>
      )}
    </div>
  );
};

export default AIChatInput;
