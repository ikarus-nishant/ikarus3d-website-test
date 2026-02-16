import React from 'react'

const CareersCard = (props) => {
  return (
    <div className='py-3 px-5 bg-white border-[1px] border-black dark:border-0 dark:shadow-cardShadow dark:bg-primarysecondBackground rounded-[5px]'>
        <h1 className='text-xl text-[#1F82D2] mt-3'>
            {props.opening.position}
        </h1>
        <h2 className='text-base mt-3 dark:text-darkHeading'>
            {props.opening.type}
        </h2>
        <h3 className='text-xs mt-3 dark:text-darkSubHeading'>
            {props.opening.description}
        </h3>
        <div className='w-full justify-end flex mt-3'>
            <button className='border-[1px] border-[#1F82D2] bg-primaryBlue dark:bg-primarysecondBackground dark:hover:bg-primaryBlue rounded-[5px] text-xs px-5 py-1 text-secondaryBackground'>Apply</button>
        </div>
    </div>
  )
}

export default CareersCard