import { useState, useRef, useEffect } from "react";

import LowFeesPics from "./preview/index";
import { ExternalLink } from "../icons";

export default function LowFees(){
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null); // Reference to the component

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); 
                    observer.unobserve(ref.current!); 
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);
    return (
        <div ref={ref} className="p-4  w-full sm:w-[80%] lg:w-[50%] mx-auto text-center pt-40 space-y-4">
            <p className={`text-2xl md:text-3xl lg:text-4xl font-bold duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}>Low fees, maximum value </p> {/*(pics of different fees) */}
            <p className={`text-base duration-500 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'} text-gray-400`}>Enjoy seamless, cost-effective transactions that let you keep more of your earnings. With Raydium, low fees mean higher returns, so you get more out of every trade.</p>
            <p className={`duration-500 delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'} flex flex-row justify-center`}>
                <a href='https://raydium.io/swap/' target="_blank" aria-label='Link to the Raydium dashboard' className={`inline-flex flex-row gap-2 items-center mx-auto font-grotesk-medium inline-block text-[#181f35] bg-[#22d1f8] p-2 px-8 mb-10 rounded-lg text-base font-semibold`}>
                    Open app <ExternalLink/>
                </a>
            </p>
            <div className={`flex flex-row justify-center duration-500 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}>
               <div role="presentation" aria-hidden='true' tab-index='-1'  className="no-select w-full bg-gradient-to-br from-[#abc4ff1f] to-black p-1 rounded-lg">
                <LowFeesPics/>
               </div>
            </div>
        </div>
    )
}
