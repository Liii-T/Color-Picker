import React, { useState, useRef, useCallback, useEffect } from "react";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
import { HexColorInput } from "react-colorful";
import svgPaths from "../../imports/svg-5u5o543v2s";
import imgItem from "/Item.png"; // 修正為你之前的路徑
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

extend([mixPlugin, namesPlugin]);

// --- Utility ---
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// --- Icons ---
const DROPDOWN_ARROW_PATH = "M8.48145 3.39844L14.6191 9.52148C14.8047 9.7168 14.9219 9.94141 14.9707 10.1953C15.0195 10.4492 14.9927 10.7031 14.8901 10.957C14.7876 11.2109 14.6289 11.4111 14.4141 11.5576C14.1992 11.7041 13.9551 11.7773 13.6816 11.7773H1.4209C1.14746 11.7773 0.90332 11.7041 0.688477 11.5576C0.473633 11.4111 0.3125 11.2109 0.205078 10.957C0.136719 10.791 0.102539 10.625 0.102539 10.459C0.102539 10.0977 0.229492 9.78516 0.483398 9.52148L6.62109 3.39844C6.875 3.14453 7.18506 3.01758 7.55127 3.01758C7.91748 3.01758 8.22754 3.14453 8.48145 3.39844Z";
const DROPDOWN_CORNER_PATH = "M9.59993 8.40004C14.5705 3.42947 18 0 18 0V18H0C0 18 4.62936 13.3706 9.59993 8.40004Z";

function IconDropdownArrow() {
  return (
    <div className="relative size-[15px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <path d={DROPDOWN_ARROW_PATH} fill="white" />
      </svg>
    </div>
  );
}

function TablerIconX() {
  return (
    <div className="relative shrink-0 size-[19px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <path d="M17 1.5L2 16.5M2 1.5L17 16.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function IconCheck({ color = "#317455" }: { color?: string }) {
  return (
    <div className="relative size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p2a18be80} fill={color} />
        <path d={svgPaths.p2a18be80} fill="white" fillOpacity="0.75" />
      </svg>
    </div>
  );
}

function IconInfo({ color = "#317455" }: { color?: string }) {
  return (
    <div className="relative size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.pd4fb500} fill={color} />
        <path d={svgPaths.pd4fb500} fill="white" fillOpacity="0.6" />
      </svg>
    </div>
  );
}

function TablerIconReload() {
  return (
    <div className="aspect-[24/24] flex-[1_0_0] min-h-px min-w-px overflow-clip relative">
      <div className="absolute inset-[16.66%_16.67%]">
        <div className="absolute inset-[-5.62%_-5.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p1b706760} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTriangleLeft({ color = "#317455" }: { color?: string }) {
  return (
    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
      <path d="M0 6L6 0V12L0 6Z" fill={color} />
      <path d="M0 6L6 0V12L0 6Z" fill="white" fillOpacity="0.6" />
    </svg>
  );
}

function SuccessNoCircle() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p2e462820} fill="white" />
      </svg>
    </div>
  );
}

// --- Interactive Components ---

const Saturation = ({ hsv, onChange }: { hsv: { h: number; s: number; v: number }; onChange: (newHsv: { h: number; s: number; v: number }) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((event: PointerEvent) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
    const y = Math.max(0, Math.min(1, (event.clientY - top) / height));
    onChange({ ...hsv, s: x * 100, v: 100 - y * 100 });
  }, [hsv, onChange]);

  const handleDown = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const element = containerRef.current;
    if (!element) return;
    element.setPointerCapture(event.pointerId);
    const onPointerMove = (e: PointerEvent) => { if (e.pointerId === event.pointerId) handleMove(e); };
    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerId === event.pointerId) {
        element.releasePointerCapture(e.pointerId);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      }
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }, [handleMove]);

  return (
    <div className="relative w-full h-[128px] shrink-0">
      <div ref={containerRef} className="absolute inset-0 rounded-[8px] cursor-pointer touch-none select-none" onPointerDown={handleDown}
        style={{
          backgroundColor: colord({ h: hsv.h, s: 100, v: 100 }).toHex(),
          backgroundImage: "linear-gradient(to top, #000 0%, rgba(0,0,0,0) 100%), linear-gradient(to right, #FFF 0%, rgba(255,255,255,0) 100%)"
        }}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
      <div className="absolute size-[16px] pointer-events-none" style={{ left: `calc(${hsv.s}% - 8px)`, top: `calc(${100 - hsv.v}% - 8px)` }}>
        <div className="size-full border-2 border-white rounded-full shadow-md" />
      </div>
    </div>
  );
};

const HueSlider = ({ hue, onChange }: { hue: number; onChange: (newHue: number) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((event: PointerEvent) => {
    if (!containerRef.current) return;
    const { width, left } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
    onChange(Math.round(x * 360));
  }, [onChange]);

  const handleDown = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const element = containerRef.current;
    if (!element) return;
    element.setPointerCapture(event.pointerId);
    const onPointerMove = (e: PointerEvent) => { if (e.pointerId === event.pointerId) handleMove(e); };
    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerId === event.pointerId) {
        element.releasePointerCapture(e.pointerId);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      }
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }, [handleMove]);

  return (
    <div className="relative w-full h-[16px] shrink-0">
      <div ref={containerRef} className="h-full w-full rounded-[8px] cursor-pointer touch-none select-none" onPointerDown={handleDown}
        style={{ backgroundImage: "linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red)" }}
      >
        <div className="absolute top-0 size-[16px] border-2 border-white rounded-full shadow-md pointer-events-none" style={{ left: `calc(${(hue / 360) * 100}% - 8px)` }} />
      </div>
    </div>
  );
};

// --- Layout B Components ---
const SaturationB = ({ hsv, onChange, currentColor }: { hsv: { h: number; s: number; v: number }; onChange: (newHsv: { h: number; s: number; v: number }) => void; currentColor: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((event: PointerEvent) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
    const y = Math.max(0, Math.min(1, (event.clientY - top) / height));
    onChange({ ...hsv, s: x * 100, v: 100 - y * 100 });
  }, [hsv, onChange]);

  const handleDown = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const element = containerRef.current;
    if (!element) return;
    element.setPointerCapture(event.pointerId);
    const onPointerMove = (e: PointerEvent) => { if (e.pointerId === event.pointerId) handleMove(e); };
    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerId === event.pointerId) {
        element.releasePointerCapture(e.pointerId);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      }
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }, [handleMove]);

  return (
    <div className="relative w-full h-[160px] shrink-0">
      <div ref={containerRef} className="absolute inset-0 cursor-pointer touch-none select-none" onPointerDown={handleDown}
        style={{
          backgroundColor: colord({ h: hsv.h, s: 100, v: 100 }).toHex(),
          backgroundImage: "linear-gradient(to top, #000 0%, rgba(0,0,0,0) 100%), linear-gradient(to right, #FFF 0%, rgba(255,255,255,0) 100%)"
        }}
      />
      <div className="absolute size-[14px] pointer-events-none" style={{ left: `calc(${hsv.s}% - 7px)`, top: `calc(${100 - hsv.v}% - 7px)` }}>
        <div className="absolute inset-[-4px] border-[4px] border-white rounded-full" />
        <div className="size-full rounded-full" style={{ backgroundColor: currentColor }} />
      </div>
    </div>
  );
};

const HueSliderB = ({ hue, onChange }: { hue: number; onChange: (newHue: number) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((event: PointerEvent) => {
    if (!containerRef.current) return;
    const { width, left } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
    onChange(Math.round(x * 360));
  }, [onChange]);

  const handleDown = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const element = containerRef.current;
    if (!element) return;
    element.setPointerCapture(event.pointerId);
    const onPointerMove = (e: PointerEvent) => { if (e.pointerId === event.pointerId) handleMove(e); };
    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerId === event.pointerId) {
        element.releasePointerCapture(e.pointerId);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      }
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }, [handleMove]);

  return (
    <div className="relative w-full h-[16px] shrink-0">
      <div ref={containerRef} className="h-full w-full rounded-[4px] cursor-pointer touch-none select-none" onPointerDown={handleDown}
        style={{ backgroundImage: "linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red)" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 h-[24px] w-[6px] bg-white border border-gray-300 rounded-[2px] shadow-sm pointer-events-none" style={{ left: `calc(${(hue / 360) * 100}% - 3px)` }} />
      </div>
    </div>
  );
};

// --- Main Component ---
const DEFAULT_PRIMARY = "#19593C";
const DEFAULT_SECONDARY = "#317455";

export default function ColorPickerTool() {
  const [primaryColor, setPrimaryColor] = useState(DEFAULT_PRIMARY);
  const [secondaryColor, setSecondaryColor] = useState(DEFAULT_SECONDARY);
  const [activeTab, setActiveTab] = useState<"Primary" | "Secondary">("Primary");
  const [showDialog, setShowDialog] = useState(false);
  const [layout, setLayout] = useState<"A" | "B">("A");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showDropdown) return;
    const handleClickOutside = (e: MouseEvent) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setShowDropdown(false); };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  const [initialState, setInitialState] = useState({ primary: DEFAULT_PRIMARY, secondary: DEFAULT_SECONDARY });
  const currentColor = activeTab === "Primary" ? primaryColor : secondaryColor;
  const currentSetColor = activeTab === "Primary" ? setPrimaryColor : setSecondaryColor;
  const currentHsv = colord(currentColor).toHsv();
  const previewTextColor = colord(secondaryColor).mix("#FFFFFF", 0.6).toHex();
  const previewTopBorderColor = colord(primaryColor).mix(secondaryColor, 0.5).toHex();
  const previewVerticalBorderColor = colord(primaryColor).darken(0.05).toHex();

  const handleColorChange = (newHsv: { h: number; s: number; v: number }) => {
    const newHex = colord(newHsv).toHex().toUpperCase();
    currentSetColor(newHex);
  };

  const handleHueChange = (newHue: number) => {
    const newHex = colord({ ...currentHsv, h: newHue }).toHex().toUpperCase();
    currentSetColor(newHex);
  };

  const handleSave = () => { setInitialState({ primary: primaryColor, secondary: secondaryColor }); setShowDialog(true); };
  const handleCancel = () => { setPrimaryColor(initialState.primary); setSecondaryColor(initialState.secondary); };
  const handleReload = () => { setPrimaryColor(DEFAULT_PRIMARY); setSecondaryColor(DEFAULT_SECONDARY); };

  return (
    <div className="flex flex-col h-full w-full font-sans overflow-hidden" style={{ backgroundColor: secondaryColor }}>
      
      {/* 標題欄 (Header) - 避開 iOS 劉海 */}
      <div className="bg-black flex items-center shrink-0 w-full text-white z-20"
           style={{ paddingTop: 'env(safe-area-inset-top)', height: 'calc(48px + env(safe-area-inset-top))' }}>
        <div className="w-[70px] flex items-center justify-center h-full px-[12px]">
          <TablerIconX />
        </div>
        <div className="flex-1 flex justify-center items-center text-[18px] font-medium text-center">
          游戏页配色器
        </div>
        <div className="relative shrink-0 w-[70px] h-full" ref={dropdownRef}>
          <button className="flex gap-[7px] h-full items-center justify-end pr-[12px] w-full" onClick={() => setShowDropdown(!showDropdown)}>
            <span className="text-[18px] font-medium">{layout}</span>
            <div className="-scale-y-100 flex-none"><IconDropdownArrow /></div>
          </button>
          {showDropdown && (
            <div className="absolute right-0 top-[calc(100%-8px)] w-[120px] z-30">
              <div className="flex flex-col bg-white rounded-md shadow-xl overflow-hidden">
                <button className="h-[50px] text-[#333] border-b border-gray-100 hover:bg-gray-50" onClick={() => { setLayout("A"); setShowDropdown(false); }}>A</button>
                <button className="h-[50px] text-[#333] hover:bg-gray-50" onClick={() => { setLayout("B"); setShowDropdown(false); }}>B</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 預覽區域 (Bg Preview) - flex-1 自動縮放高度 */}
      <div className="flex-1 flex flex-col w-full relative overflow-hidden" style={{ backgroundColor: secondaryColor }}>
        
        {/* 預覽標題區 */}
        <div className="flex flex-col h-[68px] shrink-0 w-full relative">
          <div className="h-px shrink-0 w-full" style={{ backgroundColor: previewTopBorderColor }} />
          <div className="flex flex-1 items-center justify-center relative w-full" style={{ backgroundColor: primaryColor }}>
            <div className="flex flex-col items-center">
              <div className="text-[14px] mb-1" style={{ color: previewTextColor }}>0606006期开奖号码</div>
              <div className="flex gap-1">
                <div className="size-[24px] bg-contain" style={{ backgroundImage: `url('${imgItem}')` }} />
                <div className="size-[24px] bg-contain" style={{ backgroundImage: `url('${imgItem}')` }} />
                <div className="size-[24px] bg-contain" style={{ backgroundImage: `url('${imgItem}')` }} />
                <div className="pl-2 -scale-y-100"><IconCheck color={secondaryColor} /></div>
              </div>
            </div>
            <div className="absolute right-0 h-full w-[120px] border-l flex flex-col justify-center items-center" style={{ borderColor: previewVerticalBorderColor }}>
              <div className="text-[12px]" style={{ color: previewTextColor }}>截止投注</div>
              <div className="text-[18px] font-bold" style={{ color: previewTextColor }}>00:08:23</div>
            </div>
          </div>
        </div>

        {/* 預覽內容區 */}
        <div className="flex-1 p-[16px] overflow-hidden flex flex-col">
          <div className="flex items-start gap-2 mb-4">
            <div className="-scale-y-100"><IconInfo color={secondaryColor} /></div>
            <div className="text-[12px]" style={{ color: previewTextColor }}>从11-66中任选1个或多个号码...</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[11, 22, 33, 44, 55, 66].map(num => (
              <div key={num} className="border flex justify-center py-2 rounded" style={{ borderColor: num <= 33 ? '#f4c829' : 'rgba(255,255,255,0.2)' }}>
                <span className="text-[20px]" style={{ color: num <= 33 ? '#f4c829' : 'white' }}>{num}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 控制面板 (Footer) - 避開 iOS 底部操作條 */}
      <div className="bg-[#252625] shrink-0 w-full rounded-t-[12px] z-20">
        {layout === "A" ? (
          <div className="flex flex-col">
            <div className="p-[16px] flex flex-col gap-[16px]">
              <div className="bg-white/5 h-[36px] rounded-[8px] p-1 flex gap-1">
                <button onClick={() => setActiveTab("Primary")} className={cn("flex-1 rounded text-[14px]", activeTab === "Primary" ? "bg-[#575858] text-white" : "text-gray-400")}>主色</button>
                <button onClick={() => setActiveTab("Secondary")} className={cn("flex-1 rounded text-[14px]", activeTab === "Secondary" ? "bg-[#575858] text-white" : "text-gray-400")}>副色</button>
              </div>
              <div className="flex gap-4 items-center">
                <div className="size-8 rounded-full border-2 border-white" style={{ backgroundColor: currentColor }} />
                <div className="flex-1 bg-black/30 rounded px-3 py-1 flex items-center border border-gray-600">
                  <span className="text-gray-400 mr-1">#</span>
                  <HexColorInput className="bg-transparent text-white outline-none w-full uppercase" color={currentColor} onChange={currentSetColor} />
                </div>
              </div>
              <Saturation hsv={currentHsv} onChange={handleColorChange} />
              <HueSlider hue={currentHsv.h} onChange={handleHueChange} />
            </div>
            <div className="border-t border-black/30 p-[16px] flex gap-2" style={{ paddingBottom: 'calc(16px + env(safe-area-inset-bottom))' }}>
              <button onClick={handleReload} className="bg-[#575858] p-2.5 rounded"><TablerIconReload /></button>
              <button onClick={handleCancel} className="flex-1 bg-[#575858] text-white rounded h-[40px]">取消</button>
              <button onClick={handleSave} className="flex-1 bg-[#dc3b40] text-white rounded h-[40px]">保存配色</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="p-[16px] flex flex-col gap-4">
              <div className="flex justify-between items-center text-white/50 px-2">
                <span>{activeTab === "Primary" ? "主色" : "副色"} 調節</span>
                <span className="uppercase text-white font-mono">{currentColor}</span>
              </div>
              <SaturationB hsv={currentHsv} onChange={handleColorChange} currentColor={currentColor} />
              <HueSliderB hue={currentHsv.h} onChange={handleHueChange} />
            </div>
            <div className="p-[16px] flex gap-2" style={{ paddingBottom: 'calc(16px + env(safe-area-inset-bottom))' }}>
              <button onClick={() => setActiveTab(activeTab === "Primary" ? "Secondary" : "Primary")} className="flex-1 bg-[#575858] text-white rounded h-[40px]">切換目標</button>
              <button onClick={handleSave} className="flex-1 bg-[#dc3b40] text-white rounded h-[40px]">保存</button>
            </div>
          </div>
        )}
      </div>

      {/* 彈窗 (Dialog) */}
      {showDialog && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowDialog(false)}>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="bg-green-500 rounded-full p-2"><SuccessNoCircle /></div>
            <div className="text-black font-medium">保存成功</div>
          </div>
        </div>
      )}
    </div>
  );
}
