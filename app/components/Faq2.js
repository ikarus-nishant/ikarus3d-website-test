import React, { useState } from 'react'
import SubSectionHeading from './text/SubSectionHeading';
import ContentHeading from './text/ContentHeading';
import SubSectionText from './text/SubSectionText';

const Faq2 = (props) => {

    const [selectedFaq, setSelectedFaq] = useState(-1);

    const getFaqRow = (faq, index) =>{
        return (
            <div className={`${selectedFaq === index ? 'max-h-87 pt-5 tab:py-7 gap-4':'max-h-[100px] pt-4 tab:pt-7 lap:pt-6'} duration-1000 transition-all ease-out border-b-[1px] border-white/20 flex flex-col cursor-pointer`} 
                onClick={()=>{selectedFaq === index ?setSelectedFaq(-1):setSelectedFaq(index)}}> 
                <div className='flex gap-4 justify-between text-left z-20'>
                    <ContentHeading text={faq.question}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="faqChevron w-4 h-4 tab:w-5 tab:h-5 lap:w-6 lap:h-6 xl:w-8 xl:h-8 stroke-darkHeading">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>                                              
                <div className={`${selectedFaq === index ? 'opacity-100 delay-500 duration-500':'opacity-0 delay-[0ms] duration-300'} transition-opacity ease-out text-left z-10`}>
                    <SubSectionText text={faq.answer}/>
                </div>                                        
            </div>
        )
    }

  return (
    <div className='flex flex-col lap:flex-row lap:justify-between w-full'>
        <div className='w-full lap:w-[27%] xl:w-fit'>
            <SubSectionHeading text="Get Your Answers Here" />
        </div>
        <div className='w-full lap:w-[55%]'>
            {
                props.faqsData.map((faq, index)=>(
                    getFaqRow(faq, index)
                ))
            }
        </div>
    </div>
  )
}

export default Faq2