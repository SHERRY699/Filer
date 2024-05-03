import React from 'react'
import Herocard from '../(components)/trademark/Herocard'
import Trademarkcard from '../(components)/trademark/Trademarkcard'



function page() {
  return (
  <section  className="selection:bg-[#bb5644] font-sans">
      <div
        style={{
          backgroundImage: "url('/copyright-registration/hero.webp')",
        }}
        className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[600px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
      >
        <Herocard
          title=" 
         
          Through Trademark Examination
"
          desc="Ensure peace of mind and employ an advanced strategy. Confirm the availability of your mark before investing time and money in the application process at "
          buttontitle="Start My CopyRight Registration for $45*"
          width="600"
          heigth="450"
        />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-start mt-4 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl  lg:text-[40px]">
        How copyright operates
        </h1>
        <p className="text-center font-semibold px-6 text-sm sm:text-lg md:text-xl lg:text-xl">
        Secure copyright registration effortlessly with our straightforward online questionnaire in just three simple steps.
        </p>
        <div className="card w-full h-full grid grid-cols-1 sm:grid-cols-3 place-items-center place-content-start sm:flex sm:justify-center md:px-4      pt-4 gap-4 ">
        <div className='w-9/12  sm:w-[220px] sm:h-[400px] md:w-[300px] md:h-[500px] lg:w-[400px] lg:h-[450px]  h-[200px] rounded-2xl flex flex-col pl-4 items-start gap-6 pt-4 bg-white  '>
        <p className='text-sm font-semibold sm:text-[17px] md:text-xl sm:font-bold lg:text-xl'>
        Creation of Exclusive Rights
        </p>
        <p className='text-sm  text-secondary md:text-[15px] sm:leading-6 md:leading-[35px] md:font-semibold '>
        Copyright automatically grants creators exclusive rights to their original works, including the rights to reproduce, distribute, perform, and display their creations. These rights provide creators with control over how their works are used and allow them to benefit financially from their intellectual property.
        </p>
        
        
        
        </div>



        <div className='w-9/12  sm:w-[220px] sm:h-[400px] md:w-[300px] md:h-[500px] lg:w-[400px] lg:h-[450px]  h-[200px] rounded-2xl flex flex-col pl-4 items-start gap-6 pt-4 bg-white  '>
        <p className='text-sm font-semibold sm:text-[17px] md:text-xl sm:font-bold lg:text-xl'>
        Duration and Protection
        </p>
        <p className='text-sm text-secondary md:text-[15px] sm:leading-6 md:leading-[35px] md:font-semibold'>
        Copyright protection lasts for a certain period, typically the life of the creator plus an additional number of years after their death. During this time, copyright prevents others from copying or using the work without permission. After the copyright expires, the work enters the public domain and can be freely used by anyone.
        </p>
        
        
        
        </div>







        <div className='w-9/12   sm:w-[220px] sm:h-[400px] md:w-[300px] md:h-[500px] lg:w-[400px] lg:h-[450px]  h-[200px] rounded-2xl flex flex-col pl-4 items-start gap-6 pt-4 bg-white  '>
        <p className='text-sm font-semibold sm:text-[17px] md:text-xl sm:font-bold lg:text-xl'>
        Registration and Enforcement
        </p>
        <p className='text-sm text-secondary md:text-[15px] sm:leading-6 md:leading-[35px] md:font-semibold'>
        While copyright protection is automatic upon creation, creators can choose to register their works with the appropriate government agency, such as the U.S. Copyright Office. Registration provides additional legal benefits, such as the ability to sue for statutory damages and attorney's fees in case of infringement. 
        </p>
        
        
        
        </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        </div>
      </div>

      <div className="w-full h-full mt-4 mb-4 ">
        <h1 className="text-2xl font-bold text-center px-10 sm:text-[34px] sm:px-52 md:text-[40px] md:px-40 3xl:px-[500px] md:leading-10">
          
Secure your creative endeavors today – act now to protect your work
        </h1>
        <p className="text-sm px-8 mt-2 text-center font-bold sm:text-[15px] sm:mt-6 md:text-[18px] lg:text-[22px] 3xl:px-[700px]  md:px-52 md:leading-7 ">
        Countless individuals have safeguarded their creative endeavors by submitting a copyright application.
        </p>

        <Trademarkcard
          title="What They Are and Their Functions?"
          desc="Serve as an authoritative resource, offering in-depth elucidation on the definition and practical utility of trademarks. This content is designed to provide a nuanced understanding of the complexities inherent in trademarks, delving into their inherent nature, significance, and tangible applications within the professional realm. It aims to equip readers with comprehensive knowledge to navigate the intricacies of trademarks, empowering them with the expertise necessary to comprehend the practical functions that these legal identifiers fulfill in the broader context of business and intellectual property"
        />

        <div>
          <Trademarkcard
            title="How does the legal protection differ between a common law trademark?"
            desc=" Protection varies between a common law trademark and a registered trademark. This information aims to clarify the distinctions in the level of protection afforded to these two types of trademarks, helping users understand the implications of choosing one over the other in the context of intellectual property rights."
          />
        </div>
      </div>


      <div className="w-full h-[300px] bg-black flex flex-col items-center gap-4  justify-center mt-4">
        <h1 className="text-white text-[25px] font-bold px-10 sm:text-[30px] md:text-[35px] lg:text-[40px] lg:font-extrabold">
        Take action to protect your work today.
        </h1>
        <p className="text-[#dadde5] secondary font-semibold text-[20px] px-8">
        Thousands have protected their creative work by filing a copyright
        </p>
        <button className="px-6 py-3 rounded-xl bg-primary text-white">
          Start My Copyright Registration
        </button>
      </div>









  </section>
  
    )
}

export default page