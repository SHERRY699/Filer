import Image from "next/image";
import React from "react";
import logo from "../../../public/footer.png";
import Link from "next/link";

function Footer() {
  return (
    <>
      <main className="selection:bg-[#bb5644]">
        <div className="footer w-full h-max bg-black pt-10">
          <div className="flex flex-col   sm:flex-row   items-start pl-10 gap-8 justify-center">
            <div className="img  sm:mt-20 w-[200px] sm:w-[300px] lg:w-[200px] lg:mr-10">
              <Link href={"/"}>
                <Image src={logo} alt="logo.png" />
              </Link>
            </div>

            <div className="quick-links1 w-[300px] h-max flex flex-col gap-2 mt-8 sm:mt-0">
              <p className="text-[13px] text-white mb-2">Quick Links</p>
              <Link href={"/trademark-registration-service"} className="text-[15px] text-white font-bold">
                Trademark Registration Service
              </Link>
              <Link href={"/trademark-monitoring"} className="text-[15px] text-white font-bold">
                Trademark Monitoring
              </Link>
              <Link href={"/office-action-response"} className="text-[15px] text-white font-bold">
                Office Action Response
              </Link>
              <Link href={"/trademark-renewal-2"} className="text-[15px] text-white font-bold">
                Trademark Renewal
              </Link>
              <Link href={"/filing-an-extension"} className="text-[15px] text-white font-bold">
                Filing an Extension
              </Link>
              <Link href={"/international-trademark-registration"} className="text-[15px] text-white font-bold">
                International Trademark Registration
              </Link>
            </div>

            <div className="quick-links2 w-[300px] h-max flex flex-col gap-2 ">
              <p className="text-[13px] text-white mb-2">Quick Links</p>
              <Link href={'/about-us'} className="text-[15px] text-white font-bold">
                About us
              </Link>
              <Link href={"/guarantee"} className="text-[15px] text-white font-bold">
                Our Guarantee
              </Link>
              <Link href={"/trademark-contact-form"} className="text-[15px] text-white font-bold">
                Trademark Contact Form
              </Link>
              <Link href={"/copyright-registration-form-351"} className="text-[15px] text-white font-bold">
                Copyright Registration
              </Link>
            </div>

            <div className="quick-links3  w-[300px] h-max flex flex-col gap-2 ">
              <p className="text-[13px] text-white mb-2 ">Connect With Us</p>

              <p className="text-[13px] text-white ">Call us (877) 721-4579</p>
              <p className="text-[13px] text-white">Mon-Fri 9AM-6PM EST</p>
              <p className="text-[13px] text-white">1740 LONSESOME DOVE DR</p>
              <p className="text-[13px] text-white">PROSPER. TX 75078</p>
            </div>
          </div>

          <div className="bg-[#2f2fa2]  w-9/12 lg:w-7/12  h-[2px] m-auto mt-4 ">
            <hr className="border-0" />
          </div>

          <div className="mt-10 w-full h-full  flex flex-col md:flex-row md:justify-around lg:justify-center ">
            <div className="w-10/12  md:w-[50%] flex flex-col gap-2 px-4 pl-10 mt-4 ">
              <p className="text-[13px] sm:text-[15px] text-white font-semibold">
                Privacy Policy
              </p>
              <p className="text-[12px] text-white ">
                Filer.me provides information and software only . Filer.me is
                not a "lawyer referral service" and does not provide legal
                advice or participate in any legal representation . User of
                Filer.me is subject to out{" "}
                <Link
                  href={"/terms-of-service"}
                  className="text-primary hover:border-b-[1px] border-primary"
                >
                  Term of service ,
                </Link>{" "}
                <Link
                  href={"/refund-policy"}
                  className="text-primary pl-2 hover:border-b-[1px] border-primary"
                >
                  {" "}
                  Refund Policy{" "}
                </Link>
                and{" "}
                <Link
                  href={"/privacy-policy"}
                  className="text-primary hover:border-b-[1px] border-primary"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div className="w-[250px] h-[200px] pl-10 mt-4 flex flex-col gap-4  ">
              <div className="flex gap-4">
                <img
                  src="footer/symbols.png"
                  alt="logo1.png"
                  className="w-[35px] h-[35px]"
                />
                <img
                  src="footer/money.png"
                  alt="logo1.png"
                  className="w-[35px] h-[35px]"
                />
                <img
                  src="footer/AE_Logo.png"
                  alt="logo1.png"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="footer/Discover_Card_Logo.png"
                  alt="logo1.png"
                  className="w-[55px] h-[10px]"
                />
              </div>

              <div>
                <p className="text-[#BABABA] text-[13px]">
                  © Copyright 2024 Filer.me
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Footer;
