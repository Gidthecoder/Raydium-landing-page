import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

interface CandlestickData {
  time: string;  // Date string in ISO format (e.g., "2019-02-20")
  open: number;  // Opening price
  high: number;  // Highest price
  low: number;   // Lowest price
  close: number; // Closing price
}

interface VolumeData {
  time: string;  // Date string in ISO format (e.g., "2018-12-14")
  value: number; // Volume value
}

interface CandlestickChartProps {
  data: CandlestickData[];      // Array of candlestick data
  volumeData: VolumeData[];    // Array of volume data
}

const CandlestickChart = ({ data, volumeData }:CandlestickChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      layout: {
         textColor: 'white', 
         background: {
          type: 'solid',
          color: 'hsl(227,10%,10%)'
        }
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      timeScale: {
        borderColor: '#1f2937',
      },
      rightPriceScale: {
        borderColor: '#1f2937',
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#00D1FF', downColor: '#FF4EA3', borderVisible: false,
        wickUpColor: '#00D1FF', wickDownColor: '#FF4EA3',
    });

    candlestickSeries.setData(data);

     // Add volume histogram series
     const volumeSeries = chart.addHistogramSeries({
        color: '#31333a',
        priceFormat: { type: 'volume' },
        priceScaleId: ''// Place the volume series on a separate scale
      });
      volumeSeries.priceScale().applyOptions({
        // set the positioning of the volume series
        scaleMargins: {
            top: 0.9, // highest point of the series will be 70% away from the top
            bottom: 0,
        },
    });
      volumeSeries.setData(volumeData);

    return () => chart.remove();
  }, [data]);

  return (
    <div className='w-full bg-[hsl(227,10%,10%)] pb-1 rounded-lg'>
        <div className='flex flex-row gap-2 items-end pl-4 pt-4 leading-none'>
            <span className='text-[20px] text-[#ecf5ff] font-bold'>185.686</span>
            <span className='text-[#22d1f8] text-[12px]'>+0.1%</span>
        </div>
        <div ref={chartContainerRef} className=' w-full h-[300px] rounded-lg' />
    </div>
  )
};

export default CandlestickChart;

//Math.floor(new Date('2024-11-06T11:45:00').getTime() / 1000)