import { useState } from "react";

import Navigation from "./Navigation";
import SwapOptions from "./SwapOptions";
import SwapForm from "./SwapForm";
import ChartInformation from "./ChartInformation";
import More from "./More";

import useScrollStore from "@/stores/useScrollStore";

export default function HeroUI(){
  const [isSwapped, setIsSwapped] = useState(false);

  const toggleSwapPosition = () => {
    setIsSwapped(!isSwapped)
  }

    return (
        <div className="lg:h-[80vh]">
            <Navigation/>
            <div className="w-[85%] flex flex-col lg:grid lg:grid-cols-5 gap-x-4 gap-y-2 items-start mx-auto lg:mt-10 ">
              <div className={isSwapped?'col-span-2':'col-span-3'}></div>
              <SwapOptions isSwapped={isSwapped} toggleSwapPosition={toggleSwapPosition}/>
              {
                isSwapped?
                <>
                  <SwapForm/>
                  <ChartInformation/>
                </>
              :
                < >
                  <ChartInformation/>
                  <SwapForm/>
                </>
            }
            
          </div>
          <Footer/>
        </div>
    )
}

function Footer(){
  const [moreVisible, setMoreVisible] = useState(false);
  const setShouldScroll = useScrollStore((state:any) => state.setShouldScroll);

    const handleClick = (value:string) => {
        setShouldScroll(value)
    }
  return (
    <div className="relative">
      {
        moreVisible && 
        <>
          <div onClick={()=>setMoreVisible(false)} className="z-[3] bg-transparent fixed inset-0"></div>
          <div className="absolute bottom-80 right-1/2">
            <More handleClick={handleClick} setMoreVisible={setMoreVisible}/>
          </div>
          
        </>
      }
      <div className="lg:hidden flex flex-row justify-center gap-2 bg-[hsl(224,9%,21%)] p-2 rounded-b-lg">
        <div onClick={()=>handleClick('swap')} className="grow flex flex-col justify-center items-center text-xs">
          <Swap/>
          <p>Swap</p>
        </div>
        <div onClick={()=>handleClick('liquidity')} className="grow flex flex-col justify-center items-center text-xs">
          <Liquidity/>
          <p>Liquidity</p>
        </div>
        <div onClick={()=>handleClick('portfolio')} className="grow flex flex-col justify-center items-center text-xs">
          <Portfolio/>
          <p>Portfolio</p>
        </div>
        <div onClick={()=>setMoreVisible(!moreVisible)} className="grow flex flex-col justify-center items-center text-xs">
          <MoreIcon/>
          <p>More</p>
        </div>
      </div>
    </div>
    
  )
}

function Swap(){
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" stroke="#abc4ff" fill="none"  strokeWidth="1.4" strokeLinecap="round"><circle opacity="0.8" cx="11" cy="11" r="4" stroke="none" fill="#8C6EEF"></circle><path d="M17 9.5V6.5625C17 6.01022 16.5523 5.5625 16 5.5625H3M3 5.5625L6.37931 2.5M3 5.5625L6.37931 8.625"></path><path d="M3 10.5V13.4375C3 13.9898 3.44772 14.4375 4 14.4375L17 14.4375M17 14.4375L13.6207 17.5M17 14.4375L13.6207 11.375"></path></svg>
  )
}
function Liquidity(){
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" stroke="#abc4ff" fill="none" strokeLinecap="round"><path d="M10 13.25C12.0711 13.25 13.75 11.5711 13.75 9.5C13.75 7.42893 12.0711 5.75 10 5.75"></path><path d="M2.5 9.5C2.5 13.6421 5.85786 17 10 17C14.1421 17 17.5 13.6421 17.5 9.5C17.5 5.35786 14.1421 2 10 2"></path></svg>
  )
}

function Portfolio(){
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" stroke="#abc4ff" fill="none"  strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 13.3368V6.67017C17.4997 6.37789 17.4225 6.09084 17.2763 5.8378C17.13 5.58476 16.9198 5.37463 16.6667 5.2285L10.8333 1.89517C10.58 1.74889 10.2926 1.67188 10 1.67188C9.70744 1.67188 9.42003 1.74889 9.16667 1.89517L3.33333 5.2285C3.08022 5.37463 2.86998 5.58476 2.72372 5.8378C2.57745 6.09084 2.5003 6.37789 2.5 6.67017V13.3368C2.5003 13.6291 2.57745 13.9162 2.72372 14.1692C2.86998 14.4222 3.08022 14.6324 3.33333 14.7785L9.16667 18.1118C9.42003 18.2581 9.70744 18.3351 10 18.3351C10.2926 18.3351 10.58 18.2581 10.8333 18.1118L16.6667 14.7785C16.9198 14.6324 17.13 14.4222 17.2763 14.1692C17.4225 13.9162 17.4997 13.6291 17.5 13.3368Z"></path><path d="M17.5 10L13.75 12.1667V16.4917"></path><path d="M6.25 16.4917V12.1667L2.5 10"></path><path d="M2.72656 5.80078L10.0016 10.0091L17.2766 5.80078"></path><path d="M10 18.4V10"></path><path d="M6.25 3.50781L10 5.67448L13.75 3.50781"></path></svg>
  )
}

function MoreIcon(){
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" stroke="#abc4ff" fill="none"  strokeLinecap="round" strokeLinejoin="round"><path d="M17.4974 11.668H11.6641V17.5013H17.4974V11.668Z"></path><path d="M8.33333 11.668H2.5V17.5013H8.33333V11.668Z"></path><path d="M17.4974 2.5H11.6641V8.33333H17.4974V2.5Z"></path><path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z"></path></svg>
  )
}