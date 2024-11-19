import { useState, useEffect } from "react";

export default function StakeUI(){
    const [trigger, setTrigger] = useState(false);
    useEffect(()=>{
        setTrigger(true)
    }, [])

    return (
        <div className={`duration-500 ease-out transition-all ${trigger ? 'opacity-100' : 'opacity-0'} border border-gray-700 rounded-xl`}>
            <div className="py-3 sm:py-6 px-4 sm:px-8 bg-[hsl(227,10%,10%)] rounded-t-xl border-b border-b-gray-600">
                <div className="flex flex-row gap-2 items-center mr-auto">
                    <img src='/raydium/raydium.png' alt='raydium logo'  className='w-5 h-5 sm:w-8 sm:h-8 '/>
                    <span className="text-sm sm:text-base text-[#abc4ff]">RAY</span>
                </div>
            </div>
            <div className="py-3 sm:py-6 px-4 bg-[hsl(227,10%,10%)]  flex flex-row gap-x-4 items-center">
                <div className="mr-auto">
                    <p className="text-[#abc4ff80] text-sm sm:text-base">Staked</p>
                    <p className="text-sm sm:text-base text-gray-400">4 RAY</p>
                </div>
                <div className="mr-auto">
                    <p className="text-[#abc4ff80] text-sm sm:text-base">APR</p>
                    <p className="text-sm sm:text-base text-gray-400">4.72%</p>
                </div>

                <div className="mr-auto">
                    <p className="text-[#abc4ff80]  text-sm sm:text-base">Liquidity</p>
                    <p className="text-sm sm:text-base text-gray-400">$180,503,273.d</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-3 sm:py-6 px-4 sm:px-8 bg-[hsl(224,9%,21%)] rounded-b-xl">
                 <div className="w-full flex flex-row gap-2 items-center justify-between bg-[hsl(227,10%,10%)] py-5 sm:px-8 px-4 rounded-lg">
                    <div className="text-gray-400 text-xs sm:text-sm flex-none">
                        <p>Available RAY</p>
                        <p className="text-white">4 RAY</p>
                        <p>$1000</p>
                    </div>
                    <button className="bg-gradient-to-r from-[hsl(224,9%,21%)]  to-[hsl(227,10%,10%)]  text-white py-2 px-3 rounded-lg text-xs sm:text-sm">Start staking</button>
                </div>
                <div className="w-full flex flex-row gap-2 items-center justify-between bg-[hsl(227,10%,10%)] py-5 sm:px-8 px-4 rounded-lg">
                    <div className="text-gray-400 text-xs sm:text-sm flex-none">
                        <p>Pending rewards</p>
                        <p className="text-white">1 RAY</p>
                        <p>$200</p>
                    </div>
                    <button className="bg-gradient-to-r from-[hsl(224,9%,21%)]  to-[hsl(227,10%,10%)]  text-white py-2 px-3 rounded-lg text-xs sm:text-sm">claim rewards</button>
                </div>
            </div>
        </div>
    )
}

