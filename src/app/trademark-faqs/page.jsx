import React from 'react'
import Trademarkmonitoringcard from '../(components)/trademark/Trademarkmonitoringcard'

function page() {
  return (
    <section className='selection:bg-[#bb5644] font-sans'>

    <div className='w-full h-[600px] mt-4 flex flex-col sm:px-10 sm:flex-row gap-10 pb-4 items-center justify-center'>
    <div className='w-full h-full md:w-[50%] flex  items-center justify-center flex-col '>
    <h1 className='text-2xl sm:text-4xl font-bold md:text-[42px] md:leading-[50px]'>Trademark FAQs</h1>
    <p className='text-sm sm:text-2xl  lg:px-20 '>Still have questions? Call 1 (877) 721-4579 or LIVE CHAT with us for real-time support.</p>

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
            </section>

  )
}

export default page