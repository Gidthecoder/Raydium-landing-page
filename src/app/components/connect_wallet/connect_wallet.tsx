import Connect from "./preview";

import { useState, useRef, useEffect } from "react";

import useScrollStore from "@/stores/useScrollStore";


export default function ConnectWallet(){
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null); 

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
        if (shouldScroll === 'connect' && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });

            setShouldScroll('');
        }
    }, [shouldScroll]); 

    return (
        <div ref={heroRef} className="flex flex-col lg:flex-row items-center pt-40 gap-4 lg:w-[80%] lg:mx-auto m-4">
            <div ref={ref} className={`order-last text-center lg:text-left lg:w-[50%] flex-none space-y-2 md:space-y-4 lg:px-10 duration-500 ease-out transform ${isVisible ? 'opacity-100 lg:translate-x-0 ' : 'opacity-0 lg:translate-x-[-200px]'}`}>
                <p className="text-2xl md:text-3xl font-semibold">Connect to over 10 wallets</p>
                <p className="text-base md:text-xl text-gray-400">Easily link your favorite wallet—whether it’s MetaMask, Coinbase, Phantom, Solflare, or others. Start trading and earning in seconds, no matter which wallet you use.</p>
            </div>
            <div role="presentation" aria-hidden='true' tab-index='-1' className={`no-select p-4 lg:order-last w-full lg:w-[50%] flex items-center justify-center delay-200 duration-500 ease-out transform ${isVisible ? 'opacity-100 lg:translate-x-0' : 'opacity-0 lg:translate-x-[200px]'}`}>
                
                    <Connect/>
                
            </div>
        </div>
    )
}