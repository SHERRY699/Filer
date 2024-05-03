import Image from "next/image";
import React from "react";
import service from "../../../../public/services/service.png";
import Sliding from "./Sliding";

function Services() {
  return (
    <>
      <main className="selection:bg-[#bb5644]">
        <div className="w-full h-full   flex flex-col md:flex-row items-center justify-center md:justify-between lg:justify-center mt-6">
          <div className="r  w-10/12 h-[60%]  md:w-[70%] lg:w-[40%] flex flex-col lg:gap-4 justify-center  items-start pl-10">
          <Sliding
          title='OUR SERVICES'
          desc=' Quick and Secure 
          Service mark & patent 
          filing Strategies'
          button1='  Trademark Registration'
          button2=' Trademark Documents'
          button3=' Copyright Registration'
          button4='  Trademark Monitoring'
          button1desc=" To register a treademark , you typically need to submit an application to the government agency responsible for trademarks in your country. This application includes details about the trademark and how it's used"
          button2desc="Trademark documents include things like trademark applications, certificates, and renewal notices. When you create a logo or name for your business, you can use these documents to officially claim ownership of it"
          button3desc="You have rights to your work, including books, articles, and websites, when you create it. To strengthen those rights, however, you should officially register your work with the U.S. Copyright Office."
          button4desc="Protect your mark against infringement and trademark dilution with systemic monitoring of all USPTO filings. Enjoy peace of mind as we keep an eye on things for you"
          />
          </div>
          <div className="l w-full h-4/5  md:w-[30%] lg:w-[30%]   flex items-center justify-center lg:justify-start">
            <Image src={service} alt="service.png" height={500} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Services;
