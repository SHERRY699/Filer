import React from 'react'
import Herocard from '../(components)/trademark/Herocard'
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import TrademarkRegcard3 from '../(components)/trademark/TrademarkRegcard3';
import pic from "../../../public/comprehensive-trademark-search/a47e92b0bf.jpg";
import TrademarkOrangeCard from '../(components)/trademark/TrademarkOrangeCard';
import Trademarkcard from '../(components)/trademark/Trademarkcard';

import Image from 'next/image';






function page() {
  return (
    <section className="selection:bg-[#bb5644] font-sans">
          <div
        style={{
          backgroundImage: "url('/statement-of-use/hero.webp')",
        }}
        className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[500px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
      >
        <Herocard
          title=" 
         
          Efficient and Seamless Submission of Use Statement
"
          desc="Having initiated with your Intent to Utilize, now bring it to completion at  "
          buttontitle="Start My Statement for $45*"
          width="400"
          heigth="400"
        />
      </div>




      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-[40px]">
        Fast and Easy Statement of Use Filing
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
        You’ve started the process with your Intent to Use, now finish it.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard3 
          image={card} 
          title="1. Access Our Platform" 
          desc='Visit our user-friendly online platform designed for Statement of Use filing.'
          />

          <TrademarkRegcard3
            image={card1}
            title="
        
            2. Complete the Form"
            desc="Provide the necessary details by filling out a concise and straightforward form."
          />

          <TrademarkRegcard3
            image={card2}
            title="

            3. Submit for Processing
            "
            desc="Submit the completed form through our platform for prompt processing."
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
              What advantages are available to simplify and expedite the Statement of Use process for trademark registration?
              </h2>
              <p className="text-sm px-10 3xl:leading-7  lg:text-[16px] text-secondary">
              Streamlining and expediting the Statement of Use process for trademark registration involves utilizing a platform that offers a user-friendly experience. This solution ensures efficient submission and processing, enhancing the overall effectiveness of the registration procedure.
              </p>
            </div>
          </div>
        </div>
      </div>



      <TrademarkOrangeCard
      title=' Finalize the Procedure with Just a Few Clicks'
      desc="By filing an Intent to Use application, you've reserved your spot in line even before actively using your mark. If you haven't started utilizing your mark in commerce yet, don't worry. The USPTO allows up to five six-month extensions. Secure your place in line by requesting an extension today."
      cardtitle='Get Started'
      
      />


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
  )
}

export default page