import React from "react";
import Herocard from "../(components)/trademark/Herocard";
import TrademarkRegcard from "../(components)/trademark/TrademarkRegcard";
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import pic from "../../../public/llc-creation/pic.jpg";
import Image from "next/image";
import Trademarkcard from "../(components)/trademark/Trademarkcard";

function page() {
  return (
    <section className="selection:bg-[#bb5644] font-sans">
      <div
        style={{
          backgroundImage: "url('/filing-an-extension/hero.webp')",
        }}
        className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[520px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
      >
        <Herocard
          title=" 
          LLC CREATION
"
          desc=" Creating an LLC involves turning your business idea into a legal entity. It's like giving your venture an official identity and protection. The process typically includes selecting a unique business name, filing necessary paperwork, and defining how your LLC will operate at "
          buttontitle="LLC Creation for $45*"
          width="600"
          heigth="420"
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-[40px]">
        Why use filer.me to set up your LLC?
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
        You’ve worked hard to protect your brand. Don’t let it lapse.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard
            image={card}
            title="1. Efficiency and Simplicity"
            desc=" Filer.me excels in providing an efficient and simplified process for LLC formation. Our user-friendly platform streamlines the setup, making it easy for entrepreneurs to navigate and complete the necessary steps with ease."
          />

          <TrademarkRegcard
            image={card1}
            title="2. Expert Guidance and Compliance"
            desc="We offer expert guidance throughout the LLC creation process, ensuring adherence to legal requirements and compliance standards. Our team is well-versed in the intricacies of LLC formation, providing valuable assistance to guarantee a smooth and legally sound establishment."
          />

          <TrademarkRegcard
            image={card2}
            title="3. Cost-Effective Solutions"
            desc="Filer.me stands out for offering cost-effective solutions without compromising quality. We provide affordable packages that cater to various business needs, allowing entrepreneurs to establish their LLCs with comprehensive support while keeping costs in check."
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
               
           
Beginning the journey of an LLC
              </h2>
              <p className="text-sm px-10 3xl:leading-7 lg:text-[16px] text-secondary">
              Embarking on the journey of starting an LLC is like taking the first steps toward creating your own business. It involves a series of actions and decisions to officially establish your company. From choosing a name to filing paperwork, this process sets the groundwork for your business adventure and legal recognition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
        
        Statement of Use Extension Filing FAQs

        </h1>
       

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
