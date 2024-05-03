import React from 'react'
import Herocard from '../(components)/trademark/Herocard';
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import pic from '../../../public/filing-an-extension/img.webp'
import TrademarkRegcard from '../(components)/trademark/TrademarkRegcard';
import Image from 'next/image';
import TrademarkOrangeCard from '../(components)/trademark/TrademarkOrangeCard';
import Trademarkcard from '../(components)/trademark/Trademarkcard';



function page() {
  return (
   <section className='selection:bg-[#bb5644] font-sans'>
      <div
          style={{
            backgroundImage: "url('/filing-an-extension/hero.webp')",
          }}
          className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[500px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
        >
          <Herocard
            title=" 
            Submit Your Statement of Use Extension Online."
            desc=" Extend your Trademark Statement of Use deadline with the USPTO by filing an extension online. Need more time? Let us assist you in extending your deadline for another six months at"
            buttontitle="Start My Extension Filing for $45*"
            width='600'
            heigth='450'
          />
        </div>


        <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl  lg:text-[40px]">
        Quick and Simple 3-Step Process
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
        You've put in the hard work to protect your brand. Keep it safe, don't let it expire.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard
            image={card}
            title="1. Answer a Few Questions"
            desc="Whether you choose to manage your trademark application independently or seek the guidance of an attorney, we offer solutions tailored to your preferences. Just complete our brief questionnaire to begin."
          />

          <TrademarkRegcard
            image={card1}
            title="2. Review your Application"
            desc="We generate the official application on your behalf. Additionally, we'll perform a search to identify any direct-hit conflicts"
          />

          <TrademarkRegcard
            image={card2}
            title="3. Application Filed"
            desc="We'll submit your finished application to the U.S. Patent and Trademark Office (USPTO)."
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
              Why should I choose Filer.me for my Statement of Use Extension?
              </h2>
              <p className="text-sm px-10 3xl:leading-7 lg:text-[16px] text-secondary">
              <span className='font-bold'>.</span>   Whether you provide the serial number or not, we ensure your filing is thorough and accurate.
              </p>
              <p className="text-sm px-10 3xl:leading-7  lg:text-[16px] text-secondary">
              <span className='font-bold'>.</span> Our questionnaire comes with clear, step-by-step guidance.
              </p>
              <p className="text-sm px-10 3xl:leading-7  lg:text-[16px] text-secondary">
              <span className='font-bold'>.</span>    You get the opportunity to review and sign the filing before submission.
              </p>
              <p className="text-sm px-10 3xl:leading-7  lg:text-[16px] text-secondary">
              <span className='font-bold'>.</span>    Access your account in the cloud for all documents, updates, and deadlines.
              </p>
              <p className="text-sm px-10 3xl:leading-7  lg:text-[16px] text-secondary">
              <span className='font-bold'>.</span>     Receive comprehensive customer service assistance through phone, email, or chat.
              </p>







            </div>
          </div>
        </div>
      </div>



      <TrademarkOrangeCard
      title=' Finish the procedure with just a few mouse clicks'
      desc=" If you submitted an Intent to Use application, you secured your
      position in line even before using your mark. If you haven't
      started using your mark in commerce yet, that's okay. The USPTO
      permits up to five six-month extensions. Request your extension
      today to maintain your spot in line."
      cardtitle='  Filing for Extension of Statement of Use'
      
      />






<div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
        Statement of Use Extension Filing FAQs
        </h1>
        <p className="text-sm px-8 mt-2 text-center sm:text-[15px] sm:mt-6 md:text-[18px] md:px-52 md:leading-7 ">
        Still have questions? Call 1 (877) 721-4579 with us for real-time support.
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

export default page;