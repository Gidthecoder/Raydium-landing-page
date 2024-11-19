import { SwapIcon } from "@/app/components/icons";

import CandlestickChart from "@/app/components/hero/dashboard_preview/Chart";

import { candlestickData, volumeData } from "@/app/components/hero/dashboard_preview/data";

import { useState, useEffect } from "react";
export default function ChartInformation(){
  const [trigger, setTrigger] = useState(false);
  useEffect(()=>{
    setTrigger(true)
  }, [])

    return (
      <div className={`duration-500 ease-out transition-all ${trigger ? 'opacity-100' : 'opacity-0'} bg-[hsl(224,9%,21%)] rounded-xl p-1 pt-3 sm:p-3`}>
            <div className="flex flex-col sm:flex-row gap-2 mb-3 items-center">
              <div className="flex flex-row gap-2">
                <div className="flex flex-row items-center">
                  <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="rounded-full" >
                    <img src='/raydium/solana.png' className="w-4 h-4 m-1 rounded-full"/>
                  </div>
                  <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="rounded-full" >
                    <img src='/raydium/usdt.png' className="w-4 h-4 m-1 rounded-full"/>
                  </div>
                  
                </div>
                <div className="flex flex-row items-center gap-x-2 mr-auto">
                  <p className="text-white text-sm sm:text-base text-[#ECF5FF]">SOL / USDT</p>
                  <SwapIcon/>
                  <p className="text-xs text-gray-400">24/11/04 20:11</p>
                </div>
              </div>
              
              <div className="flex flex-row items-start bg-[#abc4ff1f] text-[10px] sm:text-xs font-semibold p-1 rounded-md">
                <button className="px-[14px] py-[2px] sm:py-1 rounded-md text-gray-400">15m</button>
                <button className="px-[14px] py-[2px] sm:py-1 rounded-md text-gray-400">1H</button>
                <button  className="px-[14px] py-[2px] sm:py-1 rounded-md text-gray-400">4H</button>
                <button  className="px-[14px] py-[2px] sm:py-1 rounded-md text-gray-400">1D</button>
                <button className="px-[14px] py-[2px] sm:py-1 rounded-md bg-[#abc4ff2f] text-[#ecf5ff]">1W</button>
              </div>
            </div>
            {/* Chart */}
            <div className="bg-[#0b1022] rounded-lg">
              <CandlestickChart data={candlestickData} volumeData={volumeData}/>
            </div>
          </div>
    )
  }