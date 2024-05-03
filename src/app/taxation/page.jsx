import React from 'react'
import pic from '../../../public/taxation/legal-img3.webp'
import Herocard from "../(components)/trademark/Herocard";
import TrademarkRegcard from "../(components)/trademark/TrademarkRegcard";
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
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
         
Taxation"
        desc=" Taxation is the systematic process of imposing levies on individuals and businesses to generate revenue for government operations and services at"
        buttontitle="Taxation for $45*"
        width="600"
        heigth="350"
      />
    </div>

    <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
      <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-[40px]">
      A Comprehensive Overview
      </h1>
      <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
      You’ve worked hard to protect your brand. Don’t let it lapse.
      </p>
      <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
        <TrademarkRegcard
          image={card}
          title="1. Maintain Comprehensive Records"
          desc=" Establish and maintain a meticulous record-keeping system for income and expenditures."
        />

        <TrademarkRegcard
          image={card1}
          title="2. Leverage Advanced Tax Software"
          desc="Utilize sophisticated tax software tools to streamline the preparation and filing process, ensuring accuracy and compliance."
        />

        <TrademarkRegcard
          image={card2}
          title="3. Optimize Tax Planning"
          desc="Engage in strategic tax planning to identify and capitalize on eligible deductions, credits, and incentives, thereby minimizing tax liability and maximizing financial efficiency."
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
            Can you help me determine the suitable trademark registration classes for my business?
            </h2>
            <p className="text-sm px-10 3xl:leading-7 lg:text-[16px] text-secondary">
            Certainly! In guiding you on the appropriate classes for trademark registration, our team will thoroughly assess the nature of your business activities and the goods or services you provide. We'll work closely with you to identify the specific categories or classes under the international trademark classification system (Nice Classification) that best align with your offerings. This ensures that your trademark is properly registered in the relevant classes, providing comprehensive protection for your brand within your industry.
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
  )
}

export default page