import React, { useState } from "react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

const GAME_DEFAULTS = {
  快3: { primary: "#19593C", secondary: "#317455" },
  其他: { primary: "#E1D9BA", secondary: "#F5F1E4" },
};

export type SkinState = {
  isSkinOpen: boolean;
  openSkin: () => void;
  closeSkin: () => void;
  isCustom: boolean;
  savedColors: typeof GAME_DEFAULTS;
  setSavedColors: React.Dispatch<
    React.SetStateAction<typeof GAME_DEFAULTS>
  >;
};

export default function RootLayout() {
  const [isSkinOpen, setIsSkinOpen] = useState(false);
  const [isSkinVisible, setIsSkinVisible] = useState(false);

  // ⭐ 每個遊戲自己的皮膚
  const [savedColors, setSavedColors] = useState({
    快3: { ...GAME_DEFAULTS.快3 },
    其他: { ...GAME_DEFAULTS.其他 },
  });

  // ⭐ 只要有任一遊戲不是默認 → 自定義
  const isCustom = Object.keys(GAME_DEFAULTS).some((game) => {
    return (
      savedColors[game].primary !== GAME_DEFAULTS[game].primary ||
      savedColors[game].secondary !== GAME_DEFAULTS[game].secondary
    );
  });

  const openSkin = () => {
    setIsSkinVisible(true);
    setTimeout(() => setIsSkinOpen(true), 10);
  };

  const closeSkin = () => {
    setIsSkinOpen(false);
    setTimeout(() => setIsSkinVisible(false), 300);
  };

  const skinState: SkinState = {
    isSkinOpen,
    openSkin,
    closeSkin,
    isCustom,
    savedColors,
    setSavedColors,
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
