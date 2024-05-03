import React from 'react'
import Button from '../Button';

function Contact() {
  return (
    <>
    <main className="selection:bg-[#bb5644]">
        <div className='w-full h-[130px]  lg:h-[100px] flex flex-col gap-2 sm:gap-8 sm:justify-center md:justify-around sm:flex-row items-center mt-10 sm:mt-8 lg:mt-4'>
            <h1 className='font-extrabold text-[18px] sm:text-[30px] font-sans'>Contact filer.me for your business</h1>
            <Button title='Contact us' px='200' py='40'/>

        </div>
    </main>
    </>
  )
}

export default Contact;