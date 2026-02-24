import svgPaths from "./svg-445a5t683n";
import imgItem from "figma:asset/423fbf491ac4f4942e830c525241204e81939b1b.png";

function TablerIconX() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="tabler-icon-x">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="tabler-icon-x">
          <path d="M17 1.5L2 16.5M2 1.5L17 16.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LIcon() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center px-[12px] relative shrink-0 w-[70px]" data-name="L icon">
      <TablerIconX />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">游戏页配色器</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p11e823f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[7px] h-full items-center justify-end pr-[12px] relative shrink-0 w-[70px]" data-name="Container">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">A</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function BaseHeader() {
  return (
    <div className="bg-black content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Base Header">
      <LIcon />
      <Title />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adc7bb] text-[14px] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">0606006期开奖号码</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p2a18be80} fill="var(--fill-0, #317455)" />
            <path d={svgPaths.p2a18be80} fill="var(--fill-1, white)" fillOpacity="0.75" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Item">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="List">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[16px] pt-[4px] relative size-full">
          <div className="bg-size-[47.99999713897705px_143.99999141693115px] bg-top-left shrink-0 size-[24px]" data-name="Item" style={{ backgroundImage: `url('${imgItem}')` }} />
          <div className="bg-size-[47.99999713897705px_143.99999141693115px] bg-top-left shrink-0 size-[24px]" data-name="Item" style={{ backgroundImage: `url('${imgItem}')` }} />
          <div className="bg-size-[47.99999713897705px_143.99999141693115px] bg-top-left shrink-0 size-[24px]" data-name="Item" style={{ backgroundImage: `url('${imgItem}')` }} />
          <Item />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <Container2 />
          <List />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adc7bb] text-[14px] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">0606007期投注截止</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adc7bb] text-[24px] text-center w-full">
        <p className="leading-[30px] whitespace-pre-wrap">00:08:23</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px pt-[2px] relative">
      <Container3 />
      <Container4 />
    </div>
  );
}

function TriangleLeftSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[6px]" data-name="triangle-left.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
        <g clipPath="url(#clip0_6_999)" id="triangle-left.svg">
          <g id="Vector">
            <path d="M0 6L6 0V12L0 6Z" fill="var(--fill-0, #317455)" />
            <path d="M0 6L6 0V12L0 6Z" fill="var(--fill-1, white)" fillOpacity="0.6" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_999">
            <rect fill="white" height="12" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TriangleLeftSvgFill() {
  return (
    <div className="absolute h-[12px] left-0 overflow-clip top-0 w-[6px]" data-name="triangle-left.svg fill">
      <TriangleLeftSvg1 />
    </div>
  );
}

function TriangleLeftSvg() {
  return (
    <div className="h-[12px] max-w-[16px] overflow-clip relative shrink-0 w-[6px]" data-name="triangle-left.svg">
      <TriangleLeftSvgFill />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#317455] content-stretch flex flex-col h-full items-center justify-center px-[5px] py-[28px] relative shrink-0 w-[16px]" data-name="Background">
      <div className="absolute bg-[#19593c] inset-0 opacity-50" />
      <TriangleLeftSvg />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="flex-[1_0_0] h-full min-h-[66.89839935302734px] min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#144730] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[16px] relative size-full">
          <Frame />
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#19593c] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" data-name="Background">
      <Container1 />
      <VerticalBorder />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col h-[68px] items-start relative shrink-0 w-[375px]" data-name="Header">
      <div className="h-px shrink-0 w-full" data-name="Horizontal Divider" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgb(25, 89, 60) 0%, rgb(25, 89, 60) 100%)" }} />
      <Background />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.pd4fb500} fill="var(--fill-0, #317455)" />
            <path d={svgPaths.pd4fb500} fill="var(--fill-1, white)" fillOpacity="0.6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[12px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <Icon2 />
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#adc7bb] text-[12px] text-center">
            <p className="leading-[normal] whitespace-pre-wrap">从11-66中任选1个或多个号码，选号与奖号(包含11-66，不限顺序)相同，即为中奖（不含豹子）。赔率11.66倍。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Item">
      <div aria-hidden="true" className="absolute border border-[#f4c829] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[15.08px] pr-[15.09px] py-[4px] relative w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4c829] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[32px]">11</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Item">
      <div aria-hidden="true" className="absolute border border-[#f4c829] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[15.08px] pr-[15.09px] py-[4px] relative w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4c829] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[32px]">22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Item">
      <div aria-hidden="true" className="absolute border border-[#f4c829] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[15.08px] pr-[15.09px] py-[4px] relative w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4c829] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[32px]">33</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Item">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[15.07px] pr-[15.1px] py-[4px] relative w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
            <p className="leading-[32px]">44</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Item">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[15.08px] pr-[15.09px] py-[4px] relative w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
            <p className="leading-[32px]">55</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Item">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[15.08px] pr-[15.09px] py-[4px] relative w-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
            <p className="leading-[32px]">66</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex gap-[7.8px] items-start px-[16px] py-[8px] relative w-full">
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
        <Item5 />
        <Item6 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#317455] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative w-[375px]" data-name="Main">
      <Container5 />
      <List1 />
    </div>
  );
}

function BgPreview() {
  return (
    <div className="bg-[#317455] content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px min-w-px overflow-clip relative" data-name="bg_preview">
      <Header />
      <Main />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] h-[36px] relative rounded-[4.53px] shrink-0 w-full" data-name="Tab">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[4.53px]" />
      <div className="content-stretch flex gap-[4px] items-start p-[4px] relative size-full">
        <div className="bg-[#575858] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[3px] shadow-[2px_2px_8px_0px_rgba(22,19,23,0.2)]" data-name="Primary_Button Toggle">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
              <p className="flex-[1_0_0] font-['PingFang_SC:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-center text-white whitespace-pre-wrap">主色</p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[3px]" data-name="Secondary_Button Toggle">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
              <p className="flex-[1_0_0] font-['PingFang_SC:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#969298] text-[14px] text-center whitespace-pre-wrap">副色</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[999px]">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#19593c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[999px]" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function PrimaryColor() {
  return (
    <div className="bg-[#19593c] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0 size-[32px]" data-name="Primary_Color">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[999px]">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#317455] flex-[1_0_0] h-full min-h-px min-w-px rounded-[999px]" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#317455] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SecondaryColor() {
  return (
    <div className="bg-[#317455] content-stretch flex items-center p-[2px] relative rounded-[99px] shrink-0 size-[32px]" data-name="Secondary_Color">
      <Frame2 />
    </div>
  );
}

function TableColor() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Table color">
      <PrimaryColor />
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Primary_Color Values">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4.53px]" data-name="Input">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic px-[12px] py-[8px] relative text-[14px] w-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#969298] w-[10px] whitespace-pre-wrap">#</p>
              <p className="font-['PingFang_SC:Medium',sans-serif] min-w-[24px] relative shrink-0 text-white">19593C</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#575858] border-solid inset-0 pointer-events-none rounded-[4.53px]" />
        </div>
      </div>
      <SecondaryColor />
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative rounded-[4.53px]" data-name="Secondary_Color Values">
        <div className="bg-[#1a1b1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[4.53px]" data-name="Input">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic px-[12px] py-[8px] relative text-[#969298] text-[14px] w-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-[10px] whitespace-pre-wrap">#</p>
              <p className="font-['PingFang_SC:Medium',sans-serif] min-w-[24px] relative shrink-0">317455</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorControl() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Color control">
      <div className="absolute inset-0 rounded-[4.53px]" data-name="Color" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(110.834deg, rgb(255, 255, 255) 0%, rgb(1, 255, 110) 87.565%)" }}>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[5.53px]" />
      </div>
      <div className="absolute content-stretch flex items-center p-px right-[79px] size-[16px] top-[70px]" data-name="_Control handle">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g filter="url(#filter0_d_1_211)" id="Ellipse 3">
                <circle cx="9" cy="9" r="5.5" shapeRendering="crispEdges" stroke="var(--stroke-0, white)" strokeWidth="3" />
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
}

function Slider1() {
  return (
    <div className="h-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Slider" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 16.6%, rgb(0, 255, 0) 33.3%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 65%, rgb(158, 0, 255) 75%, rgb(255, 0, 167) 89.525%, rgb(255, 0, 0) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="absolute content-stretch flex items-center p-px right-[198px] size-[16px] top-0" data-name="_Control handle">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g filter="url(#filter0_d_1_211)" id="Ellipse 3">
                <circle cx="9" cy="9" r="5.5" shapeRendering="crispEdges" stroke="var(--stroke-0, white)" strokeWidth="3" />
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
}

function Slider() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Slider">
      <Slider1 />
    </div>
  );
}

function ColorPicker() {
  return (
    <div className="bg-[#252625] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Color picker">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[16px] relative w-full">
          <Tab />
          <TableColor />
          <ColorControl />
          <Slider />
        </div>
      </div>
    </div>
  );
}

function TablerIconReload() {
  return (
    <div className="aspect-[24/24] flex-[1_0_0] min-h-px min-w-px overflow-clip relative" data-name="tabler-icon-reload">
      <div className="absolute inset-[16.66%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.62%_-5.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8326 14.8361">
            <path d={svgPaths.p1b706760} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReloadBtn() {
  return (
    <div className="bg-[#575858] content-stretch flex items-center p-[10px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Reload_btn">
      <TablerIconReload />
    </div>
  );
}

function ComfirmBtn() {
  return (
    <div className="bg-[#575858] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4.53px]" data-name="comfirm_btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[60px] py-[12px] relative size-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[44px]">取消</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaveBtn() {
  return (
    <div className="bg-[#dc3b40] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4.53px]" data-name="save_btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[60px] py-[12px] relative size-full">
          <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[44px]">保存配色</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterBtn() {
  return (
    <div className="bg-[#252625] h-[74px] relative shrink-0 w-full" data-name="Footer Btn">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <ReloadBtn />
          <ComfirmBtn />
          <SaveBtn />
        </div>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-white content-stretch flex h-[50px] items-center justify-center relative shadow-[0px_1px_0px_0px_#bbb39c] shrink-0 w-[120px]" data-name="btn">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[16px]">A</p>
    </div>
  );
}

function Btn1() {
  return (
    <div className="bg-white content-stretch flex h-[50px] items-center justify-center relative shadow-[0px_1px_0px_0px_#bbb39c] shrink-0 w-[120px]" data-name="btn">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333] text-[16px]">B</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-start left-0 top-[18px]" data-name="dropdown">
      <Btn />
      <Btn1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#317455] content-stretch flex flex-col items-start relative size-full" data-name="快3-1">
      <BaseHeader />
      <BgPreview />
      <ColorPicker />
      <FooterBtn />
      <div className="absolute h-[119px] right-0 shadow-[0px_1px_12px_0px_rgba(51,51,51,0.08)] top-[31px] w-[120px]" data-name="dropdwon">
        <Dropdown />
        <div className="absolute left-[102px] size-[18px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.pdef3400} fill="var(--fill-0, white)" id="Rectangle 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}