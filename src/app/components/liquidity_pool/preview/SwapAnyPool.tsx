import Image from "next/image";
import { useState } from "react";
import { ClearIcon } from "../../icons";

export default function SwapAnyPool(){
    const [open, setOpen] = useState(false);
    return (
        <div className="pt-4 space-y-4">
            {
                open?
                <>
                    <p className="flex flex-row justify-center">
                        <button onClick={()=>setOpen(false)} className="bg-gray-500/50 text-white p-2 rounded-full"><ClearIcon/></button>
                    </p>
                    <Swap/>
                </>
                :
                <>
                    <p className="text-center "> <button onClick={()=>setOpen(true)} className="text-xs sm:text-sm py-1 sm:py-2 w-48 rounded-full text-white bg-purple-500">Swap</button> </p>
                    <Grid/>
                </>
            }
            
        </div>
    )
}

import TokenToSwap from "@/app/components/hero/dashboard_preview/TokenToSwap";

function Swap(){
    const [pool, setPool] = useState([{name:'SOL', pics: '/raydium/solana.png', value:'1', dollarEquiv: "~$193.593"}, {name: 'USDT', pics: '/raydium/usdt.png', value:'193.361160', dollarEquiv:'~$193.458'}])
    const handleChange = (e:any, primary:any, secondary:any, inverse=false) => {
        const { name, value } = e.target;
    
        let newValue = value;
        newValue = value.replace(/[^\d.]/, '');
    
        // Ensure only one decimal point
        if ((newValue.match(/\./g) || []).length > 1 || newValue.length > 12) {
          return;
        }
    
        const calculated = calculate(name, newValue);
        
        setPool(
          [
            {
              name:primary.name, 
              pics:primary.pics, 
              value:(inverse?calculated:newValue), 
              dollarEquiv:`\$${(inverse?calculated:newValue)}`
            }, {
              name: secondary.name, 
              pics: secondary.pics, 
              value: (inverse?newValue:calculated), 
              dollarEquiv:`\$${(inverse?newValue:calculated)}`
            }
          ]
        )
    
        return calculated;
      }
    
      const calculate = (name:any, value:any) => {
        if (name === 'SOL'){
          return 193.361*value
        } else if (name === 'USDT'){
          return value/193.361
        } else {
          return
        }
      }
    return (
        <div className="w-[80%] sm:w-[50%] mx-auto mt-10 space-y-4">
            <div>
                <TokenToSwap type='From' primary={pool[0]} disabled={false} secondary={pool[1]} handleChange={handleChange}/>
            </div>
            <div>
                <TokenToSwap type='To' primary={pool[0]} disabled={false} secondary={pool[1]} inverse={true} handleChange={handleChange}/>
            </div>
            
        </div>
    )
}
export function Grid(){
    return (
        <div className="space-y-2 bg-transparent border border-gray-700 w-[70%] sm:w-[50%] mx-auto p-4 rounded-xl">
            <div className="flex flex-row justify-center">
                <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className=" rounded-full">
                    <img alt="" src="/raydium/usdt.png" className="w-4 h-4 sm:w-6 sm:h-6 m-1 rounded-full"/>
                </div>
                <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className=" rounded-full">
                    <img alt="" src="/raydium/solana.png" className="w-4 h-4 sm:w-6 sm:h-6 m-1 rounded-full"/>
                </div>
            </div>
            <p className="text-[#ecf5ff] text-center text-sm sm:text-base">USDT-SOL</p>
            <p className="text-[#22d1f8] py-1 text-center text-xs sm:text-sm bg-[#abc4ff12] rounded-lg">0.01%</p>
            <div className="space-y-2 text-[10px] sm:text-xs">
                <div className="flex flex-row items-center  justify-between">
                    <span className="text-[#abc4ff]">Free Tier</span>
                    <span className="bg-[#abc4ff1f] text-xs self-start p-1 rounded-full">24%</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-[#abc4ff]">Volume 24H</span>
                    <span className="text-[#ecf5ff]">$24,000,000</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-[#abc4ff]">Fees 24H</span>
                    <span className="text-[#ecf5ff]">$10,000</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-[#abc4ff]">TVL</span>
                    <span className="text-[#ecf5ff]">$200,00</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-[#abc4ff]">Rewards</span>
                    <Image src='/raydium/raydium.png' width={24} height={24} alt='raydium'/>
                </div>
            </div>
        </div>
    )
}