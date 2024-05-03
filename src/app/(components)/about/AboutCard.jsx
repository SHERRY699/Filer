import Image from 'next/image'
import React from 'react'
import coin from '../../../../public/about/coin.png'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

function AboutCard(props) {
    const {title,desc,link}=props
  return (
    <>
        <div className="about-card  relative w-9/12 sm:w-[340px] md:w-[440px] lg:w-[580px] h-[350px] border-[1px] rounded-lg border-primary selection:bg-[#bb5644]">
           
           <div className='w-full h-full  flex flex-col items-center justify-center gap-10  '>
           <Image src={coin} width={50} className='absolute top-[50px] left-[50px]'/>
              <div className='w-full h-full flex flex-col items-center justify-center mt-16 gap-4 '>
              <p className='text-sm font-bold 3xl:text-xl'>{title}</p>
               <p className='text-sm text-secondary px-4 text-justify 3xl:text-lg'> {desc}</p>
               <Link href={link} className='text-sm hover:border-b border-[#bb5644] text-[#BB5644] flex items-center'>Read More <IoIosArrowForward/></Link>
              </div>
           </div>
       </div>
    </>
  )
}

export default AboutCard