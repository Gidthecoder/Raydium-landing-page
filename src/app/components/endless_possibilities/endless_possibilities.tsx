import { useState, useRef, useEffect } from "react";

import PortfolioUI from "./preview/PortfolioUI";
import StakeUI from "./preview/StakeUI";
import BridgeUI from "./preview/BridgeUI";

import useScrollStore from "@/stores/useScrollStore";

export default function EndlessPossibilities(){
    const [selected, setSelected] = useState('');

    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null); // Reference to the component

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); 
                    observer.unobserve(heroRef.current!);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
        };
    }, []);

    const ref = useRef<HTMLDivElement>(null);

    const shouldScroll = useScrollStore((state) => state.shouldScroll);
    const setShouldScroll = useScrollStore((state) => state.setShouldScroll);

    useEffect(() => {
        if (shouldScroll === 'portfolio' && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setShouldScroll('');
        }

        if (shouldScroll === 'staking' && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setShouldScroll('');
            setSelected('stake')
        }

        if (shouldScroll === 'bridge' && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setShouldScroll('');
            setSelected('bridge')
        }
    }, [shouldScroll]); 

    return (
        <div ref={heroRef} className="border border-gray-700 mt-40 lg:w-[80%] lg:mx-auto m-4">
            <p ref={ref} className={`text-2xl sm:text-3xl text-center border-b border-b-gray-700 p-4 font-semibold  duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>One platform, endless possibilities</p>
            
            <div className="flex flex-col lg:flex-row">
                <div className="order-last flex items-center border border-gray-700 flex-none lg:w-[50%] p-4">
                    <div className=" border border-gray-700 grow">
                        <div onClick={()=>setSelected('')} className={`${ !selected? 'text-white':'text-gray-400'} cursor-pointer border-b border-gray-700 p-4 delay-300 duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p className={`${ !selected ? 'text-cyan-400':'text-gray-400'}  text-base lg:text-xl  font-semibold `}>Stay in control of your assets.</p>
                            {
                                !selected && <p className="text-sm lg:text-base">View your holdings by pools, tokens, or idle assets, and monitor your positions—whether they’re concentrated, standard, or staked RAY—all in one place..</p>
                            }
                            
                        </div>
                        <div  onClick={()=>setSelected('stake')} className={`${ selected === 'stake'? 'text-white':'text-gray-400'} cursor-pointer border-b border-gray-700 p-4 delay-300 duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p className={`${ selected === 'stake'? 'text-cyan-400':'text-gray-400'}  text-base lg:text-xl  font-semibold `}>Earn rewards while supporting the network.</p>
                            {
                                selected === 'stake' && <p className="text-sm lg:text-base">Commit your tokens to help secure the Raydium ecosystem and earn staking rewards as a bonus for your contribution.</p>
                            }
                            
                        </div>
                        <div  onClick={()=>setSelected('bridge')} className={`${ selected === 'bridge'? 'text-white':'text-gray-400'} cursor-pointer border-b border-gray-700 p-4 delay-300 duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <p className={`${ selected === 'bridge'? 'text-cyan-400':'text-gray-400'}  text-base lg:text-xl  font-semibold `}>Seamlessly transfer assets anywhere.</p>
                            {
                                selected === 'bridge' && <p className="text-sm lg:text-base">Move your tokens between different blockchain networks effortlessly, unlocking more possibilities for your assets.</p>
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="flex-none lg:order-last w-full lg:w-[50%] bg-[#abc4ff1f] flex flex-row items-center justify-center">
                    <div role="presentation" aria-hidden='true' tab-index='-1' className={`no-select w-[90%] sm:w-[80%] h-[60vh] sm:h-[70vh] bg-transparent my-10 rounded-lg overflow-hidden delay-[400ms] duration-500 ease-out transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {
                            !selected ? <PortfolioUI/>:
                            selected === 'stake'? <StakeUI/>:
                            selected === 'bridge'? <BridgeUI/>:
                            ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

