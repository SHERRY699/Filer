import React from "react";
import Herocard from "../(components)/trademark/Herocard";
import TrademarkRegcard from "../(components)/trademark/TrademarkRegcard";
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import pic from "../../../public/patent-filing/569ef0805b.jpg";
import Image from "next/image";
import Trademarkcard from "../(components)/trademark/Trademarkcard";

function page() {
  return (
    <section className="selection:bg-[#bb5644] font-sans">
      <div
        style={{
          backgroundImage: "url('/filing-an-extension/hero.webp')",
        }}
        className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[400px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
      >
        <Herocard
          title=" 
          
Filing for a Patent"
          desc=" Filing for a patent is like officially claiming ownership of your brilliant idea or invention. It's a formal way of saying, 'This is mine!' When you file for a patent, you're submitting all the details about your invention to the government at "
          buttontitle="Filing For A Patent for $45*"
          width="600"
          heigth="350"
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-[40px]">
        Reasons to initiate a provisional patent application
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
        You’ve worked hard to protect your brand. Don’t let it lapse.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard
            image={card}
            title="1. Priority and Protection"
            desc=" Initiating a provisional patent application establishes an early filing date for your invention. This priority can be crucial in securing your intellectual property rights, providing a legal foundation for future patent protection."
          />

          <TrademarkRegcard
            image={card1}
            title="2. Extended Development Time"
            desc="Filing a provisional patent allows you additional time to refine and develop your invention before committing to a full patent application. During this period, you can test the market, seek potential investors, or make improvements without the risk of losing patent rights."
          />

          <TrademarkRegcard
            image={card2}
            title="3. Optimize Tax Planning"
            desc="Provisional patent applications are generally more affordable compared to regular patent filings. This cost-effective approach enables inventors to secure a filing date and preliminary protection without the immediate financial commitment required for a full patent application."
          />
        </div>
      </div>

      <div className="w-full h-max bg-[#effaff] mt-10 flex flex-col sm:flex-row lg:px-20 xl:px-32 2xl:px-40 3xl:px-52">
        <div className="r w-full  h-[40%]  sm:w-[50%] sm:h-[600px] flex items-center justify-center  ">
          <div className="w-full  h-[300px] flex items-center justify-center">
            <Image src={pic} width={450} />
          </div>
        </div>
        <div className="l w-full h-[60%]  sm:w-[50%] sm:h-[700px] flex items-center justify-center  ">
          <div className="w-full h-full flex items-center justify-center md:justify-start">
            <div className="content font-sans w-9/12 h-full  flex flex-col gap-4 sm:items-center sm:justify-center lg:items-start ">
              <h2 className="text-2xl font-bold mt-4 leading-10 px-10 sm:text-4xl  lg:text-[42px] 3xl:leading-[60px]">
               
Safeguard your innovation now, finalize the patent application later
              </h2>
              <p className="text-sm px-10 3xl:leading-7 lg:text-[16px] text-secondary">
              Take a proactive step to protect your brilliant idea by safeguarding it now, even if you're not ready to finish the whole patent application process just yet. It's like putting a safety net around your innovation. This way, you secure an early date for your creation, giving you time to fine-tune things or gather more information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
        FAQs
        </h1>
        <p className="text-sm px-8 mt-2 text-center sm:text-[15px] sm:mt-6 md:text-[18px] md:px-52 md:leading-7 ">
          Still have questions? Call 1 (877) 721-4579 with us for real-time
          support.
        </p>

        <Trademarkcard
          title="What They Are and Their Functions?"
          desc="Serve as an authoritative resource, offering in-depth elucidation on the definition and practical utility of trademarks. This content is designed to provide a nuanced understanding of the complexities inherent in trademarks, delving into their inherent nature, significance, and tangible applications within the professional realm. It aims to equip readers with comprehensive knowledge to navigate the intricacies of trademarks, empowering them with the expertise necessary to comprehend the practical functions that these legal identifiers fulfill in the broader context of business and intellectual property."
        />

        <div>
          <Trademarkcard
            title="How does the legal protection differ between a common law trademark?"
            desc=" Protection varies between a common law trademark and a registered trademark. This information aims to clarify the distinctions in the level of protection afforded to these two types of trademarks, helping users understand the implications of choosing one over the other in the context of intellectual property rights."
          />
        </div>
      </div>
    </section>
  );
}

export default page;
