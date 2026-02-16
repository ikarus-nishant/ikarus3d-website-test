import React from 'react'

const SecondaryButton = (props) => {
  return (    
    <a href={props.link} className="h-fit xl:h-12 w-full tab:w-auto flex text-button-sm md:text-button-lg xl:text-button-xl font-[400] tab:font-[500] md:font-[400] border-[1px] tab:min-w-[8.25rem] text-center justify-center items-center px-[18px] tab:px-8 tab:py-[11px] lg:px-6 py-[10px] lg:py-3 xl:py-5 xl:px-12 xxl:py-[19px] shadow-xs rounded-[5px]" style={{color:props.textColor? `${props.textColor}`:"#fff", borderColor:props.borderColor ? `${props.borderColor}`:'#fff'}}>  
      {props.content}      
    </a>          
  )
}

export default SecondaryButton