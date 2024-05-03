import React from "react";
import RegisterButton from "./RegisterButton";

function Hero() {
  return (
    <main className="selection:bg-[#bb5644]">
      <div className="w-full  h-[750px]    sm:hidden flex flex-col items-center  justify-center">
        <div
          className=" w-full h-[300px] bg-cover bg-no-repeat pl-4 "
          style={{ backgroundImage: "url('/cover.png')" }}
        >
          <h1 className="text-2xl font-bold z-10 absolute top-[190px] ">
            THE LEADING SERVICE MARK <br /> & PATENT FILING Agency
          </h1>
          <p className="text-secondary text-[12px] text-justify absolute pt-20">
            We are headquatered in Texas.When it comes to protecting <br />
            your intellectual property, including service marks and patient{" "}
            <br />
            filings, we're here to provide comprehensive support every step{" "}
            <br />
            of the way.Trademarks are essential for businesses to establish{" "}
            <br />
            their unique brand identities and distinguish themselves from <br />
            competitors
          </p>
          <div className="absolute pt-60 ">
            {" "}
            <RegisterButton />
          </div>
        </div>
      </div>

      <div className=" md:hidden  sm:block hidden  w-full h-full  ">
        <div
          style={{ backgroundImage: "url('/cover.png')" }}
          className="image w-full h-full bg-cover bg-no-repeat pt-10"
        >
          <div className=" w-[500px] h-[700px] pl-20 flex flex-col  justify-center gap-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-[49px]">
              THE LEADING <br /> SERVICE MARK & <br /> PATENT FILING <br />
              Agency
            </h1>
            <p
              className="text-secondary
 text-sm leading-[25px] text-justify "
            >
              We are headquatered in Texas.When it comes to protecting <br />
              your intellectual property, including service marks and patient{" "}
              <br />
              filings, we're here to provide comprehensive support every step{" "}
              <br />
              of the way.Trademarks are essential for businesses to establish{" "}
              <br />
              their unique brand identities and distinguish themselves from{" "}
              <br />
              competitors
            </p>

            <div>
              <RegisterButton />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full hidden md:block">
        <div
          style={{ backgroundImage: "url('/cover.png')" }}
          className="w-full h-full bg-cover bg-no-repeat flex items-baseline"
        >
          <div className="w-[50%] h-[800px] ml-52 flex flex-col gap-6 items-start pl-10 justify-center">
            <h1 className="text-5xl font-bold">
              The Leading Service Mark & <br /> Patent Filing Agency
            </h1>
            <p className="text-secondary text-sm   leading-[25px] text-justify ">
              We are headquartered in Texas. When it comes to protecting <br />
              your intellectual property, including service marks and patent{" "}
              <br />
              filings, we're here to provide comprehensive support every step{" "}
              <br />
              of the way. Trademarks are essential for businesses to establish{" "}
              <br />
              their unique brand identities and distinguish themselves from{" "}
              <br />
              competitors
            </p>

            <div>
              <RegisterButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
