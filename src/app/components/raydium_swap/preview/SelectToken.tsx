import { ClearIcon, SearchIcon, CopyIcon, ExternalLinkIcon, CaretDown } from "@/app/components/icons";
import Image from "next/image";
import { useState, useEffect } from "react";

function DropdownButton({setSelectVisible, selected}:any){
  const [trigger, setTrigger] = useState(false);
  useEffect(()=>{
    setTrigger(true)
  }, [])

  return (
    <div onClick={()=>setSelectVisible(true)} className={`duration-500 ease-out transition-all ${trigger ? 'opacity-100' : 'opacity-0'} flex flex-row justify-center` }>
        <button style={{boxShadow: '0px 0px 40px 5px hsla(191,100%,50%,0.345)'}} className="bg-[#00D1FF] p-3 rounded-lg text-black cursor-pointer flex flex-row gap-x-2 items-center">
            <div className="bg-[hsl(224,9%,21%)] w-7 h-7 rounded-full">
              <img src={selected.pics} className="w-4 h-4 mx-1.5 my-1.5 rounded-full"/>
            </div>
            <span className="text-xl">{selected.name}</span>
            <CaretDown/>
        </button>
            
      </div>
  )
}
export default function SelectToken() {
    
    const [selected, setSelected] = useState({name:'USDT', pics:'/raydium/usdt.png'})
    const [selectVisible, setSelectVisible] = useState(false);

    return (
      <div>
        {
          selectVisible?
          <TokenList setSelectVisible={setSelectVisible} setSelected={setSelected}/>:
          <DropdownButton setSelectVisible={setSelectVisible} selected={selected}/>
        }
        
      </div>
    )
  }
  
  function TokenList({setSelectVisible, setSelected}:any){
    const popularTokens = [
      {name: 'USDC', url:'/raydium/usdc.png'},
      {name: 'SOL', url:'/raydium/solana.png'},
      {name: 'RAY', url:'/raydium/raydium.png'},
      {name: 'USDT', url:'/raydium/usdt.png'}
    ];

    const tokens = [
      {
        image: '/raydium/usdc.png',
        abbr: 'USDC',
        name: 'USDC',
        balance: '0',
        address: '11111....1111111'
      },
      {
        image: '/raydium/solana.png',
        abbr: 'SOL',
        name: 'Solana',
        balance: '0',
        address: '26895....54327'
      },
      {
        image: '/raydium/raydium.png',
        abbr: 'RAY',
        name: 'Raydium',
        balance: '0',
        address: '12345....274935'
      },
      {
        image: '/raydium/usdt.png',
        abbr: 'USDT',
        name: 'USDT',
        balance: '0',
        address: '57493-....20047'
      }
    ]

    const handleClick = (value:string, url:string)=> {
      setSelected({name:value, pics:url})
      setSelectVisible(false)
    }

    const [trigger, setTrigger] = useState(false);
    useEffect(()=>{
      setTrigger(true)
    }, [])

    return (
      <div className={`duration-500 ease-out transition-all ${trigger ? 'opacity-100' : 'opacity-0'} bg-gradient-to-br from-[hsl(224,9%,21%)] to-black rounded-xl p-4 sm:p-8 text-white` }>
          <div className="flex items-center justify-between text-[#ecf5ff] mb-3 sm:mb-6">
            <p className="text-base sm:text-[20px] font-medium">Select a token</p>
            <button className='p-2' onClick={()=>setSelectVisible(false)}>
              <ClearIcon/>
            </button>
          </div>
  
          <div className="flex flex-row text-[#abc4ff] ">
            <input disabled
              className="grow bg-[hsl(227,10%,10%)] text-sm rounded-l-lg py-2 px-4"
              placeholder="Search by token or paste address"
            />
            <button className="flex-none px-4 bg-[hsl(227,10%,10%)] rounded-r-lg">
              <SearchIcon/>
            </button>
          </div>

          <div className="mb-3">
            <p className="text-sm py-3 text-gray-400">Popular tokens</p>
            <div className="flex flex-wrap gap-4">
              {
                popularTokens.map(token =>
                  <button onClick={()=>handleClick(token.name, token.url)} key={token.name} className="w-[40%] sm:w-[20%]  text-sm sm:text-base hover:bg-[#abc4ff1f] grow flex flex-row items-center gap-2 py-[6px] px-3 rounded-md bg-[hsl(227,10%,10%)] text-[#abc4ff]">
                    <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="w-5 h-5 rounded-full">
                      <Image alt={token.name} src={token.url} width={14} height={14} className="my-[3px] mx-[3px] rounded-full"/>
                    </div>
                    <span>{token.name}</span>
                  </button>
                )
              }
            </div>
          </div>

          <div className="border-t border-t-gray-700">
            <p className="flex flex-row justify-between py-[10px] text-gray-400 text-xs">
              <span>Token</span>
              <span>Balance/Address</span>
            </p>
            <div>
              {
                tokens.map(token =>
                  <div key={token.abbr} onClick={()=>handleClick(token.abbr, token.image)} className="flex gap-x-2 flex-row items-start py-3 hover:bg-[#abc4ff1f]">
                    <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="w-8 h-8 rounded-full">
                      <Image alt={token.name} src={token.image} width={22} height={22} className="my-[5px] mx-[5px] rounded-full"/>
                    </div>
                    <div className="mr-auto text-[#abc4ff]">
                      <p className="text-sm sm:text-base">{token.abbr}</p>
                      <p className="text-[10px] sm:text-xs">{token.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base text-[#abc4ff]">{token.balance}</p>
                      <div className="flex flex-row gap-x-2 text-[#abc4ff80] text-xs">
                        <span className="underline">{token.address}</span>
                        <div className="flex flex-row gap-x-1 text-[#abc4ff80]">
                          <CopyIcon/>
                          <ExternalLinkIcon/>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          
        </div>
    )
  }