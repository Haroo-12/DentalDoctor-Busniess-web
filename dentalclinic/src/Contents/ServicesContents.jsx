import React from 'react'
import ServicesCard from '../ServicesComponents/ServicesCard'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const ServicesContents = () => {
     const sectionRef = useRef();
    const servicescontentone = useRef(); 
    const servicescontenttwo = useRef();
useGSAP(() => {
  gsap.from([servicescontentone.current, servicescontenttwo.current], {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    x: -50,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 65%",
      toggleActions: "play none none reverse",
    }
  });
}, { scope: sectionRef });
  return (
    <div className='w-full flex justify-center pt-10 lg:pt-15' ref={sectionRef}>

    <div className='w-[95%]'>
    <div className="mt-5 mx-5  inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-12 py-4 shadow-sm" ref={servicescontentone}>
  <span className="text-teal-700  text-md font-bold">What We Offer</span>
</div>
   <section className=" px-5 py-8" ref={servicescontenttwo}>
      <h1 className=" font-bold text-4xl text-slate-900">
        Comprehensive Dental  Services
      </h1>
      <p className="text-[var(--text)] font-italic lg:text-xl mt-4 max-w-xl">
        From prevention to restoration, we provide a full spectrum of dental treatments tailored to your needs.
      </p>
    </section>
<ServicesCard/>
    </div>
    </div>
  )
}

export default ServicesContents
