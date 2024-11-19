
import { useState } from "react";
import TokenToSwap from "./TokenToSwap";

function SwapIcon(){
  return (
      <svg className='w-4 h-4 sm:w-6 sm:h-6' viewBox="0 0 16 16" ><path d="M13.998 9.42549H1.57079C1.49222 9.42549 1.42793 9.48978 1.42793 9.56835V10.6398C1.42793 10.7184 1.49222 10.7827 1.57079 10.7827H12.3783L9.80144 14.0507C9.72822 14.1435 9.79429 14.2828 9.91394 14.2828H11.2086C11.2961 14.2828 11.3783 14.2435 11.4336 14.1739L14.448 10.3505C14.7427 9.97551 14.4766 9.42549 13.998 9.42549V9.42549ZM14.4284 5.21106H3.62086L6.19774 1.94309C6.27096 1.85023 6.20488 1.71094 6.08523 1.71094H4.79055C4.70304 1.71094 4.6209 1.75022 4.56554 1.81987L1.55115 5.64322C1.25649 6.01823 1.52258 6.56825 1.99938 6.56825H14.4284C14.507 6.56825 14.5712 6.50396 14.5712 6.42539V5.35392C14.5712 5.27535 14.507 5.21106 14.4284 5.21106Z"></path></svg>
  )
}

function ReverseTokensIcon(){
  return (
    <svg viewBox="0 0 40 40" focusable="false" className="absolute top-[-5px] sm:top-[-10px] w-7 h-7 sm:w-10 sm:h-10"><circle cx="20" cy="20" r="20" fill="#8CA7E8" stroke="none"  ></circle><path d="M20 13.582L20 26.4154" fill="none" stroke="#0B1022" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.418 20L20.0013 26.4167L13.5846 20" fill="none" stroke="#0B1022" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path></svg>
  )
}
 

export default function SwapForm(){
    const [swapVisible, setSwapVisible] = useState(false);
  
  const [pool, setPool] = useState([{name:'SOL', pics: '/raydium/solana.png', value:'1', dollarEquiv: "~$193.593"}, {name: 'USDT', pics: '/raydium/usdt.png', value:'193.361', dollarEquiv:'~$193.458'}])

  const handleMouseOver = () => {
    setSwapVisible(true)
  }

  const handleMouseOut = () => {
    setSwapVisible(false)
  }

  const swapTokens = () => {
    setPool([pool[1], pool[0]])
  }

    return (
    <div className={`col-span-2 bg-[hsl(224,9%,21%)] lg:order-last w-full md:w-[70%] lg:w-full mx-auto p-2 sm:p-4 rounded-lg`}>
      <div className="flex flex-col mb-4">
          <TokenToSwap type='From' primary={pool[0]} secondary={pool[1]} />
          <div className="flex justify-center relative h-[20px] cursor-pointer" onClick={swapTokens} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {
              swapVisible?
              <div  style={{boxShadow: '0px 0px 5px 10px #FF4EA35f'}} className="absolute top-[-5px] sm:top-[-10px] bg-gray-400 rounded-full fill-black p-2 rotate-90"><SwapIcon/></div>:
                <ReverseTokensIcon/>
            }
          </div>
          <TokenToSwap type='To' primary={pool[0]}  secondary={pool[1]} inverse={true}/>
              
        </div>
        <button disabled className="w-full bg-[#00D1FF] text-sm sm:text-base font-semibold text-black py-1 sm:py-2 px-4 rounded-lg">Swap</button>
        
      </div>
    )
}