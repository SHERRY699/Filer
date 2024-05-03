import React from 'react'

function page() {
  return (
    <section className='pt-20 selection:bg-[#bb5644] font-sans '>
<div className='w-full h-full mb-10 flex flex-col items-center justify-start'>
    <h1 className='font-bold  text-[25px] md:text-[30px] lg:text-[36px] xl:text-[42px]'>Refund Policy</h1>
    <div className="content text-[13px] text-secondary md:text-[15px] lg:text-[20px] mt-4 w-[80%]  flex flex-col justify-center items-center gap-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 leading-6">
        <p>
        We have money back guarantee policy if we are unable to process the application as committed by us.
        </p>
        <p>
        You can easily reach us with your grievance. Immediately our refund department will assessee the matter and if it finds non-catering of services on our part we'll gladly refund your payment within 4 working days from the date of refund request
        </p>
    </div>
    <p className='font-bold md:text-[20px] lg:text-[24px] xl:text-[30px] mt-4'>NOTE</p>
    <div className=' text-[13px] text-secondary md:text-[15px] lg:text-[20px]  mt-4 w-[80%] leading-6  '>
        <ol className='list-decimal flex flex-col justify-center items-center gap-4 sm:px-10 md:px-20 lg:px-32 xl:px-40'>
        <li> No refund shall be issued if we processed the registration/application as per the government guidelines and issuance of the certificate is pending or delayed on part of a government department or officials.</li>
        <li>We will deduct $200( Two hundred Dollars only) as an administrative charges if application would not be able to process due to non-submission of requisite documents as per government guideline or any kind of non-cooperation from applicant or any other circumstances which restricting us to process the application.</li>
        <li>Any payment made during the registration application process, such as government fees, duties, challans, or other charges. We will refund the payment received after reducing government fee paid by us.</li>
        <li>No refund shall be issued if you have already availed any complimentary service or discount offer which was attached to the paid service for which you are seeking a refund</li>
        </ol>
    </div>


</div>
    </section>
  )
}

export default page