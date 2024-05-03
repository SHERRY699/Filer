import React from 'react'
import Image from 'next/image';

function TrademarkRegcard(props) {
  const{image,title,desc}=props
  return (
    <div className='w-9/12 sm:w-[220px] sm:h-[400px] md:w-[300px] md:h-[500px] lg:w-[400px] lg:h-[450px]  h-[350px] rounded-2xl flex flex-col pl-4 items-start gap-6 pt-4 bg-white border-2 border-primary'>
        <Image src={image} width={60} className="bg-primary rounded-t-[15px] rounded-b-[15px]"/>
        <p className='text-sm font-semibold sm:text-[17px] md:text-xl sm:font-bold lg:text-xl'>{title}</p>
        <p className='text-sm md:text-[15px] md:leading-[35px] md:font-semibold'>{desc}
        </p>
        
        
        
        </div>
  )
}

export default TrademarkRegcard