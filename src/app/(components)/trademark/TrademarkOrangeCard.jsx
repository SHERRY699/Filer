import React from "react";
import Button from "../Button";


function TrademarkOrangeCard(props) {
  const{title,desc,cardtitle}=props
    return (

    <>
      <div className="w-full h-[450px] lg:h-[330px] bg-primary flex flex-col md:flex-row md:gap-4">
        <div className="r w-full h-[50%] md:w-[50%] md:h-full flex items-center justify-center md:justify-end">
          <div className="w-10/12 md:w-[420px] lg:w-[600px] h-full flex flex-col gap-4 justify-center">
            <h1 className="text-2xl font-bold sm:text-[34px] md:text-[40px] md:leading-[55px]">
             {title}
            </h1>
            <p className="text-sm md:text-[15px] md:leading-7">
              {desc}
            </p>
          </div>
        </div>

        <div className="r w-full h-[50%] md:w-[50%] md:h-full  flex items-center justify-center md:justify-start">
          <div className="w-10/12 h-3/5 gap-2 sm:w-[700px] sm:h-[200px] md:w-[430px] md:h-[300px] lg:w-[570px] lg:h-[255px] bg-white rounded-2xl flex flex-col items-center justify-center">
            <p className="font-semibold sm:text-[17px]">
             {cardtitle}
            </p>
            <p className="font-bold text-2xl sm:text-[34px]">$45</p>
            <Button title="Get started" px="100" py="40" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TrademarkOrangeCard;
