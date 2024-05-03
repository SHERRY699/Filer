import React from "react";
import Herocard from "../(components)/trademark/Herocard";
import Button from "../(components)/Button";
import Trademarkcard from "../(components)/trademark/Trademarkcard";

function page() {
  return (
    <>
      <section className=" font-sans selection:bg-[#bb5644]">
        <div
          style={{
            backgroundImage: "url('/trademark-renewal/Trademark-Renewal.png')",
          }}
          className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[500px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
        >
          <Herocard
            title=" Trademark Monitoring Services"
            desc=" Let us handle your trademark while you focus on your business. Packages starting at"
            buttontitle="Monitor my Trademark for $45*"
            width='600'
            heigth='450'
          />
        </div>

        <div className="w-full h-[450px] flex flex-col gap-4 items-center justify-center">
          <p className="text-sm px-4 md:text-[15px] sm:px-10 3xl:px-[200px] md:px-20 lg:leading-9">
            To keep your trademark registration alive, the registration owner
            must file required maintenance documents at regular intervals.
            Failure to file the required maintenance documents during the
            specified time periods will result in cancellation of your trademark
            registration. Owners of trademark registrations must file a
            Declaration of Use and/or Excusable Nonuse under Section 8 of the
            Trademark Act between the fifth and sixth years after the
            registration date. In addition, a Combined Declaration of Use and/or
            Excusable Nonuse under Sections 8 & 9 must be filed every ten years
            after the registration date. Let us handle the complicated part for
            you.
          </p>
          <Button title="Get Started Today" px="150" py="45" />
        </div>

        <div className="w-full h-full bg-[#f5f5f5] flex flex-col md:flex-row ">
          <div className="w-full h-[50%] sm:h-[350px]  md:h-full flex items-center justify-center lg:justify-end">
            <div className="w-10/12 mt-2 lg:mt-0 3xl:w-[60%] h-full md:h-[600px] lg:gap-10   gap-4 flex flex-col justify-start md:justify-center">
              <h1 className="text-2xl font-bold sm:text-[34px] sm:leading-10 md:text-[40px] 3xl:leading-[50px]">
                Protect your trademark with our help, ensuring ongoing
                registration maintenance.
              </h1>
              <p className="text-sm md:text-[15px] 3xl:leading-7">
                Contrary to copyrights and patents, trademarks have the
                potential to endure indefinitely under specific conditions. Upon
                successful registration, trademarks typically require renewal by
                submitting a Declaration of Continued Use around the 5th and 6th
                anniversary of the filing, and subsequently between the ninth
                and tenth year. Following this, renewal occurs every ten years.
                Filer.me sends reminders for relevant deadlines and facilitates
                the submission of required documents through its personalized
                portal, simplifying the process with just a few clicks or
                minimal updates.
              </p>
            </div>
          </div>

          <div className="w-full h-[50%]  md:h-full flex items-center  justify-center   pt-4 ">
            <div className="w-10/12  h-full flex items-center justify-center lg:justify-start ">
              <div className="card w-10/12 sm:w-[620px] h-[420px] md:w-[400px] md:h-[600px] lg:w-[550px] lg:h-[580px]    flex flex-col gap-4 justify-center items-center border-4 border-primary rounded-lg">
                <p className="text-[13px] font-bold sm:text-[17px] lg:text-[20px]">
                  Trademark Registration Renewal
                </p>
                <p className="text-[13px] text-secondary  lg:text-[15px]">
                  I want an expert to review my application
                </p>
                <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  $45
                </p>
                <p className="text-[13px] text-secondary  lg:text-[15px]">
                  + USTPO filing fees
                </p>
                <Button title="Get Started" px="100" py="40" />
                <div className=" w-full flex flex-col gap-4 pl-2">
                  <p className="text-[13px] font-bold sm:text-[17px] lg:text-[20px]">
                    Simple Process
                  </p>
                  <p className="text-[13px] text-secondary lg:text-[15px]">
                    Answer a few quick questions to get started
                  </p>
                  <p className="text-[13px] font-bold sm:text-[17px] lg:text-[20px]">
                    Compile Renewal Application
                  </p>
                  <p className="text-[13px] text-secondary  lg:text-[15px]">
                    {" "}
                    We take it from there and will create your renewal paperwor
                    for you
                  </p>
                  <p className="text-[13px] font-bold sm:text-[17px] lg:text-[20px]">
                    Review and Sign
                  </p>
                  <p className="text-[13px] text-secondary  lg:text-[15px]">
                    You will sign the response and then we file it. It really
                    can be that simple!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-4 mb-4 ">
          <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
            Federal Trademark Registration FAQs
          </h1>
          <p className="text-sm px-8 mt-2 text-center sm:text-[15px] sm:mt-6 md:text-[18px] md:px-52 md:leading-7 ">
            Still have questions? Call 1 (877) 721-4579 or LIVE CHAT with us for
            real-time support.
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

        <div className="w-full h-[300px]  flex flex-col items-center gap-4  justify-center mt-4">
          <h1 className=" text-[25px] font-bold px-10 sm:text-[30px] md:text-[35px] lg:text-[40px]">
            Help me with my Trademark Registration Renewal today
          </h1>
          <p className=" text-secondary text-[20px] px-8">
            Thousands have relied on Filer.me to handle trademark filings needs.
          </p>
          <button className="px-3 py-2 rounded-xl bg-primary text-white">
            Get started
          </button>
        </div>
      </section>
    </>
  );
}

export default page;
