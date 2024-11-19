//final coding
//accessibility
//performance and readability
"use client";

import Hero from '@/app/components/hero/Hero';
import Stats from '@/app/components/stats/Stats';
import LowFees from '@/app/components/lowfees/lowfees';
import RaydiumSwap from '@/app/components/raydium_swap/raydium_swap';
import ConnectWallet from '@/app/components/connect_wallet/connect_wallet';
import LiquidityPools from '@/app/components/liquidity_pool/liquidity_pool';
import EndlessPossibilities from '@/app/components/endless_possibilities/endless_possibilities';


export default function Home() {
  return (
    <main className=" bg-black text-[#ecf5ff] font-grotesk-regular">
      <Hero/>
      <Stats/>
      <LowFees/>
      <RaydiumSwap/>
      <ConnectWallet/>
      <LiquidityPools/>
      <EndlessPossibilities/>
      <Footer/>
    </main>
  );
}

function Footer(){
  return (
      <div className="mt-20 text-base text-center">
          <p>Copyright 2024. All rights reserved.</p>
      </div>
  )
}
