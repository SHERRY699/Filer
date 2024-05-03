import React from 'react'

function AboutContent(props) {
    const {title,desc} = props
  return (
   <>
    <div className='selection:bg-[#bb5644]w-11/12 h-full sm:h-[700px] md:h-[600px] lg:h-[400px]  3xl:w-[300px] flex flex-col items-center justify-center gap-8 pt-4 pb-4  bg-white rounded-lg'>
              <p className='font-bold text-sm text-center sm:text-[18px] d:text-[22px] 3xl:text-xl'>{title}</p>
              <p className='text-secondary text-sm px-4 sm:leading-[30px] md:text-[16px]'>{desc}</p>
          </div>
   </>
  )
}

export default AboutContent;