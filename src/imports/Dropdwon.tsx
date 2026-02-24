import svgPaths from "./svg-q9tybi36mo";

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
    <div className="absolute content-stretch flex flex-col gap-px items-start left-0 top-[49px]" data-name="dropdown">
      <Btn />
      <Btn1 />
    </div>
  );
}

export default function Dropdwon() {
  return (
    <div className="relative shadow-[0px_1px_12px_0px_rgba(51,51,51,0.08)] size-full" data-name="dropdwon">
      <Dropdown />
      <div className="absolute left-[102px] size-[18px] top-[31px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.pdef3400} fill="var(--fill-0, white)" id="Rectangle 9" />
        </svg>
      </div>
    </div>
  );
}