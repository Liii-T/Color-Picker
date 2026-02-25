import svgPaths from "./svg-si1ktc0z0w";

function SuccessNoCircle() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="success_no_circle 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="success_no_circle 1">
          <path d={svgPaths.p328e2800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Alert() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col gap-[8px] h-[120px] items-center justify-center left-[calc(50%+0.5px)] rounded-[6px] top-1/2 w-[100px]" data-name="alert">
      <SuccessNoCircle />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-right text-white tracking-[0.6px]">保存成功</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="成功">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[734px] left-1/2 top-1/2 w-[375px]" data-name="m.oiuylkjhg02 2" />
      <Alert />
    </div>
  );
}