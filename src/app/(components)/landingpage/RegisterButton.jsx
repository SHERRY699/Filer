"use client";
import React, {  useState } from "react";
import { useRegisterContext } from '../../context';



function RegisterButton() {
  const { regData,setRegData } = useRegisterContext();
  
 

  return (
   
      <div className="relative group overflow-hidden    selection:bg-[#bb5644]">
        <button
          onClick={() => {
            setRegData(!regData);
       
          }}
          className="w-[220px] h-[45px]  bg-primary text-white rounded-sm"
        >
          Register My Trademark
          <div className="w-full h-full overflow-hidden  translate-x-[-100%] group-hover:translate-x-0 transition-all duration-300 z-10 absolute top-0 bg-black/20 opacity-50 "></div>
        </button>
      </div>
   
  );
}

export default RegisterButton;
