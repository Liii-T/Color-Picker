import React, { useState, useRef, useCallback, useEffect } from "react";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
import { HexColorInput } from "react-colorful";
import svgPaths from "../../imports/svg-5u5o543v2s";
import imgItem from "/Item.png";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

extend([mixPlugin, namesPlugin]);

// --- Utility ---
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// --- Icons ---

function TablerIconX() {
  return (
    <div className="relative shrink-0 size-[19px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <path d="M17 1.5L2 16.5M2 1.5L17 16.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
            <path d={svgPaths.p1b706760} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
        <path d={svgPaths.p2e462820} fill="var(--fill-0, white)" />
      </svg>
    </div>
  );
}

function IconCloseSmall() {
  return (
     <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.p667a880} fill="var(--fill-0, #7D7D7D)" />
     </svg>
  );
}


// --- Interactive Components ---

const Saturation = ({ hsv, onChange }: { hsv: { h: number; s: number; v: number }; onChange: (newHsv: { h: number; s: number; v: number }) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (event: PointerEvent) => {
      if (!containerRef.current) return;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
      const y = Math.max(0, Math.min(1, (event.clientY - top) / height));
      onChange({ ...hsv, s: x * 100, v: 100 - y * 100 });
    },
    [hsv, onChange]
  );

  const handleDown = useCallback(
    (event: React.PointerEvent) => {
      event.preventDefault();
      const element = containerRef.current;
      if (!element) return;
      element.setPointerCapture(event.pointerId);
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
      const y = Math.max(0, Math.min(1, (event.clientY - top) / height));
      onChange({ ...hsv, s: x * 100, v: 100 - y * 100 });

      const onPointerMove = (e: PointerEvent) => {
         if (e.pointerId === event.pointerId) handleMove(e);
      };
      const onPointerUp = (e: PointerEvent) => {
        if (e.pointerId === event.pointerId) {
            element.releasePointerCapture(e.pointerId);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
        }
      };
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    },
    [handleMove, hsv, onChange]
  );

  return (
    <div className="relative w-full h-[128px] shrink-0">
      <div 
        ref={containerRef}
        className="absolute inset-0 rounded-[8px] cursor-pointer touch-none select-none"
        onPointerDown={handleDown}
        style={{
             backgroundColor: colord({ h: hsv.h, s: 100, v: 100 }).toHex(), 
             backgroundImage: "linear-gradient(to right, #FFF 0%, rgba(255,255,255,0) 100%), linear-gradient(to top, #000 0%, rgba(0,0,0,0) 100%)"
        }}
      >
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
      
      {/* Handle */}
      <div 
        className="absolute size-[16px] pointer-events-none"
        style={{ 
            left: `calc(${hsv.s}% - 8px)`, 
            top: `calc(${100 - hsv.v}% - 8px)`
        }}
      >
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g filter="url(#filter0_d_1_211)">
                <circle cx="9" cy="9" r="5.5" shapeRendering="crispEdges" stroke="white" strokeWidth="3" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18" id="filter0_d_1_211" width="18" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.0705882 0 0 0 0 0.0941176 0 0 0 0.6 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_211" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_211" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const HueSlider = ({ hue, onChange }: { hue: number; onChange: (newHue: number) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (event: PointerEvent) => {
      if (!containerRef.current) return;
      const { width, left } = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
      onChange(Math.round(x * 360));
    },
    [onChange]
  );

  const handleDown = useCallback(
    (event: React.PointerEvent) => {
      event.preventDefault();
      const element = containerRef.current;
      if (!element) return;
      element.setPointerCapture(event.pointerId);
      const { width, left } = element.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - left) / width));
      onChange(Math.round(x * 360));

      const onPointerMove = (e: PointerEvent) => {
         if (e.pointerId === event.pointerId) handleMove(e);
      };
      const onPointerUp = (e: PointerEvent) => {
        if (e.pointerId === event.pointerId) {
            element.releasePointerCapture(e.pointerId);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
        }
      };
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    },
    [handleMove, onChange]
  );

  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full h-[16px]">
        <div 
            ref={containerRef}
            className="h-[16px] relative rounded-[8px] shrink-0 w-full cursor-pointer touch-none select-none"
            onPointerDown={handleDown}
            style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 16.6%, rgb(0, 255, 0) 33.3%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 65%, rgb(158, 0, 255) 75%, rgb(255, 0, 167) 89.525%, rgb(255, 0, 0) 100%)" }}
        >
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        
        {/* Handle */}
        <div 
            className="absolute size-[16px] top-0 pointer-events-none"
            style={{ left: `calc(${(hue / 360) * 100}% - 8px)` }}
        >
            <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
            <div className="absolute inset-[-14.29%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g filter="url(#filter0_d_1_211_hue)">
                    <circle cx="9" cy="9" r="5.5" shapeRendering="crispEdges" stroke="white" strokeWidth="3" />
                </g>
                <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18" id="filter0_d_1_211_hue" width="18" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.0705882 0 0 0 0 0.0941176 0 0 0 0.6 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_211" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_211" mode="normal" result="shape" />
                    </filter>
                </defs>
                </svg>
            </div>
            </div>
        </div>
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

  const [initialState, setInitialState] = useState({
    primary: DEFAULT_PRIMARY,
    secondary: DEFAULT_SECONDARY
  });

  const currentColor = activeTab === "Primary" ? primaryColor : secondaryColor;
  const currentSetColor = activeTab === "Primary" ? setPrimaryColor : setSecondaryColor;

  const currentHsv = colord(currentColor).toHsv();

  // Derived text color: secondaryColor + white 0.6 overlay
  const previewTextColor = colord(secondaryColor).mix("#FFFFFF", 0.6).toHex();

  const handleColorChange = (newHsv: { h: number; s: number; v: number }) => {
    const newHex = colord(newHsv).toHex().toUpperCase();
    currentSetColor(newHex);
  };

  const handleHueChange = (newHue: number) => {
    const newHex = colord({ ...currentHsv, h: newHue }).toHex().toUpperCase();
    currentSetColor(newHex);
  };

  const handleSave = () => {
    console.log("Colors Saved:", { primaryColor, secondaryColor });
    setInitialState({ primary: primaryColor, secondary: secondaryColor });
    setShowDialog(true);
  };

  const handleCancel = () => {
    setPrimaryColor(initialState.primary);
    setSecondaryColor(initialState.secondary);
  };

  const handleReload = () => {
    setPrimaryColor(DEFAULT_PRIMARY);
    setSecondaryColor(DEFAULT_SECONDARY);
  };

  const handleRestoreDefault = () => {
    handleReload();
    setShowDialog(false);
  }

  const handleCopyColor = async () => {
    const text = `Primary: ${primaryColor}, Secondary: ${secondaryColor}`;
    
    try {
      await navigator.clipboard.writeText(text);
      alert("Colors copied to clipboard: " + text);
    } catch (err) {
      // Fallback for environments where clipboard API is blocked
      console.warn("Clipboard API failed, trying legacy fallback...", err);
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
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          alert("Colors copied to clipboard: " + text);
        } else {
          throw new Error("execCommand copy failed");
        }
      } catch (fallbackErr) {
        console.error('Failed to copy: ', fallbackErr);
        alert("Failed to copy colors. Please manually copy them.");
      }
    }
    
    setShowDialog(false);
  }

  return (
    <div className="flex flex-col items-start relative size-full min-h-screen font-sans" style={{ backgroundColor: secondaryColor }}>
      
      {/* Header */}
      <div className="bg-black flex h-[48px] items-center relative shrink-0 w-full text-white">
        <div className="w-[70px] flex items-center justify-center h-full px-[12px]">
           <TablerIconX />
        </div>
        <div className="flex-1 flex justify-center items-center text-[18px] font-medium leading-[normal] text-center">
          游戏页配色器
        </div>
        <div className="w-[70px] h-full" />
      </div>

      {/* Bg Preview */}
      <div className="flex-1 flex flex-col w-full relative overflow-hidden justify-between" style={{ backgroundColor: secondaryColor }}>
        
        {/* Header Preview Section */}
        <div className="flex flex-col h-[68px] shrink-0 w-full relative">
          <div className="bg-[#426d5a] h-px shrink-0 w-full" />
          <div className="flex flex-1 items-center justify-center relative w-full" style={{ backgroundColor: primaryColor }}>
            
            {/* Left Content */}
            <div className="flex-[1_0_0] h-full relative">
               <div className="flex flex-col justify-center size-full items-start px-[16px]">
                  <div className="w-full flex justify-center text-[14px] text-center mb-1" style={{ color: previewTextColor }}>
                     0606006期开奖号码
                  </div>
                  <div className="h-[30px] w-full flex justify-center">
                    <div className="flex items-start justify-center pl-[16px] pt-[4px]">
                       <div className="size-[24px] bg-no-repeat" style={{ backgroundImage: `url('${imgItem}')`, backgroundSize: '48px 144px', backgroundPosition: 'left top' }} />
                       <div className="size-[24px] bg-no-repeat" style={{ backgroundImage: `url('${imgItem}')`, backgroundSize: '48px 144px', backgroundPosition: 'left top' }} />
                       <div className="size-[24px] bg-no-repeat" style={{ backgroundImage: `url('${imgItem}')`, backgroundSize: '48px 144px', backgroundPosition: 'left top' }} />
                       <div className="pl-[8px] flex items-center justify-center">
                         <div className="-scale-y-100 flex-none"><IconCheck color={secondaryColor} /></div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Vertical Border / Right Content */}
            <div className="flex-[1_0_0] h-full min-h-[66px] relative border-l border-[#244532]">
               <div className="flex items-center min-h-[inherit] size-full">
                  <div className="flex items-center min-h-[inherit] pl-[16px] relative size-full">
                     <div className="flex flex-[1_0_0] flex-col h-full items-center justify-center pt-[2px]">
                        <div className="text-[14px] text-center" style={{ color: previewTextColor }}>0606007期投注截止</div>
                        <div className="text-[24px] text-center leading-[30px]" style={{ color: previewTextColor }}>00:08:23</div>
                     </div>
                     {/* Background1 */}
                     <div className="flex flex-col h-full items-center justify-center px-[5px] py-[28px] relative shrink-0 w-[16px]" style={{ backgroundColor: secondaryColor }}>
                        <div className="absolute inset-0 opacity-50" style={{ backgroundColor: primaryColor }} />
                        <div className="h-[12px] max-w-[16px] overflow-hidden relative shrink-0 w-[6px]">
                           <div className="absolute h-[12px] left-0 overflow-hidden top-0 w-[6px]">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[6px]">
                                 <IconTriangleLeft color={secondaryColor} />
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
        <div className="flex flex-[1_0_0] flex-col items-start min-h-px py-[12px] relative w-full" style={{ backgroundColor: secondaryColor }}>
           <div className="relative shrink-0 w-full">
              <div className="flex justify-center w-full">
                 <div className="flex items-start justify-center p-[12px] relative w-full">
                    <div className="flex items-center justify-center relative shrink-0">
                       <div className="-scale-y-100 flex-none">
                          <IconInfo color={secondaryColor} />
                       </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col justify-center ml-2 text-[12px] leading-[normal]" style={{ color: previewTextColor }}>
                       从11-66中任选1个或多个号码，选号与奖号(包含11-66，不限顺序)相同，即为中奖（不含豹子）。赔率11.66倍。
                    </div>
                 </div>
              </div>
           </div>

           {/* Number Grid */}
           <div className="relative shrink-0 w-full">
              <div className="flex gap-[8px] items-start px-[16px] py-[8px] w-full">
                 {[11, 22, 33].map(num => (
                   <div key={num} className="flex-[1_0_0] relative border border-[#f4c829] flex justify-center items-center py-[4px]">
                      <span className="text-[#f4c829] text-[20px] leading-[32px]">{num}</span>
                   </div>
                 ))}
                 {[44, 55, 66].map(num => (
                   <div key={num} className="flex-[1_0_0] relative border border-[rgba(255,255,255,0.2)] flex justify-center items-center py-[4px]">
                      <span className="text-white text-[20px] leading-[32px]">{num}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Color Picker Control Panel */}
      <div className="bg-[#252625] w-full relative rounded-t-[12px] pb-[safe-area-bottom]">
         <div className="flex flex-col items-center w-full h-auto">
            <div className="flex flex-col gap-[16px] items-center p-[16px] w-full">
               
               {/* Tab */}
               <div className="bg-[rgba(0,0,0,0.3)] h-[36px] relative rounded-[8px] shrink-0 w-full p-[4px] flex gap-[4px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] inset-0 pointer-events-none rounded-[8px]" />
                  <button
                    onClick={() => setActiveTab("Primary")}
                    className={cn(
                      "flex-[1_0_0] h-full rounded-[6px] flex items-center justify-center transition-all",
                      activeTab === "Primary" 
                        ? "bg-[#575858] shadow-[2px_2px_8px_0px_rgba(22,19,23,0.2)] text-white" 
                        : "text-[#969298] hover:bg-[#333]"
                    )}
                  >
                    <span className="text-[14px] font-medium">主色</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("Secondary")}
                    className={cn(
                      "flex-[1_0_0] h-full rounded-[6px] flex items-center justify-center transition-all",
                      activeTab === "Secondary"
                        ? "bg-[#575858] shadow-[2px_2px_8px_0px_rgba(22,19,23,0.2)] text-white" 
                        : "text-[#969298] hover:bg-[#333]"
                    )}
                  >
                    <span className="text-[14px] font-medium">副色</span>
                  </button>
               </div>

               {/* Table Color Inputs - CLICKABLE */}
               <div className="flex gap-[16px] items-center shrink-0 w-full">
                  {/* Primary Group */}
                  <div 
                    className="flex items-center gap-[16px] flex-[1_0_0] cursor-pointer group"
                    onClick={() => setActiveTab("Primary")}
                  >
                    {/* Circle */}
                    <div className="p-[2px] rounded-[99px] shrink-0 size-[32px]" style={{ backgroundColor: primaryColor }}>
                        <div className={cn("size-full rounded-full border-2 relative overflow-hidden transition-colors", activeTab === "Primary" ? "border-white" : "border-transparent")} style={ activeTab !== "Primary" ? { borderColor: primaryColor } : undefined }>
                        <div className="absolute inset-0" style={{ backgroundColor: primaryColor }} />
                        </div>
                    </div>
                    
                    {/* Input */}
                    <div className="flex flex-[1_0_0] items-center relative h-[36px]">
                        <div className={cn("flex-[1_0_0] h-full rounded-[8px] flex items-center px-[12px] bg-transparent border transition-colors", activeTab === "Primary" ? "border-[#575858]" : "border-transparent bg-[#1a1b1a] group-hover:bg-[#2a2b2a]")}>
                            <span className="text-[#969298] mr-1 text-[14px] font-medium">#</span>
                            <HexColorInput 
                                className={cn("bg-transparent w-full outline-none uppercase font-medium text-[14px] transition-colors", activeTab === "Primary" ? "text-white" : "text-[#969298]")}
                                color={primaryColor}
                                onChange={(c) => setPrimaryColor(c.startsWith('#') ? c : '#' + c)}
                                prefixed={false}
                                onFocus={() => setActiveTab("Primary")}
                                onClick={(e) => { e.stopPropagation(); setActiveTab("Primary"); }} // Stop propagation to avoid double triggering
                            />
                        </div>
                    </div>
                  </div>

                  {/* Secondary Group */}
                  <div 
                    className="flex items-center gap-[16px] flex-[1_0_0] cursor-pointer group"
                    onClick={() => setActiveTab("Secondary")}
                  >
                    {/* Circle */}
                    <div className="p-[2px] rounded-[99px] shrink-0 size-[32px]" style={{ backgroundColor: secondaryColor }}>
                        <div className={cn("size-full rounded-full border-2 relative overflow-hidden transition-colors", activeTab === "Secondary" ? "border-white" : "border-transparent")} style={ activeTab !== "Secondary" ? { borderColor: secondaryColor } : undefined }>
                            <div className="absolute inset-0" style={{ backgroundColor: secondaryColor }} />
                        </div>
                    </div>

                    {/* Input */}
                    <div className="flex flex-[1_0_0] items-center relative h-[36px]">
                        <div className={cn("flex-[1_0_0] h-full rounded-[8px] flex items-center px-[12px] bg-transparent border transition-colors", activeTab === "Secondary" ? "border-[#575858]" : "border-transparent bg-[#1a1b1a] group-hover:bg-[#2a2b2a]")}>
                            <span className="text-[#969298] mr-1 text-[14px] font-medium">#</span>
                            <HexColorInput 
                                className={cn("bg-transparent w-full outline-none uppercase font-medium text-[14px] transition-colors", activeTab === "Secondary" ? "text-white" : "text-[#969298]")}
                                color={secondaryColor}
                                onChange={(c) => setSecondaryColor(c.startsWith('#') ? c : '#' + c)}
                                prefixed={false}
                                onFocus={() => setActiveTab("Secondary")}
                                onClick={(e) => { e.stopPropagation(); setActiveTab("Secondary"); }}
                            />
                        </div>
                    </div>
                  </div>
               </div>

               {/* Controls */}
               <Saturation hsv={currentHsv} onChange={handleColorChange} />
               <HueSlider hue={currentHsv.h} onChange={handleHueChange} />

            </div>
         </div>

         {/* Footer Buttons */}
         <div className="bg-[#252625] h-[74px] border-t border-[rgba(0,0,0,0.3)] p-[16px] flex gap-[8px] items-center w-full">
            <button 
              onClick={handleReload}
              className="bg-[#575858] p-[10px] rounded-[4px] shrink-0 w-[40px] flex items-center justify-center hover:bg-[#666] active:bg-[#444] transition-colors"
            >
               <TablerIconReload />
            </button>
            <button 
              onClick={handleCancel}
              className="bg-[#575858] flex flex-[1_0_0] h-full items-center justify-center rounded-[4.53px] text-white text-[14px] hover:bg-[#666] active:bg-[#444] transition-colors"
            >
              取消
            </button>
            <button 
              onClick={handleSave}
              className="bg-[#dc3b40] flex flex-[1_0_0] h-full items-center justify-center rounded-[4.53px] text-white text-[14px] hover:bg-[#e05055] active:bg-[#b03033] transition-colors"
            >
              保存配色
            </button>
         </div>
      </div>

      {/* Dialog Overlay */}
      {showDialog && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50">
             <div className="bg-white rounded-[8px] overflow-hidden w-[260px] relative">
                 {/* Main Content */}
                 <div className="flex flex-col items-center pt-[36px] pb-[28px] px-[20px] gap-[8px] relative">
                    <button 
                        onClick={() => setShowDialog(false)}
                        className="absolute right-[10px] top-[10px] size-[18px]"
                    >
                        <IconCloseSmall />
                    </button>
                    
                    <div className="bg-[#06bf04] size-[24px] rounded-full flex items-center justify-center p-[5px]">
                        <SuccessNoCircle />
                    </div>
                    <div className="text-black text-[14px] font-medium leading-[normal]">
                        保存成功
                    </div>
                 </div>

                 {/* Buttons */}
                 <div className="flex w-full border-t border-[#dfdfdf]">
                    <button 
                        onClick={handleRestoreDefault}
                        className="flex-1 h-[40px] flex items-center justify-center text-[#575858] text-[14px] font-medium hover:bg-gray-50 active:bg-gray-100"
                    >
                        恢复默认
                    </button>
                    <div className="w-px bg-[#dfdfdf]" />
                    <button 
                        onClick={handleCopyColor}
                        className="flex-1 h-[40px] flex items-center justify-center text-[#dc3b40] text-[14px] font-medium hover:bg-gray-50 active:bg-gray-100"
                    >
                        复制颜色
                    </button>
                 </div>
             </div>
          </div>
      )}
    </div>
  );
}
