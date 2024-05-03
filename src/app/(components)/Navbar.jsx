"use client";
import Image from "next/image";
import image from "../../../public/Filer.png";
import { FaBars } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import { FaServer } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import Link from "next/link";
import Button from "./Button";
import RegisterButton from "./landingpage/RegisterButton";

export default function Navbar() {
  const [hidden, sethidden] = useState(true);
  const [hiden, sethiden] = useState(true);
  const [hiddden, sethiddden] = useState(true);
  const [services, setservices] = useState(true);
  const [resources, setresources] = useState(true);
  const navRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        sethidden(true);
      }
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setservices(true);
        setresources(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="selection:bg-[#bb5644]">
      <main className="mobile-nav  ">
        <div className="navbar  w-full h-16 md:hidden  bg-white  flex items-center justify-between  fixed z-50">
          <div className="md:hidden">
           <Link href={'/'}> <Image src={image} alt="Filer.png" width={150}></Image></Link>
          </div>

          <div className="flex gap-2 mr-10">
            <div className="md:hidden lg:hidden hidden sm:block">
              <RegisterButton />
            </div>
            <button
              onClick={() => {
                sethidden(!hidden);
              }}
            >
              {" "}
              <FaBars className="text-2xl mr-2 md:hidden text-secondary" />
            </button>
          </div>
        </div>

        <div
          ref={navRef}
          className={`h-div w-[350px]  h-screen  bg-gray-200 z-50 fixed right-0 top-0 transition-transform duration-700 ${
            hidden ? " translate-x-full " : " translate-x-0  md:hidden"
          } `}
        >
          <div
            ref={contentRef}
            className="links flex flex-col  gap-2 text-secondary w-full h-full  items-center justify-center"
          >
            <p className="flex ">
              {" "}
              <Link
                href={""}
                onClick={() => {
                  setservices(!services);
                }}
              >
                Our Services
              </Link>
              <FaLongArrowAltDown />
            </p>
            <div
              className={`${
                services ? "hidden" : "block"
              } w-[280px] font-semibold h-[700px] z-50 bg-white flex flex-col  items-baseline pl-10 justify-around`}
            >
              <Link href={"/trademark-registration-service"}>
                Trademark Registration <br /> Service
              </Link>
              <Link href={"/trademark-monitoring"}>Trademark Monitoring</Link>
              <Link href={"/office-action-response"}>Office Action Response</Link>
              <Link href={"/trademark-renewal-2"}>Trademark Renewal</Link>
              <Link href={"/filing-an-extension"}>Filing an Extension</Link>
              <Link href={"/international-trademark-registration"}>
                International Trademark <br /> Registration
              </Link>
              <Link href={"/audit"}>Audit</Link>
              <Link href={"/taxation"}>Taxation</Link>
              <Link href={"/patent-filing"}>Patent filing</Link>
              <Link href={"/incorporation-filing"}>Incorporation Filing</Link>
              <Link href={"/llc-creation"}>LLC Creation </Link>
              <Link href={"/trademarks"}>Trademarks </Link>
              <Link href={"/comprehensive-trademark-search"}>
                Comprehensive Trademark <br /> Search
              </Link>
              <Link href={"/dcma-takedown-service"}>DCMA Takedown Form</Link>
              <Link href={"/copyright-registration"}>Copyright Registration</Link>
              <Link href={"/statement-of-use"}>Statement of Use</Link>
            </div>
            <p className="flex ">
              <Link
                href={""}
                onClick={() => {
                  setresources(!resources);
                }}
              >
                Resources{" "}
              </Link>
              <FaLongArrowAltDown />
            </p>
            <div className="resource">
              <div
                className={`${
                  resources ? "hidden" : "block"
                } w-[250px] h-[100px] bg-white z-50 flex flex-col items-start pl-4 font-semibold justify-center gap-2 `}
              >
                <Link href={"/trademark-faqs"}>Trademark FAQS</Link>
                <Link href={"/copyright-faqs"}>Copyright FAQS</Link>
              </div>
            </div>
            <p className="flex ">
              <Link href={'/about-us'}>About us</Link>
              <FaLongArrowAltDown />
            </p>
            <button
              onClick={() => {
                sethidden(!hidden);
              }}
              className="absolute top-2 text-2xl mr-2  right-0"
            >
              <RxCross1 />
            </button>
          </div>
        </div>
      </main> 
     

















      <main className="desktop-nav hidden md:block bg-gray-50">
        <nav className="w-full h-24 flex items-center justify-around shadow-md">
          <div className="linkss flex items-center justify-center gap-8 cursor-pointer text-md text-secondary">
<Link href={'/'}>            <Image src={image} alt="Filer.png" width={150} /></Link>
            <div
              onMouseEnter={() => {
                sethiden(false);
                sethiddden(true);
              }}
              className="flex items-center"
            >
              Our Services <FaLongArrowAltDown />
            </div>
            <div
              onMouseEnter={() => {
                sethiddden(false);
                sethiden(true);
              }}
              className="flex items-center"
            >
              Resources <FaLongArrowAltDown />
            </div>

            <Link href={'/about-us'}>About us</Link>
          </div>

          <RegisterButton />
        </nav>

        <div
          className={`${
            hiden ? "hidden" : "block"
          } l-dropdown bg-white  absolute w-full h-[450px] z-50  shadow-2xl flex items-center justify-center`}
          onMouseLeave={() => {
            sethiden(true);
          }}
        >
          <div className="w-full h-[400px] flex items-end  justify-center  gap-20 text-secondary">
            <div
              className="linksection1 flex flex-col w-[300px] h-[300px]  gap-2 "
            
            >
              <h1 className="flex items-center  text-lg   ">
                <span className="text-[#f64c72] mr-2 ">
                  <FaServer />
                </span>{" "}
                Our Services
              </h1>
              <Link href={"/trademark-registration-service"} className="hover:text-black">
                Trademark Registration Service
              </Link>
              <Link href={"/trademark-monitoring"} className="hover:text-black">
                Trademark Monitoring
              </Link>
              <Link href={"/office-action-response"} className="hover:text-black">
                Office Action Response
              </Link>
              <Link href={"/trademark-renewal-2"} className="hover:text-black">
                Trademark Renewal
              </Link>
              <Link href={"/filing-an-extension"} className="hover:text-black">
                Filing an Extension
              </Link>
              <Link href={"/international-trademark-registration"} className="hover:text-black">
                International Trademark Registration
              </Link>
            </div>

            <div
              className="linksection2 flex flex-col w-[300px] h-[300px]  pt-10 text-secondary gap-2"
             
            >
              <Link href={"/audit"} className="hover:text-black">
                Audit
              </Link>
              <Link href={"/taxation"} className="hover:text-black">
                Taxation
              </Link>
              <Link href={"/patent-filing"} className="hover:text-black">
                Patent filing
              </Link>
              <Link href={"/incorporation-filing"} className="hover:text-black">
                Incorporation Filing
              </Link>
              <Link href={"/llc-creation"} className="hover:text-black">
                LLC Creation{" "}
              </Link>
              <Link href={"/trademarks"} className="hover:text-black">
                Trademarks{" "}
              </Link>
            </div>
            <div
              className="linksection3 flex flex-col w-[300px] h-[300px]  pt-10 text-secondary gap-2"
              onMouseLeave={() => {
                sethiden(true);
              }}
            >
              <Link href={"/comprehensive-trademark-search"} className="hover:text-black">
                Comprehensive Trademark Search
              </Link>
              <Link href={"/dcma-takedown-service"} className="hover:text-black">
                DCMA Takedown Form
              </Link>
              <Link href={"/copyright-registration"} className="hover:text-black">
                Copyright Registration
              </Link>
              <Link href={"/statement-of-use"} className="hover:text-black">
                Statement of Use
              </Link>
            </div>
          </div>
        </div>

        <div
          onMouseLeave={() => {
            sethiddden(true);
          }}
          className={`${
            hiddden ? "hidden" : "block"
          } l-dropdown bg-white absolute w-full z-50 h-[450px] shadow-2xl text-secondary flex items-center justify-start pl-56`}
        >
          <div className="w-[300px] h-[300px] flex flex-col gap-4 items-center justify-center ">
            <h1 className="flex text-xl  items-center ">
              <span className="text-[#f64c72] mr-2">
                <HiOutlineQuestionMarkCircle />{" "}
              </span>{" "}
              FAQS
            </h1>
            <Link href={"/trademark-faqs"} className="hover:text-black">
              Trademark FAQS
            </Link>
            <Link href={"/copyright-faqs"} className="hover:text-black">
              Copyright FAQS
            </Link>
          </div>
        </div>
      </main> 
    </section>
  );
}
