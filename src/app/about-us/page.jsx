import React from "react";
import group from "../../../public/about/Group-1.png";
import Button from "../(components)/Button";
import Image from "next/image";
import aboutcontent1 from "../../../public/about/664799bf2a.jpg";
import aboutcontent2 from "../../../public/about/ac650be6b3.jpg";
import AboutCard from "../(components)/about/AboutCard";
import Sliding from "../(components)/landingpage/Sliding";
import trademark from "../../../public/about/eec5a0add4.jpg";
import AboutContent from "../(components)/about/AboutContent";

function page() {
  return (
    <section className="selection:bg-[#bb5644]">
      <div className="w-full h-4/5 sm:h-[800px]  flex flex-col gap-4 sm:gap-8 items-center justify-start pt-20  bg-[#fdf8f3]">
        <p className="font-extrabold">ABOUT US</p>
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl md:font-bold">
          Learn About Filer.me
        </h1>
        <Button title="Register Now" px="350" py="40" />
        <div className="image px-4">
          <Image src={group} width={800} />
        </div>
      </div>
      <div className="w-full h-max flex items-center justify-center mt-10">
        <div className="w-8/12 sm:w-10/12 md:w-11/12 lg:w-8/12 h-4/5  ">
          <div className="content1 w-full h-full flex flex-col md:flex-row gap-4">
            <Image src={aboutcontent1} width={600} />

            <div className="flex flex-col md:justify-center md:gap-4 ">
              <h1 className="text-xl sm:text-3xl md:text[40px]  font-bold 3xl:text-5xl">
                Our Overview
              </h1>
              <p className="text-sm text-secondary lg:leading-[30px] 3xl:text-lg  ">
                If you need more time to complete your Trademark Statement of
                Use Extension with the USPTO, we have your back. We are here to
                help you extend the deadline
              </p>
            </div>
          </div>
          <div className="content2 w-full h-full flex flex-col  md:flex-row  gap-4 mt-4 sm:mt-20">
            <div className="flex flex-col md:justify-center md:gap-4 ">
              <h1 className="text-xl sm:text-3xl md:text[40px] font-bold 3xl:text-5xl">
                Establishing the legitimacy for everyone
              </h1>
              <p className="text-sm text-secondary lg:leading-[30px] 3xl:text-lg   ">
                We believe that everyone, regardless of their identity, deserves
                convenient access to legal assistance. Our objective is to
                support the broader small business community and the general
                public by making a positive difference. We are establishing
                long-lasting partnerships with nonprofits to empower
                marginalized communities that have been excluded from
                traditional legal procedures. In addition to these partnerships,
                we also participate in corporate giving and encourage our staff
                to contribute through community service days and matching
                programs.
              </p>
            </div>

            <Image src={aboutcontent2} width={600} />
          </div>
        </div>
      </div>

      <div className="w-full h-[300px]  flex flex-col items-center justify-center gap-6">
        <h1 className="font-bold text-2xl px-8 sm:text-[34px]">
          Initiate Protection for Your Name Now
        </h1>
        <p className="text-secondary text-sm px-8">
          Act now to ensure long-lasting protection for your brand identity .
          Your security begins immediately.
        </p>
        <Button title="Get Started" px="200" py="45" />
      </div>

      <div className="w-full h-max grid grid-cols-1 sm:grid-cols-2   gap-4 sm:px-10 2xl:px-[180px] 3xl:px-[370px] place-items-center ">
        <AboutCard
          title="Federal and State"
          desc="Ensure that your name, slogan, or logo does not closely resemble trademarks registered with the USPTO and in all 50 states. Receive a comprehensive report covering various classes and subclasses."
          link="/"
        />
        <AboutCard
          title="Secure Your Mark's Renewal"
          desc="In trademark law, it is necessary to regularly submit certain documents. Allow us to assist you with these filings, which may include your Declaration of Use and/or Excusable Nonuse."
          link="/"
        />
        <AboutCard
          title="Safeguard Your Online Content with DMCA Takedown"
          desc="If anyone uses your images, videos, audio, or products without permission, our budget-friendly and quick DMCA Takedown service can help you put a stop to it more easily."
          link="/"
        />
        <AboutCard
          title="Secure an Extension for Filing"
          desc="If you need more time to complete your Trademark Statement of Use Extension with the USPTO, we have your back. We are here to help you extend the deadline."
          link="/"
        />
      </div>

      <div className="w-full h-full mt-6">
        <div className="w-full h-full   flex flex-col md:flex-row items-center justify-center md:justify-between lg:justify-center mt-6">
          <div className="r  w-10/12 h-[60%]  md:w-[70%] lg:w-[40%] flex flex-col lg:gap-4 justify-center  items-start pl-10">
            <Sliding
              title="OUR SERVICES"
              desc=" Quick and Secure Registration Strategies"
              button1="  Trademark Registration USPTO Filings"
              button2=" Trademark Documents Different Filing Types"
              button3=" Copyright Registration"
              button4="  Trademark Monitoring & Maintenance"
              button1desc=" You don't have to stress about the registration process. You can either fill out the application on your own or choose a package with attorney help. Then, sit back and see your USPTO filing successfully complete the registration process."
              button2desc="Got an Office Action and not sure what to do next? Whether you want to complete a Transfer and Assignment or purchase a Certified Copy, we're here to assist you. Our online filing process is fast and secure, ensuring a smoother journey for you"
              button3desc="When you create something like books, articles, or websites, you automatically have rights to it. However, to enhance and secure those rights, it's advisable to officially register your work with the U.S. Copyright Office."
              button4desc="Ensure the safeguarding of your trademark from infringement and dilution by actively monitoring all filings with the USPTO. Gain peace of mind as we take care of keeping a watchful eye on everything for you."
            />
          </div>
          <div className="l w-full h-4/5  md:w-[30%] lg:w-[30%]  mt-4 flex items-center justify-center lg:justify-start">
            <Image src={trademark} alt="service.png" width={400} />
          </div>
        </div>
      </div>

      <div className="w-full h-max bg-[#fdf8f3] mt-4 flex flex-col sm:flex-row items-center justify-start  pt-4 3xl:px-[300px]">
        <div className="w-10/12 h-[30%]  sm:pl-4 lg:w-8/12 flex flex-col gap-6 3xl:gap-12  xl:px-20 3xl:pl-[100px]  ">
          <h1 className="text-xl font-bold sm:text-[34px] md:text-[40px] md:leading-[35px] 3xl:leading-[60px]">
            Dedicated Allies for your Trademark
          </h1>
          <p className="text-sm text-secondary md:leading-[30px] xl:text-lg">
            Count on us as your dedicated allies for trademark success ,
            providing unwavering support and expertise throughout the entire
            process
          </p>
          <Button
            title="File My Trademark With Attorney Help"
            px="400"
            py="45"
          />
        </div>
        <div className="w-10/12 h-full grid grid-cols-2 gap-2 mt-4 3xl:px-[50px]  ">
          <AboutContent
            title="Speedy and Dependable Support"
            desc="Our straightforward and speedy questionnaire makes it a breeze to begin the trademark registration process within minutes. Just respond to the provided questions, and our dedicated team will handle the rest."
          />
          <AboutContent
            title="Dodge the inconveniences"
            desc="You wouldn't want to go through the hassle of trademark registration only to find out that someone else has already registered your mark with the USPTO. If your USPTO application gets rejected, the fees you paid cannot be refunded."
          />
          <AboutContent
            title="Proficient Team Members"
            desc="Our proficient team members excel in their roles, demonstrating skill and expertise. With a deep understanding of their tasks, they contribute effectively to our projects. Their competence ensures smooth operations and high-quality outcomes, making them valuable contributors to the success of our endeavors."
          />
          <AboutContent
            title="Embrace Your Passion"
            desc="Embrace Your Passion encourages you to wholeheartedly pursue what ignites your enthusiasm. Dive into your interests, invest time in what drives you, and unlock the joy of meaningful engagement. By embracing your passion, you discover fulfilment, purpose, and the satisfaction of aligning your actions with what truly inspires you."
          />
        </div>
      </div>

      <div className="w-full h-[300px] bg-black flex flex-col items-center gap-4  justify-center mt-4">
        <h1 className="text-white text-[25px] font-bold px-10 sm:text-[30px] md:text-[35px] lg:text-[40px]">
          Take action to protect your name today
        </h1>
        <p className="text-[#dadde5] secondary text-[20px] px-8">
          Discover if your trademark is already in use
        </p>
        <button className="px-3 py-2 rounded-xl bg-primary text-white">
          Get started
        </button>
      </div>
    </section>
  );
}

export default page;
