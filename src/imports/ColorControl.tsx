export default function ColorControl() {
  return (
    <div className="relative size-full" data-name="Color control">
      <div className="absolute inset-0 rounded-[8px]" data-name="Color" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(110.834deg, rgb(255, 255, 255) 0%, rgb(1, 255, 110) 87.565%)" }}>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
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