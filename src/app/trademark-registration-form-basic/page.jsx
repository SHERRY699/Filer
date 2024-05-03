"use client";
import React, { useState } from "react";
import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

function page() {
  const [name, setname] = useState(false);
  const [slogan, setslogan] = useState(false);
  const [logo, setlogo] = useState(false);
  const [stage, setStage] = useState(false);
  const [latin, setLatin] = useState(false);
  const [date, setDate] = useState(false);
  const [error,setError]= useState(true)

  const handleForm = async () =>{
      }
  return (
    <section className="pt-24 font-sans">
      <h1 className="text-center font-bold text-2xl">
        Trademark Regisration Form
      </h1>
      <div className="w-screen h-screen mt-4 flex items-center justify-center">
        <div className="w-11/12 h-full  flex flex-col gap-4">
          <div className="sliding w-full h-[120px]  flex flex-nowrap overflow-y-auto">
            <div className="step1 w-[150px]  h-full relative  gap-6 flex flex-col items-center justify-center">
              <div>
                <hr className="w-[120px] " />
                <Bs1Circle className="absolute  left-1/2 top-[25px]  text-secondary text-xl" />
              </div>

              <h1 className="font-bold text-xl text-secondary">Step 1</h1>
            </div>

            <div className="step2 w-[150px]  h-full relative gap-6 flex flex-col items-center justify-center">
              <div>
                <hr className="w-[120px] " />
                <Bs2Circle className="absolute  left-1/2 top-[25px]  text-secondary text-xl" />
              </div>

              <h1 className="font-bold text-xl text-secondary">Step 2</h1>
            </div>

            <div className="step3 w-[150px]  h-full relative gap-6 flex flex-col items-center justify-center">
              <div>
                <hr className="w-[120px] " />
                <Bs3Circle className="absolute  left-1/2 top-[25px]  text-secondary text-xl" />
              </div>

              <h1 className="font-bold text-xl text-secondary">Step 3</h1>
            </div>

            <div className="step4 w-[150px]  h-full relative gap-6 flex flex-col items-center justify-center">
              <div>
                <hr className="w-[120px] " />
                <Bs4Circle className="absolute  left-1/2 top-[25px]  text-secondary text-xl" />
              </div>

              <h1 className="font-bold text-xl text-secondary">Step 4</h1>
            </div>
          </div>
          <div className="intput-1 ml-2 w-full flex flex-col mt-2 text-secondary gap-2 text-sm">
            <p>Select what you are trying to protect*</p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  if (!name) {
                    setname(true);
                    setslogan(false);
                    setlogo(false);
                  }
                }}
              />
              Name
            </p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  if (!slogan) {
                    setslogan(true);
                    setname(false);
                    setlogo(false);
                  }
                }}
              />{" "}
              Slogan
            </p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  if (!logo) {
                    setlogo(true);
                    setname(false);
                    setslogan(false);
                  }
                }}
              />{" "}
              Logo
            </p>

            <div className={`${name || slogan ? "block" : "hidden"}`}>
              <p>
                Enter the {name ? "name" : slogan ? "slogan" : ""} you wish to
                protect
              </p>
              <input
                type="text"
                placeholder={name ? "name" : "slogan"}
                className="w-9/12 h-[40px] ml-2 px-2 outline-none rounded-2xl border-[1px] border-secondary "
              />
            </div>
            <div className={`${logo ? "block" : "hidden"} `}>
              <p>
                Please provide a complete and accurate description of your logo,
                including any words that may appear in the logo. An example of a
                description is: ‘a red cat wrapped around a blue outline of a
                globe’. Leave out the colors if you want to protect your logo in
                all colors
              </p>
              <input
                type="text"
                placeholder="`"
                className="w-9/12 h-[40px] ml-2 px-2 outline-none rounded-2xl border-[1px] border-secondary "
              />
            </div>
          </div>

          <div className="intput-2 ml-2 w-full flex flex-col mt-2 text-secondary gap-2 text-sm">
            <p>
              Does your mark include a living person’s name—even if a stage name
              or pseudonym or could it be perceived to include a person’s name?
            </p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  setStage(true);
                }}
              />
              Yes
            </p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  setStage(false);
                }}
              />{" "}
              No
            </p>
          </div>

          {stage ? (
            <div className="intput-2-yes ml-2 w-full flex flex-col mt-2 text-secondary gap-2 text-sm">
              <p>
                Does your mark include the name (including a pseudonym, nickname
                or stage name) that is your or a living person other than
                yourself??
              </p>
              <p>
                <input name="protectionType" type="radio" />
                Yes
              </p>
              <p>
                <input name="protectionType" type="radio" /> No
              </p>
            </div>
          ) : null}

          <div className="intput-3 ml-2 w-full flex flex-col mt-2 text-secondary gap-2 text-sm">
            <p>
              Does your mark include any words other than English or non-Latin
              characters?
            </p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  setLatin(true);
                }}
              />
              Yes
            </p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  setLatin(false);
                }}
              />{" "}
              No
            </p>
          </div>

          {latin ? (
            <div className="intput-3-yes ml-2 w-full flex flex-col mt-2 text-secondary gap-2 text-sm">
              <p>
                {" "}
                Please provide the English translation or transliteration of any
                non-Latin characters or non-English words:
              </p>
              <p>
                <input
                  name="protectionType"
                  type="input"
                  className="w-10/12 h-9 px-2  text-lg border-[1px] border-gray-400 outline-none rounded-2xl"
                  placeholder="Please provide the English translation or transliteration of any non-Latin characters or non-English words: "
                />{" "}
              </p>
            </div>
          ) : null}

          <div className="intput-4 ml-2 w-full flex flex-col mt-2 text-secondary gap-2 text-sm">
            <p>Are you currently using this trademark in your buisness?</p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  setDate(true);
                }}
              />
              Yes
            </p>
            <p>
              <input
                name="protectionType"
                type="radio"
                onClick={() => {
                  setDate(false);
                }}
              />{" "}
              No
            </p>
          </div>

          {date ? (
            <div className="intput-4-yes ml-2 w-full flex flex-col mt-2 text-secondary gap-6 text-sm">
              <p className="flex flex-col">
                1.First use anywhere
                <input
                  name="protectionType"
                  type="date"
                  className="w-10/12 h-9 px-2  text-lg border-[1px] border-gray-400 outline-none rounded-2xl"
                />
              </p>
              <p>
                2.First use in commerce
                <input
                  name="protectionType"
                  type="date"
                  className="w-10/12 h-9 px-2  text-lg border-[1px] border-gray-400 outline-none rounded-2xl"
                />
              </p>
            </div>
          ) : null}

          <button
          onClick={handleForm}
           className="w-[70px] gap-2 mt-8 h-[40px] flex items-center justify-center bg-primary text-white font-bold">
            Next <FaArrowRightLong/>
          </button>

          {error?
          <>
<div className="bg-[#f8d7da] w-11/12 h-[100px] flex flex-col items-center justify-start">
<h1 className="text-[#721c24] font-extrabold text-[14px]">Validation failed, please fill-up required fields

</h1>
<p className="text-secondary text-[13px]"> <span className="font-bold text-xl">.</span> Select what you are trying to protect * is required
</p>
</div>
          </>
          :null}



        </div>
      </div>
    </section>
  );
}

export default page;
