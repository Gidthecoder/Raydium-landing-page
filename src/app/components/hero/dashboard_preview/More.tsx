
import { StakingIcon, BridgeIcon, DocsIcon, ExternalLinkIcon, FeedbackIcon, XIcon, TelegramIcon, DiscordIcon } from "../../icons";

interface MoreProps {
  handleClick: (value:string) => void; 
  setMoreVisible: (visible: boolean) => void; 
}

export default function More({handleClick, setMoreVisible}:MoreProps) {
  const navigate = (value:string) => {
    handleClick(value)
    setMoreVisible(false)
  }
  return (
    <div className="absolute z-[4] mt-2 w-48 rounded-md shadow-lg bg-[hsl(224,9%,21%)] ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a onClick={()=>navigate('staking')}  className="flex flex-row gap-x-1 px-5 py-2.5 text-sm text-[#00D1FF] hover:bg-gray-900 flex items-center" role="menuitem">
              <StakingIcon/>
              Staking
            </a>
            <a onClick={()=>navigate('bridge')} className="flex flex-row gap-x-1 px-5 py-2.5 text-sm text-[#00D1FF] hover:bg-gray-900 flex items-center" role="menuitem">
              <BridgeIcon/>
              Bridge
            </a>
            <div className="mx-5 my-2.5 border-b-[0.5px] border-b-gray-700 "></div>
            <a onClick={()=>setMoreVisible(false)} className="px-5 py-2.5 text-sm text-[#00D1FF] hover:bg-gray-900 flex items-center gap-x-1" role="menuitem" >
              <DocsIcon/>
              <span>Docs</span>
              <ExternalLinkIcon/>
            </a>
            <a onClick={()=>setMoreVisible(false)} href="#" className="px-5 py-2.5 text-sm text-[#00D1FF] hover:bg-gray-900 flex gap-x-1 items-center" role="menuitem" >
              <FeedbackIcon/>
              <span>Feedback</span>
              <ExternalLinkIcon/>
            </a>
          </div>
          <div className="border-t border-gray-800 my-1"></div>
          <div className="flex justify-around py-2 bg-[#abc4ff12]">
            <a onClick={()=>setMoreVisible(false)} className="text-[#00D1FF]">
              <XIcon/>
            </a>
            <a onClick={()=>setMoreVisible(false)} className="text-[#00D1FF]">
              <TelegramIcon/>
            </a>
            <a onClick={()=>setMoreVisible(false)} className="text-[#00D1FF]">
              <DiscordIcon/>
            </a>
          </div>
        </div>
      
  );
}