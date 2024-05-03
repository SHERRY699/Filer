'use client'

import { useRouter } from "next/navigation"

export default function(props){
    const {title,px,py,path}= props 
    const router = useRouter()
    console.log(path)
    
    return(
        <>
      <div className="relative group overflow-hidden selection:bg-[#bb5644]">
      <button 
      onClick={()=>{router.push(path)}}
      className={`w-[${px}px] h-[${py}px]  bg-primary text-white rounded-sm`}>
           {title}
           <div className="w-full h-full  translate-x-[-100%] group-hover:translate-x-0 transition-all duration-300  absolute top-0 bg-black/20 opacity-50 " ></div>
        </button>
      </div>
        </>
    )
}