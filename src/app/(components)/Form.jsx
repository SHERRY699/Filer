import React from 'react'

function Form(props) {
    const {title}=props
  return (
    <section className="selection:bg-[#bb5644] font-sans ">
    <div className="w-full h-full flex  flex-col items-center justify-center pt-24">
      <div className="payment w-full  h-full gap-4 flex flex-col items-center justify-start">
        <h1 className="text-[25px] md:text-[30px] lg:text-[40px] 3xl:text-[42px] font-bold">{title}</h1>
        <form className="w-full h-full  mt-2 gap-4 flex flex-col items-center justify-start">
          <input
            placeholder="Enter Your Name"
            type="text"
            className="w-10/12 sm:w-[510px] md:w-[680px] lg:w-[900px] h-[45px] px-4 rounded-full border-[1px] border-secondary outline-none"
          />
          <input
            placeholder="Enter Your Email"
            type="text"
            className="w-10/12 sm:w-[510px] md:w-[680px] lg:w-[900px] h-[45px] px-4 rounded-full border-[1px] border-secondary outline-none"
          />
          <input
            placeholder="Enter Your Phone"
            type="text"
            className="w-10/12 sm:w-[510px] md:w-[680px] lg:w-[900px] h-[45px] px-4 rounded-full border-[1px] border-secondary outline-none"
          />
          <textarea
            placeholder="description"
            name="description"
            id="text"
            cols="30"
            rows="10"
            className="w-10/12 sm:w-[510px] md:w-[680px] lg:w-[900px] h-[220px] resize-none px-4 rounded-lg border-[1px] border-secondary outline-none"
          ></textarea>
          <input
            value={45}
            type="text"
            className="w-10/12 sm:w-[510px] md:w-[680px] lg:w-[900px] h-[45px] px-4 rounded-full border-[1px] border-secondary"
          />

          <div className="credit card  w-full    h-[600px] gap-4 flex flex-col items-center justify-center  sm:items-center">
            <p className="text-sm font-bold lg:text-[20px]">Your Credit Card Detail</p>
           <div className="flex flex-col gap-2">
           <label htmlFor="card holder lg:text-[15px]">Card holder name</label>
            <input
              type="text"
              className="w-[360px] sm:w-[510px] md:w-[680px] lg:w-[900px] h-[45px] px-4 rounded-full border-[1px] border-secondary outline-none"
            />
           </div>

          <div className="flex flex-col gap-2">
          <label htmlFor="card holder lg:text-[15px]">Card number (required)</label>
            <input
              type="number"
              className="w-[360px] sm:w-[510px] md:w-[680px] lg:w-[900px] h-[45px] px-4 rounded-full border-[1px] border-secondary outline-none"
            />
          </div>

           <div className="flex flex-col gap-2">
           <label htmlFor="card holder lg:text-[15px]">Card Expiry Date (required)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="mm"
                className="w-[160px] sm:w-[250px] md:w-[330px] lg:w-[450px] h-[45px] px-4 rounded-full border-[1px] border-secondary outline-none"
              />
              <span className="font-semibold">/</span>
              <input
                type="number"
                placeholder="yy"
                className="w-[160px] sm:w-[250px] md:w-[330px] lg:w-[450px] h-[45px] px-4 rounded-full border-[1px] border-secondary outline-none"
              />
            </div>
           </div>

            <div className="flex flex-col gap-2">
              
            <label htmlFor="card holder lg:text-[15px]">Card Cvv (required)</label>
            <input
              type="text"
              className="w-[360px] sm:w-[510px] md:w-[680px] lg:w-[900px] h-[45px] px-4 rounded-full border-[1px] border-secondary outline-none"
            />
            </div>
            <button className="bg-primary text-white px-3 py-2 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Form