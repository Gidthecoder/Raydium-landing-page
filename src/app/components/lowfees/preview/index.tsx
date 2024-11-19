

export default function LowFeesPics(){
    return <Calculator/>
}



function Calculator(){
    const [moreOpen, setMoreOpen] = useState(true)
    return (
      <div className="bg-transparent mt-4 space-y-2 px-4 py-4 sm:py-8 rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center text-[#ecf5ff] fill-[#abc4ff]">
            <p className="text-base sm:text-2xl ">1 RAY ≈ 4.762367 USDT</p>
            <PassIcon/>
            <SwapIcon/>
          </div>
          <div className="fill-[#abc4ff]">
            <CircularProgressBar/>
          </div>
        </div>

        <div className="text-xs sm:text-base text-gray-400 flex flex-row items-center justify-between">
          <div>
            <p>Minimum Received</p>
          </div>
          <div className="text-right">
            <span className="text-[#ecf5ff]">4.738555</span>&nbsp;USDT
          </div>
        </div>
        {
          
          <div className={`${moreOpen?'h-[85px]':'h-0'} transition-all duration-1000 overflow-hidden space-y-2`}>
            <div className="text-xs sm:text-base text-gray-400 flex flex-row items-center justify-between">
              <div>
                <p>Price Impact</p>
              </div>
              <div className="text-right">
                &lt;0.01%
              </div>
            </div>

            <div className="text-xs sm:text-base text-gray-400 flex flex-row items-center justify-between">
              <div>
                <p>Order Routing</p>
              </div>
              <div className="text-right flex flex-row gap-1 items-center">
                <div className="bg-[#abc4ff12] rounded-full">
                  <img src='/raydium/raydium.png' className="w-[16px] h-[16px] m-1"/>
                </div>
                <span className="text-[10px] sm:text-sm">0.05% ▸</span>
                <div className="bg-[#abc4ff12] rounded-full">
                  <img src='/raydium/solana.png' className="w-[16px] h-[16px] m-1"/>
                </div>
                <span className="text-[10px] sm:text-sm">0.02% ▸</span>
            
                <div className="bg-[#abc4ff12] rounded-full">
                  <img src='/raydium/usdt.png' className="w-[16px] h-[16px] m-1"/>
                </div>
              </div>
            </div>

            <div className="text-xs sm:text-base text-gray-400 flex flex-row items-center justify-between">
              <div>
                <p>Estimated Fees</p>
              </div>
              <div className="text-right">
                0.00005 RAY
              </div>
            </div>
          </div>
        }

        <div onClick={()=>setMoreOpen(!moreOpen)} className="flex flex-row justify-center gap-1 cursor-pointer items-center text-[10px] sm:text-base text-gray-400">
          <span>{moreOpen? ' Less info': 'Show more'}</span>
          <CaretUp/>
        </div>
      </div>
    )
  }


  import { useEffect, useState } from "react";
  const CircularProgressBar = () => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const intervalTime = 150; // Update every 150ms
      const increment = (intervalTime / 15000) * 100; // Calculate how much to increment each interval
      
      const timer = setInterval(() => { //setInterval
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            return 0; // Reset progress
          }
          return prevProgress + increment;
        });
      }, intervalTime);
      
      return () => clearInterval(timer);
    }, []);
    
    // Calculate the circle's circumference
    const radius =10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    
    return (
      
        <div>
          {/* Background circle */}
          <svg className="w-4 h-4 sm:w-6 sm:h-6 transform -rotate-90" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r={radius}
              strokeWidth="2"
              stroke="#e6e6e6"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="12"
              cy="12"
              r={radius}
              strokeWidth="2"
              stroke="#3b82f6"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
                transition: 'stroke-dashoffset 0.15s ease'
              }}
            />
          </svg>
        </div>
      
    );
  };
  
function SwapIcon(){
  return (
      <svg className="w-4 h-4 sm-w-6 sm:h-6" viewBox="0 0 16 16" ><path d="M13.998 9.42549H1.57079C1.49222 9.42549 1.42793 9.48978 1.42793 9.56835V10.6398C1.42793 10.7184 1.49222 10.7827 1.57079 10.7827H12.3783L9.80144 14.0507C9.72822 14.1435 9.79429 14.2828 9.91394 14.2828H11.2086C11.2961 14.2828 11.3783 14.2435 11.4336 14.1739L14.448 10.3505C14.7427 9.97551 14.4766 9.42549 13.998 9.42549V9.42549ZM14.4284 5.21106H3.62086L6.19774 1.94309C6.27096 1.85023 6.20488 1.71094 6.08523 1.71094H4.79055C4.70304 1.71094 4.6209 1.75022 4.56554 1.81987L1.55115 5.64322C1.25649 6.01823 1.52258 6.56825 1.99938 6.56825H14.4284C14.507 6.56825 14.5712 6.50396 14.5712 6.42539V5.35392C14.5712 5.27535 14.507 5.21106 14.4284 5.21106Z"></path></svg>
  )
}

function PassIcon(){
  return (
    <svg viewBox="0 0 14 14"  className="w-4 h-4 sm-w-6 sm:h-6" fill="none" focusable="false" stroke="#00D1FF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" ><path d="M12.8307 6.46407V7.00074C12.83 8.25865 12.4227 9.48263 11.6695 10.4901C10.9163 11.4976 9.85765 12.2347 8.65135 12.5913C7.44506 12.948 6.1558 12.9052 4.97584 12.4692C3.79588 12.0333 2.78844 11.2276 2.10379 10.1724C1.41913 9.11709 1.09394 7.86877 1.17671 6.61359C1.25947 5.3584 1.74577 4.16359 2.56306 3.20736C3.38035 2.25113 4.48485 1.58471 5.71184 1.30749C6.93883 1.03027 8.22255 1.1571 9.37157 1.66907"></path><path d="M12.8333 2.33203L7 8.1712L5.25 6.4212"></path></svg>
  )
}

function CaretUp(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg>
  )
}