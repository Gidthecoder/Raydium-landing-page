import Image from "next/image";
import { useState } from "react";
import { FilterIcon } from "../../icons";

export default function InvestPool(){
    return (
        <div>
            <div className="w-[250px] mx-auto my-5 p-1 sm:p-2 rounded-full flex flex-row justify-center bg-black gap-2 items-center border border-gray-700">
                <div className='flex flex-row items-center'>
                    <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className=" rounded-full">
                        <Image alt="Solana" src="/raydium/solana.png" width={14} height={14} className="m-[3px] rounded-full"/>
                    </div>
                    <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className=" rounded-full">
                        <Image alt="USDT" src="/raydium/usdt.png" width={14} height={14} className="m-[3px] rounded-full"/>
                    </div>
                </div>
                <p className="block font-medium text-xs sm:text-sm text-[#ecf5ff]">SOL-USDC</p>
                <p className="inline-block text-[10px] sm:text-xs bg-[#1c243e4d] text-[#abc4ff] px-2 py-1">0.01%</p>
            </div>
            <div className="w-[250px] mx-auto mb-2 flex flex-row justify-between">
                <p className="font-semibold text-sm sm:text-base">Add deposit amount</p>
                <div className="group cursor-pointer flex flex-row gap-x-1 items-center text-xs py-[2px] px-2 border border-transparent transition-all hover:border-[#00D1FF] hover:text-[#00D1FF] bg-gray-800 rounded-full ">
                    <FilterIcon width={null} height={null}/>
                    <span>0.5%</span>
                </div>
            </div>
            <Deposit/>
        </div>
    )
}


import TokenToSwap from "@/app/components/hero/dashboard_preview/TokenToSwap";
import Toast from "@/app/components/Toast";

function Deposit(){
  interface PoolProps {
    name: string;
    pics:string;
    value:string;
    dollarEquiv:string
  }
   const initial = [{name:'SOL', pics: '/raydium/solana.png', value:'1', dollarEquiv: "~$193.593"}, {name: 'USDT', pics: '/raydium/usdt.png', value:'193.361160', dollarEquiv:'~$193.458'}];
  const [pool, setPool] = useState<PoolProps[]>(initial)
  
  const handleChange = (e:any, primary:PoolProps, secondary:PoolProps, inverse=false) => {
    const { name, value } = e.target;

    let newValue = value;
    newValue = value.replace(/[^\d.]/, '');

    // Ensure only one decimal point
    if ((newValue.match(/\./g) || []).length > 1) {
      return;
    }

    const calculated = calculate(name, newValue);
    
    setPool(
      [
        {
          name:primary.name, 
          pics:primary.pics, 
          value:(inverse?calculated:newValue), 
          dollarEquiv:`\$${(calculated)}`
        }, {
          name: secondary.name, 
          pics: secondary.pics, 
          value: (inverse?newValue:calculated), 
          dollarEquiv:`\$${(calculated)}`
        }
      ]
    )

    return calculated;
  }
  
    const calculate = (name:any, value:any) => {
      if (name === 'SOL'){
        const answer = 193.361*value;
        const trimmedValue = parseFloat(answer.toFixed(3)); 
        return trimmedValue
      } else if (name === 'USDT'){
        const answer = value/193.361;
        const trimmedValue = parseFloat(answer.toFixed(3));
        return trimmedValue;
      } else {
        return
      }
    }

    const [toastVisible, setToastVisible] = useState(false);
  const handleToast = () => {
    setToastVisible(false)

    setTimeout(()=>{
      setPool(initial)
    },500)
    
  }

    return (
        <div className={`relative rounded-lg w-[90%] sm:w-[80%] mx-auto`}>
            
            <div className="flex flex-col gap-4 mb-4">
              <TokenToSwap type='From' primary={pool[0]} disabled={false} secondary={pool[1]} handleChange={handleChange}/>
                
                <TokenToSwap type='To' primary={pool[0]} disabled={false} secondary={pool[1]} inverse={true} handleChange={handleChange}/>
            </div>
            <button onClick={()=>setToastVisible(true)} className="w-full text-sm font-semibold sm:text-base bg-[#00D1FF] text-black hover:bg-[#00D1FF]/90 py-1 sm:py-2 px-4 rounded-lg mb-4">Deposit</button>
            <Calculator pool={pool[1].value}/>

            {
        toastVisible &&
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 flex flex-row items-center justify-center">
          <Toast message={`Deposited ${pool[0].value} ${pool[0].name} and ${pool[1].value} ${pool[1].name}`} handleClick={handleToast}/>
        </div>
      }
      </div>
    )
}

function Calculator({pool}:any){
  return (
    <div className="bg-[#abc4ff1f] font-semibold text-sm p-3 rounded-lg space-y-2">
                <div className="flex flex-row justify-between text-white">
                    <p>Total deposit</p>
                    <p>${Number(pool) + Number(pool)}</p>
                </div>
                <div className="flex flex-row justify-between text-white">
                    <p>Deposit ratio</p>
                    <div className="flex flex-row items-center gap-2">
                      <p>50% /50%</p>
                      <div className="inline-flex flex-row gap-1">
                        <img src='/raydium/solana.png' width={14} height={14} className="rounded-full"/>
                        <img src='/raydium/usdc.png' width={14} height={14} className="rounded-full"/>
                      </div>
                    </div>
                </div>
            </div>
  )
}