import React from "react";
import Herocard from "../(components)/trademark/Herocard";
import TrademarkRegcard from "../(components)/trademark/TrademarkRegcard";
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import pic from "../../../public/about/ac650be6b3.jpg";
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
          INCORPORATION FILING"
          desc=" Incorporation filing is the pivotal step in officially forming a corporation, marking the transition from a conceptual business idea to a recognized legal entity. This process involves submitting essential documents to the appropriate authorities, specifying key details about the business structure, ownership, and operational aspects at "
          buttontitle="Incorporation for $45*"
          width="600"
          heigth="420"
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-[40px]">
        Why use filer.me to incorporate your business?
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
        You’ve worked hard to protect your brand. Don’t let it lapse.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard
            image={card}
            title="1. Efficiency and Simplicity"
            desc=" Filer.me stands out for its efficient and straightforward approach to business incorporation. Our user-friendly platform ensures a seamless process, allowing entrepreneurs to navigate through the complexities of incorporation with ease."
          />

          <TrademarkRegcard
            image={card1}
            title="2. Expert Guidance and Compliance"
            desc="We provide expert guidance throughout the incorporation process, ensuring strict adherence to legal requirements and compliance standards. Our knowledgeable team is well-equipped to assist in navigating the intricacies of business incorporation, ensuring a smooth and legally sound establishment."
          />

          <TrademarkRegcard
            image={card2}
            title="3. Cost-Effective Solutions"
            desc="Filer.me is committed to offering cost-effective solutions without compromising on quality. Our affordable packages cater to various business needs, providing comprehensive support for incorporation while keeping costs reasonable. We prioritise delivering value and assistance to entrepreneurs seeking to establish their businesses with financial prudence."
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
               
              Benefits of forming a corporation
              </h2>
              <p className="text-sm px-10 3xl:leading-7 lg:text-[16px] text-secondary">
              Creating a corporation comes with several advantages that make it a smart choice for business owners. One big benefit is that it helps protect your personal assets. This means your personal savings and property are separate from your business, reducing your risk. Additionally, a corporation can make it easier to raise funds, attract investors, and carry out long-term plans. It also offers certain tax advantages and provides a more formal structure for your business. By forming a corporation, you not only gain legal and financial benefits but also set the stage for growth and credibility in the business world
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
        
Frequently Asked Questions about Filing a Statement of Use Extension

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
