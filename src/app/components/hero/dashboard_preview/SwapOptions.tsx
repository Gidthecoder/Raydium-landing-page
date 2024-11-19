import { CreditCardIcon, FilterIcon, ColoredSwapIcon } from "@/app/components/icons";

interface SwapOptionProps {
  isSwapped: boolean;
  toggleSwapPosition: () => void 
}
export default function SwapOptions({isSwapped=false, toggleSwapPosition}:SwapOptionProps){
 
    return (
      <div className={isSwapped?'col-span-3':'col-span-2 w-full'}>
          <div className=" flex items-center justify-between">
            <button className="flex flex-row gap-x-1  items-center">
              <CreditCardIcon/>
              <span className="text-xs sm:text-sm text-[#00D1FF]">Buy</span>
            </button>      
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="group flex flex-row gap-x-1 items-center text-[10px] sm:text-xs sm:py-[2px] px-2 border border-transparent transition-all hover:border-[#00D1FF] hover:text-[#00D1FF] bg-gray-800 rounded-full ">
                <FilterIcon />
                <span>0.5%</span>
              </div>
              <LinkIcon/>
              <div className='hidden xl:block cursor-pointer' onClick={toggleSwapPosition}>
                <ColoredSwapIcon/>
              </div>
              <ChartIcon/>
            </div>
          </div>
        </div>
    )
  }

  function LinkIcon(){
    return (
        <svg className="w-[14px] h-[14px] sm:w-4 sm:h-4" viewBox="0 0 18 18" fill="none"  xmlns="http://www.w3.org/2000/svg"><path d="M7.5918 9.70521C7.89412 10.1098 8.27984 10.4446 8.72278 10.6869C9.16572 10.9291 9.65552 11.0732 10.159 11.1093C10.6624 11.1454 11.1677 11.0726 11.6406 10.8961C12.1135 10.7195 12.543 10.4431 12.8998 10.0858L15.0117 7.97158C15.6529 7.30701 16.0077 6.41692 15.9997 5.49303C15.9917 4.56914 15.6215 3.68537 14.9689 3.03205C14.3163 2.37874 13.4334 2.00816 12.5105 2.00013C11.5876 1.9921 10.6985 2.34727 10.0346 2.98913L8.82376 4.19422" stroke="#8C6EEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ></path><path d="M10.408 8.29587C10.1057 7.89127 9.71999 7.55648 9.27705 7.31423C8.83411 7.07197 8.34431 6.92791 7.84086 6.89181C7.33741 6.85572 6.8321 6.92844 6.3592 7.10503C5.88629 7.28163 5.45686 7.55797 5.10002 7.91532L2.98808 10.0295C2.3469 10.6941 1.99211 11.5842 2.00013 12.5081C2.00815 13.4319 2.37834 14.3157 3.03096 14.969C3.68357 15.6223 4.56641 15.9929 5.48932 16.001C6.41222 16.009 7.30136 15.6538 7.96522 15.012L9.16902 13.8069" stroke="#22D1F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ></path></svg>
    )
  }
  
  function ChartIcon(){
    return (
      <svg viewBox="0 0 18 18" className="w-[14px] h-[14px] sm:w-4 sm:h-4" fill="none" focusable="false"  data-sentry-element="svg"  ><path d="M1 2.5V15.5H17" stroke="#22D1F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></path><rect x="3.5" y="6" width="3" height="7" fill="#22D1F8" ></rect><rect x="8.5" y="4" width="3" height="9" fill="#8C6EEF"  ></rect><rect x="13.5" y="2" width="3" height="11" fill="#22D1F8"  ></rect></svg>
    )
  }