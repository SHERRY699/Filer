import React from "react";
import Herocard from "../(components)/trademark/Herocard";
import TrademarkRegcard from "../(components)/trademark/TrademarkRegcard";
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import pic1 from "../../../public/comprehensive-trademark-search/a47e92b0bf.jpg";

import pic from "../../../public/about/ac650be6b3.jpg";

import Image from "next/image";
import Trademarkcard from "../(components)/trademark/Trademarkcard";

function page() {
  return (
    <section className="selection:bg-[#bb5644] font-sans">
      <div
        style={{
          backgroundImage: "url('/comprehensive-trademark-search/hero.webp')",
        }}
        className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[520px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
      >
        <Herocard
          title=" 
         
Through Trademark Investigation
"
          desc=" Ensure tranquility and employ an advanced strategy. Confirm the availability of your mark before investing time and money in the application process at"
          buttontitle="Order My Search Report for $45*"
          width="600"
          heigth="450"
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-[40px]">
          How it works
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
          Get your comprehensive search report in 3 easy steps.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard
            image={card}
            title="1. Answer a Few Questions"
            desc="Offer some fundamental details about trademarks and outline the goods and services you offe"
          />

          <TrademarkRegcard
            image={card1}
            title="2. We conduct a thorough search."
            desc="We explore international, federal, state, common law, social media, and domain name databases to detect potential conflicts."
          />

          <TrademarkRegcard
            image={card2}
            title="3. We provide you with a comprehensive report.
            "
            desc="The detailed report highlights all matches, encompassing complete trademark registrations for international, federal, and state trademarks."
          />
        </div>
      </div>

      <div className="w-full h-max bg-primary mt-10 flex flex-col sm:flex-row lg:px-20 xl:px-32 2xl:px-40 3xl:px-52">
        <div className="r w-full  h-[40%]  sm:w-[50%] sm:h-[600px] flex items-center justify-center  ">
          <div className="w-full  h-[300px] flex items-center justify-center">
            <Image src={pic} width={450} />
          </div>
        </div>
        <div className="l w-full h-[60%]  sm:w-[50%] sm:h-[700px] flex items-center justify-center  ">
          <div className="w-full h-full flex items-center justify-center md:justify-start">
            <div className="content font-sans w-9/12 h-full  flex flex-col gap-4 sm:items-center sm:justify-center lg:items-start ">
              <h2 className="text-2xl font-bold mt-4 leading-10 px-10 sm:text-4xl  lg:text-[42px] 3xl:leading-[60px]">
                Why search for similar trademarks?
              </h2>
              <p className="text-sm px-10 3xl:leading-7  lg:text-[16px] text-secondary">
                Searching for trademarks that share similarities serves the
                crucial purpose of avoiding potential legal conflicts and
                protecting the uniqueness of a brand. By conducting this search,
                businesses can identify existing trademarks that might be
                similar to their proposed ones. This proactive approach helps
                prevent infringement issues, legal disputes, and confusion among
                consumers. Additionally, it ensures that the brand maintains its
                distinct identity in the market, contributing to successful
                trademark registration and safeguarding the investment made in
                building a recognizable brand presenc
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-max bg-[#effaff] mt-10 flex flex-col sm:flex-row lg:px-20 xl:px-32 2xl:px-40 3xl:px-52">
        <div className="l w-full h-[60%]  sm:w-[50%] sm:h-[700px] flex items-center justify-center  ">
          <div className="w-full h-full flex items-center justify-center md:justify-start">
            <div className="content font-sans w-9/12 h-full  flex flex-col gap-4 sm:items-center sm:justify-center lg:items-start ">
              <h2 className="text-2xl font-bold mt-4 leading-10 px-10 sm:text-4xl  lg:text-[42px] 3xl:leading-[60px]">
                What factors matter when choosing and using my name or logo?
              </h2>
              <p className="text-sm px-10 3xl:leading-7  lg:text-[16px] text-secondary">
                When selecting and using your name or logo, several factors
                merit consideration. First and foremost is ensuring that it is
                distinctive and not likely to be confused with existing
                trademarks, as this can lead to legal issues. Conducting
                thorough searches for similarities is crucial. Additionally, the
                name or logo should align with your brand identity and be
                memorable to consumers. Checking for cultural or linguistic
                implications is also important, especially in a global context.
                Lastly, securing legal protection through trademark registration
                is advisable to safeguard your intellectual property and
                establish exclusive rights to your brand elements.
              </p>
            </div>
          </div>
        </div>
        <div className="r w-full  h-[40%]  sm:w-[50%] sm:h-[600px] flex items-center justify-center  ">
          <div className="w-full  h-[300px] flex items-center justify-center">
            <Image src={pic1} width={450} />
          </div>
        </div>
      </div>

      <div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
          Comprehensive Trademark Search FAQs
        </h1>
        <p className="text-sm px-8 mt-2 text-center sm:text-[15px] sm:mt-6 md:text-[18px] md:px-52 md:leading-7 ">
          Still have questions? Call 1 (877) 721-4579 with us for real-time
          support.
        </p>

        <Trademarkcard
          title="What They Are and Their Functions?"
          desc="Serve as an authoritative resource, offering in-depth elucidation on the definition and practical utility of trademarks. This content is designed to provide a nuanced understanding of the complexities inherent in trademarks, delving into their inherent nature, significance, and tangible applications within the professional realm. It aims to equip readers with comprehensive knowledge to navigate the intricacies of trademarks, empowering them with the expertise necessary to comprehend the practical functions that these legal identifiers fulfill in the broader context of business and intellectual property. Generally, the registration of a trademark entitles the registrant to a presumption of ownership of the brand on a national level and a presumed right to use the brand nationwide. It may help prevent someone from registering a confusingly similar mark later and may also help the registrant bring a case in federal court if someone infringes on the brand. Once registered, a registrant can typically start using the ® symbol after the name, logo or slogan. After a mark is properly registered and used for a five-year period, Trademark Engine can also help file a “Declaration of Incontestability.” Considered by some the greatest protection under U.S. trademark law, this may help prevent others from contesting a trademark on the following grounds: (1) the mark is not inherently distinctive; (2) it is confusingly similar to another mark that someone else began using first; or (3) the mark is simply functional as opposed to identifying the source of the goods or services."
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
