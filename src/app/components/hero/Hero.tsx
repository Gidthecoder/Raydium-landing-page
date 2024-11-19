
import { useState, useEffect, useRef } from "react";

import HeroUI from "./dashboard_preview/index";
import { ExternalLink } from "../icons";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

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

    const groupStyle = {
        backgroundImage: 'url("/raydium/grayscale.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div ref={ref} style={groupStyle} className="relative transition-all">
            <div className="text-center pt-20 space-y-4 p-4 sm:px-10 lg:px-20 relative z-[2] bg-gradient-to-b from-purple-900/80 to-black">
                <div className="transition-all  space-y-4">
                    <h1 className={`text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-grotesk-bold font-bold whitespace-pre-line duration-500 delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-40px]'}`}>
                    Trade Faster. Earn More. Do More.
                    </h1>
                    <p className={`font-grotesk-regular text-base lg:text-xl mb-2 duration-500 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-40px]'}`}>
                        Raydium makes it easy to swap tokens, grow your assets, and access the best prices—all with ultra-low fees and blazing-fast transactions. 
                    </p>
                    <p>
                        <a href='https://raydium.io/swap/' target="_blank" aria-label='Link to the Raydium dashboard' className={`sm:inline-flex flex flex-row gap-1 justify-center lg:gap-2 items-center mx-auto font-grotesk-medium inline-block text-[#181f35] bg-[#22d1f8] p-2 md:px-4 px-8 mb-10 rounded-lg text-base lg:text-xl font-semibold duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-40px]'}`}>
                            Open app <ExternalLink/>
                        </a>
                    </p>
                </div>

                <div 
                    role="presentation" aria-hidden='true' tab-index='-1'
                    style={{ boxShadow: '0px 0px 20px 10px #abc4ff1f' }}
                    className={`no-select transform transition-all delay-500 duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ease-in mx-auto w-full m-4 md:w-[90%]  p-0 md:p-4 rounded-2xl bg-gray-400/50`}
                >
                    <div className=" bg-[hsl(227,10%,10%)] w-full rounded-lg border border-[#abc4ff] font-grotesk-regular">
                        <HeroUI />
                    </div>
                </div>
            </div>
        </div>
    );
}
