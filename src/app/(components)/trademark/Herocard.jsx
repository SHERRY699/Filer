import React from 'react'
import Button from '../Button';

function Herocard(props) {
    const {title,desc,buttontitle,width,heigth}=props
  
  return (
    <div className={`w-10/12 h-3/5 md:w-6/12 md:h-4/5 3xl:w-[${width}px] 3xl:h-[${heigth}px] bg-white rounded-lg flex flex-col items-center sm:items-start md:ml-4 sm:pl-6 lg:pl-10 3xl:pl-0 justify-center gap-4 md:gap-16 lg:gap-8 3xl:ml-[350px]`}>
    <h1 className="text-2xl  font-bold px-4 sm:text-[36px] sm:px-0 md:text-[42px] md:leading-[80px] lg:leading-[50px] 3xl:leading-[65px] 3xl:px-20">
     {title}
    </h1>

    <p className="text-sm sm:text-[16px] px-4 sm:px-0 md:text-[18px] 3xl:px-20">
    {desc}{" "}
      <span className="font-bold text-xl">$45</span>
    </p>
    <div className="3xl:ml-20">
      <Button title={buttontitle} px="300" py="45" />
    </div>
  </div>
  )
}

export default Herocard;