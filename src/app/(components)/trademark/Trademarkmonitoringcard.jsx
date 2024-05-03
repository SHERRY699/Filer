'use client'
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

function Trademarkmonitoringcard(props) {
    const {title,desc}=props
    const [hidden,sethidden]=useState(false)
  return (
   <>
   <div className="trademarkcard w-[350px] sm:w-[300px] sm:h-[120px] md:w-[450px] md:h-[130px] lg:w-[580px] h-[80px] flex items-center justify-between bg-gray-100">
                <p className="font-semibold px-4 md:text-[20px]">{title}</p>
               <button className="mr-3" onClick={()=>{sethidden(!hidden)}}> {hidden?<AiOutlineMinus/>:<BsPlusLg/>}</button>
             </div>
             <div className={`${hidden?'block':"hidden"} transition-all duration-300 content w-[350px] sm:w-[300px]  md:w-[450px]   lg:w-[580px] bg-gray-100 h-max pb-4`}>
                <p className="text-sm text-secondary px-4 md:text-[15px] md:leading-6 lg:leading-8">
               {desc}
                </p>
             </div>
                   

   </>
  )
}

export default Trademarkmonitoringcard