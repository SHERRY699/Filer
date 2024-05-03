import React from "react";
import Button from "../(components)/Button";
import PackagesCard from "../(components)/landingpage/PackagesCard";
import TrademarkRegcard from "../(components)/trademark/TrademarkRegcard";
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import pic from "../../../public/trademark-registration/f762fd3242.jpg";
import service from "../../../public/services/service.png";
import Image from "next/image";
import trademark from '../../../public/trademark-registration/trademark.jpeg'
import Trademarkcard from "../(components)/trademark/Trademarkcard";
import Trademarkhero from "../(components)/trademark/Trademarkhero";

const array = [
  {
    title: "Case Review",
  },
  {
    title: "Basic Trademark Search",
  },
  {
    title: "Trademark Monitoring Services(1 Month)",
  },
  {
    title: "Trademark Secured ™",
  },
  ,
  {
    title: "Complete paperwork",
  },
];
const array1 = [
  {
    title: "Case Review by a (TM Expert)",
  },
  {
    title: "Basic Free Trademark Search",
  },
  {
    title: "Trademark Monitoring Services(3 Month)",
  },
  {
    title: "Trademark Secured ™",
  },
  {
    title: "Refusal Risk Meter ™",
  },
  {
    title: "Complete paperwork",
  },
];
const array2 = [
  {
    title: "Case Review & Filing by an (Attorney)",
  },
  {
    title: "Expedited Application Processing within 24 Hours",
  },
  {
    title: "Filing along with complete Paperwork",
  },
  {
    title: "Trademark Monitoring Services,(12 Months)",
  },
  {
    title: "Trademark Secured ™",
  },
  {
    title: "Refusal Risk Meter ™",
  },
  {
    title: "Litigant Scan",
  },
  {
    title:
      "Comprehensive Trademark Search Report(50 States along with social media/Domains)",
  },
  {
    title: "Cease & Desist Letter",
  },
  {
    title: "Dedicated Account Manager & 100% Approval Guranteed",
  },
];
const array3 = [
  {
    title: "Case Review & Filing by an (U.S Registered IP Attorney)",
  },
  {
    title: "Assigned Case Filing Officer",
  },
  {
    title: "Private Registration",
  },
  {
    title: "Federal Search & Clearance Report (All States)",
  },
  {
    title: "Federal E-Filing(USPTO)",
  },
  {
    title: "Cease & Desist Letter",
  },
  {
    title: "Trademark Monitoring(1 Year)",
  },
  {
    title: "Trademark Secured",
  },
  {
    title: "Direct Hit Search",
  },
  {
    title: "Dedicated Case Manager",
  },
  ,
  {
    title: "24/7 Secure Online Access",
  },
  ,
  {
    title: "100% Approval Guarantee",
  },
];

function page() {
  return (
    <section className=" font-sans selection:bg-[#bb5644]">

     <Trademarkhero
     image={trademark}
     
     />

      <div className="w-full h-full bg-[#f9f9f9]  font-sans pt-10 mt-10  lg:flex lg:flex-col lg:items-center lg:justify-center">
        <h1 className="text-[24px] sm:text-[34px] text-justify font-bold px-8 lg:text-[40px] ">
          Start securing your business today.
        </h1>
        <p className="text-[18px]  text-justify px-10 font-semibold leading-[20px] mt-4 lg:px-[300px]  ">
          Ensure the future of your brand with a quick and straightforward
          online trademark application.
        </p>
        <div className="packages-card  grid grid-cols-1 sm:grid-cols-4 gap-8  sm:gap-0 sm:px-10 md:justify-items-center lg:flex lg:flex-row lg:justify-center lg:gap-4 md:px-2 place-items-center sm:place-items-start mt-12 font-sans">
          <PackagesCard title="Basic" price="45" array={array} />
          <PackagesCard title="Deluxe" price="149" array={array1} />
          <PackagesCard title="Premium" price="299" array={array2} />
          <PackagesCard title="Supreme" price="449" array={array3} />
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl  lg:text-[40px]">
          How Filer.me Works
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
          Secure your trademark effortlessly with our straightforward online
          questionnaire in just three simple steps
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard
            image={card}
            title="1. Answer a Few Questions"
            desc="Everything starts with a simple questionnaire designed to take only a few minutes. Simply share your information, and the legal team will take it from there."
          />

          <TrademarkRegcard
            image={card1}
            title="2. Review with a U.S.-licensed Attorney"
            desc="We create the official application for you. Plus, we'll conduct a search to reveal direct-hit conflicts."
          />

          <TrademarkRegcard
            image={card2}
            title="3. File the Application"
            desc="Once you approve the application, we’ll take care of filing the application with the USPTO, so you can focus on building your brand."
          />
        </div>
      </div>

      <div className="w-full h-[250px] text-center mt-4 lg:mt-10">
        <p className="text-sm sm:text-[17px] md:text-[20px] font-semibold lg:text-3xl">
          Don't just take our word for it
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-[40px] font-bold px-4 sm:px-20 md:px-32 lg:text-5xl lg:px-[280px] leading-9 md:leading-[55px] lg:leading-[60px] lg:mt-4">
          With a rating of 4.5 out of 5 , Filer.me is highly regarded supported
          by 31,500 reviews .
        </h1>
      </div>

      <div className="w-full h-full bg-[#effaff] mt-10 flex flex-col sm:flex-row lg:px-20 xl:px-32 2xl:px-40 3xl:px-52">
        <div className="r w-full  h-[40%]  sm:w-[50%] sm:h-[600px] flex items-center justify-center  ">
          <div className="w-full  h-[300px] flex items-center justify-center">
            <Image src={pic} width={450} />
          </div>
        </div>
        <div className="l w-full h-[60%]  sm:w-[50%] sm:h-[600px] flex items-center justify-center  ">
          <div className="w-full h-full flex items-center justify-center md:justify-start">
            <div className="content font-sans w-9/12 h-full  flex flex-col gap-10 sm:items-center sm:justify-center lg:items-start ">
              <h2 className="text-2xl font-bold leading-10 px-10 sm:text-4xl  lg:text-[42px] 3xl:leading-[60px]">
                Why should you consider obtaining a trademark?
              </h2>
              <p className="text-sm px-10 3xl:leading-7">
                Lots of the brands, logos, and slogans you really like and trust
                have been officially registered.
              </p>
              <p className="text-sm px-10 3xl:leading-7">
                When your mark is registered, it means people assume you own it
                and have the right to use it across the country, giving you more
                protection if there are legal issues.{" "}
              </p>
              <p className="text-sm px-10 3xl:leading-7">
                After registration, you can show that your business is
                established and serious by putting the ® symbol next to your
                name, logo, or slogan. Plus, there are other good things that
                come with it:
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full  mt-10 flex flex-col sm:flex-row lg:px-20 xl:px-32 2xl:px-40 3xl:px-52">
        <div className="l w-full h-full sm:w-[50%] sm:h-[600px] flex items-center justify-center  ">
          <div className="w-full h-full flex items-center justify-center md:justify-end">
            <div className="content font-sans w-9/12 h-full  flex flex-col gap-10 sm:items-center sm:justify-center lg:items-start ">
              <h2 className="text-2xl font-bold  px-10  sm:px-4 sm:text-4xl  lg:text-[42px] 3xl:leading-[60px]">
                Why Conduct a Search for Similar Marks?
              </h2>
              <p className="text-sm px-6 sm:px-2 3xl:leading-7 ">
                Before investing your time and money in filing a trademark
                application, it's wise to conduct a search and ensure your
                chosen mark isn't already in use or registered by someone else.
                This precautionary step helps avoid complications and potential
                rejection by the USPTO. Keep in mind that if your application
                gets rejected, the fees paid to both Filer.me and the USPTO are
                non-refundable. Especially for new businesses, it's more prudent
                to make any necessary name changes early on rather than
                investing in building a brand that might need a later
                adjustment. Our packages include a complimentary federal
                direct-hit search, and for added assurance, we provide more
                extensive searches covering federal, state, common law, and
                global levels. This ensures greater peace of mind during the
                pending period of your trademark application with the USPTO.
              </p>
            </div>
          </div>
        </div>

        <div className="r w-full  h-full sm:w-[50%] sm:h-[600px] flex items-center justify-center  ">
          <div className="w-full  h-full flex items-center justify-center">
            <Image src={service} width={600} />
          </div>
        </div>
      </div>

      <div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
          Federal Trademark Registration FAQs
        </h1>
        <p className="text-sm px-8 mt-2 text-center sm:text-[15px] sm:mt-6 md:text-[18px] md:px-52 md:leading-7 ">
          Still have questions?Call 1 (877) 721-4579 or LIVE CHAT with us for
          real-time support
        </p>

        <Trademarkcard
          title="What They Are and Their Functions?"
          desc="Serve as an authoritative resource, offering in-depth elucidation on the definition and practical utility of trademarks. This content is designed to provide a nuanced understanding of the complexities inherent in trademarks, delving into their inherent nature, significance, and tangible applications within the professional realm. It aims to equip readers with comprehensive knowledge to navigate the intricacies of trademarks, empowering them with the expertise necessary to comprehend the practical functions that these legal identifiers fulfill in the broader context of business and intellectual property. Generally, the registration of a trademark entitles the registrant to a presumption of ownership of the brand on a national level and a presumed right to use the brand nationwide. It may help prevent someone from registering a confusingly similar mark later and may also help the registrant bring a case in federal court if someone infringes on the brand. Once registered, a registrant can typically start using the ® symbol after the name, logo or slogan. After a mark is properly registered and used for a five-year period, Trademark Engine can also help file a “Declaration of Incontestability.” Considered by some the greatest protection under U.S. trademark law, this may help prevent others from contesting a trademark on the following grounds: (1) the mark is not inherently distinctive; (2) it is confusingly similar to another mark that someone else began using first; or (3) the mark is simply functional as opposed to identifying the source of the goods or services."
        />

        <div>
          <Trademarkcard
            title="How does the legal protection differ between a common law trademark?"
            desc="  Protection varies between a common law trademark and a registered trademark. This information aims to clarify the distinctions in the level of protection afforded to these two types of trademarks, helping users understand the implications of choosing one over the other in the context of intellectual property rights."
          />
        </div>
      </div>
    </section>
  );
}

export default page;
