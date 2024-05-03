import React from "react";
import PackagesButton from "./PackagesButton";


function PackagesCard(props) {
  const { title, price, array } = props;
  return (
    <>
      <div className="w-9/12 sm:w-[160px]  bg-[#bb5644]   md:w-[210px] h-max lg:w-[280px] p-10 sm:p-4 bg-white flex flex-col items-center justify-center gap-2  border-2 border-primary rounded-md">
        <div className="headings w-[355px] sm:w-[150px] md:w-[200px] h-full sm:h-[100px] flex flex-col gap-2  items-center justify-center ">
          <h1 className="font-bold text-xl">{title}</h1>
          <p>
            <span className="text-primary text-2xl font-bold sm:text-[40px]">${price}</span>
            <sup className="text-sm">/monthly</sup>
          </p>
          <span className="bg-[#BB5644] block w-[200px] sm:w-[100px] ">
            <hr className="border-0 h-px " />
          </span>
          <h1 className="font-bold text-lg sm:text-sm md:text-[18px]">+Federal Filing Fee</h1>
        </div>
          {array.map((items,index) => (
            <>
        <div key={index} className="plans w-[355px] sm:w-[100px] md:w-[190px] text-[13px] md:text-[15px] max-h-max gap-2 sm:px-32 font-sans font-light flex px-14  text-justify flex-col items-center justify-center ">

              <p key={index}>{items.title}</p>
              <hr className="w-full sm:w-[100px] bg-gray-200 h-[2px]" />
              </div>
            </>
          ))}
        

        <PackagesButton />
      </div>
    </>
  );
}

export default PackagesCard;
