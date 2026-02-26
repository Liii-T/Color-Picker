import React, { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export type SkinState = {
  isSkinOpen: boolean;
  openSkin: () => void;
  closeSkin: () => void;
  isCustom: boolean;
  setIsCustom: (val: boolean) => void;
  savedPrimary: string;
  setSavedPrimary: (val: string) => void;
  savedSecondary: string;
  setSavedSecondary: (val: string) => void;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSkinOpen, setIsSkinOpen] = useState(false);
  const [isSkinVisible, setIsSkinVisible] = useState(false);

  const [isCustom, setIsCustom] = useState(false);
  const [savedPrimary, setSavedPrimary] = useState("#19593C");
  const [savedSecondary, setSavedSecondary] = useState("#317455");

  const openSkin = () => {
    setIsSkinVisible(true);
    setTimeout(() => setIsSkinOpen(true), 10); // 觸發動畫
  };

  const closeSkin = () => {
    setIsSkinOpen(false);
    setTimeout(() => setIsSkinVisible(false), 300); // 等動畫結束
  };

  const skinState: SkinState = {
    isSkinOpen,
    openSkin,
    closeSkin,
    isCustom,
    setIsCustom,
    savedPrimary,
    setSavedPrimary,
    savedSecondary,
    setSavedSecondary,
  };

  return (
    <div className="relative size-full overflow-hidden">
      <ProfilePage ctx={skinState} />

      {isSkinVisible && (
        <div
          className="absolute inset-0 z-50 transition-transform duration-300"
          style={{
            transform: isSkinOpen
              ? "translateX(0)"
              : "translateX(100%)",
          }}
        >
          <ColorPickerTool ctx={skinState} />
        </div>
      )}
    </div>
  );
}
