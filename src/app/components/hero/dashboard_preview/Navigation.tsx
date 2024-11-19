
import More from "./More";

import { useState } from "react";

import useScrollStore from "@/stores/useScrollStore";

export default function Navigation(){
    const [moreVisible, setMoreVisible] = useState(false);
    const [current, setCurrent] = useState('swap');

    const setShouldScroll = useScrollStore((state) => state.setShouldScroll);

    const handleClick = (value:string) => {
        setShouldScroll(value)
        setCurrent(value)
    }

    return (
        <nav className="flex items-center justify-between py-1 sm:py-3 px-5 xl:px-10 border-b border-gray-800">
            <div className="flex flex-row items-center gap-x-[88px]">
                <div>
                    <RaydiumLogo/>
                </div>
                <div className="hidden lg:flex flex-row text-sm xl:text-base gap-x-4">
                    <a onClick={()=>handleClick('swap')}  className={`${current === 'swap' ? 'text-[#ABC4FF]': 'text-[#ABC4FF80]'} hover:bg-[#abc4ff1f] rounded-lg cursor-pointer transition-all hover:no-underline py-1 px-3`}>Swap</a>
                    <a onClick={()=>handleClick('liquidity')} className={`${current === 'liquidity' ? 'text-[#ABC4FF]': 'text-[#ABC4FF80]'} hover:bg-[#abc4ff1f] rounded-lg cursor-pointer transition-all hover:no-underline py-1 px-3`}>Liquidity</a>
                    <a onClick={()=>handleClick('portfolio')} className={`${current === 'portfolio' ? 'text-[#ABC4FF]': 'text-[#ABC4FF80]'} text-[#ABC4FF80] hover:bg-[#abc4ff1f] rounded-lg cursor-pointer transition-all hover:no-underline py-1 px-3`}>Portfolio</a>
                    <div>
                        <a onClick={()=>setMoreVisible(!moreVisible)} className={`flex flex-row justify-center items-center gap-x-1 font-medium text-[#ABC4FF80] ${moreVisible && 'bg-[#abc4ff1f]'} hover:bg-[#abc4ff1f] rounded-lg cursor-pointer transition-all hover:no-underline py-1 px-3`}>
                            <span>{current === 'staking'? 'Staking': current === 'bridge'? 'Bridge': 'More'}</span> <CaretDown/>
                        </a>
                        {
                            moreVisible && 
                            <>
                                <div onClick={()=>setMoreVisible(false)} className="z-[3] bg-transparent fixed inset-0"></div>
                                <More handleClick={handleClick} setMoreVisible={setMoreVisible}/>
                            </>
                        }
                    </div>
                </div>
            </div>
  
            <div className="flex items-center md:text-sm xl:text-base space-x-2">
                <button className="hidden md:flex items-center font-semibold border border-transparent transition-all hover:border-[#00D1FF] hover:bg-gray-800 rounded-full px-3 py-1">
                    <span className="text-gray-400 mr-2">Priority:</span>
                    <span className="text-[#00D1FF]">Turbo</span>
                </button>
                <button className=" p-2 rounded-full hover:bg-gray-800">
                    <SettingsIcon/>
                </button>
                <button onClick={()=>handleClick('connect')} className="text-xs md:text-sm bg-[#00D1FF] text-black hover:bg-[#00D1FF]/90 py-1 px-3 font-semibold rounded-lg">Connect Wallet</button>
            </div>
      </nav>
    )
}

function RaydiumLogo(){
    return (
        <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-[30px] sm:h-[30px]"><path d="M34.3297 15.8661V28.7492L20 37.021L5.66234 28.7492V12.1978L20 3.91808L31.013 10.2797L32.6753 9.32068L20 2L4 11.2388V29.7083L20 38.947L36 29.7083V14.9071L34.3297 15.8661Z" fill="url(#a)"></path><path d="M15.988 28.7572H13.5904V20.7173H21.5824C22.3385 20.7089 23.061 20.4031 23.5934 19.8662C24.1259 19.3293 24.4255 18.6043 24.4276 17.8481C24.4319 17.4742 24.3597 17.1034 24.2154 16.7584C24.0711 16.4134 23.8577 16.1016 23.5884 15.8421C23.3278 15.5743 23.0158 15.362 22.6711 15.2178C22.3264 15.0736 21.9561 15.0005 21.5824 15.003H13.5904V12.5574H21.5904C22.991 12.5658 24.3319 13.1259 25.3222 14.1163C26.3126 15.1067 26.8727 16.4475 26.8811 17.8481C26.8897 18.9202 26.5627 19.9681 25.9461 20.8451C25.3785 21.6842 24.5786 22.3397 23.6444 22.7313C22.7193 23.0246 21.7537 23.1703 20.7832 23.1628H15.988V28.7572Z" fill="url(#b)"></path><path d="M26.8252 28.5574H24.028L21.8701 24.7932C22.7238 24.741 23.5659 24.5688 24.3716 24.2817L26.8252 28.5574Z" fill="url(#c)" ></path><path d="M32.6593 13.1888L34.3137 14.1079L35.968 13.1888V11.2467L34.3137 10.2877L32.6593 11.2467V13.1888Z" fill="url(#d)"  ></path><defs><linearGradient id="a" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse" ><stop stopColor="#C200FB"></stop><stop offset="0.489658" stopColor="#3772FF"></stop><stop offset="1" stopColor="#5AC4BE" ></stop></linearGradient><linearGradient id="b" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse"><stop stopColor="#C200FB"  ></stop><stop offset="0.489658" stopColor="#3772FF"  ></stop><stop offset="1" stopColor="#5AC4BE"  ></stop></linearGradient><linearGradient id="c" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse" ><stop stopColor="#C200FB"  ></stop><stop offset="0.489658" stopColor="#3772FF"  ></stop><stop offset="1" stopColor="#5AC4BE"  ></stop></linearGradient><linearGradient id="d" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse" ><stop stopColor="#C200FB"  ></stop><stop offset="0.489658" stopColor="#3772FF"  ></stop><stop offset="1" stopColor="#5AC4BE"  ></stop></linearGradient></defs></svg>
    )
}

function CaretDown(){
    return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg" ><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    )
}

function SettingsIcon(){
    return (
        <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="#abc4ff" stroke="none" strokeWidth="1.4" strokeLinecap="round"><g clipPath="url(#clip0_20584_4388)" ><path d="M23.0603 15.0496L21.3058 13.5496C21.3888 13.0406 21.4317 12.521 21.4317 12.0013C21.4317 11.4817 21.3888 10.9621 21.3058 10.4531L23.0603 8.95312C23.1926 8.83984 23.2873 8.68895 23.3318 8.52053C23.3763 8.35211 23.3685 8.17413 23.3094 8.01027L23.2853 7.94062C22.8023 6.59069 22.079 5.33929 21.1505 4.24687L21.1022 4.19062C20.9896 4.05817 20.8395 3.96296 20.6716 3.91754C20.5038 3.87211 20.3261 3.87861 20.1621 3.93616L17.9844 4.71027C17.1808 4.05134 16.2835 3.5317 15.3138 3.16741L14.8933 0.890625C14.8616 0.719309 14.7785 0.561703 14.655 0.438744C14.5316 0.315785 14.3737 0.233295 14.2022 0.202232L14.1299 0.188839C12.7344 -0.0629464 11.2665 -0.0629464 9.87099 0.188839L9.79867 0.202232C9.62723 0.233295 9.4693 0.315785 9.34586 0.438744C9.22243 0.561703 9.13932 0.719309 9.1076 0.890625L8.68438 3.17812C7.72248 3.54249 6.8267 4.06185 6.0326 4.71562L3.83884 3.93616C3.67482 3.87815 3.49703 3.87142 3.3291 3.91687C3.16116 3.96233 3.01104 4.05781 2.89867 4.19062L2.85045 4.24687C1.92299 5.34006 1.19985 6.59126 0.71563 7.94062L0.691523 8.01027C0.570988 8.34509 0.670095 8.72009 0.94063 8.95312L2.71652 10.4692C2.63349 10.9728 2.59331 11.4871 2.59331 11.9987C2.59331 12.5129 2.63349 13.0272 2.71652 13.5281L0.94063 15.0442C0.808298 15.1575 0.713585 15.3084 0.669088 15.4768C0.62459 15.6452 0.632415 15.8232 0.691523 15.9871L0.71563 16.0567C1.20045 17.4067 1.91831 18.6522 2.85045 19.7504L2.89867 19.8067C3.01131 19.9391 3.16144 20.0344 3.32928 20.0798C3.49711 20.1252 3.67477 20.1187 3.83884 20.0612L6.0326 19.2817C6.83081 19.9379 7.72277 20.4576 8.68438 20.8192L9.1076 23.1067C9.13932 23.278 9.22243 23.4356 9.34586 23.5586C9.4693 23.6815 9.62723 23.764 9.79867 23.7951L9.87099 23.8085C11.2793 24.0616 12.7216 24.0616 14.1299 23.8085L14.2022 23.7951C14.3737 23.764 14.5316 23.6815 14.655 23.5586C14.7785 23.4356 14.8616 23.278 14.8933 23.1067L15.3138 20.8299C16.2831 20.4666 17.1855 19.9452 17.9844 19.2871L20.1621 20.0612C20.3261 20.1192 20.5039 20.1259 20.6718 20.0804C20.8397 20.035 20.9899 19.9395 21.1022 19.8067L21.1505 19.7504C22.0826 18.6496 22.8005 17.4067 23.2853 16.0567L23.3094 15.9871C23.4299 15.6576 23.3308 15.2826 23.0603 15.0496V15.0496ZM19.404 10.7692C19.471 11.1737 19.5058 11.5888 19.5058 12.004C19.5058 12.4192 19.471 12.8344 19.404 13.2388L19.2272 14.3129L21.2281 16.0246C20.9248 16.7234 20.5419 17.3849 20.0871 17.996L17.6013 17.1147L16.7603 17.8058C16.1201 18.3308 15.4076 18.7433 14.6362 19.0326L13.6156 19.4156L13.1362 22.0138C12.3797 22.0996 11.6159 22.0996 10.8594 22.0138L10.3799 19.4103L9.36742 19.0219C8.60402 18.7326 7.8942 18.3201 7.25938 17.7978L6.41831 17.104L3.91652 17.9933C3.46117 17.3799 3.08081 16.7183 2.77545 16.0219L4.79777 14.2942L4.62367 13.2228C4.55938 12.8237 4.52456 12.4112 4.52456 12.004C4.52456 11.5942 4.5567 11.1844 4.62367 10.7853L4.79777 9.71384L2.77545 7.98616C3.07813 7.28705 3.46117 6.62812 3.91652 6.01473L6.41831 6.90402L7.25938 6.21027C7.8942 5.68795 8.60402 5.27545 9.36742 4.98616L10.3826 4.60312L10.8621 1.99955C11.6147 1.91384 12.3835 1.91384 13.1388 1.99955L13.6183 4.59777L14.6388 4.9808C15.4076 5.27009 16.1228 5.68259 16.763 6.20759L17.604 6.89866L20.0897 6.01741C20.5451 6.6308 20.9255 7.29241 21.2308 7.98884L19.2299 9.70045L19.404 10.7692ZM12.0031 7.02187C9.39956 7.02187 7.28885 9.13259 7.28885 11.7362C7.28885 14.3397 9.39956 16.4504 12.0031 16.4504C14.6067 16.4504 16.7174 14.3397 16.7174 11.7362C16.7174 9.13259 14.6067 7.02187 12.0031 7.02187ZM14.1246 13.8576C13.8463 14.1366 13.5156 14.3579 13.1516 14.5087C12.7875 14.6595 12.3972 14.7368 12.0031 14.7362C11.2022 14.7362 10.4496 14.4228 9.8817 13.8576C9.60266 13.5793 9.38138 13.2487 9.2306 12.8846C9.07982 12.5205 9.00252 12.1302 9.00313 11.7362C9.00313 10.9353 9.31652 10.1826 9.8817 9.61473C10.4496 9.04687 11.2022 8.73616 12.0031 8.73616C12.804 8.73616 13.5567 9.04687 14.1246 9.61473C14.4036 9.89298 14.6249 10.2236 14.7757 10.5877C14.9264 10.9518 15.0037 11.3421 15.0031 11.7362C15.0031 12.5371 14.6897 13.2897 14.1246 13.8576Z"></path></g><defs><clipPath id="clip0_20584_4388" ><rect width="24" height="24"></rect></clipPath></defs></svg>
    )
}
