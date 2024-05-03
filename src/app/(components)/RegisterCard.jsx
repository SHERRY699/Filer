'use client'
import React from 'react'
import { GoPersonFill } from "react-icons/go";
import { MdMail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Image from 'next/image';
import cancel from '../../../public/x-mark.png'
import { useRegisterContext } from '../context';


function RegisterCard() {
  const { regData,setRegData } = useRegisterContext();

  



  return (
    <section>
        <div className={` w-[300px] h-[500px] sm:w-[400px]  md:w-[500px] bg-white border-2 border-black rounded-3xl relative selection:bg-[#bb5644] `}>
            <div>
                <button onClick={()=>{setRegData(!regData)}}  className='absolute right-[-40px] top-[-40px]'>
                <Image src={cancel} alt='cancel.png' width={100}/>
                </button>
            </div>

            <div className='text-center  '>
                <h1 className='text-primary font-bold'>LIMITED TIME OFFER</h1>
                <h1 className='text-2xl font-bold'>REGISTER YOUR TRADEMARK NOW!</h1>
            </div>
            <div className="inputs flex flex-col gap-6 sm:gap-8 md:gap-12 mt-4 items-center justify-center">
             <div className='flex items-center gap-2 border-[2px] border-gray-300 h-12'>
                <GoPersonFill className='text-primary text-2xl'/>
              <input type="text" placeholder='Name' className='text-blue-400 border-none outline-none sm:w-[300px] md:w-[350px]' />
             </div>
             <div className='flex items-center  gap-2  border-[2px] border-gray-300 h-12'>
                <MdMail className='text-primary text-2xl'/>
              <input type="email" placeholder='Email'className='text-blue-400 border-none outline-none sm:w-[300px] md:w-[350px]' />
             </div>
             <div className='flex items-center  gap-2 border-[2px] border-gray-300 h-12'>
                <AiFillPhone type='Phone' className='text-primary text-2xl'/>
              <input type="text" placeholder='Phone' className='text-blue-400 border-none outline-none sm:w-[300px] md:w-[350px]' />
             </div>
             <div className='w-[260px] border-[2px]  border-gray-300 sm:w-[330px] md:w-[380px]'>
              <textarea name="text" id="text" cols="23" rows="2" placeholder='Message' className='text-blue-400 border-none outline-none'></textarea>
             </div>
     
            </div>

            <button className='text-lg font-bold text-white bg-primary w-[150px] h-[80px] rounded-full absolute bottom-[-30px] left-[25%] sm:left-[34%] '>
                Register
            </button>

        </div>
    </section>
  )
}

export default RegisterCard;