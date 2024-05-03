import React from 'react'
import Herocard from '../(components)/trademark/Herocard';
import Trademarkmonitoringcard from '../(components)/trademark/Trademarkmonitoringcard';
import Button from '../(components)/Button';


function page() {
  return (
  <section className="selection:bg-[#bb5644]">
      <div
    style={{
      backgroundImage:"url('/trademark-registration/trademark-monitoring-content-image.png')",
    }}
    className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[700px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
  >
   <Herocard
   title=' Trademark Monitoring Services'
   desc=' Let us handle your trademark while you focus on your business. Packages starting at'
   buttontitle='Monitor my Trademark for $45*'
   width='600'
   heigth='450'
   />
  </div>

  <div className='w-full h-full mt-4 flex flex-col sm:px-10 sm:flex-row gap-10 pb-4 items-center justify-center'>
    <div className='w-full h-full flex sm:justify-start items-center justify-center'>
    <h1 className='text-2xl sm:text-4xl font-bold md:text-[42px] md:leading-[50px]'>Trademark Monitoring FAQs</h1>

    </div>



    <div className='w-[400px] sm:w-[50%] h-full flex flex-col  items-center justify-center sm:items-start  '>
        <Trademarkmonitoringcard
        title='What They Are and Their Functions'
        desc='Serve as an authoritative resource, offering in-depth elucidation on the definition and practical utility of trademarks. This content is designed to provide a nuanced understanding of the complexities inherent in trademarks, delving into their inherent nature, significance, and tangible applications within the professional realm. It aims to equip readers with comprehensive knowledge to navigate the intricacies of trademarks, empowering them with the expertise necessary to comprehend the practical functions that these legal identifiers fulfill in the broader context of business and intellectual property.'
        
        />
        <div className='mt-4'>
            <Trademarkmonitoringcard
            title="How does the legal protextion differ between a common law trademark"
            desc="Protection varies between a common law trademark and a registered trademark. This information aims to clarify the distinctions in the level of protection afforded to these two types of trademarks, helping users understand the implications of choosing one over the other in the context of intellectual property rights."
            />

        </div>
    </div>

  </div>





  <div className='w-full h-[450px] bg-black flex flex-col gap-4 items-center justify-center'>
    <h1 className='text-white font-extrabold text-2xl sm:text-4xl px-10 sm:px-20 md:text-[42px] md:px-20'>Let us handle your trademark while you focus
        on your business
    </h1>
    <p className='text-[#DADDE5] text-[20px] px-8 sm:px-16 md:px-24'>
        Thousands have protected their brand by monitoring their 
        brand by monitoring their trademark
    </p>

    <Button
    title='Start Monitoring My Trademark Today'
    px='300'
    py='45'
    />

  </div>










  </section>

  
  )
}

export default page;