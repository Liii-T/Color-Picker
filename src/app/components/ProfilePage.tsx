import React from "react";
import svgPaths from "../../imports/svg-o2bvfdxum3";
import img8F58610879F7E312Jpg from "/profile.png";
import type { SkinState } from "./RootLayout";

/* ── Shared small components ── */

function BackIcon() {
  return (
    <div className="h-[22px] relative w-[21.44px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.44 22">
        <path d={svgPaths.p3609f280} fill="white" />
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="h-[16px] relative w-[16.13px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.13 16.016">
        <path d={svgPaths.pf53db40} fill="#999999" />
      </svg>
    </div>
  );
}

/* ── Row components ── */

function RowShell({
  children,
  showBorder = true,
  onClick,
}: {
  children: React.ReactNode;
  showBorder?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`bg-white relative shrink-0 w-full ${onClick ? "cursor-pointer active:bg-gray-50" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-center px-[23.1px] py-[14.438px] relative w-full">
        {children}
        {showBorder && (
          <div className="absolute inset-[0_0_0_6.11%] pointer-events-none">
            <div className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}

function TextRow({
  label,
  value,
  showChevron = false,
  showBorder = true,
  onClick,
}: {
  label: string;
  value: string;
  showChevron?: boolean;
  showBorder?: boolean;
  onClick?: () => void;
}) {
  return (
    <RowShell showBorder={showBorder} onClick={onClick}>
      <div className="flex flex-col items-start relative shrink-0 flex-1">
        <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[19.6px] whitespace-nowrap">
          <p className="leading-[32.92px]">{label}</p>
        </div>
      </div>
      <div className="flex flex-col items-end overflow-clip relative shrink-0">
        <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[19.6px] text-right whitespace-nowrap">
          <p className="leading-[32.92px]">{value}</p>
        </div>
      </div>
      {showChevron && (
        <div className="flex flex-col items-start justify-center pl-[6.715px] relative shrink-0">
          <div className="flex items-start pb-[8.23px] pt-[8px] relative shrink-0 w-[16.13px]">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none">
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </RowShell>
  );
}

function AvatarRow() {
  return (
    <RowShell showBorder={true}>
      <div className="flex flex-col items-start relative shrink-0 flex-1">
        <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[19.6px] whitespace-nowrap">
          <p className="leading-[32.92px]">头像</p>
        </div>
      </div>
      <div className="flex items-start justify-end overflow-clip relative shrink-0">
        <div className="bg-[#f5f5f5] flex flex-col items-end overflow-clip relative rounded-[5.37px] shrink-0 size-[67.14px]">
          <div className="relative shrink-0 size-[67.14px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img8F58610879F7E312Jpg} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center pl-[6.715px] relative shrink-0">
        <div className="flex items-start pb-[8.23px] pt-[8px] relative shrink-0 w-[16.13px]">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </RowShell>
  );
}

/* ── Main Page ── */

export default function ProfilePage({ ctx }: { ctx: SkinState }) {
  const { isCustom, openSkin } = ctx;

  return (
    <div className="bg-[#efeef4] flex flex-col items-center relative size-full min-h-screen">
      {/* Header */}
      <div
        className="flex h-[56.31px] items-center justify-center relative shrink-0 w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgb(220, 59, 64) 2%, rgb(220, 59, 64) 50%, rgb(219, 59, 64) 51%, rgb(215, 54, 59) 100%)",
        }}
      >
        {/* Back button */}
        <div className="absolute flex h-[56.31px] items-center justify-center left-0 top-0 w-[47px]">
          <div className="flex flex-1 h-full items-center justify-center pb-[17.43px] pt-[16.44px]">
            <div className="flex items-center justify-center shrink-0">
              <div className="-scale-y-100 flex-none">
                <BackIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex h-[37.45px] items-start justify-center overflow-clip rounded-[4.41px] shrink-0 w-[234px]">
          <div className="bg-white flex-1 h-full relative rounded-bl-[3.75px] rounded-tl-[3.75px]">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-bl-[3.75px] rounded-tl-[3.75px]" />
            <div className="absolute inset-0 flex items-center justify-center font-['PingFang_SC:Medium',sans-serif] text-[#dc3b40] text-[18.7px] text-center">
              <p className="leading-[37.47px] whitespace-pre-wrap">个人资料</p>
            </div>
          </div>
          <div className="flex-1 h-full relative rounded-br-[3.75px] rounded-tr-[3.75px]">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-br-[3.75px] rounded-tr-[3.75px]" />
            <div className="absolute inset-0 flex items-center justify-center font-['PingFang_SC:Medium',sans-serif] text-white text-[18.7px] text-center">
              <p className="leading-[37.47px] whitespace-pre-wrap">等级头衔</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: 头像 / 昵称 / 账号 / 手机号 */}
      <div className="bg-white flex flex-col items-start relative shrink-0 w-full">
        <AvatarRow />
        <TextRow label="昵称" value="這裡是暱稱" />
        <TextRow label="账号" value="joshantry1" />
        <TextRow label="手机号" value="15*******32" showBorder={false} />
        <div className="absolute inset-0 pointer-events-none">
          <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b border-solid border-t inset-0 pointer-events-none" />
        </div>
      </div>

      <div className="h-[13.42px] shrink-0 w-full" />

      {/* Section 2: 性别 / 生日 / 字级设置 / 投注皮肤 */}
      <div className="bg-white flex flex-col items-start relative shrink-0 w-full">
        <TextRow label="性别" value="男" showChevron />
        <TextRow label="生日" value="1975-05-24" showChevron />
        <TextRow label="字级设置" value="中" showChevron />
        <TextRow
          label="投注皮肤"
          value={isCustom ? "自定義" : "默认"}
          showChevron
          showBorder={false}
          onClick={() => openSkin()}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b border-solid border-t inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
