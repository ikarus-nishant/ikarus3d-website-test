import React from 'react'
import SubSectionHeading from './text/SubSectionHeading'
import SubSectionSubHeading from './text/SubSectionSubHeading'
import ContentHeading from './text/ContentHeading'
import { Link } from "@remix-run/react";
import { useState, useEffect } from 'react';
import Model from "./Model";
import { ClientOnly } from "remix-utils";
import getBrowserEnv from '../utils/browserEnv';
import { debounce } from '../utils/debounce';
import SubSectionText from './text/SubSectionText';
import useViewportWidth from "../hooks/useViewportWidth";

const env = getBrowserEnv();

const Discover3DModels = (props) => {

    const [currentItem, setCurrentItem] = useState(0);
    const [ viewportWidth ] = useViewportWidth();       

  return (
    <div className='border-[1px] border-transparent'>
        <div className='flex flex-col items-center gap-[30px] lap:gap-[60px] xl:gap-[150px] mx-4 mob:mx-10 tab:mx-16 lap:mx-24 desk:mx-32 xl:mx-[10vw] xxl:mx-[17vw]'>
            <div className='my-[30px] tab:my-[60px] xl:my-[9.375rem] text-center'>
                <SubSectionHeading text={props.heading} />
                <div className='w-[75%] mx-auto mt-[15px] lap:mt-[30px]'>
                    <SubSectionSubHeading text={props.subHeading} />
                </div>
                <div className='w-fit mx-auto mt-[15px] lap:mt-[30px]'>
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="flex flex-row flex-wrap text-white xs:justify-start lap:mr-4 min-w-[8.25rem] items-center"
                    >
                      <div className="mx-auto lap:mx-0">
                        <Link to='/portfolio'>
                          <button
                            className={`px-4 mob:px-5 tab:px-8 lap:px-5 py-3 xl:py-5 xl:px-12 flex dark:shadow-buttonShadow rounded-[5px] text-xs mob:text-sm tab:text-base xl:text-xl duration-200 text-white animated-gradient`}
                          >
                            Visit portfolio
                          </button>
                        </Link>
                      </div>
                    </div>
                </div>                
            </div>            
        </div>
        <div className='flex flex-col-reverse lap:flex-row justify-between gap-[60px] mb-[30px] tab:mb-[60px] xl:mb-[9.375rem] mx-4 mob:mx-10 tab:mx-16 lap:mx-24 desk:mx-32 xl:mx-[10vw] xxl:mx-[17vw] h-[350px] xl:h-auto' >
            <div className='w-full lap:w-[50%] grid grid-cols-2 tab:grid-cols-3 lap:grid-cols-2 gap-2 mob:gap-4 tab:gap-6'>
                {props.modelsData.map((item, index)=>(
                    <div className={`flex gap-2 items-center px-2 lap:px-6 ${currentItem === index ? "animated-gradient" : "bg-secondaryDarkBackground"} rounded-[5px]`} onClick={()=>setCurrentItem(index)}>
                        <div className='w-[30%] bg-slate-100 aspect-square'></div>
                        <div className='w-[70%] text-left lap:text-center'>
                            <SubSectionText text={item.name} />
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full lap:w-[50%] h-full'>
                <ClientOnly>
                    {()=>
                      <Model
                      poster={env.HORSE}
                      touchActions="pan-y pinch-zoom"
                      src={`${env.CDN_BASE_URL}/3D+Models/Others/horse.glb`}
                      environment="/mod/Neutral.hdr"
                      scale="-1 1 1"
                      rotation={`calc(4.1rad + env(window-scroll-y) * 12rad) calc(80deg + env(window-scroll-y) * 45deg) ${
                        viewportWidth < 720 ? "1.5m" : "1.5m"
                        }`}
                      />
                    }
                </ClientOnly>  
            </div>
        </div>
    </div>
  )
}

export default Discover3DModels