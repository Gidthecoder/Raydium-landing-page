
import CandlestickChart from "./Chart";
import { candlestickData, volumeData } from "./data";

function SwapIcon(){
  return (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#ABC4FF" ><path d="M13.998 9.42549H1.57079C1.49222 9.42549 1.42793 9.48978 1.42793 9.56835V10.6398C1.42793 10.7184 1.49222 10.7827 1.57079 10.7827H12.3783L9.80144 14.0507C9.72822 14.1435 9.79429 14.2828 9.91394 14.2828H11.2086C11.2961 14.2828 11.3783 14.2435 11.4336 14.1739L14.448 10.3505C14.7427 9.97551 14.4766 9.42549 13.998 9.42549V9.42549ZM14.4284 5.21106H3.62086L6.19774 1.94309C6.27096 1.85023 6.20488 1.71094 6.08523 1.71094H4.79055C4.70304 1.71094 4.6209 1.75022 4.56554 1.81987L1.55115 5.64322C1.25649 6.01823 1.52258 6.56825 1.99938 6.56825H14.4284C14.507 6.56825 14.5712 6.50396 14.5712 6.42539V5.35392C14.5712 5.27535 14.507 5.21106 14.4284 5.21106Z"></path></svg>
  )
}

export default function ChartInformation(){
    return (
      <div className={`${'col-span-3'} order-last bg-[hsl(224,9%,21%)] w-full md:w-[70%] lg:w-full mx-auto rounded-xl p-3 mb-2`}>
        <div className="hidden lg:block">
            <div className="flex flex-row gap-x-2 mb-3 items-center">
              <div className="flex flex-row">
                <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="w-6 h-6 rounded-full" />
                <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="w-6 h-6 rounded-full" />
              </div>
              <div className="flex flex-row items-center gap-x-2 mr-auto">
                <p className="text-white text-base text-[#ECF5FF]">SOL / USDT</p>
                <SwapIcon/>
                <p className="text-xs text-[#ABC4FF80]">24/11/04 20:11</p>
              </div>
              <div className="flex flex-row bg-[#abc4ff1f] text-xs font-semibold p-1 rounded-md">
                <button className="px-[14px] py-1 rounded-md text-[#abc4ff] ">15m</button>
                <button className="px-[14px] py-1 rounded-md text-[#abc4ff]">1H</button>
                <button  className="px-[14px] py-1 rounded-md text-[#abc4ff]">4H</button>
                <button  className="px-[14px] py-1 rounded-md text-[#abc4ff]">1D</button>
                <button className="px-[14px] py-1 rounded-md bg-[#abc4ff2f] text-[#ecf5ff]">1W</button>
              </div>
            </div>
            {/* Chart */}
            <div className="bg-[#0b1022] rounded-lg">
              <CandlestickChart data={candlestickData} volumeData={volumeData}/>
            </div>
          </div>

          <div className="block lg:hidden w-full  space-y-2 ">
            <div className="flex flex-row justify-center">
              <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="rounded-full">
                <img src='/raydium/solana.png' className='w-5 h-5 m-1 rounded-full' />
              </div>
              <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="rounded-full">
                <img src='/raydium/usdt.png' className='w-5 h-5 m-1 rounded-full' />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-white text-xl text-[#ECF5FF]">SOL / USDT</p>
              <p className="text-white text-base text-[#ECF5FF]">193.316 <span className="text-xs text-green-400">+0.1%</span></p>
              <p className="flex flex-row justify-center">
                <button className="flex flex-row gap-x-2 text-[#abc4ff] text-xs items-center">
                  <span>show charts</span>
                  <Expand/>
                </button>
              </p>
            </div>
          </div>
      </div>
    )
  }

  function Expand(){
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="transparent" ><g clipPath="url(#clip0_21016_31403)" ><path d="M3.75 8.75H1.25V6.25" stroke="#ABC4FF" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" ></path><path d="M1.25 8.74967L4.16667 5.83301" stroke="#ABC4FF" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" ></path><path d="M6.25 1.25H8.75V3.75" stroke="#ABC4FF" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" ></path><path d="M8.74967 1.25L5.83301 4.16667" stroke="#ABC4FF" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" ></path></g><defs ><clipPath id="clip0_21016_31403"><rect width="10" height="10" fill="white"></rect></clipPath></defs></svg>
    )
  }