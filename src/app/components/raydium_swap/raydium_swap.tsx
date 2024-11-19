import { useState, useRef, useEffect } from "react";
import Calculation from "./preview/Calculation";
import SelectToken from "./preview/SelectToken";
import ChartInformation from "./preview/ChartInfo";
import useScrollStore from "@/stores/useScrollStore";

import { ExternalLink } from "../icons";

export default function RaydiumSwap() {
    const [selected, setSelected] = useState('realtime');
    const [isVisible, setIsVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); 
                    observer.unobserve(navRef.current!);  //red error line over here
                }
            },
            {
                threshold: 0.3, 
            }
        );

        if (navRef.current) {
            observer.observe(navRef.current);
        }

        return () => {
            if (navRef.current) observer.unobserve(navRef.current);
        };
    }, []);

    const ref = useRef<HTMLDivElement>(null);

    const shouldScroll = useScrollStore((state) => state.shouldScroll);
    const setShouldScroll = useScrollStore((state) => state.setShouldScroll);

    useEffect(() => {
        if (shouldScroll === 'swap' && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" }); //red error line over here

            setShouldScroll('');
        }
    }, [shouldScroll]); 

    return (
        <div ref={navRef} className="pt-40">
            <div ref={ref} className="border border-gray-700  m-4 sm:w-[80%] sm:mx-auto">
                <div className={`space-y-2 text-base text-center border-b border-b-gray-700 p-4 font-semibold duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-2xl md:text-3xl">Raydium Swap: Trade Made Simple</p>
                    <p className="text-gray-400 font-normal">Swap tokens instantly at the best rates. Fast, reliable, and easy-to-use—Raydium Swap ensures every trade works for you.</p>
                    <p>
                        <a href='https://raydium.io/swap/' target="_blank" aria-label='Link to the Raydium dashboard' className={`inline-flex flex-row gap-2 items-center mx-auto font-grotesk-medium inline-block text-[#181f35] bg-[#22d1f8] p-2 px-8 rounded-lg text-base font-semibold`}>
                            Start swapping <ExternalLink/>
                        </a>
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="order-last w-full flex-none lg:w-[50%] border-r border-r-gray-700">
                        <div onClick={() => setSelected('realtime')} className={`${selected !== 'realtime' && 'text-gray-400'} space-y-2 border-b border-b-gray-700  p-4 cursor-pointer delay-100 duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className={`text-base md:text-xl ${selected === 'realtime'? 'text-cyan-400':'text-gray-400'} font-semibold`}>See what you’ll get before you trade.</p>
                            {
                                selected === 'realtime' && <p className="text-sm md:text-base text-[#ecf5ff]">Get accurate, instant previews of token amounts and fees, so there are no surprises when you swap.</p>
                            }
                        </div>
                        <div onClick={() => setSelected('extensive')} className={`${selected !== 'extensive' && 'text-gray-400'} border-b border-b-gray-700 p-4 cursor-pointer delay-200 duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className={`text-base md:text-xl ${selected === 'extensive'? 'text-cyan-400':'text-gray-400'} font-semibold`}>Trade the tokens you love</p>
                            {
                                selected === 'extensive' && <p className="text-sm md:text-base text-[#ecf5ff]">Choose from a vast selection of Solana tokens, including popular options like USDT and USDC, giving you more flexibility and choice. </p>
                            }
                        </div>
                        <div onClick={() => setSelected('charts')} className={`${selected !== 'charts' && 'text-gray-400'} border-b border-b-gray-700  p-4 cursor-pointer delay-300 duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className={`text-base md:text-xl ${selected === 'charts'? 'text-cyan-400':'text-gray-400'} font-semibold`}>Make smarter trading decisions.</p>
                            {
                                selected === 'charts' && <p className="text-sm md:text-base text-[#ecf5ff]">Access detailed charts that show price trends and trading activity over time, helping you trade with confidence.</p>
                            } 
                        </div>
                    </div>
                    <div className="lg:order-last w-full flex-none lg:w-[50%] flex flex-row items-center justify-center">
                        <div role="presentation" aria-hidden='true' tab-index='-1' className={`no-select w-full sm:w-[80%] p-2  sm:my-10 my-5 rounded-lg delay-500 duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            {
                                selected === 'realtime' ?
                                    <Calculation /> :
                                selected === 'extensive' ?
                                    <SelectToken /> :
                                selected === 'charts' ?
                                    <div className='rounded-lg' style={{boxShadow: '0px 0px 20px 10px #abc4ff1f'}}><ChartInformation /></div> :
                                ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
