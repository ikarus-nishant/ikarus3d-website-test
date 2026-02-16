import React, { useState } from 'react'
import SubSectionHeading from './text/SubSectionHeading';
import SubSectionSubHeading from './text/SubSectionSubHeading';
import ContentHeading from './text/ContentHeading';
import SubSectionText from './text/SubSectionText';

const WhyChooseUs = (props) => {

    const [selectedPoint, setSelectedPoint] = useState(0);

  return (
    <div className='border-[1px] border-transparent'>
        <div className='flex flex-col items-center gap-[30px] lap:gap-[60px] xl:gap-[150px] mx-4 mob:mx-10 tab:mx-16 lap:mx-24 desk:mx-32 xl:mx-[10vw] xxl:mx-[18vw]'>
            <div className='my-[30px] tab:my-[60px] xl:my-[9.375rem] text-center'>
                <SubSectionHeading text={props.heading} />
                <div className='mt-[15px] lap:mt-[30px]'>
                    <SubSectionSubHeading text={props.subHeading} />
                </div>
            </div>            
        </div>
        <div className='flex flex-col-reverse lap:flex-row gap-[60px] mb-[30px] tab:mb-[60px] xl:mb-[9.375rem] mx-4 mob:mx-10 tab:mx-16 lap:mx-24 desk:mx-32 xl:mx-[10vw] xxl:mx-[18vw]' >
            <div className='w-full lap:w-[55%] flex flex-col'>
                {
                    props.points.map((point,index)=>(
                        <div className={`z-10 cursor-pointer ${selectedPoint === index ? 'max-h-87 duration-700 delay-[500ms] border-b-8 lap:border-b-0 lap:border-l-8 border-primaryBlue bg-secondaryDarkBackground rounded-md': index < 5 ? 'max-h-[80px] duration-700 border-b-[1.5px] border-white/20' : 'max-h-[80px] duration-700'} ease-out py-4 px-6`} style={{transitionProperty:"max-height, height"}}>
                            <div className='flex gap-4 items-center z-10' onClick={()=>setSelectedPoint(index)}>
                                <div className='w-fit tab:w-[10%] font-[700] text-primaryBlue text-center lap:text-left text-[32px]'>
                                    0{index+1}
                                </div>
                                <div className='w-full tab:w-[90%]'>
                                    <ContentHeading text={point.heading}/>
                                </div>                                
                            </div>          
                            <div className='flex tab:gap-4 z-0'>
                                <div className='w-0 tab:w-[10%] font-[700] text-primaryBlue text-[32px]'></div>
                                <div className='w-full tab:w-[90%]'>                                
                                    <div className={`${selectedPoint === index ? 'opacity-100 delay-1000 duration-500':'opacity-0 delay-[0ms] duration-300'} transition-opacity ease-out`}>
                                        <SubSectionText text={point.subHeading}/>
                                    </div>
                                </div>                            
                            </div>                                              
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-center w-full lap:w-[45%]'>
                <img src={props.points[selectedPoint].img} className='w-[80%] object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs