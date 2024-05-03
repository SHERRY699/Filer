import React from 'react'
import CardComponent from './CardComponent'
import img1 from '../../../../public/card/new-2.png'
import img2 from '../../../../public/card/new-3.png'
import img3 from '../../../../public/card/new.png'


function Card() {
  return (
    <main className="selection:bg-[#bb5644]">
        <div className='w-full h-full  grid grid-cols-1 gap-4   sm:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4  place-items-center'>
         <CardComponent image={img1} title='1. Trademark Search and Selection' 
         desc=' Before applying for a trademark, it is crucial to  conduct a comprehensive search to ensure that  the chosen mark is unique and not already in use by another entity. This search helps identify 
         potential conflicts and reduces the risk of  rejection during the registration process. Once a  distinctive and available mark is   selected, it is ready for the next step.'
         />
         <CardComponent image={img2} title="2. Filling the Trademark Application"
         desc='This application typically includes details  about the mark, the goods or services it  represents, and the classes under which it should be registered. The application is then  examined by the trademark office, and if it meets all the requirements, it moves forward in the registration process.'
         />
         <CardComponent image={img3} title='3. Trademark Examination and Registration'
         desc='After filing, the trademark office examines  the application to ensure compliance with  legal requirements and to verify that there   are no conflicts with existing trademarks. If  the application passes examination and   there are no objections, the trademark is   registered. The registration grants the owner  exclusive rights to use the mark in   connection with the specified goods or   services, providing legal protection against   infringement.'
         />

        </div>

    </main>
  )
}

export default Card