import React from "react";
import Herocard from "../(components)/trademark/Herocard";
import TrademarkRegcard2 from "../(components)/trademark/TrademarkRegcard2";
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import Button from "../(components)/Button";

function page() {
  return (
    <section className="selection:bg-[#bb5644] font-sans">
      <div
        style={{
          backgroundImage: "url('/dmca-takedown-service/hero.webp')",
        }}
        className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[500px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
      >
        <Herocard
          title=" 
         
          Guard Against Copyright Content Thieves
"
          desc=" Having commenced with your Intent to Utilize, now finalize the process at"
          buttontitle="Start your DCMA Takedown Today for $45*"
          width="400"
          heigth="400"
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-[40px]">
          Quick and Effortless Submission of Use Statement
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
          Having initiated the process with your Intent to Use, now complete it.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard2 image={card} title="1. Answer a Few Questions" />

          <TrademarkRegcard2
            image={card1}
            title="2. We conduct a thorough search."
          />

          <TrademarkRegcard2
            image={card2}
            title="3. We provide you with a comprehensive report.
            "
          />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-4 mb-4 items-center justify-center  mt-4">
        <div className="w-[400px] h-full md:w-[600px] lg:w-[700px] ">
          <p className="text-[13px] md:text-[15px] lg:text-[20px] md:leading-7 text-secondary text-justify px-6 sm:px-10 ">
            suggests a streamlined and efficient process for submitting a
            Statement of Use, typically associated with trademark registration.
            It indicates a quick and straightforward method for providing
            evidence to the relevant authorities, such as the United States
            Patent and Trademark Office (USPTO), that a trademark is being used
            in commerce. The statement of use is a crucial step in the trademark
            registration process, affirming that the mark is actively utilized
            to identify and distinguish goods or services in the marketplace.
          </p>
        </div>
        <Button title="Start Your DCMA Takedown Today" px="300" py="40" />
      </div>

      

      <div className="w-full h-[300px] bg-black flex flex-col items-center gap-4  justify-center mt-4">
        <h1 className="text-white text-[25px] font-bold px-10 sm:text-[30px] md:text-[35px] lg:text-[40px] lg:font-extrabold">
          Secure your name's protection by taking action today.
        </h1>
        <p className="text-[#dadde5] secondary text-[20px] px-8">
          Discover if your trademark is already in use
        </p>
        <button className="px-3 py-2 rounded-xl bg-primary text-white">
          Get started
        </button>
      </div>




    </section>
  );
}

export default page;
