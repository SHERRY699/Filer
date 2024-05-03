'use client'
import React from "react";
import Hero from "./landingpage/Hero";
import Card from "./landingpage/Card";
import Services from "./landingpage/Services";
import Packages from "./landingpage/Packages";
import Contact from "./landingpage/Contact";
import RegisterCard from "./RegisterCard";
import { useRegisterContext } from '../context'

function LandingPage() {
  const { regData,setRegData } = useRegisterContext();

  return (
    <>
      <Hero />
      <Card />
      <Services />
      <Packages />
      <Contact />
      <div className={` fixed ${regData?'hidden':'flex'}  inset-0 z-50 items-center justify-center`}>
        <RegisterCard />
      </div> 
    </>
  );
}

export default LandingPage;
