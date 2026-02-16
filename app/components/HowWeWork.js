import React from 'react'
import { motion } from 'framer-motion' 
import SubSectionHeading from './text/SubSectionHeading'

const HowWeWork = (props) => {
  return (
    <div ref={props.howWeWorkRef} className="bg-primaryDarkBg  relative pb-[63px] tab:pb-[86px] pt-[98px] tab:pt-[175px] md:pt-[320px] flex flex-col gap-[34px] tab:gap-0 items-center tab:items-start tab:flex-row tab:justify-between">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, delay: 0.5, amount:0.25 }}
        className="absolute w-full h-[60%] top-0">
        <img alt="blue background image" src="images/howWeWorkBg.svg" className="w-full" />
      </motion.div>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 2 }}
        viewport={{ once: true, delay:1.5, amount:0.25 }}
        className="flex flex-col gap-4 tab:sticky tab:top-[100px] md:top-[120px] h-fit mx-6 tab:ml-16 md:ml-[86px] lg:ml-[112px] xl:ml-[138px] z-20">
       <SubSectionHeading text="How we work" />
       {/* <SubSectionSubHeading text="Step-by-step of our process for tailoring solutions to your needs" /> */}
      </motion.div>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 2 }}
        viewport={{ once: true, delay:1.5, amount:0.25 }}
        className="tab:w-[50%] md:w-[45%] flex justify-end gap-6 tab:gap-8 mx-6 tab:mr-16 md:mr-[86px] lg:mr-[112px] xl:mr-[138px] z-10">
        <motion.div className="w-[50%] tab:mt-20 xl:mt-24">{/* style={{ y: y1 }}> */}
          {props.howWeWork.map((item, index)=>{
            if(index%2===0){
              return (
                <div className={`group flex flex-col xl:gap-3 justify-end p-6 md:py-10 md:pb-8 md:px-8 xl:pl-12 xl:pr-9 xl:pb-9 xl:pt-12 rounded-[10px] ${index === 0 ? '' : 'mt-6 tab:mt-[80px] xl:mt-[100px]'} bg-[#11141A] group transition-colors duration-300 hover:bg-[url('../../public/images/howWeWorkCardBg.svg')] bg-cover h-[180px] md:h-[290px] xl:h-[384px]`}>
                  <p className="w-fit bg-gradient-to-r from-[#015EF1] to-[#489BE1] bg-clip-text text-transparent group-hover:bg-white text-[41px] md:text-[48px] xl:text-[75px] xl:font-[800] font-[700] font-frankRuhlLibre leading-[28px] md:leading-[52px] -tracking-[0.471px] md:-tracking-[1px] xl:leading-[84px] xl:-tracking-[1px] transition-all duration-300">
                    0{index+1}
                  </p>                                                   
                  <h2 className="text-white text-[18px] leading-6 -tracking-[0.16px] md:text-[20px] xl:text-[25px] group-hover:xl:text-[21px] xl:leading-[32px] md:leading-[30px] md:-tracking-[0.2px] font-[500] transition-all duration-500">
                    { item.name }
                  </h2>
                  <div className='quick-example transition-all duration-500 ease-out grid-rows-[0fr] group-hover:grid-rows-[1fr] mt-0 hover:mt-2'>
                    <div>
                      <h3 className="hidden md:block text-white/90 text-[16px] xl:text-[18px] leading-[24px] -tracking-[0.1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        { item.desc }
                      </h3>
                    </div>
                  </div>                                                    
                </div>
              )
            }
          })}
        </motion.div>
        <motion.div
          className="w-[50%] -mt-1"
          // style={{ y: y2 }}
        >
          {props.howWeWork.map((item, index)=>{
            if(index %2 !== 0)
              return (
                <div className={`group flex flex-col xl:gap-3 justify-end p-6 md:py-10 md:pb-8 md:px-8 xl:pl-12 xl:pr-9 xl:pb-9 xl:pt-12 rounded-[10px] ${index === 1 ? '' : 'mt-6 tab:mt-[80px] xl:mt-[100px]'} bg-[#11141A] group transition-colors duration-300 hover:bg-[url('../../public/images/howWeWorkCardBg.svg')] bg-cover h-[180px] md:h-[290px] xl:h-[384px]`}>
                  <p className="w-fit bg-gradient-to-r from-[#015EF1] to-[#489BE1] bg-clip-text text-transparent group-hover:bg-white text-[41px] md:text-[48px] xl:text-[75px] xl:font-[800] font-[700] font-frankRuhlLibre leading-[28px] md:leading-[52px] -tracking-[0.471px] md:-tracking-[1px] xl:leading-[84px] xl:-tracking-[1px] transition-all duration-300">
                    0{index+1}
                  </p>                                                   
                  <h2 className="text-white text-[18px] leading-6 -tracking-[0.16px] md:text-[20px] xl:text-[25px] group-hover:xl:text-[21px] xl:leading-[32px] md:leading-[30px] md:-tracking-[0.2px] font-[500] transition-all duration-500">
                    { item.name }
                  </h2>
                  <div className='quick-example transition-all duration-500 ease-out grid-rows-[0fr] group-hover:grid-rows-[1fr] mt-0 hover:mt-2'>
                    <div>
                      <h3 className="hidden md:block text-white/90 text-[16px] xl:text-[18px] leading-[24px] -tracking-[0.1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        { item.desc }
                      </h3>
                    </div>
                  </div>                                                    
                </div>
              )
            }
          )}
        </motion.div>          
      </motion.div>        
    </div>
  )
}

export default HowWeWork