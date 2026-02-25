function Top() {
  return (
    <div className="bg-white h-[40px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="top">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[14px] text-black text-center top-1/2 w-[196px]">
        <p className="leading-[normal] whitespace-pre-wrap">温馨提示</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center pb-[20px] pt-[12px] px-[20px] relative shrink-0" data-name="main">
      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[220px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[normal]">您已做了</span>
          <span className="leading-[normal]">投注皮肤</span>
          <span className="leading-[normal]">配色修改，若是直接退出將不會進行修改</span>
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <button className="bg-white cursor-pointer flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-bl-[10px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[84px] relative size-full">
          <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[86px]">
            <p className="leading-[normal] whitespace-pre-wrap">取消</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_#dfdfdf,inset_0px_0.5px_0px_0px_#e5e5e5]" />
    </button>
  );
}

function Frame1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-br-[10px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[84px] relative size-full">
          <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cd3422] text-[14px] text-center w-[86px]">
            <p className="leading-[normal] whitespace-pre-wrap">确定退出</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.5px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="btn">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Alert() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.5px)] top-1/2" data-name="alert">
      <Top />
      <Main />
      <Btn />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="取消">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.5)] h-[734px] left-1/2 top-1/2 w-[375px]" data-name="m.oiuylkjhg02 2" />
      <Alert />
    </div>
  );
}