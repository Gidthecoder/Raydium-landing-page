import { BalanceWallet } from "@/app/components/icons";


export default function TokenToSwap({type, primary, disabled=true, secondary,  inverse=false, handleChange}:any){
  return (
    <>
      <div className="bg-[#0b102280] rounded-lg">
        <div className="flex flex-row justify-between items-center py-1 sm:py-2 px-[18px]">
          <div>
            <p className="text-[10px] sm:text-xs text-[#ecf5ff] font-semibold">{type}</p>
          </div>
          <div className="flex flex-row items-center gap-x-2 text-[#abc4ff80]">
            <BalanceWallet/>
            <a className="text-sm text-[#abc4ff80]">0</a>
            <span className="text-[10px] bg-[#abc4ff1f] px-1.5 rounded-sm">Max</span>
            <span className="text-[10px] bg-[#abc4ff1f] px-1.5 rounded-sm">50%</span>
          </div>
        </div>
  
        <div className="flex flex-row gap-x-4 bg-[hsl(227,10%,10%)] py-2 px-[18px] rounded-lg">
          <div className="flex-none px-3 rounded-lg text-[#ECF5FF] cursor-pointer bg-[hsl(224,9%,21%)] flex flex-row items-center gap-x-2">
            
            <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="flex-none rounded-full">
              <img src={inverse?secondary.pics:primary.pics} className="w-3 h-3 sm:w-4 sm:h-4 m-1 sm:m-1.5 block rounded-full"/>
            </div>
            <div>
              <span className="text-base sm:text-xl flex-none">{inverse?secondary.name:primary.name}</span>
            </div>
          </div>
          <div className="grow">
            <input type='text' onChange={(e)=>handleChange(e, primary, secondary, inverse)} name={inverse?secondary.name:primary.name} value={inverse?secondary.value:primary.value} disabled={disabled} className='text-[#ecf5ff] text-base sm:text-xl bg-inherit block outline-none w-full text-right'/>
            <p className="text-xs text-gray-400 text-right">{inverse?secondary.dollarEquiv:primary.dollarEquiv}</p>
          </div>
        </div>
      </div>
     
    </>
    )
  }