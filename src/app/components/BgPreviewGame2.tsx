import React from "react";
import { colord } from "colord";

// SVG path for the small chevron arrow (快选 button)
const CHEVRON_PATH =
  "M4 3.64963L0.343066 7.29927L0 6.9489L3.29927 3.64963L0 0.343066L0.343066 0L4 3.64963Z";
// SVG path for the right-facing chevron in header
const ICON_CHEVRON_PATH =
  "M12.57 7.515L5.055 15.015L4.35 14.295L11.13 7.515L4.35 0.72L5.055 0.0150002L12.57 7.515Z";

// Ball colors for the lottery result display
const BALLS = [
  { num: "07", bg: "#a2a2a2" },
  { num: "08", bg: "#cb383a" },
  { num: "09", bg: "#5c110e" },
  { num: "10", bg: "#3b924f" },
  { num: "01", bg: "#edc026" },
  { num: "02", bg: "#2895d9" },
  { num: "03", bg: "#004279" },
  { num: "04", bg: "#e27b26" },
  { num: "05", bg: "#23b2b0" },
  { num: "06", bg: "#6265c2" },
];

const NUMBERS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

function NumberBall({ num, bg }: { num: string; bg: string }) {
  return (
    <div className="px-[1.376px] shrink-0">
      <div
        className="relative rounded-[9.627px] shadow-[0px_3.175px_1.058px_0px_rgba(51,51,51,0.2)] size-[19.245px]"
        style={{ backgroundColor: bg }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Arial:Narrow',sans-serif] h-[20.642px] justify-center leading-[0] left-[calc(50%+0.13px)] not-italic text-[13.801px] text-center text-white top-[10.16px] w-[15.568px]">
          <p className="leading-[20.642px] whitespace-pre-wrap">{num}</p>
        </div>
      </div>
    </div>
  );
}

function NumberCircle({ num, selected }: { num: string; selected: boolean }) {
  return (
    <div
      className="flex items-center justify-center relative rounded-[15px] shrink-0 size-[30px]"
      style={{
        backgroundColor: selected ? "#dc3b40" : "#faf9f6",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-0 pointer-events-none rounded-[15px]"
        style={{ borderColor: selected ? "#dc3b40" : "#dfdfdf" }}
      />
      <div
        className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap"
        style={{ color: selected ? "#FFFFFF" : "#dc3b40" }}
      >
        <p className="leading-[30.762px]">{num}</p>
      </div>
    </div>
  );
}

function LabelRow({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor: string }) {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0">
      {/* 冠军 */}
      <div
        className="flex flex-col items-center justify-center px-[10px] py-[4px] relative rounded-[4.39px] shrink-0"
      >
        <div
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none rounded-[4.39px]"
          style={{
            backgroundColor: colord(primaryColor).mix("#FFFFFF", 0.5).toHex(),
            borderColor: colord(secondaryColor).mix("#000000", 0.15).toHex(),
          }}
        />
        <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#716d5d] text-[13px] whitespace-nowrap">
          <p className="leading-[19px]" style={{ color: colord(primaryColor,0.5).mix("#000000", 0.5).toHex() }}>冠军</p>
        </div>
      </div>
      {/* 快选 */}
      <div
        className="flex items-center justify-center px-[6px] py-[3px] relative rounded-[4.39px] shrink-0"
      >
        <div
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none rounded-[4.39px]"
          style={{
            backgroundColor: colord(primaryColor).mix("#FFFFFF", 0.5).toHex(),
            borderColor: colord(secondaryColor).mix("#000000", 0.15).toHex(),
          }}
        />
        <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc3b40] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[19px]">快选</p>
        </div>
        <div className="flex h-[4px] items-center justify-center relative shrink-0 w-[7.299px]">
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="h-[7.299px] relative w-[4px]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 4 7.29927"
              >
                <path d={CHEVRON_PATH} fill="#DC3B40" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberRow({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor: string }) {
  return (
    <div className="flex gap-[32px] items-center relative shrink-0 w-full">
      <LabelRow primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <div className="content-start flex flex-[1_0_0] flex-wrap gap-[12px_28px] items-start min-h-px min-w-px relative">
        {NUMBERS.map((num) => (
          <NumberCircle key={num} num={num} selected={num === "02"} />
        ))}
      </div>
    </div>
  );
}

interface BgPreviewGame2Props {
  primaryColor: string;
  secondaryColor: string;
}

export default function BgPreviewGame2({
  primaryColor,
  secondaryColor,
}: BgPreviewGame2Props) {
  const verticalBorderColor = colord(primaryColor).darken(0.05).toHex();
  const textColor = colord(primaryColor).mix("#000000", 0.7).toHex();
  const dividerBg = `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, ${secondaryColor} 0%, ${secondaryColor} 100%)`;

  return (
    <div
      className="flex flex-col items-start relative w-full h-full overflow-hidden"
      style={{ backgroundColor: secondaryColor }}
    >
      {/* Header */}
      <div className="flex flex-col shrink-0 w-full">
        <div
          className="flex items-center justify-center relative shrink-0 w-full"
          style={{ backgroundColor: primaryColor }}
        >
          {/* Left: Lottery numbers */}
          <div className="flex flex-col h-full items-start justify-center px-[8px] relative shrink-0">
            {/* Period info */}
            <div className="flex gap-[4px] items-center pb-[4px] relative shrink-0">
              <div
                className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap"
                style={{ color: textColor }}
              >
                <p className="leading-[normal]">06061058期开奖号码</p>
              </div>
              <div className="flex items-center justify-center relative shrink-0 size-[15px]">
                <div className="flex-none rotate-90">
                  <div className="flex items-start relative">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="-scale-y-100 flex-none">
                        <div className="relative size-[15px]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 15 15"
                          >
                            <path d={ICON_CHEVRON_PATH} fill={textColor} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Balls */}
            <div className="flex items-start relative shrink-0 w-[220px]">
              {BALLS.map((b) => (
                <NumberBall key={b.num} num={b.num} bg={b.bg} />
              ))}
            </div>
          </div>

          {/* Right: Countdown */}
          <div
            className="flex-[1_0_0] h-full min-h-[66.898px] min-w-px relative"
          >
            <div
              aria-hidden="true"
              className="absolute border-l border-solid inset-0 pointer-events-none"
              style={{ borderColor: verticalBorderColor }}
            />
            <div className="flex flex-row items-center min-h-[inherit] size-full">
              <div className="flex items-center min-h-[inherit] pl-[8px] relative size-full">
                <div className="flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px pt-[2px] relative">
                  <div
                    className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center w-full"
                    style={{ color: textColor }}
                  >
                    <p className="leading-[normal] whitespace-pre-wrap">
                      0606007期
                    </p>
                  </div>
                  <div
                    className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center w-full"
                    style={{ color: textColor }}
                  >
                    <p className="leading-[30px] whitespace-pre-wrap">
                      00:08:23
                    </p>
                  </div>
                </div>
                {/* Arrow indicator */}
                <div
                  className="flex flex-col h-full items-center justify-center px-[5px] py-[28px] relative shrink-0 w-[16px]"
                  style={{
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, ${primaryColor} 0%, ${primaryColor} 100%)`,
                  }}
                >
                  <div className="h-[12px] max-w-[16px] overflow-clip relative shrink-0 w-[6px]">
                    <div className="absolute h-[12px] left-0 overflow-clip top-0 w-[6px]">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[6px]">
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 6 12"
                        >
                          <path
                            d="M0 6L6 0V12L0 6Z"
                            fill={primaryColor}
                          />
                          <path
                            d="M0 6L6 0V12L0 6Z"
                            fill="black"
                            fillOpacity="0.7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className="flex flex-col gap-[16px] items-start overflow-hidden flex-1 px-[12px] py-[20px] relative w-full"
        style={{ backgroundColor: secondaryColor }}
      >
        {/* Description */}
        <div className="flex flex-col items-start pb-[0.675px] relative shrink-0 w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] w-full" style={{ color: textColor }}>
            <p className="text-[14px] whitespace-pre-wrap">
              <span className="leading-[normal]">
                从冠、亚、季、四、五、六、七、八、九、十任意位置上任意选择一个或一个以上号码。奖金
              </span>
              <span className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic">
                {" "}
              </span>
              <span className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic text-[#dc3b40]">
                18.20
              </span>
              <span className="leading-[normal]">元</span>
            </p>
          </div>
        </div>

        {/* Row 1 - with bottom padding */}
        <div className="pb-[16px] w-full">
          <NumberRow primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>

        {/* Row 2 */}
        <div className="pb-[16px] w-full">
          <NumberRow primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>

        {/* Divider */}
        <div
          className="h-[1.23px] shrink-0 w-full"
          style={{ backgroundImage: dividerBg }}
        />

        {/* Row 3 */}
        <div className="pb-[16px] w-full">
          <NumberRow primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>

        {/* Row 4 */}
        <div className="pb-[16px] w-full">
          <NumberRow primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>

        {/* Row 5 */}
        <div className="pb-[16px] w-full">
          <NumberRow primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>
      </div>
    </div>
  );
}