
import { useState } from "react";
import { Grid } from "./SwapAnyPool";

import { ClearIcon } from "../../icons";
export default function ViewPoolChart(){
    const [open, setOpen] = useState(false)
    if (open){
        return (
            <div className="space-y-4">
                <p className="flex flex-row justify-center pt-4">
                    <button onClick={()=>setOpen(false)} className="bg-gray-500/50 text-white p-2 rounded-full"><ClearIcon/></button>
                </p>

                <div className="flex flex-col gap-2 sm:flex-row items-center justify-between w-[90%] mx-auto">
                    <div className="flex flex-row p-1 bg-[#abc4ff1f] text-xs rounded-md">
                        <button className="px-[14px] py-1 rounded-md bg-[#abc4ff2f] text-[#ecf5ff]">Volume</button>
                        <button className="px-[14px] py-1 rounded-md text-[#abc4ff]">Liquidity</button>
                    </div>
                    <div className="flex flex-row bg-[#abc4ff1f] text-xs font-semibold p-1 rounded-md">
                        <button className="px-[14px] py-1 rounded-md text-[#abc4ff] ">15m</button>
                        <button className="px-[14px] py-1 rounded-md text-[#abc4ff]">1H</button>
                        <button  className="px-[14px] py-1 rounded-md text-[#abc4ff]">4H</button>
                        <button  className="px-[14px] py-1 rounded-md text-[#abc4ff]">1D</button>
                        <button className="px-[14px] py-1 rounded-md bg-[#abc4ff2f] text-[#ecf5ff]">1W</button>
                    </div>
                </div>

                
                <div className="w-[70%] sm:w-[50%] p-2 mx-auto bg-[#abc4ff1f] rounded-t-xl">
                    <CustomBarChart/>
                </div>
            </div>
            
        )
    }

    return (
        <div className="pt-4 space-y-4">
            <p className="text-center">
                <button onClick={()=>setOpen(true)} className="text-xs sm:text-sm py-1 sm:py-2 w-48 rounded-full text-white bg-blue-600">View pool charts</button>
            </p>
            <Grid/>
        </div>
    )
}


import {
    CartesianGrid,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { time: "11/16", value: 40 },
    { time: "12/16", value: 30 },
    { time: "13/16", value: 50 },
    { time: "14/16", value: 70 },
    { time: "15/16", value: 100 },
    { time: "16/16", value: 90 },
    { time: "16/16", value: 80 },
    { time: "17/16", value: 110 },
    { time: "18/16", value: 50 },
    { time: "19/16", value: 70 },
    { time: "21/16", value: 100 },
    { time: "22/16", value: 90 },
    { time: "23/16", value: 80 },
    { time: "24/16", value: 110 },
    { time: "25/16", value: 70 },
    { time: "26/16", value: 100 },
    { time: "27/16", value: 90 },
    { time: "28/16", value: 80 },
    { time: "29/16", value: 110 }
  ];
  
  const CustomTooltip = ({ active, payload }:any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#1F2937",
            padding: "8px",
            borderRadius: "4px",
            color: "#A78BFA",
          }}
        >
          <p style={{ margin: 0 }}>Time: {payload[0].payload.time}</p>
          <p style={{ margin: 0 }}>Value: {payload[0].value}</p>
        </div>
      );
    }
  
    return null;
  };

  const CustomBarChart = () => (
    <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
    <CartesianGrid
        horizontal={true} // Enables horizontal lines
        vertical={false} // Disables vertical lines
        strokeDasharray="3 3" // Dashed lines (optional)
        stroke="#374151" // Line color
      />
      <XAxis
        dataKey="time"
        axisLine={false}
        tickLine={false}
        tick={{ fill: "#abc4ff", fontSize: 12 }}
      />
      <YAxis hide={true} />
      <Tooltip
        content={<CustomTooltip />}
        cursor={{ fill: "transparent" }}
      />
      <Bar
        dataKey="value"
        fill="#8C6EEF"
        radius={6}
        barSize={10}
        isAnimationActive={false} // Disable hover animations
      />
    </BarChart>
  </ResponsiveContainer>
  );