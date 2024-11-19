import { useState, useRef, useEffect } from "react";

export default function Stats(){
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
    <div ref={ref} className="w-full pt-40 relative z-[2] bg-black">
        <div className="sm:grid sm:grid-cols-3 flex flex-col w-[60%] text-center mx-auto sm:gap-2 gap-10">
            <div className={`space-y-2 text-2xl lg:text-3xl  duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}>
                <p className=" font-semibold">$466M</p>
                <p className="text-base text-gray-400">Daily Volume</p>
            </div>

            <div className={`space-y-2 text-2xl lg:text-3xl delay-100 duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}>
                <p className=" font-semibold">10M</p>
                <p className="text-base text-gray-400">Active Users</p>
            </div>

            <div className={`space-y-2 text-2xl lg:text-3xl delay-200 duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}>
                <p className=" font-semibold">$1.8B</p>
                <p className="text-base text-gray-400">TVL</p>
            </div>
        </div>
    </div>
    )
}
