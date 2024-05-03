import React from 'react'
import Image from 'next/image';

function TrademarkRegcard(props) {
  const{image,title,desc}=props
  return (
    <div className='w-9/12 sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[220px]  h-[200px] rounded-2xl flex flex-col pl-4 items-start gap-6 pt-4 bg-white border-2 border-primary'>
        <Image src={image} width={50} className="bg-[#f64c72] rounded-t-[15px] rounded-b-[15px]"/>
        <p className='text-sm font-bold sm:text-[17px] md:text-xl  lg:text-xl'>{title}</p>
        <p className='text-sm md:text-[15px] md:leading-[35px] '>{desc}
        </p>
        </div>
  )
}

export default TrademarkRegcard