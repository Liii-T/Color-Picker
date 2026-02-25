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

// --- Icons (保持原樣，縮減篇幅) ---
const DROPDOWN_ARROW_PATH = "M8.48145 3.39844L14.6191 9.52148C14.8047 9.7168 14.9219 9.94141 14.9707 10.1953C15.0195 10.4492 14.9927 10.7031 14.8901 10.957C14.7876 11.2109 14.6289 11.4111 14.4141 11.5576C14.1992 11.7041 13.9551 11.7773 13.6816 11.7773H1.4209C1.14746 11.7773 0.90332 11.7041 0.688477 11.5576C0.473633 11.4111 0.3125 11.2109 0.205078 10.957C0.136719 10.791 0.102539 10.625 0.102539 10.459C0.102539 10.0977 0.229492 9.78516 0.483398 9.52148L6.62109 3.39844C6.875 3.14453 7.18506 3.01758 7.55127 3.01758C7.91748 3.01758 8.22754 3.14453 8.48145 3.39844Z";
const DROPDOWN_CORNER_PATH = "M9.59993 8.40004C14.5705 3.42947 18 0 18 0V18H0C0 18 4.62936 13.3706 9.59993 8.40004Z";

function IconDropdownArrow() {
  return (
    <div className="relative size-[15px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 15 15">
        <path d={DROPDOWN_ARROW_PATH} fill="white" />
      </svg>
    </div>
  );
}
function TablerIconX() { return <div className="size-[19px]"><svg className="size-full" fill="none" viewBox="0 0 19 19"><path d="M17 1.5L2 16.5M2 1.5L17 16.5" stroke="white" strokeLinecap="round" strokeWidth="1.5"/></svg></div>; }
function IconCheck({ color = "#317455" }) { return <div className="size-[20px]"><svg className="size-full" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p2a18be80} fill={color}/><path d={svgPaths.p2a18be80} fill="white" fillOpacity="0.75"/></svg></div>; }
function IconInfo({ color = "#317455" }) { return <div className="size-[16px]"><svg className="size-full" fill="none" viewBox="0 0 16 16"><path d={svgPaths.pd4fb500} fill={color}/><path d={svgPaths.pd4fb500} fill="white" fillOpacity="0.6"/></svg></div>; }
function IconTriangleLeft({ color = "#317455" }) { return <svg className="size-full" fill="none" viewBox="0 0 6 12"><path d="M0 6L6 0V12L0 6Z" fill={color}/></svg>; }
function SuccessNoCircle() { return <div className="size-[40px]"><svg className="size-full" fill="none" viewBox="0 0 40 40"><path d={svgSuccessPaths.p328e2800} fill="white"/></svg></div>; }

// --- Sub-components ---
const SaturationB = ({ hsv, onChange, currentColor }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((event: PointerEvent) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
    const y = Math.max(0, Math.min(1, (event.clientY - top) / height));
    onChange({ ...hsv, s: x * 100, v: 100 - y * 100 });
  }, [hsv, onChange]);

  const handleDown = (event: React.PointerEvent) => {
    event.preventDefault();
    const element = containerRef.current;
    if (!element) return;
    element.setPointerCapture(event.pointerId);
    const onPointerMove = (e: PointerEvent) => handleMove(e);
    const onPointerUp = (e: PointerEvent) => {
      element.releasePointerCapture(e.pointerId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    handleMove(event.nativeEvent as PointerEvent);
  };

  return (
    <div className="relative w-full h-[160px] shrink-0">
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-pointer touch-none select-none"
        onPointerDown={handleDown}
        style={{
          backgroundColor: colord({ h: hsv.h, s: 100, v: 100 }).toHex(),
          backgroundImage: "linear-gradient(to top, #000 0%, rgba(0,0,0,0) 100%), linear-gradient(to right, #FFF 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
      <div className="absolute size-[14px] pointer-events-none" style={{ left: `calc(${hsv.s}% - 7px)`, top: `calc(${100 - hsv.v}% - 7px)` }}>
        <div className="absolute inset-[-4px] border-[4px] border-white rounded-full shadow-md" />
        <div className="absolute inset-0 rounded-full" style={{ backgroundColor: currentColor }} />
      </div>
    </div>
  );
};

const HueSliderB = ({ hue, onChange }: { hue: number; onChange: (n: number) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((event: PointerEvent) => {
    if (!containerRef.current) return;
    const { width, left } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
    onChange(Math.round(x * 360));
  }, [onChange]);

  const handleDown = (event: React.PointerEvent) => {
    const element = containerRef.current;
    if (!element) return;
    element.setPointerCapture(event.pointerId);
    const onPointerMove = (e: PointerEvent) => handleMove(e);
    const onPointerUp = (e: PointerEvent) => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    handleMove(event.nativeEvent as PointerEvent);
  };

  return (
    <div ref={containerRef} onPointerDown={handleDown} className="relative w-full h-[16px] rounded-[4px] cursor-pointer" 
         style={{ backgroundImage: "linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red)" }}>
      <div className="absolute top-1/2 -translate-y-1/2 w-[6px] h-[24px] bg-white border border-gray-300 rounded-[4px] shadow-sm pointer-events-none"
           style={{ left: `calc(${(hue / 360) * 100}% - 3px)` }} />
    </div>
  );
};

// --- Constants ---
const GAME_DEFAULTS: Record<string, { primary: string; secondary: string }> = {
  "快3": { primary: "#19593C", secondary: "#317455" },
  "其他": { primary: "#E1D9BA", secondary: "#F5F1E4" },
};

// --- Main Component ---
export default function ColorPickerTool({ ctx }: { ctx: SkinState }) {
  const { setIsCustom, closeSkin, savedPrimary, setSavedPrimary, savedSecondary, setSavedSecondary } = ctx;

  const [primaryColor, setPrimaryColor] = useState(savedPrimary);
  const [secondaryColor, setSecondaryColor] = useState(savedSecondary);
  const [activeTab, setActiveTab] = useState<"Primary" | "Secondary">("Primary");
  const [showDialog, setShowDialog] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [selectedGame, setSelectedGame] = useState("快3");
  const [showDropdown, setShowDropdown] = useState(false);
  const [initialState, setInitialState] = useState({ primary: savedPrimary, secondary: savedSecondary });
  
  const dialogTimerRef = useRef<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync initial state when ctx updates (optional, for safety)
  useEffect(() => {
    setInitialState({ primary: savedPrimary, secondary: savedSecondary });
  }, [savedPrimary, savedSecondary]);

  const handleSave = () => {
    const defaults = GAME_DEFAULTS[selectedGame];
    const isDefaultColor = 
      primaryColor.toUpperCase() === defaults.primary.toUpperCase() && 
      secondaryColor.toUpperCase() === defaults.secondary.toUpperCase();

    setSavedPrimary(primaryColor);
    setSavedSecondary(secondaryColor);
    setInitialState({ primary: primaryColor, secondary: secondaryColor }); // 重要：存檔後重置髒檢查起點
    setIsCustom(!isDefaultColor);

    setShowDialog(true);
    if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
    dialogTimerRef.current = setTimeout(() => {
      setShowDialog(false);
      closeSkin();
    }, 1500);
  };

  const handleReload = () => {
    const defaults = GAME_DEFAULTS[selectedGame];
    setPrimaryColor(defaults.primary);
    setSecondaryColor(defaults.secondary);
  };

  const handleSwitchGame = (game: string) => {
    const defaults = GAME_DEFAULTS[game];
    setPrimaryColor(defaults.primary);
    setSecondaryColor(defaults.secondary);
    setSelectedGame(game);
    setShowDropdown(false);
  };

  const isDirty = primaryColor !== initialState.primary || secondaryColor !== initialState.secondary;

  const handleBack = () => {
    if (isDirty) setShowExitConfirm(true);
    else closeSkin();
  };

  const currentColor = activeTab === "Primary" ? primaryColor : secondaryColor;
  const currentHsv = colord(currentColor).toHsv();
  const previewTextColor = colord(secondaryColor).mix("#FFFFFF", 0.6).toHex();
  const previewTopBorderColor = colord(primaryColor).mix(secondaryColor, 0.5).toHex();

  return (
    <div className="flex flex-col h-full w-full font-sans overflow-hidden" style={{ backgroundColor: secondaryColor }}>
      {/* 1. Header */}
      <div className="bg-black flex items-center shrink-0 w-full text-white z-20" style={{ paddingTop: 'env(safe-area-inset-top)', height: 'calc(48px + env(safe-area-inset-top))' }}>
        <div className="w-[70px] flex items-center justify-center h-full cursor-pointer active:opacity-60" onClick={handleBack}>
          <TablerIconX />
        </div>
        <div className="flex-1 text-center font-medium">投注皮肤</div>
        <div className="relative w-[70px] h-full" ref={dropdownRef}>
          <button className="flex gap-1 h-full items-center justify-end pr-3 w-full" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="text-[16px]">{selectedGame}</span>
            <IconDropdownArrow />
          </button>
          {showDropdown && (
            <div className="absolute right-0 top-[48px] w-[120px] bg-white shadow-xl z-30 flex flex-col items-end">
              <div className="size-[18px] mr-2 -mb-1">
                 <svg className="size-full" viewBox="0 0 18 18"><path d={DROPDOWN_CORNER_PATH} fill="white" /></svg>
              </div>
              {Object.keys(GAME_DEFAULTS).map(game => (
                <button key={game} className="w-full h-[50px] text-[#333] border-b border-gray-100 active:bg-gray-50" onClick={() => handleSwitchGame(game)}>
                  {game}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2. Preview */}
      <div className="flex-1 relative overflow-hidden">
        {selectedGame === "其他" ? (
          <BgPreviewGame2 primaryColor={primaryColor} secondaryColor={secondaryColor} />
        ) : (
          <div className="flex flex-col w-full h-full">
            <div className="h-[68px] w-full" style={{ backgroundColor: primaryColor, borderTop: `1px solid ${previewTopBorderColor}` }}>
                {/* 預覽內容縮略 */}
                <div className="flex h-full items-center px-4 text-[12px]" style={{ color: previewTextColor }}>
                    <div className="flex-1 text-center">0606006期开奖號碼<br/>🎲 🎲 🎲</div>
                    <div className="w-px h-full bg-black/10 mx-2" />
                    <div className="flex-1 text-center">截止: 00:08:23</div>
                </div>
            </div>
            <div className="flex-1 p-4" style={{ backgroundColor: secondaryColor }}>
                 <div className="p-3 rounded-lg border border-white/20 text-white/70 text-[12px]">
                    從11-66中任選號碼，中獎倍數 11.66 倍。
                 </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Controls */}
      <div className="bg-black shrink-0 w-full flex flex-col">
        <div className="flex gap-2 p-3 items-center">
            <div className="flex-1 flex bg-white/10 p-1 rounded-md">
                <button onClick={() => setActiveTab("Primary")} className={cn("flex-1 py-1 text-sm rounded", activeTab === "Primary" ? "bg-gray-600 text-white" : "text-gray-400")}>主色</button>
                <button onClick={() => setActiveTab("Secondary")} className={cn("flex-1 py-1 text-sm rounded", activeTab === "Secondary" ? "bg-gray-600 text-white" : "text-gray-400")}>副色</button>
            </div>
            <div className="flex items-center gap-2">
                <div className="size-8 rounded-full border-2 border-white" style={{ backgroundColor: currentColor }} />
                <div className="bg-white/10 border border-gray-600 px-2 py-1 rounded flex items-center text-sm text-white">
                    <span className="text-gray-500 mr-1">#</span>
                    <HexColorInput color={currentColor} onChange={c => activeTab === "Primary" ? setPrimaryColor(c.toUpperCase()) : setSecondaryColor(c.toUpperCase())} className="bg-transparent w-16 outline-none uppercase" />
                </div>
            </div>
        </div>
        
        <SaturationB hsv={currentHsv} currentColor={currentColor} onChange={(hsv: any) => {
            const hex = colord(hsv).toHex().toUpperCase();
            activeTab === "Primary" ? setPrimaryColor(hex) : setSecondaryColor(hex);
        }} />

        <div className="p-4">
            <HueSliderB hue={currentHsv.h} onChange={(h: number) => {
                const hex = colord({...currentHsv, h}).toHex().toUpperCase();
                activeTab === "Primary" ? setPrimaryColor(hex) : setSecondaryColor(hex);
            }} />
        </div>

        <div className="flex gap-3 p-4 border-t border-white/5">
            <button onClick={handleReload} className="flex-1 h-10 bg-gray-600 text-white rounded font-medium">恢复默认</button>
            <button onClick={handleSave} className="flex-1 h-10 bg-red-600 text-white rounded font-medium">保存配色</button>
        </div>
      </div>

      {/* 4. Dialogs (保持原樣邏輯) */}
      {showDialog && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="bg-black/80 flex flex-col items-center justify-center rounded-lg p-5">
            <SuccessNoCircle />
            <p className="text-white text-sm mt-2 tracking-widest">保存成功</p>
          </div>
        </div>
      )}

      {showExitConfirm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl w-[270px] overflow-hidden">
            <div className="p-4 text-center font-bold text-black border-b">温馨提示</div>
            <div className="p-5 text-center text-sm text-gray-600">
              你已進行配色修改，若直接退出，顏色方案將不會被保存。
            </div>
            <div className="flex border-t">
              <button onClick={() => setShowExitConfirm(false)} className="flex-1 py-3 text-black border-r active:bg-gray-100">取消</button>
              <button onClick={closeSkin} className="flex-1 py-3 text-red-600 font-bold active:bg-gray-100">確定退出</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
