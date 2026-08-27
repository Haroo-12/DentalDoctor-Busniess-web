import React, { useRef } from 'react'
import ServicesCard from './ServicesCard'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ServicesMainComponents = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(boxRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        x: -50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        }
      });
    });

    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    } else {
      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, { scope: sectionRef });

  return (
  
      <div className='w-[97%] pt-12' ref={sectionRef}>
        <div className='flex pt-10 justify-center items-center w-full gap-10'>
          <div className='px-4 lg:px-8' ref={boxRef}>
            <h1 className='text-2xl lg:text-5xl font-bold lg:px-3 p-1 text-[var(--secondary)]'>
              Our Dental Treatments & Specialities
            </h1>
            <p className='text-[var(--text)] lg:px-3 p-1 pt-4 w-full lg:w-[85%]'>
              We provide complete dental care for all ages — from simple cleaning to advanced implant and smile makeover treatments. Each procedure is done with expert care, modern equipment, and full focus on your comfort and safety.
            </p>
          </div>
        </div>
        <div className='pt-12'>
          <ServicesCard />
        </div>
      </div>
 
  )
}

export default ServicesMainComponents