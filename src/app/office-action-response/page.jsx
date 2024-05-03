import React from "react";
import Herocard from "../(components)/trademark/Herocard";
import Button from "../(components)/Button";
import { BsHandThumbsUp } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import Trademarkcard from "../(components)/trademark/Trademarkcard";






function page() {
  return (
    <section className="selection:bg-[#bb5644] font-sans">
      <div
        style={{
          backgroundImage:
            "url('/office-action-response/office-action-hero-bg.webp')",
        }}
        className="div w-full h-[600px] md:h-[800px] lg:h-[600px]   bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
      >
        <Herocard
          title=" USPTO Office Action Resolution"
          desc="If you got an Office Action to your trademark application we're here to assist. Act quickly. Pricing begins at "
          buttontitle="Respond To My Office Action for $45*"
          width='600'
          heigth='450'
        />
      </div>


    <div className="w-full h-[770px] md:h-[600px] lg:h-[500px] flex flex-col md:flex-row lg:gap-2 xl:gap-4 3xl:gap-6">
      <div className="w-full h-[50%] md:w-[40%] md:h-full flex items-center justify-center lg:justify-end lg:gap-10">
        <div className="w-[80%] h-[80%]  items-center justify-center flex flex-col gap-4 3xl:gap-10">
        <h1 className="text-2xl  font-bold sm:text-[34px] md:text-[40px] md:leading-[50px] ">Responding to Office Actions</h1>
        <p className="text-sm text-secondary md:text-[15px] md:leading-7 lg:px-4 3xl:px-10 lg:text-lg">If the trademark office finds a mistake or legal problem in your application, they'll send you a notice called an Office Action. It's crucial to fix the issues mentioned in this notice; otherwise, your registration might be canceled. At <span className="font-bold">Filer.me</span>, our attorneys can look into your Office Action and guide you on what to do next. Whether it's a small correction or a legal argument needed, it's important to take action promptly.</p>
        <Button title='Get Started Today' px='150' py='40' />
      
        </div>
      </div>
      <div className="w-full h-[50%] md:w-[60%]  md:h-full  flex items-center justify-center lg:justify-start ">

  <div className="w-10/12  h-[90%] items-center justify-center sm:items-start    flex flex-col gap-4 lg:justify-start lg:gap-8 3xl:pt-10">
    <div className="flex flex-col  relative gap-2 sm:flex-row ">
    <span className="w-8/12 sm:w-10/12 hidden sm:block h-[4px] bg-primary absolute bottom-[-10px]"><hr /></span>

    <div className="div w-10/12 lg:w-8/12 3xl:w-5/12 h-[120px] pl-2  border-primary border-l-4  flex flex-col gap-2  "  >
     <div className="bg-primary text-white flex items-center justify-center w-[50px] h-[50px] rounded-full">
     <BsHandThumbsUp  className="text-xl font-bold"/>

     </div>
     
      <p className="text-sm font-bold sm:text-[17px] md:text-[20px]">Provide us some basic information about your mark</p>

    </div>

    <div className="div w-10/12  lg:w-8/12  3xl:w-5/12  h-[120px] pl-2   border-primary border-l-4   flex flex-col gap-2  "  >
     <div className="bg-primary text-white flex items-center justify-center w-[50px] h-[50px] rounded-full">
     <AiOutlineFile  className="text-xl font-bold"/>

     </div>
     
      <p className="text-sm font-bold sm:text-[17px]  md:text-[20px]">Your information and Office Action is reviewed to confirm engagement</p>

      <span className="w-full sm:hidden h-[4px] bg-primary absolute bottom-[-2px]"><hr /></span>


    </div>
    </div>

    <div className="div w-full  h-[120px] pl-2   flex flex-col gap-2  "  >
     <div className="bg-primary text-white flex items-center justify-center w-[50px] h-[50px] rounded-full">
     <AiOutlineFile  className="text-xl font-bold"/>

     </div>
     
      <p className="text-sm font-bold sm:text-[17px] md:text-[20px]">You will sign off on the response a few days days later</p>

    


    </div>


        
        
      
      
  </div>

      </div>

    </div>




    <div className="w-full h-full bg-[#f5f5f5] flex flex-col md:flex-row ">
        <div className="w-full h-[50%]  md:h-full flex items-center  justify-center   ">
          <div className="w-10/12  h-full flex items-center justify-center lg:justify-end ">
            <div className="card w-10/12 sm:w-[620px] h-[420px] md:w-[400px] md:h-[600px] lg:w-[550px] lg:h-[580px]    flex flex-col gap-4 justify-center items-center border-4 border-primary rounded-lg">
            <p className="text-[13px] font-bold sm:text-[17px] lg:text-[20px]">Office Action Responses</p>
            <p className="text-2xl font-bold sm:text-3xl lg:text-4xl">$45</p>
            <Button title='Get Started' px='100' py='40'/>
            <div className=" w-full flex flex-col gap-4 pl-2">
            <p className="text-[13px] font-bold sm:text-[17px] lg:text-[20px]">Simple Process</p>
            <p className="text-[13px] text-secondary lg:text-[15px]">Answer a few quick questions to get started</p>
            <p className="text-[13px] font-bold sm:text-[17px] lg:text-[20px]">Review and Preparation</p>
            <p  className="text-[13px] text-secondary  lg:text-[15px]">if eligible , your information will be received and a response will be composed</p>
            <p className="text-[13px] font-bold sm:text-[17px] lg:text-[20px]">Consult and Approve</p>
            <p  className="text-[13px] text-secondary  lg:text-[15px]">You will consult with your attorney and approve the response for filing</p>
            </div>
            
            </div>

          </div>
        </div>



        <div className="w-full h-[50%] sm:h-[350px]  md:h-full flex items-center justify-center lg:justify-start">
        <div className="w-10/12 mt-2 lg:mt-0 3xl:w-[60%] h-full md:h-[600px] lg:gap-10   gap-4 flex flex-col justify-start md:justify-center">
        <p className="text-primary font-bold sm:text-[17px]">PRICING</p>
        <h1 className="text-2xl font-bold sm:text-[34px] sm:leading-10 md:text-[40px] 3xl:leading-[50px]">
        Got an Office Action? No worries. We might be able to assist.
        </h1>
        <p className="text-sm md:text-[15px] 3xl:leading-7">
        More than 60% of trademark applications get a notice from the USPTO called an Office Action. While it might seem worrisome, it doesn't have to be. Many times, you can resolve these notices by making small corrections and agreeing to some changes suggested by the USPTO. Don't abandon your application just because of this hiccup.
        </p>

</div>
        </div>

    </div>




    <div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 md:leading-10">
        Office Action Filing FAQs
        </h1>
        <p className="text-sm px-8 mt-2 text-center sm:text-[15px] sm:mt-6 md:text-[18px] md:px-52 md:leading-7 ">
        Still have questions? Call 1 (877) 721-4579 with us for real-time support.
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


      <div className="w-full h-[300px] bg-black flex flex-col items-center gap-4  justify-center mt-4">
       <p className="font-bold text-primary  px-10 lg:text-[18px] ">GET STARTED</p>
        <h1 className="text-white text-[25px] font-bold px-10 sm:text-[30px] md:text-[35px] lg:text-[40px]">
        Respond to my Office Action today.
        </h1>
        <p className="text-[#dadde5] secondary text-[20px] px-8">
        Trust Filer.me to address your Office Action response needs.
        </p>
        <button className="px-3 py-2 rounded-xl bg-primary text-white">
          Get started Now
        </button>
      </div>








      
    </section>
  );
}

export default page;
