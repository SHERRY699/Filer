"use client";
import React, { useState } from "react";
import Button from "../Button";

function ServiceSliding(props) {
  const {title,desc,button1,button2,button3,button4,
    button1desc,button2desc,button3desc,button4desc}=props
  const [service, setservice] = useState(false);
  const [services, setservices] = useState(false);
  const [services1, setservices1] = useState(false);
  const [services2, setservices2] = useState(false);

  return (
    <> 
    <main className="selection:bg-[#bb5644] w-full">
    <p className="text-primary font-sans text-[13px] font-bold">{title}</p>
      <h1 className="  text-[24px] font-bold sm:text-[34px] md:text-[40px]">
       {desc}
      </h1>
      <div className="content w-9/12 font-sans flex flex-col h-[200px] ">
        <div className="slider w-full  h-[80px] font-sans  flex flex-nowrap  md:gap-4 pl-4 overflow-x-auto
        md:border-b-2 borer-white shadow-md
        ">
          <button
            onClick={() => {
              setservice(!service);
              setservices(false)
              setservices1(false)
              setservices2(false)
            }}
            className={` w-1/2 h-full text-[13px] px-4 font-extrabold ${service?'bg-primary text-white':'bg-white'}`}
          >
            {button1}
          </button>
          <button
            onClick={() => {
              setservices(!services);
              setservice(false)
              setservices1(false)
              setservices2(false)
            }}
            className={` w-1/2 h-full text-[13px] px-4 font-extrabold ${services?'bg-primary text-white':'bg-white'}`}
          >
            {button2}
          </button>
          <button
            onClick={() => {
              setservices1(!services1);
              setservices(false)
              setservice(false)
              setservices2(false)
            }}
            className={` w-1/2 h-full text-[13px] px-4 font-extrabold ${services1?'bg-primary , text-white':'bg-white'}`}
          >
           {button3}
          </button>
          <button
            onClick={() => {
              setservices2(!services2);
              setservices(false)
              setservices1(false)
              setservice(false)
            }}
            className={` w-1/2 h-full text-[13px]  px-4 font-extrabold ${services2?'bg-primary text-white':'bg-white'}`}
          >
            {button4}
          </button>
        </div>

        <div className="slider-content w-full h-[120px] ">
          <p className="text-[13px] font-sans leading-[20px] fontw-semibold lg:leading-[35px] text-secondary md:text-[15px]">
            {service
              ?  button1desc
              : 
               services
              ?  button2desc
              : services1
              ? button3desc
              : services2
              ?  button4desc
              :  button1desc}
          </p>
        </div>
      </div>

      <Button
        title="Learn More About Trademark Registration"
        px="400"
        py="45"
        path='/trademark-registration-service'
      />
    </main>
      
    </>
  );
}

export default ServiceSliding;
