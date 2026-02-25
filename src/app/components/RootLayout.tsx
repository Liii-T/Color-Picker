import React, { useState } from "react";
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
  const [isCustom, setIsCustom] = useState(false);
  // 記憶配色，初始為快3預設色
  const [savedPrimary, setSavedPrimary] = useState("#19593C");
  const [savedSecondary, setSavedSecondary] = useState("#317455");

  const skinState: SkinState = {
    isSkinOpen,
    openSkin: () => setIsSkinOpen(true),
    closeSkin: () => setIsSkinOpen(false),
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
      {isSkinOpen && (
        <div className="absolute inset-0 z-50">
          <ColorPickerTool ctx={skinState} />
        </div>
      )}
    </div>
  );
}
