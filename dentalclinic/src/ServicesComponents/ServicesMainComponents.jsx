import React from 'react'
import teeth from '../assets/services images/Teeth.png'
import ServicesCard from './ServicesCard'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const ServicesMainComponents = () => {
      const sectionRef = useRef();   
      useGSAP(() => {
        gsap.from(".servicesmain", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        x:-50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".servicesmain",
          start: "top 70%",   // jab element ka top, viewport ke 80% pe pohanche
          end: "top 30%",
          toggleActions: "play none none reverse",
        }
      });
    }, { scope: sectionRef });
  return (
    <div>
         <div className='w-[97%]  pt-12' ref={sectionRef}>
       <div className='flex pt-10 justify-center items-center w-full  gap-10'>
<div className='servicesmain px-4 lg:px-8'>
   <h1 className='text-2xl lg:text-5xl font-bold lg:px-3 p-1 text-[var(--secondary)]'>Our Dental Treatments & Specialities</h1>
     <p className='text-[var(--text)] lg:px-3 p-1 pt-4 lg:block hidden w-[85%]'>
    We provide complete dental care for all ages — from simple cleaning to advanced  implant and smile makeover treatments. Each procedure is done with expert care,modern equipment, and full focus on your comfort and safety.
   </p>
    <p className='text-[var(--text)] lg:px-3 p-1 pt-4 block lg:hidden '>
    We provide complete dental care for all ages — from simple cleaning to advanced  implant and smile makeover treatments. Each procedure is done with expert care, modern equipment, and full focus on your comfort and safety.
   </p>
</div>
{/* <div className='hidden lg:block'>
   <img src={teeth} alt="" className='w-[250px] h-[200px]' />
</div> */}
</div>
<div className='pt-12'>
   {/* <ServicesCard/> */}
<ServicesCard/>
</div>
      </div>
    </div>
  )
}

export default ServicesMainComponents
