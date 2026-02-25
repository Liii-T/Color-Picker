import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
import { HexColorInput } from "react-colorful";
import svgPaths from "../../imports/svg-5u5o543v2s";
import svgSuccessPaths from "../../imports/svg-si1ktc0z0w";
import imgItem from "/dice.png";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import BgPreviewGame2 from "./BgPreviewGame2";
import type { SkinState } from "./RootLayout";

// Extend colord with mix and names plugins
extend([mixPlugin, namesPlugin]);

// --- Utility ---
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// --- Dropdown Arrow Icon (from Figma) ---
const DROPDOWN_ARROW_PATH =
  "M8.48145 3.39844L14.6191 9.52148C14.8047 9.7168 14.9219 9.94141 14.9707 10.1953C15.0195 10.4492 14.9927 10.7031 14.8901 10.957C14.7876 11.2109 14.6289 11.4111 14.4141 11.5576C14.1992 11.7041 13.9551 11.7773 13.6816 11.7773H1.4209C1.14746 11.7773 0.90332 11.7041 0.688477 11.5576C0.473633 11.4111 0.3125 11.2109 0.205078 10.957C0.136719 10.791 0.102539 10.625 0.102539 10.459C0.102539 10.0977 0.229492 9.78516 0.483398 9.52148L6.62109 3.39844C6.875 3.14453 7.18506 3.01758 7.55127 3.01758C7.91748 3.01758 8.22754 3.14453 8.48145 3.39844Z";
const DROPDOWN_CORNER_PATH =
  "M9.59993 8.40004C14.5705 3.42947 18 0 18 0V18H0C0 18 4.62936 13.3706 9.59993 8.40004Z";

function IconDropdownArrow() {
  return (
    <div className="relative size-[15px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <path d={DROPDOWN_ARROW_PATH} fill="white" />
      </svg>
    </div>
  );
}

// --- Icons ---

function TablerIconX() {
  return (
    <div className="relative shrink-0 size-[19px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 19"
      >
        <path
          d="M17 1.5L2 16.5M2 1.5L17 16.5"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function IconCheck({ color = "#317455" }: { color?: string }) {
  return (
    <div className="relative size-[20px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path d={svgPaths.p2a18be80} fill={color} />
        <path
          d={svgPaths.p2a18be80}
          fill="white"
          fillOpacity="0.75"
        />
      </svg>
    </div>
  );
}

function IconInfo({ color = "#317455" }: { color?: string }) {
  return (
    <div className="relative size-[16px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path d={svgPaths.pd4fb500} fill={color} />
        <path
          d={svgPaths.pd4fb500}
          fill="white"
          fillOpacity="0.6"
        />
      </svg>
    </div>
  );
}

function TablerIconReload() {
  return (
    <div className="aspect-[24/24] flex-[1_0_0] min-h-px min-w-px overflow-clip relative">
      <div className="absolute inset-[16.66%_16.67%]">
        <div className="absolute inset-[-5.62%_-5.63%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p1b706760}
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTriangleLeft({
  color = "#317455",
}: {
  color?: string;
}) {
  return (
    <svg
      className="absolute block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 6 12"
    >
      <path d="M0 6L6 0V12L0 6Z" fill={color} />
      <path
        d="M0 6L6 0V12L0 6Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
}

function SuccessNoCircle() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <path
          d={svgSuccessPaths.p328e2800}
          fill="var(--fill-0, white)"
        />
      </svg>
    </div>
  );
}

function IconCloseSmall() {
  return (
    <svg
      className="absolute block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
    >
      <path
        d={svgPaths.p667a880}
        fill="var(--fill-0, #7D7D7D)"
      />
    </svg>
  );
}

// --- Interactive Components ---

const SaturationB = ({
  hsv,
  onChange,
  currentColor,
}: {
  hsv: { h: number; s: number; v: number };
  onChange: (newHsv: { h: number; s: number; v: number }) => void;
  currentColor: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (event: PointerEvent) => {
      if (!containerRef.current) return;
      const { width, height, left, top } =
        containerRef.current.getBoundingClientRect();
      const x = Math.max(
        0,
        Math.min(1, (event.clientX - left) / width),
      );
      const y = Math.max(
        0,
        Math.min(1, (event.clientY - top) / height),
      );
      onChange({ ...hsv, s: x * 100, v: 100 - y * 100 });
    },
    [hsv, onChange],
  );

  const handleDown = useCallback(
    (event: React.PointerEvent) => {
      event.preventDefault();
      const element = containerRef.current;
      if (!element) return;
      element.setPointerCapture(event.pointerId);
      const { width, height, left, top } =
        element.getBoundingClientRect();
      const x = Math.max(
        0,
        Math.min(1, (event.clientX - left) / width),
      );
      const y = Math.max(
        0,
        Math.min(1, (event.clientY - top) / height),
      );
      onChange({ ...hsv, s: x * 100, v: 100 - y * 100 });

      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerId === event.pointerId) handleMove(e);
      };
      const onPointerUp = (e: PointerEvent) => {
        if (e.pointerId === event.pointerId) {
          element.releasePointerCapture(e.pointerId);
          window.removeEventListener(
            "pointermove",
            onPointerMove,
          );
          window.removeEventListener("pointerup", onPointerUp);
        }
      };
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    },
    [handleMove, hsv, onChange],
  );

  return (
    <div className="relative w-full h-[160px] shrink-0">
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-pointer touch-none select-none"
        onPointerDown={handleDown}
        style={{
          backgroundColor: colord({ h: hsv.h, s: 100, v: 100 }).toHex(),
          backgroundImage:
            "linear-gradient(to top, #000 0%, rgba(0,0,0,0) 100%), linear-gradient(to right, #FFF 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      {/* Black overlay 0.2 opacity (from Figma) */}
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
      {/* Handle - circle with filled center */}
      <div
        className="absolute size-[14px] pointer-events-none"
        style={{
          left: `calc(${hsv.s}% - 7px)`,
          top: `calc(${100 - hsv.v}% - 7px)`,
        }}
      >
        <div className="absolute inset-[-28.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <circle cx="11" cy="11" r="9" stroke="white" strokeWidth="4" />
          </svg>
        </div>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill={currentColor} r="7" />
        </svg>
      </div>
    </div>
  );
};

const HueSliderB = ({
  hue,
  onChange,
}: {
  hue: number;
  onChange: (newHue: number) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (event: PointerEvent) => {
      if (!containerRef.current) return;
      const { width, left } =
        containerRef.current.getBoundingClientRect();
      const x = Math.max(
        0,
        Math.min(1, (event.clientX - left) / width),
      );
      onChange(Math.round(x * 360));
    },
    [onChange],
  );

  const handleDown = useCallback(
    (event: React.PointerEvent) => {
      event.preventDefault();
      const element = containerRef.current;
      if (!element) return;
      element.setPointerCapture(event.pointerId);
      const { width, left } = element.getBoundingClientRect();
      const x = Math.max(
        0,
        Math.min(1, (event.clientX - left) / width),
      );
      onChange(Math.round(x * 360));

      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerId === event.pointerId) handleMove(e);
      };
      const onPointerUp = (e: PointerEvent) => {
        if (e.pointerId === event.pointerId) {
          element.releasePointerCapture(e.pointerId);
          window.removeEventListener(
            "pointermove",
            onPointerMove,
          );
          window.removeEventListener("pointerup", onPointerUp);
        }
      };
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    },
    [handleMove, onChange],
  );

  return (
    <div className="relative shrink-0 w-full h-[16px]">
      <div
        ref={containerRef}
        className="h-[16px] relative rounded-[4px] shrink-0 w-full cursor-pointer touch-none select-none"
        onPointerDown={handleDown}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 16.6%, rgb(0, 255, 0) 33.3%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 65%, rgb(158, 0, 255) 75%, rgb(255, 0, 167) 89.525%, rgb(255, 0, 0) 100%)",
        }}
      >
        {/* Rectangular Handle */}
        <div
          className="absolute -translate-y-1/2 top-1/2 h-[24px] pointer-events-none flex items-center px-[4px] py-px"
          style={{ left: `calc(${(hue / 360) * 100}% - 3px)` }}
        >
          <div className="h-full relative rounded-[4px] shrink-0 w-[6px]">
            <div
              aria-hidden="true"
              className="absolute border-[3px] border-solid border-white inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_2px_0px_rgba(25,18,24,0.6)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

const GAME_DEFAULTS: Record<string, { primary: string; secondary: string }> = {
  "快3": { primary: "#19593C", secondary: "#317455" },
  "其他": { primary: "#E1D9BA", secondary: "#F5F1E4" },
};

const DEFAULT_PRIMARY = GAME_DEFAULTS["快3"].primary;
const DEFAULT_SECONDARY = GAME_DEFAULTS["快3"].secondary;

export default function ColorPickerTool({ ctx }: { ctx: SkinState }) {
  const { setIsCustom, closeSkin } = ctx;
  const [primaryColor, setPrimaryColor] =
    useState(DEFAULT_PRIMARY);
  const [secondaryColor, setSecondaryColor] = useState(
    DEFAULT_SECONDARY,
  );
  const [activeTab, setActiveTab] = useState<
    "Primary" | "Secondary"
  >("Primary");
  const [showDialog, setShowDialog] = useState(false);
  const dialogTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [selectedGame, setSelectedGame] = useState("快3");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!showDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  // Cleanup dialog timer on unmount
  useEffect(() => {
    return () => {
      if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
    };
  }, []);

  const [initialState, setInitialState] = useState({
    primary: DEFAULT_PRIMARY,
    secondary: DEFAULT_SECONDARY,
  });

  // Switch game handler: change colors to game defaults
  const handleSwitchGame = (game: string) => {
    const defaults = GAME_DEFAULTS[game];
    if (defaults) {
      setPrimaryColor(defaults.primary);
      setSecondaryColor(defaults.secondary);
      setInitialState({ primary: defaults.primary, secondary: defaults.secondary });
    }
    setSelectedGame(game);
    setShowDropdown(false);
  };

  const currentColor =
    activeTab === "Primary" ? primaryColor : secondaryColor;
  const currentSetColor =
    activeTab === "Primary"
      ? setPrimaryColor
      : setSecondaryColor;

  const currentHsv = colord(currentColor).toHsv();

  // Derived text color: secondaryColor + white 0.6 overlay
  const previewTextColor = colord(secondaryColor)
    .mix("#FFFFFF", 0.6)
    .toHex();

  // Derived border colors for preview (dynamic from primary/secondary)
  const previewTopBorderColor = colord(primaryColor)
    .mix(secondaryColor, 0.5)
    .toHex();
  const previewVerticalBorderColor = colord(primaryColor)
    .darken(0.05)
    .toHex();

  const handleColorChange = (newHsv: {
    h: number;
    s: number;
    v: number;
  }) => {
    const newHex = colord(newHsv).toHex().toUpperCase();
    currentSetColor(newHex);
  };

  const handleHueChange = (newHue: number) => {
    const newHex = colord({ ...currentHsv, h: newHue })
      .toHex()
      .toUpperCase();
    currentSetColor(newHex);
  };

  const handleSave = () => {
    console.log("Colors Saved:", {
      primaryColor,
      secondaryColor,
    });
    setInitialState({
      primary: primaryColor,
      secondary: secondaryColor,
    });
    setIsCustom(true);
    setShowDialog(true);
    if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
    dialogTimerRef.current = setTimeout(() => {
      setShowDialog(false);
      closeSkin();
    }, 2000);
  };

  const handleCancel = () => {
    setPrimaryColor(initialState.primary);
    setSecondaryColor(initialState.secondary);
  };

  const handleReload = () => {
    const defaults = GAME_DEFAULTS[selectedGame];
    setPrimaryColor(defaults.primary);
    setSecondaryColor(defaults.secondary);
    setInitialState({ primary: defaults.primary, secondary: defaults.secondary });
    setIsCustom(false);
  };

  const handleRestoreDefault = () => {
    handleReload();
    setIsCustom(false);
    setShowDialog(false);
  };

  const handleCopyColor = async () => {
    const text = `Primary: ${primaryColor}, Secondary: ${secondaryColor}`;

    try {
      await navigator.clipboard.writeText(text);
      alert("Colors copied to clipboard: " + text);
    } catch (err) {
      // Fallback for environments where clipboard API is blocked
      console.warn(
        "Clipboard API failed, trying legacy fallback...",
        err,
      );
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        // Ensure it's not visible but part of the DOM
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
          alert("Colors copied to clipboard: " + text);
        } else {
          throw new Error("execCommand copy failed");
        }
      } catch (fallbackErr) {
        console.error("Failed to copy: ", fallbackErr);
        alert(
          "Failed to copy colors. Please manually copy them.",
        );
      }
    }

    setShowDialog(false);
  };

  // Check if colors have been modified from initial state
  const isDirty =
    primaryColor !== initialState.primary ||
    secondaryColor !== initialState.secondary;

  const handleBack = () => {
    if (isDirty) {
      setShowExitConfirm(true);
    } else {
      closeSkin();
    }
  };

  const handleConfirmExit = () => {
    // Discard changes: restore to initial state
    setPrimaryColor(initialState.primary);
    setSecondaryColor(initialState.secondary);
    setShowExitConfirm(false);
    closeSkin();
  };

  const handleCancelExit = () => {
    setShowExitConfirm(false);
  };

  return (
    <div
      className="flex flex-col items-start relative h-full w-full font-sans"
      style={{ backgroundColor: secondaryColor }}
    >
   {/* 1. Header: 固定高度並避開劉海 */}
      <div 
        className="bg-black flex items-center relative shrink-0 w-full text-white z-20"
        style={{ 
          paddingTop: 'env(safe-area-inset-top)', 
          height: 'calc(48px + env(safe-area-inset-top))' 
        }}
      >
        <div className="w-[70px] flex items-center justify-center h-full px-[12px]">
          <TablerIconX />
        </div>
        <div className="flex-1 flex justify-center items-center text-[18px] font-medium leading-[normal] text-center">
          投注皮肤
        </div>
        {/* Dropdown Trigger */}
        <div className="relative shrink-0 w-[70px] h-full" ref={dropdownRef}>
          <button
            className="flex gap-[7px] h-full items-center justify-end pr-[12px] w-full"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-[18px] font-medium">{layout}</span>
            <div className="flex items-center justify-center">
              <div className="-scale-y-100 flex-none">
                <IconDropdownArrow />
              </div>
            </div>
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 top-[30px] w-[120px] z-30">
              <div className="flex flex-col items-end justify-end shadow-[0px_1px_12px_0px_rgba(51,51,51,0.08)]">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={DROPDOWN_CORNER_PATH} fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col gap-px items-start shrink-0">
                  <button
                    className="bg-white flex h-[50px] items-center justify-center w-[120px] shadow-[0px_1px_0px_0px_#bbb39c] hover:bg-gray-50 active:bg-gray-100"
                    onClick={() => handleSwitchGame("快3")}
                  >
                    <span className="text-[#333] text-[16px]">快3</span>
                  </button>
                  <button
                    className="bg-white flex h-[50px] items-center justify-center w-[120px] shadow-[0px_1px_0px_0px_#bbb39c] hover:bg-gray-50 active:bg-gray-100"
                    onClick={() => handleSwitchGame("其他")}
                  >
                    <span className="text-[#333] text-[16px]">其他</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bg Preview */}
<div className="flex-1 flex flex-col w-full relative overflow-hidden justify-between" style={{ backgroundColor: secondaryColor }}>
        {selectedGame === "其他" ? (
          <BgPreviewGame2 primaryColor={primaryColor} secondaryColor={secondaryColor} />
        ) : (
          <>
            {/* Header Preview Section */}
            <div className="flex flex-col h-[68px] shrink-0 w-full relative">
              <div className="h-px shrink-0 w-full" style={{ backgroundColor: previewTopBorderColor }} />
              <div
                className="flex flex-1 items-center justify-center relative w-full"
                style={{ backgroundColor: primaryColor }}
              >
                {/* Left Content */}
                <div className="flex-[1_0_0] h-full relative">
                  <div className="flex flex-col justify-center size-full items-start px-[16px]">
                    <div
                      className="w-full flex justify-center text-[14px] text-center mb-1"
                      style={{ color: previewTextColor }}
                    >
                      0606006期开奖号码
                    </div>
                    <div className="h-[30px] w-full flex justify-center">
                      <div className="flex items-start justify-center pl-[16px] pt-[4px]">
                        <div
                          className="size-[24px] bg-no-repeat"
                          style={{
                            backgroundImage: `url('${imgItem}')`,
                            backgroundSize: "48px 144px",
                            backgroundPosition: "left top",
                          }}
                        />
                        <div
                          className="size-[24px] bg-no-repeat"
                          style={{
                            backgroundImage: `url('${imgItem}')`,
                            backgroundSize: "48px 144px",
                            backgroundPosition: "left top",
                          }}
                        />
                        <div
                          className="size-[24px] bg-no-repeat"
                          style={{
                            backgroundImage: `url('${imgItem}')`,
                            backgroundSize: "48px 144px",
                            backgroundPosition: "left top",
                          }}
                        />
                        <div className="pl-[8px] flex items-center justify-center">
                          <div className="-scale-y-100 flex-none">
                            <IconCheck color={secondaryColor} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical Border / Right Content */}
                <div className="flex-[1_0_0] h-full min-h-[66px] relative border-l" style={{ borderColor: previewVerticalBorderColor }}>
                  <div className="flex items-center min-h-[inherit] size-full">
                    <div className="flex items-center min-h-[inherit] pl-[16px] relative size-full">
                      <div className="flex flex-[1_0_0] flex-col h-full items-center justify-center pt-[2px]">
                        <div
                          className="text-[14px] text-center"
                          style={{ color: previewTextColor }}
                        >
                          0606007期投注截止
                        </div>
                        <div
                          className="text-[24px] text-center leading-[30px]"
                          style={{ color: previewTextColor }}
                        >
                          00:08:23
                        </div>
                      </div>
                      {/* Background1 */}
                      <div
                        className="flex flex-col h-full items-center justify-center px-[5px] py-[28px] relative shrink-0 w-[16px]"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        <div
                          className="absolute inset-0 opacity-50"
                          style={{ backgroundColor: primaryColor }}
                        />
                        <div className="h-[12px] max-w-[16px] overflow-hidden relative shrink-0 w-[6px]">
                          <div className="absolute h-[12px] left-0 overflow-hidden top-0 w-[6px]">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[6px]">
                              <IconTriangleLeft
                                color={secondaryColor}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Body Preview */}
            <div
              className="flex flex-[1_0_0] flex-col items-start min-h-px py-[12px] relative w-full"
              style={{ backgroundColor: secondaryColor }}
            >
              <div className="relative shrink-0 w-full">
                <div className="flex justify-center w-full">
                  <div className="flex items-start justify-center p-[12px] relative w-full">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="-scale-y-100 flex-none">
                        <IconInfo color={secondaryColor} />
                      </div>
                    </div>
                    <div
                      className="flex flex-[1_0_0] flex-col justify-center ml-2 text-[12px] leading-[normal]"
                      style={{ color: previewTextColor }}
                    >
                      从11-66中任选1个或多个号码，选号与奖号(包含11-66，不限顺序)相同，即为中奖（不含豹子）。赔率11.66倍。
                    </div>
                  </div>
                </div>
              </div>

              {/* Number Grid */}
              <div className="relative shrink-0 w-full">
                <div className="flex gap-[8px] items-start px-[16px] py-[8px] w-full">
                  {[11, 22, 33].map((num) => (
                    <div
                      key={num}
                      className="flex-[1_0_0] relative border border-[#f4c829] flex justify-center items-center py-[4px]"
                    >
                      <span className="text-[#f4c829] text-[20px] leading-[32px]">
                        {num}
                      </span>
                    </div>
                  ))}
                  {[44, 55, 66].map((num) => (
                    <div
                      key={num}
                      className="flex-[1_0_0] relative border border-[rgba(255,255,255,0.2)] flex justify-center items-center py-[4px]"
                    >
                      <span className="text-white text-[20px] leading-[32px]">
                        {num}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Color Picker Control Panel */}
      <div className="flex flex-col items-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
        {/* Value Input & Controls Bar */}
        <div className="bg-black relative shrink-0 w-full">
          <div className="flex gap-[8px] items-start px-[16px] py-[12px] w-full">
            {/* Segmented Control */}
            <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-[36px] relative rounded-[4.53px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4.53px]" />
              <div className="flex gap-[4px] items-start p-[4px] size-full relative z-10">
                <button onClick={() => setActiveTab("Primary")} className={cn("flex-[1_0_0] h-full rounded-[4.53px] flex items-center justify-center transition-all cursor-pointer", activeTab === "Primary" ? "bg-[#575858] shadow-[2px_2px_8px_0px_rgba(22,19,23,0.2)] text-white" : "text-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.05)]")}>
                  <span className="text-[14px] font-medium">主色</span>
                </button>
                <button onClick={() => setActiveTab("Secondary")} className={cn("flex-[1_0_0] h-full rounded-[4.53px] flex items-center justify-center transition-all cursor-pointer", activeTab === "Secondary" ? "bg-[#575858] shadow-[2px_2px_8px_0px_rgba(22,19,23,0.2)] text-white" : "text-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.05)]")}>
                  <span className="text-[14px] font-medium">副色</span>
                </button>
              </div>
            </div>

            {/* Active Color Circle + Input */}
            <div className="flex gap-[8px] items-center shrink-0">
              <div className="p-[2px] rounded-[99px] shrink-0 size-[32px]" style={{ backgroundColor: currentColor }}>
                <div className="size-full rounded-full border-2 border-white relative overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundColor: currentColor }} />
                </div>
              </div>
              <div className="relative rounded-[4.53px] shrink-0 w-[92px]">
                <div className="flex gap-[4px] items-center rounded-[inherit] px-[12px] py-[8px] text-[14px] relative z-10">
                  <span className="text-[#969298] font-medium w-[10px]">#</span>
                  <HexColorInput className="bg-transparent w-full outline-none uppercase font-medium text-[14px] text-white cursor-text" color={currentColor} onChange={(c) => currentSetColor(c.startsWith("#") ? c : "#" + c)} prefixed={false} />
                </div>
                <div aria-hidden="true" className="absolute border border-[#575858] border-solid inset-0 pointer-events-none rounded-[4.53px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Color Space - 160px, full width */}
        <SaturationB hsv={currentHsv} onChange={handleColorChange} currentColor={currentColor} />

        {/* Hue Slider */}
        <div className="bg-black relative shrink-0 w-full">
          <div className="flex flex-col gap-[16px] items-center p-[16px] w-full">
            <HueSliderB hue={currentHsv.h} onChange={handleHueChange} />
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="bg-black h-[74px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex items-center size-full">
          <div className="flex gap-[8px] items-center p-[16px] size-full">
            <button onClick={handleReload} className="bg-[#575858] flex flex-[1_0_0] h-full items-center justify-center rounded-[4.53px] text-white text-[14px] hover:bg-[#666] active:bg-[#444] transition-colors">
              恢复默认
            </button>
            <button onClick={handleSave} className="bg-[#dc3b40] flex flex-[1_0_0] h-full items-center justify-center rounded-[4.53px] text-white text-[14px] hover:bg-[#e05055] active:bg-[#b03033] transition-colors">
              保存配色
            </button>
          </div>
        </div>
      </div>

      {/* Save Success Toast */}
      {showDialog && (
        <div className="absolute inset-0 z-50 flex items-center justify-center" onClick={() => setShowDialog(false)}>
          <div className="bg-[rgba(0,0,0,0.5)] flex flex-col gap-[8px] h-[120px] items-center justify-center rounded-[6px] w-[100px]">
            <SuccessNoCircle />
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[14px] not-italic text-[12px] text-right text-white tracking-[0.6px]">保存成功</p>
          </div>
        </div>
      )}

      {/* Exit Confirmation Dialog */}
      {showExitConfirm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-start w-[270px]" onClick={(e) => e.stopPropagation()}>
            {/* Top - Title */}
            <div className="bg-white h-[40px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full flex items-center justify-center">
              <p className="font-['PingFang_SC',sans-serif] text-[14px] text-black text-center font-medium">温馨提示</p>
            </div>
            {/* Main - Message */}
            <div className="bg-white flex flex-col items-center justify-center pb-[20px] pt-[12px] px-[20px] shrink-0 w-full">
              <p className="font-['PingFang_SC',sans-serif] text-[14px] text-black text-center font-medium w-[220px]">
                <span>您已做了</span>
                <span>投注皮肤</span>
                <span>配色修改，若是直接退出將不會進行修改</span>
              </p>
            </div>
            {/* Buttons */}
            <div className="flex items-start shrink-0 w-full">
              <button
                className="bg-white cursor-pointer flex-[1_0_0] h-[40px] relative rounded-bl-[10px] flex items-center justify-center active:bg-gray-100"
                onClick={handleCancelExit}
              >
                <span className="font-['PingFang_SC',sans-serif] text-[14px] text-black text-center font-medium">取消</span>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_#dfdfdf,inset_0px_0.5px_0px_0px_#e5e5e5]" />
              </button>
              <button
                className="bg-white cursor-pointer flex-[1_0_0] h-[40px] relative rounded-br-[10px] flex items-center justify-center active:bg-gray-100"
                onClick={handleConfirmExit}
              >
                <span className="font-['PingFang_SC',sans-serif] text-[14px] text-[#cd3422] text-center font-medium">确定退出</span>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.5px_0px_0px_#e5e5e5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
