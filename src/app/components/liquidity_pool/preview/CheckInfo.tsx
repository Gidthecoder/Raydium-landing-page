import { useState } from "react";

export default function CheckInfo(){
    const [category, setCategory] = useState('concentrated');
    const [subCat, setSubCat] = useState('24H')
    return (
        <div className="space-y-4 pt-2">
            <div  className="inline-flex flex-row mx-[30%] justify-center bg-cyan-900/50 rounded-full text-sm sm:text-base flex flex-row items-center gap-8 py-1 sm:py-2 px-6">
                <button onClick={()=>setCategory('concentrated')} className={category === 'concentrated'?'text-[#ecf5ff] border-b-2 border-b-cyan-400 px-2':'text-[#abc4ff] px-2'}>Concentrated</button>
                <button onClick={()=>setCategory('standard')} className={category === 'standard'?'text-[#ecf5ff] border-b-2 border-b-cyan-400 px-2':'text-[#abc4ff] px-2'}>Standard</button>
                <button onClick={()=>setCategory('all')} className={category === 'all'?'text-[#ecf5ff] border-b-2 border-b-cyan-400 px-2':'text-[#abc4ff] px-2'}>All</button>
            </div>
            <div className='flex flex-row gap-x-2 justify-center items-center text-xs sm:text-sm'>
                <span>Time base</span>
                <div className='flex flex-row gap-x-4 text-[#abc4ff] rounded-full py-1 sm:py-2 px-4 bg-gray-700/50'>
                    <button onClick={()=>setSubCat('24H')} className={subCat === '24H'?"text-[#ecf5ff]":'text-[#abc4ff]'}>24H</button>
                    <button onClick={()=>setSubCat('7D')} className={subCat === '7D'?"text-[#ecf5ff]":'text-[#abc4ff]'}>7D</button>
                    <button onClick={()=>setSubCat('30D')} className={subCat === '30D'?"text-[#ecf5ff]":'text-[#abc4ff]'}>30D</button>
                </div>
            </div>
            <div className="ml-auto w-[90%] rounded-tl-xl border border-gray-700 whitespace-nowrap border-r-transparent">
                <List category={category} subCat={subCat}/>
            </div>
        </div>
    )
}

import { StarIcon } from "../../icons";
import Image from "next/image";

function List({category, subCat}:{category:string, subCat:string}){
    const data = {
        concentrated: [
            {
                base: '24H', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-USDT', percent:'0.01%', liquidity:'$4,478,742', volume: '$226,945,929', fees:'$22,695', apr:'188.2%'},
                    {pics: ['/raydium/solana.png','/raydium/usdc.png'], name:'SOL-USDC', percent:'0.01%', liquidity:'$2,263,654', volume: '$171,842,024', fees:'$17,184', apr:'241.83%'}
                ]
            },
            {
                base: '7D', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-USDT', percent:'0.01%', liquidity:'$4,478,742', volume: '$1,724,827,025', fees:'$172,483', apr:'118.78%'},
                    {pics: ['/raydium/solana.png','/raydium/usdc.png'], name:'SOL-USDC', percent:'0.01%', liquidity:'$2,263,654', volume: '$1,140,575,645', fees:'$114,058', apr:'133.79%'}
                ]
            },
            {
                base: '30D', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-USDT', percent:'0.01%', liquidity:'$4,478,742', volume: '$4,272,975,832', fees:'$427,298', apr:'117.78%'},
                    {pics: ['/raydium/solana.png','/raydium/usdc.png'], name:'SOL-USDC', percent:'0.01%', liquidity:'$2,263,654', volume: '$2,943,741,572', fees:'$294,374', apr:'137.79%'}
                ]
            }
        ],
        standard: [
            {
                base: '24H', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-Pnut', percent:'0.25%', liquidity:'$21,344,197', volume: '$136,119,992', fees:'$340,300', apr:'581.97%'},
                    {pics: ['/raydium/solana.png','/raydium/usdc.png'], name:'SOL-BITCAT', percent:'0.25%', liquidity:'$1,844,995', volume: '$117,738,475', fees:'$294,346', apr:'999.99%'}
                ]
            },
            {
                base: '7D', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-Pnut', percent:'0.25%', liquidity:'$21,344,197', volume: '$1,089,670,908', fees:'$2,274,300', apr:'382.97%'},
                    {pics: ['/raydium/solana.png','/raydium/usdc.png'], name:'SOL-BITCAT', percent:'0.25%', liquidity:'$1,844,995', volume: '$117,738,475', fees:'$294,346', apr:'478.99%'}
                ]
            },
            {
                base: '30D', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-Pnut', percent:'0.25%', liquidity:'$21,344,197', volume: '$1,850,639,935', fees:'$4,626,600', apr:'260.14%'},
                    {pics: ['/raydium/solana.png','/raydium/usdc.png'], name:'SOL-BITCAT', percent:'0.25%', liquidity:'$1,844,995', volume: '$117,738,475', fees:'$294,346', apr:'191.45%'}
                ]
            }
        ],
        all: [
            {
                base: '24H', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-USDT', percent:'0.01%', liquidity:'$4,478,742', volume: '$226,945,929', fees:'$22,695', apr:'188.2%'},
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-Pnut', percent:'0.25%', liquidity:'$21,344,197', volume: '$136,119,992', fees:'$340,300', apr:'581.97%'}
                ]
            },
            {
                base: '7D', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-USDT', percent:'0.01%', liquidity:'$4,478,742', volume: '$1,724,827,025', fees:'$172,483', apr:'118.78%'},
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-Pnut', percent:'0.25%', liquidity:'$21,344,197', volume: '$1,089,670,908', fees:'$2,274,300', apr:'382.97%'}
                ]
            },
            {
                base: '30D', 
                data: [
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-USDT', percent:'0.01%', liquidity:'$4,478,742', volume: '$4,272,975,832', fees:'$427,298', apr:'117.78%'},
                    {pics: ['/raydium/solana.png','/raydium/usdt.png'], name:'SOL-Pnut', percent:'0.25%', liquidity:'$21,344,197', volume: '$1,850,639,935', fees:'$4,626,600', apr:'260.14%'}
                ]
            }
        ]
    }

    const filtered = data[category as keyof typeof data].filter((item:any) => item.base === subCat)[0].data

    return (
        <table className="w-full rounded-tl-xl">
            <thead>
                <tr className=" text-gray-400 bg-black">
                    <th className="rounded-tl-xl"></th>
                    <th className="text-xs sm:text-sm text-center p-2 sm:p-4">Pool</th>
                    <th className="text-xs sm:text-sm text-center">Liquidity</th>
                    <th className="text-xs sm:text-sm text-center">Volume 24H</th>
                    <th className="text-xs sm:text-sm text-center">Fees 24H</th>
                    <th className="text-xs sm:text-sm text-center">APR 24H</th>
                </tr>
            </thead>
            <tbody>
                {
                    filtered.map((item:any) =>
                        <tr key={item.liquidity} className="border-t border-gray-800">
                            <td className='p-2 sm:p-4'><StarIcon className='fill-white'/></td>
                            <td className="p-2 sm:p-4 flex items-center gap-4">
                                <div className='flex flex-row'>
                                    <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="w-5 h-5 rounded-full">
                                        <Image alt={item.pics[0]} src={item.pics[0]} width={14} height={14} className="my-[3px] mx-[3px] rounded-full"/>
                                    </div>
                                    <div style={{background: 'linear-gradient(127deg, rgba(171, 196, 255, 0.20) 28.69%, rgba(171, 196, 255, 0.00) 100%) #0b102280'}} className="w-5 h-5 rounded-full">
                                        <Image alt={item.pics[1]} src={item.pics[1]} width={14} height={14} className="my-[3px] mx-[3px] rounded-full"/>
                                    </div>
                                </div>
                                <div>
                                    <span className="block font-medium text-xs  sm:text-sm text-[#ecf5ff]">{item.name}</span>
                                    <span className="inline-block text-[10px] sm:text-xs bg-[#1c243e4d] text-[#abc4ff] px-2 py-1">{item.percent}</span>
                                </div>
                            </td>
                            <td className="text-right text-[#ecf5ff] text-xs sm:text-sm">{item.liquidity}&nbsp;</td>
                            <td className="text-right text-[#ecf5ff] text-xs sm:text-sm">{item.volume}&nbsp;</td>
                            <td className="text-right text-[#ecf5ff] text-xs sm:text-sm">{item.fees}</td>
                            <td className=" text-right text-xs sm:text-sm">{item.apr}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}