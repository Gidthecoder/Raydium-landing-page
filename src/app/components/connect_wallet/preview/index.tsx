import { ClearIcon, QuestionIcon, WalletIcon, EggIcon, Moonpay, CaretDown } from "@/app/components/icons";

import { useState, useEffect } from "react";

import { CopyIcon } from "../../icons";

interface ButtonProps {
  setStatus: (status: string) => void;
}

function Button({ setStatus }: ButtonProps) {
  const [trigger, setTrigger] = useState(false);
  useEffect(()=>{
    setTrigger(true)
  }, [])

  return (
    <p className={`duration-500 ease-out transition-all ${trigger ? 'opacity-100' : 'opacity-0'} flex flex-row justify-center`}>
      <button onClick={()=>setStatus('wallet')} style={{boxShadow: '0px 0px 40px 5px hsla(191,100%,50%,0.345)'}} className="bg-[#00D1FF] text-black hover:bg-[#00D1FF]/90 py-2 px-4 font-semibold rounded-lg">Connect Wallet</button>
    </p>
    
  )
}
 export default function Connect() {
    const [status, setStatus] = useState('connect');
    const [connected, setConnected] = useState({pics:'/raydium/solana.png', address:'LEXF...R3DU9'})
    return (
      <div>
        {
          status === 'connect'?
          <Button setStatus={setStatus}/>:
          status === 'wallet'?
          <Wallets setStatus={setStatus} setConnected={setConnected}/>:
          status === 'connected'?
          <Connected connected={connected} setStatus={setStatus}/>:
          ''
        }
        
      </div>
    )
  }
 
  interface ConnectedProps {
    connected: {pics:string, address:string}; 
    setStatus: (status: string) => void; 
}

  function Connected({connected, setStatus}:ConnectedProps){
    const [trigger, setTrigger] = useState(false);
    useEffect(()=>{
      setTrigger(true)
    }, [])

    return (
      <div className={`duration-500 ease-out transition-all ${trigger ? 'opacity-100' : 'opacity-0'} w-[300px] lg:w-[400px] bg-gradient-to-br from-[hsl(224,9%,21%)] to-black rounded-xl`}>
        <div className="p-4 pt-10 rounded-t-xl flex gap-2 flex-col items-center">
          <img src={connected.pics} width={40} height={40} className="rounded-full"/>
          <p className="flex flex-row gap-2 items-center">
            <span>{connected.address}</span>
            <CopyIcon/>
          </p>
        </div>

        <button onClick={()=>setStatus('connect')} className="p-4 rounded-b-xl w-full bg-[#abc4ff1f]">
          Disconnect
        </button>
      </div>
    )
  }
  function Wallets({setStatus, setConnected}:any){
    const handleClick = ( pics:string, address:string)=> {
      setStatus('connected')
      setConnected({pics:pics, address:address})
    }

    const [trigger, setTrigger] = useState(false);
    useEffect(()=>{
      setTrigger(true)
    }, [])
    
    return (
      <div className={`duration-500 ease-out transition-all ${trigger ? 'opacity-100' : 'opacity-0'} lg:w-[600px] bg-gradient-to-br from-[hsl(224,9%,21%)] to-black py-3 sm:py-[18px] px-3 sm:px-6 rounded-lg text-white border-gray-800`}>
          <p className="flex flex-row items-center justify-between pt-[10px] pb-[18px]">
            <span className="text-base sm:text-[24px] text-[#ecf5ff] font-semibold">Connect your wallet to Raydium</span>
            <button onClick={()=>setStatus('connect')} className=" text-[#ecf5ff] hover:bg-gray-700 rounded-full p-2"><ClearIcon/></button>
          </p>
  
          <div className="text-[#abc4ff80] bg-[#abc4ff12] p-3 rounded-md text-xs sm:text-sm mb-5">
            By connecting your wallet, you acknowledge that you have read, understand and accept the terms in the{" "}
            <a href="#" className="text-[#22d1f8] hover:underline">
              disclaimer
            </a>
          </div>
  
          <div className="space-y-4 mb-6">
            <h2 className="text-base text-[#ecf5ff] font-semibold">Choose wallet</h2>
  
            <div className="grid grid-cols-2  gap-3">
              
              <button onClick={()=>handleClick('/raydium/phantom.svg', 'eyeg...ei39d')} className="sm:col-span-1 col-span-2 flex flex-row items-center gap-x-2 bg-[hsl(227,10%,10%)] p-3 rounded-md">
                <img alt='phantom icon' src='/raydium/phantom.svg' className="w-5 h-5 sm:w-8 sm:h-8"/>
                <span className="text-xs sm:text-base font-semibold">Phantom</span>
                
                <div className="text-[10px] sm:text-xs bg-[#abc4ff1a] text-[#8c6eef] py-1 px-2 rounded-md flex gap-x-1 items-center">
                  Auto Confirm
                  <QuestionIcon/>
                </div>
              </button>
  
              <button onClick={()=>handleClick('/raydium/solflare.svg', 'eyeg...ei39d')} className="sm:col-span-1 col-span-2 flex flex-row items-center gap-x-2  bg-[hsl(227,10%,10%)] p-3 rounded-md">
                <img alt='solflare icon' src='/raydium/solflare.svg' className="w-5 h-5 sm:w-8 sm:h-8"/>
                <span className="text-xs sm:text-base font-semibold">Solflare</span>
                
                <div className="text-[10px] sm:text-xs bg-[#abc4ff1a] text-[#8c6eef] py-1 px-2 rounded-md flex gap-x-1 items-center">
                  Auto Approve
                  <QuestionIcon/>
                </div>
              </button>

              <button onClick={()=>handleClick('/raydium/ethereum wallet.svg', 'eyeg...ei39d')} className="flex flex-row items-center gap-x-2  bg-[hsl(227,10%,10%)] p-3 rounded-md">
                <img alt='ethereum wallet icon' src='/raydium/ethereum wallet.svg'  className="w-5 h-5 sm:w-8 sm:h-8"/>
                <span className="text-xs sm:text-base font-semibold">Ethereum Wallet</span>
              </button>
              
              <button onClick={()=>handleClick('/raydium/google.svg', 'eyeg...ei39d')} className="flex flex-row items-center gap-x-2  bg-[hsl(227,10%,10%)] p-3 rounded-md">
                <img alt='google wallet icon' src='/raydium/google.svg' className="w-5 h-5 sm:w-8 sm:h-8"/>
                <span className="text-xs sm:text-base font-semibold">Sign in with Google</span>
              </button>
  
              <button onClick={()=>handleClick('/raydium/apple.svg', 'eyeg...ei39d')} className="flex flex-row items-center gap-x-2  bg-[hsl(227,10%,10%)] p-3 rounded-md">
                <img alt='apple wallet icon' src='/raydium/apple.svg' className="w-5 h-5 sm:w-8 sm:h-8"/>
                <span className="text-xs sm:text-base font-semibold">Sign in with Apple</span>
              </button>
  
              <button onClick={()=>handleClick('/raydium/torus.svg', 'eyeg...ei39d')} className="flex flex-row items-center gap-x-2  bg-[hsl(227,10%,10%)] p-3 rounded-md">
                <img alt='torus wallet icon' src='/raydium/torus.svg' className="w-5 h-5 sm:w-8 sm:h-8"/>
                <span className="text-xs sm:text-base font-semibold">Torus</span>
              </button>
            </div>
  
            
            <div className="flex bg-[#abc4ff12] mb-3 items-center justify-between py-2 sm:py-4 px-5 rounded-lg">
              <div className="text-xs sm:text-sm  text-[#abc4ff] flex items-center space-x-2">
                <WalletIcon/>
                <span className="text-gray-400">Show uninstalled wallets</span>
              </div>
              <Switch />
            </div>
  
            <div className="flex bg-[#abc4ff12] mb-3 items-center justify-between py-2 sm:py-4 px-5 rounded-lg">
              <div className="text-xs sm:text-sm text-[#abc4ff] flex items-center space-x-2">
                <EggIcon/>
                <span className="text-gray-400">New here?</span>
              </div>
              <a className="flex flex-row gap-x-1 text-xs sm:text-sm text-[#00D1FF]">
                Get started on Raydium 
                <span className="rotate-[270deg]">
                  <CaretDown/>
                </span>
              </a>
            </div>

            
            <p className="flex flex-row justify-center text-[#bfd2ff] text-[10px] sm:text-xs hover:text-white">
              Buy Crypto with fiat{" "}
              <Moonpay/>{" "}
              <span className="rotate-[270deg]">
                  <CaretDown/>
                </span>
            </p>
          </div>
        </div>
    )
  }
  const Switch = () => {
    const [enabled, setEnabled] = useState(false);

    const handleChange = () => {
      setEnabled(!enabled)
    }

    return (
      <button
        type="button"
        onClick={handleChange}
        className={`
         sm:w-11 w-8 sm:h-6 h-5 
          rounded-full
          relative inline-flex
          bg-[#abc4ff1f]
          transition-colors duration-200
         
        `}
      >
        <span
          className={`
            h-4 sm:h-5 sm:w-5 w-4
            ${enabled? 'bg-[#00D1FF]':'bg-gray-400'}
            rounded-full
            inline-block
            transform transition-transform duration-200
            m-0.5
            ${enabled ? 'sm:translate-x-5 translate-x-3' : 'translate-x-0'}
          `}
        />
      </button>
    );
  };