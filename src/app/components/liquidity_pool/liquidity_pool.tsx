import CheckInfo from "./preview/CheckInfo";
import SwapAnyPool from "./preview/SwapAnyPool";
import ViewPoolChart from "./preview/ViewPoolChart";
import InvestPool from "./preview/InvestPool";

import { useEffect, useRef } from "react";

import useScrollStore from "@/stores/useScrollStore";
export default function LiquidityPools(){
    const [isVisible, setIsVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null); // Reference to the component

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('Is intersecting:', entry.isIntersecting);
                console.log('Bounding client rect:', entry.boundingClientRect);
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(navRef.current!);
                }
            },
            { threshold: 0.2 }
        );
    
        if (navRef.current) observer.observe(navRef.current);
    
        return () => {
            if (navRef.current) observer.unobserve(navRef.current);
        };
    }, []);

    const ref = useRef<HTMLDivElement>(null);

    const shouldScroll = useScrollStore((state) => state.shouldScroll);
    const setShouldScroll = useScrollStore((state) => state.setShouldScroll);

    useEffect(() => {
        if (shouldScroll === 'liquidity' && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });

            setShouldScroll('');
        }
    }, [shouldScroll]); 

    return (
        <div ref={navRef} className="border border-gray-700 overflow-hidden mt-40 m-4 bg-gradient-to-b from-[hsl(227,10%,10%)] to-black">
            
            <div className={`text-center text-2xl md:text-3xl p-2 font-semibold sm:p-4 border-b-gray-700  duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <p ref={ref}>Liquidity pools: Earn More, Effortlessly</p>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[50%]">
                    <div className=" border-y border-y-gray-700 space-y-2 pb-4">
                        <div className={`pl-5 sm:pl-10 space-y-2 p-4  delay-100 duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-base sm:text-xl font-semibold">Discover insights at a glance.</p>
                            <p className="text-sm sm:text-base text-gray-400">Explore detailed information about liquidity, trading volume, and potential earnings (APR) across various pools and timeframes to find the best opportunities.</p>
                        </div>
                        <div role="presentation" aria-hidden='true' tab-index='-1' className={`no-select bg-gradient-to-br from-cyan-400/50 via-black to-black ml-5 sm:ml-10 border rounded-tl-2xl border-gray-700 border-r-transparent h-[40vh] overflow-hidden delay-200 lg:delay-300 duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <CheckInfo/>
                        </div>
                    </div>
                    <div className=" border-b border-b-gray-700 space-y-2 pb-4">
                        <div className={`pl-5 sm:pl-10 space-y-2 p-4 delay-[300ms] lg:delay-[500ms] duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-base sm:text-xl font-semibold">Trade with flexibility.</p>
                            <p className="text-sm sm:text-base text-gray-400">Easily swap tokens across multiple pools, giving you the freedom to trade based on what’s available in your wallet.</p>
                        </div>
                        <div role="presentation" aria-hidden='true' tab-index='-1' className={`no-select bg-gradient-to-br from-purple-400/50 via-black to-black ml-5 sm:ml-10 border rounded-tl-2xl border-gray-700 h-[40vh] overflow-hidden delay-[400ms] lg:delay-[700ms] duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <SwapAnyPool/>
                        </div>
                    </div>
                    <div className="border-b border-b-gray-700 space-y-2 pb-4">
                        <div className={`pl-5 sm:pl-10 space-y-2 p-4 delay-[500ms] lg:delay-[900ms] duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-base sm:text-xl font-semibold">Make data-driven moves.</p>
                            <p className="text-sm sm:text-base text-gray-400">Access clear and interactive charts showing volume and liquidity trends over time to maximize your strategy.</p>
                        </div>
                        <div role="presentation" aria-hidden='true' tab-index='-1' className={`no-select bg-gradient-to-br from-black via-black to-blue-400/50 ml-5 sm:ml-10 border rounded-tl-2xl border-gray-700 h-[40vh] overflow-hidden delay-[600ms] lg:delay-1000 duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <ViewPoolChart/>
                        </div>
                    </div>
                </div>
                <div className=" w-full lg:w-[50%]">
                    <div className=" border-y border-y-gray-700 space-y-2">
                        <div className={`pl-5 sm:pl-10 space-y-2 p-4 delay-[700ms] lg:delay-200 duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-base sm:text-xl font-semibold">Earn while you grow.</p>
                            <p className="text-sm sm:text-base text-gray-400">Deposit tokens into any pool you prefer to start earning rewards and supporting the Solana ecosystem effortlessly.</p>
                        </div>
                        <div role="presentation" aria-hidden='true' tab-index='-1' className={`no-select mx-5 sm:mx-10 h-[60vh] bg-[#abc4ff1f] rounded-t-xl border border-gray-700 overflow-hidden delay-[800ms] lg:delay-[400ms] duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <InvestPool/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className={`pl-5 sm:pl-10 space-y-2 p-4 delay-[900ms] lg:delay-[600ms] duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-base sm:text-xl font-semibold">Tailor your investments.</p>
                            <p className="text-sm sm:text-base text-gray-400">Design pools that match your strategy, whether for concentrated liquidity, standard AMMs, or legacy options. You can even lock liquidity or start a farm to maximize your potential earnings.</p>
                        </div>
                        <div role="presentation" aria-hidden='true' tab-index='-1' className={`n-select mx-5 sm:mx-10 h-[60vh] bg-gradient-to-b from-black via-black to-blue-700/50 overflow-hidden  rounded-t-xl border border-gray-700 delay-1000 lg:delay-[800ms] duration-500 ease-out transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <CreatePool/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { ClearIcon } from "../icons";
import { useState } from "react";

function CircleCheck(){
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00D1FF" ><path d="M17.0089 7.74023H15.7526C15.4794 7.74023 15.2196 7.87148 15.0588 8.09648L10.8481 13.9358L8.94099 11.2893C8.78028 11.067 8.52314 10.9331 8.24724 10.9331H6.99099C6.81688 10.9331 6.7151 11.1313 6.81688 11.2733L10.1544 15.9018C10.2332 16.0119 10.3372 16.1016 10.4576 16.1634C10.578 16.2253 10.7114 16.2575 10.8468 16.2575C10.9822 16.2575 11.1156 16.2253 11.236 16.1634C11.3564 16.1016 11.4604 16.0119 11.5392 15.9018L17.1803 8.08041C17.2847 7.93845 17.183 7.74023 17.0089 7.74023Z" fill="#00D1FF"></path><path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12 21.9643C6.49821 21.9643 2.03571 17.5018 2.03571 12C2.03571 6.49821 6.49821 2.03571 12 2.03571C17.5018 2.03571 21.9643 6.49821 21.9643 12C21.9643 17.5018 17.5018 21.9643 12 21.9643Z" fill="var(--secondary)"></path></svg>
    )
}
function CreatePool(){
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('pool');
    return (
        <div className="flex flex-row items-center justify-center pt-5">
            {
                open?
                <Modal selected={selected} setSelected={setSelected} setOpen={setOpen}/>:
                <button onClick={()=>setOpen(true)} className="border border-[#00D1FF] text-[#00D1FF]  py-2 px-4 rounded-lg mb-4 mt-4">Deposit</button>
            }
        </div>
    )
}

interface ModalProps {
    selected: string;
    setSelected: (value:string) => void;
    setOpen: (value:boolean) => void;
}
function Modal({selected, setSelected, setOpen}:ModalProps){
    const poolTypes = [{name: 'Concentrated Liquidity', desc: 'Custom ranges, increased capital efficiency'}, {name: 'Standard AMM', desc: 'Newest CPMM, cheaper, supports Token 2022' }, {name: 'Legacy AMM v4', desc: 'Legacy AMM program, more expensive due to orderbook market requirement'}]
    return (
        <div className="bg-[#abc4ff1f] px-3 sm:px-6 py-4 rounded-lg sm:w-[70%] mx-2 sm:mx-auto">
            <p className="flex flex-row justify-between items-center mb-2 sm:text-base text-sm">
                <span>I want to</span>
                <button onClick={()=>setOpen(false)} className="p-2"><ClearIcon/></button>        
            </p>

            <div className="space-y-3">
                <div onClick={()=>setSelected('pool')} className="bg-[hsl(227,10%,10%)] p-3 rounded-lg cursor-pointer">
                    <p className="text-sm sm:text-base flex flex-row justify-between">
                        <span>Create pool</span>
                        {selected==='pool' && <CircleCheck/>}
                    </p>
                    {
                        selected === 'pool' &&
                        <div className=" space-y-2">
                            <p className="text-xs sm:text-sm text-gray-400">Select pool type to create a pool for any token pair. Read the guide for CLMM or Standard pools.</p>
                            <div>
                                <p className="text-xs sm:text-sm mb-2">Pool type</p>
                                <div className="space-y-4">
                                    {
                                        poolTypes.map(item =>
                                            <div onClick={()=>setOpen(false)} key={item.name} className="text-xs sm:text-sm flex flex-row items-center gap-4 bg-[#abc4ff1f] p-2 rounded-lg">
                                                <div className="rounded-full bg-[#abc4ff1f]">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full m-2"></div>
                                                </div>
                                                <div>
                                                    <p>{item.name}</p>
                                                    <p className="text-[10px] sm:text-xs text-[#abc4ff]">{item.desc}</p>
                                                </div>
                                            </div>
                                        )   
                                    }   
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div onClick={()=>setSelected('farm')} className="bg-[hsl(227,10%,10%)] space-y-2 p-3 rounded-lg cursor-pointer">
                    <p className="text-sm sm:text-base flex flex-row justify-between">
                        <span>Create farm</span>
                        {selected==='farm' && <CircleCheck/>}
                    </p>
                    {
                        selected === 'farm' && <p className="text-xs sm:text-sm text-[#abc4ff]">Create a farm for any live pool. Read the instructions for CLMM or Standard farms.</p>
                    }
                </div>
                <div onClick={()=>setSelected('buy_and_earn')} className="cursor-pointer space-y-2 bg-[hsl(227,10%,10%)] p-3 rounded-lg">
                    <p className="text-sm sm:text-base flex flex-row justify-between">
                        <span>Buy and earn</span>
                        {selected==='buy_and_earn' && <CircleCheck/>}
                    </p>
                    {
                        selected === 'buy_and_earn' &&
                        <div>
                            <p className="text-xs sm:text-sm text-[#abc4ff] mb-2">Permanently burn/lock liquidity for an existing position. Trading fees remain claimable. Learn more</p>
                            <div className="flex flex-row gap-2 text-xs sm:text-sm">
                                <div onClick={()=>setOpen(false)} className="flex-none flex flex-row items-center gap-4 bg-[#abc4ff1f] p-2 rounded-lg">
                                    <div className="rounded-full bg-[#abc4ff1f]">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full m-2"></div>
                                    </div>
                                    <p>Concentrated Liquidity</p>
                                </div>
                                <div onClick={()=>setOpen(false)} className="flex-none flex flex-row items-center gap-4 bg-[#abc4ff1f] p-2 rounded-lg">
                                    <div className="rounded-full bg-[#abc4ff1f]">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full m-2"></div>
                                    </div>
                                    <p>Standard AMM</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}