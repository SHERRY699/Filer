import React from "react";
import Herocard from "../(components)/trademark/Herocard";
import card from "../../../public/trademark-registration/search-interface-symbol.png";
import card1 from "../../../public/trademark-registration/comment.png";
import card2 from "../../../public/trademark-registration/files.png";
import TrademarkRegcard from "../(components)/trademark/TrademarkRegcard";
import AboutContent from "../(components)/about/AboutContent";
import Button from "../(components)/Button";
import Trademarkcard from "../(components)/trademark/Trademarkcard";

function page() {
  return (
    <section className='selection:bg-[#bb5644] font-sans'>
      <div
        style={{
          backgroundImage:
            "url('/international-trademark-registration/International-Trademark-Registration.webp')",
        }}
        className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[600px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
      >
        <Herocard
          title="Assistance with U.S. Trademark Filing for International Applicants"
          desc=" Trademark registration gives you legal ownership and exclusive rights to your brand name, logo, or slogan, preventing others from using it without your permission. Whether you're a small business, an entrepreneur, or an individual, securing your trademark in the U.S. can be crucial for expanding your market and protecting your brand identity at"
          buttontitle="File my Trademark for $45*"
          width="600"
          heigth="550"
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl lg:text-[40px]">
          The Process of Trademark
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
          Secure your trademark effortlessly with our straightforward online
          questionnaire in just three simple steps.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
          <TrademarkRegcard
            image={card}
            title="1. Understanding International Trademark Systems"
            desc=" International trademark protection involves navigating different legal systems and regulations across countries. It's crucial to understand the various international agreements and systems available for trademark protection"
          />

          <TrademarkRegcard
            image={card1}
            title="2. Conducting Comprehensive Trademark Searches"
            desc="Before filing a trademark application internationally, it's essential to conduct thorough trademark searches to ensure that your proposed mark is available for registration and doesn't infringe on existing trademarks in the target countries."
          />

          <TrademarkRegcard
            image={card2}
            title="3. Adhering to Country-Specific Requirements:"
            desc="Each country may have its own unique requirements and procedures for trademark registration. It's essential to carefully review and comply with the specific filing requirements, documentation, and fees of each country where you plan to seek trademark protection"
          />
        </div>
      </div>

      <div className="w-full h-max bg-[#effaff] mt-4 flex flex-col sm:flex-row items-center justify-start  pt-4 3xl:px-[300px]">
        <div className="w-10/12 h-[30%]  sm:pl-4 lg:w-8/12 flex flex-col gap-6 3xl:gap-12  xl:px-20 3xl:pl-[100px]  ">
          <h1 className="text-xl font-bold sm:text-[34px] md:text-[40px] md:leading-[35px] 3xl:leading-[60px]">
            Dedicated Trademark Representatives
          </h1>
          <p className="text-sm text-secondary md:leading-[30px] xl:text-lg">
            Our team is prepared to address your trademark requirements with
            professionalism, courtesy, and efficiency.
          </p>
          <Button
            title="File My Trademark With Attorney Help"
            px="400"
            py="45"
          />
        </div>
        <div className="w-10/12 h-full grid grid-cols-2 gap-2 mt-4 3xl:px-[50px]  ">
          <AboutContent
            title="Comply with Federal Regulations"
            desc="The US Patent and Trademark Office (USPTO) mandates that foreign trademark applicants must be represented by a U.S.-licensed attorney. Typically, you cannot submit without one."
          />
          <AboutContent
            title="Paperwork Reviewed by an Attorney"
            desc=" Our U.S. attorneys are dedicated to upholding the quality and integrity of your trademark application, minimizing the risk of errors that could jeopardize your intellectual property rights."
          />
          <AboutContent
            title="Live Consultations Offered"
            desc="You can simply approve the attorney’s suggestion or schedule a live consultation with your lawyer to help answer any questions and have peace of mind."
          />
          <AboutContent
            title="Secure Your Rights"
            desc="Our attorneys guide foreign applicants through the U.S. trademark system, enabling international businesses to safeguard their brand in the world's largest market."
          />
        </div>
      </div>

      <div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
          Foreign Trademark Application FAQs
        </h1>
        <p className="text-sm px-8 mt-2 text-center sm:text-[15px] sm:mt-6 md:text-[18px] md:px-52 md:leading-7 ">
          Still have questions? Call 1 (877) 721-4579 or LIVE CHAT with us for
          real-time support.
        </p>

        <Trademarkcard
          title="What is a trademark and what does it do ?"
          desc="One way to understand a trademark is that it is a word, phrase, symbol, and/or design that identifies and distinguishes the source of the goods of one party from those of another party. A “service” mark distinguishes the source of a service, rather than a good, but the two are typically simply referred to as a “trademark” or “mark”. In more general terms, getting a trademark protects a brand. Many of the well-known brands, logos and slogans you love, know and trust have been registered with the United States Patent and Trademark Office. Generally, the registration of a trademark entitles the registrant to a presumption of ownership of the brand on a national level and a presumed right to use the brand nationwide. It may help prevent someone from registering a confusingly similar mark later and may also help the registrant bring a case in federal court if someone infringes on the brand. Once registered, a registrant can typically start using the ® symbol after the name, logo or slogan. After a mark is properly registered and used for a five-year period, Trademark Engine can also help file a “Declaration of Incontestability.” Considered by some the greatest protection under U.S. trademark law, this may help prevent others from contesting a trademark on the following grounds: (1) the mark is not inherently distinctive; (2) it is confusingly similar to another mark that someone else began using first; or (3) the mark is simply functional as opposed to identifying the source of the goods or services."
        />

        <div>
          <Trademarkcard
            title="What is a common law trademark and why bother to register a mark?"
            desc="Under U.S. law, a “common law trademark” is generally established when someone uses a company name, logo or slogan in commerce, even if it is not registered. So, why pay to register a trademark when a common law trademark may already exist? Common law rights ordinarily are limited to the geographic area where the mark is used as opposed to the nationwide protection customarily obtained when a mark is registered with the USPTO. So, unless registered, the use of a mark can be geographically limited, which hampers the ability to expand the brand. On the other hand, a person using a mark in a limited geographic area could be boxed in by someone else who offensively registers a similar mark. In addition, registration of a trademark can give the person holding the registered trademark a leg up in court as to the validity of the mark and the date of usage in later trademark infringement litigation, if it comes to that. There are also favorable remedies available to registered trademark owners in the event of litigation. Finally, once a trademark is accepted by the USPTO, it will be maintained in the USPTO database, which can discourage others from using the mark in the future. Future companies should be on notice that the mark is already spoken for, which should in turn help avoid at least some disputes."
          />
        </div>
      </div>
    </section>
  );
}

export default page;
