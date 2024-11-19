import { useState, useEffect, useRef } from "react";

import {ClearIcon} from './icons'

function PassIcon(){
    return (
      <svg viewBox="0 0 14 14" className='w-4 h-4 sm:w-6 sm:h-6' fill="none" focusable="false" stroke="#00D1FF" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" ><path d="M12.8307 6.46407V7.00074C12.83 8.25865 12.4227 9.48263 11.6695 10.4901C10.9163 11.4976 9.85765 12.2347 8.65135 12.5913C7.44506 12.948 6.1558 12.9052 4.97584 12.4692C3.79588 12.0333 2.78844 11.2276 2.10379 10.1724C1.41913 9.11709 1.09394 7.86877 1.17671 6.61359C1.25947 5.3584 1.74577 4.16359 2.56306 3.20736C3.38035 2.25113 4.48485 1.58471 5.71184 1.30749C6.93883 1.03027 8.22255 1.1571 9.37157 1.66907"></path><path d="M12.8333 2.33203L7 8.1712L5.25 6.4212"></path></svg>
    )
  }


  
 export default function Toast({ message = "Copied successfully!", duration = 3000, handleClick }: any) {
    const [progress, setProgress] = useState(100)
  
    const ref = useRef(null);

    useEffect(() => {
  
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 10) {
            clearInterval(interval)
            ref.current.click()

            
            return 0
          }
          return prevProgress - (100 / (duration / 10))
        })
      }, 10)
  
      return () => {
        clearInterval(interval)
      }
      
    }, [])
  
    return (
      <div className='w-[300px] bg-[hsl(224,9%,21%)] mx-auto rounded-xl border border-[#00D1FF] overflow-hidden'>
        <div 
          className="h-1.5 bg-[#00D1FF] ease-linear rounded-xl" 
          style={{ width: `${progress}%` }}
        />
        <div className="flex items-center gap-2 p-4">
          <PassIcon/>
          <span className="text-sm font-medium mr-auto">{message}</span>
          <div ref={ref} onClick={handleClick} className="p-2 rounded-full hover:bg-[#abc4ff1f]"><ClearIcon/></div>
        </div>
      </div>
    )
  }