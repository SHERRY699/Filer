import React from 'react'
import Image from 'next/image'

function CardComponent(props) {
    const {image,title,desc} = props
  return (
    <>
       <div className=" selection:bg-[#bb5644] card w-8/12  h-[500px] sm:w-[220px] md:w-[300px] md:h-[650px] sm:mt-10 sm:h-[800px] rounded-xl border-2 mb-2 bg-white shadow-2xl lg:w-[400px] lg:h-[540px]">
                <div className="IMG w-full h-[150px] flex items-center justify-start  pl-4">
                <Image src={image} alt='new2.png' width={100} height={100}/>
                </div>
                <div className="content w-full h-[230px]  flex flex-col gap-2 pl-2">
                   <p className='text-[13px] font-bold sm:text-[17px] md:text-[20px]'>{title}</p>
                   <p className=' text-[13px]  sm:leading-[35px] lg:leading-[30px] md:text-[15px]'>
                    {desc}
                   </p>
                </div>
            </div>
    </>
  )
}

export default CardComponent;