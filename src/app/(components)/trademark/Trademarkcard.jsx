'use client'
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

function Trademarkcard(props) {
    const {title,desc}=props
    const [hidden,sethidden]=useState(false)
  return (
    <section>
            <div className="w-full h-full flex  flex-col items-center mt-4 justify-center">


          <div className="trademarkcard w-[350px] sm:w-[650px] md:w-[900px] lg:w-[1200px] h-[80px] flex items-center justify-between bg-gray-100">
                <p className="font-semibold px-4 md:text-[20px]">{title}</p>
               <button className="mr-3" onClick={()=>{sethidden(!hidden)}}> {hidden?<AiOutlineMinus/>:<BsPlusLg/>}</button>
             </div>
             <div className={`${hidden?'block':"hidden"} content w-[350px] sm:w-[650px] md:w-[900px] lg:w-[1200px]  bg-gray-100 h-max pb-4`}>
                <p className="text-sm text-secondary px-4 md:text-[15px] md:leading-6 lg:leading-8">
               {desc}
                </p>
             </div>
            </div>         


    </section>
  )
}

export default Trademarkcard;