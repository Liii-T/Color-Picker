import svgPaths from "./svg-1qkas1z4lm";

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
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="dropdown">
      <Btn />
      <Btn1 />
    </div>
  );
}

export default function Dropdwon() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end relative shadow-[0px_1px_12px_0px_rgba(51,51,51,0.08)] size-full" data-name="dropdwon">
      <div className="relative shrink-0 size-[18px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.pdef3400} fill="var(--fill-0, white)" id="Rectangle 9" />
        </svg>
      </div>
      <Dropdown />
    </div>
  );
}