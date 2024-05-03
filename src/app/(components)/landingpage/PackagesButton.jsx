import React from 'react'

function PackagesButton() {
  return (
    <div className="relative group overflow-hidden selection:bg-[#bb5644]">
    <button className="w-[120px] h-[40px] sm:h-[70px] md:h-[40px] bg-primary text-white rounded-sm">
        Sign up now
         <div className="w-full h-full  translate-x-[-100%] group-hover:translate-x-0 transition-all duration-300 z-10 absolute top-0 bg-black/20 opacity-50 " ></div>
      </button>
    </div>
  )
}

export default PackagesButton;