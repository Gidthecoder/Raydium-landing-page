import { useState, useEffect } from "react";

export default function PortfolioUI(){
    const [trigger, setTrigger] = useState(false);
    useEffect(()=>{
        setTrigger(true)
    }, [])

    return (
        <div>
            <div>
                <p className={`duration-500 ease-out transition-all ${trigger ? 'opacity-100' : 'opacity-0'} py-3 sm:py-5 text-white font-semibold`}>Overview</p>
                <div className="flex flex-row rounded-t-xl">
                    <span className="grow py-3 px-4 bg-[hsl(224,9%,21%)] text-[#ecf5ff] sm:text-base text-sm text-center rounded-tl-xl">Asset by pool</span>
                    <span className="grow py-3 px-4 bg-[hsl(227,10%,10%)] text-gray-400 sm:text-base text-sm text-center rounded-r-xl">Asset by token</span>
                </div>
                <div className="sm:p-7 bg-[hsl(224,9%,21%)] text-gray-400 rounded-b-xl">
                    <p className="p-10 sm:p-8 text-center">Connect wallet to see your asset distribution.</p>
                </div>
            </div>
            
            <div>
                <p className="py-3 mt-3 sm:py-5 text-white font-semibold">My position</p>
                <div className="inline-flex flex-row bg-[#abc4ff1f] rounded-full p-1 mb-2">
                    <button className="text-xs sm:text-sm text-black bg-gradient-to-r from-cyan-400 to-purple-400 py-1 px-2 sm:px-4 rounded-full">Concerntrated</button>
                    <button className="text-xs sm:text-sm text-[#abc4ff] py-1 px-2 sm:px-4 rounded-full">Standard</button>
                    <button className="text-xs sm:text-sm text-[#abc4ff] py-1 px-2 sm:px-4 rounded-full">Staked rays</button>
                </div>
                <div className="sm:p-7 text-gray-400 bg-[hsl(224,9%,21%)] rounded-xl">
                    <p className="p-10 sm:p-8 text-center">Connect wallet to see position</p>
                </div>
            </div>
        </div>
    )
}