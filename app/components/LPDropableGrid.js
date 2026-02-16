import React, { useState } from 'react'

export default function LPDropableGrid({heading,subText,img}) {
    const [hover, setHover] = useState(false);
    return (
    <>
        <div
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className="px-5 py-2 lap_gen:px-8 lap:py-4 relative mob:hidden tab:flex mob:aspect-[2] tab:aspect-[1.5] lap_gen:aspect-[1.2] xl:aspect-[1.4] xxl:aspect-[1.2] bg-white  justify-end items-center flex-col gap-4 w-[33%] tab:w-[49%] lap_gen:w-[33%] grow text-white">
            
            <div className='absolute top-0 left-0 h-full w-full'>
                <img className="absolute h-full top-0 left-0 w-full" src={img}/>
                <div className='absolute h-full top-0 left-0 w-full' style={{background:"linear-gradient(178.45deg, rgba(10, 12, 16, 0) 1.32%, rgba(10, 12, 16, 0.62) 98.72%)"}}/>
                <div className={`translate-y-10 w-full h-full duration-200`}
                style={{transform:`translate(0px,${hover?0:100}%)`,background: `linear-gradient(206.4deg, rgba(10, 12, 16, 0) 31.43%, #0A0C10 72.5%)`}} />
            </div>
            <div className='duration-200 overflow-hidden lap_gen:h-[60%] xl:h-[40%] xxl:h-[27.5%]'>
                <h3 style={{top:`${hover?0:65}%`}} className="duration-200 relative leading-7 text-[22px] lg:leading-[40px] font-semibold text-white opacity-[0.9]">
                    {heading}
                </h3>
                <p style={{top:`${hover?0:200}%`}} className="duration-200 text-white relative opacity-[0.7] text-[16px] leading-[24px] xl:text-[18px] lg:font-light">
                    {subText}
                </p>
            </div>
        </div>



        <div
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className="px-4 py-2 relative w-full duration-200 mob:flex tab:hidden mob:aspect-[2] hover:aspect-[1.3] tab:aspect-[1.5] bg-white justify-end items-center flex-col gap-4 grow text-white">
            
            <div className='absolute top-0 left-0 h-full w-full'>
                <img className={`absolute h-full top-0 left-0 w-full`} src={img}/>
                <div className='absolute h-full top-0 left-0 w-full' style={{background:"linear-gradient(178.45deg, rgba(10, 12, 16, 0) 1.32%, rgba(10, 12, 16, 0.62) 98.72%)"}}/>
                <div className={`translate-y-10 w-full h-full duration-200`}
                style={{transform:`translate(0px,${hover?0:100}%)`,background: `linear-gradient(206.4deg, rgba(10, 12, 16, 0) 31.43%, #0A0C10 72.5%)`}} />
            </div>
            <div className='duration-200 overflow-hidden'>
                <h3 style={{top:`${hover?0:75}%`}} className="duration-200 text-[18px] relative leading-7 lg:leading-[40px] font-semibold text-white opacity-[0.9]">
                    {heading}
                </h3>
                <p style={{top:`${hover?0:200}%`}} className="duration-200 text-white relative opacity-[0.7] text-[16px] leading-[24px] xl:text-[18px] lg:font-light">
                    {subText}
                </p>
            </div>
        </div>
    </>
  )
}
