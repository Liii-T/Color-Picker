import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProfilePage from "./ProfilePage";
import ColorPickerTool from "./ColorPickerTool";

export interface SkinState {
  isCustom: boolean;
  setIsCustom: (v: boolean) => void;
  openSkin: () => void;
  closeSkin: () => void;
}

export default function RootLayout() {
  const [isCustom, setIsCustom] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);

  const openSkin = useCallback(() => setSkinOpen(true), []);
  const closeSkin = useCallback(() => setSkinOpen(false), []);

  const ctx: SkinState = { isCustom, setIsCustom, openSkin, closeSkin };

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
