import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export type SkinState = {
  isSkinOpen: boolean;
  openSkin: () => void;
  closeSkin: () => void;
  isCustom: boolean;
  setIsCustom: (val: boolean) => void;
  // 新增：記憶顏色狀態
  savedPrimary: string;
  setSavedPrimary: (val: string) => void;
  savedSecondary: string;
  setSavedSecondary: (val: string) => void;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSkinOpen, setIsSkinOpen] = useState(false);
  const [isCustom, setIsCustom] = useState(false);
  
  // 初始值設為「快3」的預設色
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
    setSavedSecondary
  };

  return (
    <div className="relative size-full overflow-hidden">
      <ProfilePage ctx={ctx} />

      <AnimatePresence>
        {skinOpen && (
          <motion.div
            key="skin-drawer"
            className="absolute inset-0 z-40"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <ColorPickerTool ctx={ctx} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
