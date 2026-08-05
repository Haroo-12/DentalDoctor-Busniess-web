import React from 'react'
import drshaheer from '../assets/Aboutimages/drshaheer.webp'
import Button from '../components/Button'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const ServicesComponentstwo = () => {
     const sectionRef = useRef();
    const servicescontentone = useRef(); 
    const servicescontenttwo = useRef();
      useGSAP(() => {
     
      gsap.from(servicescontentone.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
 
      });
        gsap.from(servicescontenttwo.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
      });
    }, { scope: sectionRef });
  return (
   
            <div className='w-[97%]  mt-13 flex items-center justify-between gap-5 flex-col lg:flex-row ' ref={sectionRef}>
   <div className='w-full lg:w-[50%]' ref={servicescontentone}>
       <h1 className='text-2xl lg:text-4xl font-bold text-[var(--secondary)] p-1 pt-5'>
        All Dental Treatments & Services 
      </h1>
    <h1 className='text-2xl lg:text-4xl font-bold text-[var(--secondary)] p-1'>
        Under One Roof
      </h1>
      <p className='pt-5 p-1 text-[var(--text)]'>
Looking for trusted and expert dental care in Hyderabad, Sindh?

Our clinic offers a complete range of treatments — from dental implants and root canal treatments to braces, wisdom tooth procedures, cosmetic dentistry, and teeth cleaning.

Led by Dr. Shaheer, we combine advanced dental technology with personalized care to help patients achieve healthy, confident smiles. Every treatment is performed with precision, comfort, and a commitment to long-lasting results.
      </p>
<Button text="Book now" className="backgroundcol mt-5" />
   </div>
<div className='w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]  rounded-full' ref={servicescontenttwo}>
  <img src={drshaheer} alt="" className='h-full w-full rounded-full' />
</div>
</div>
   
  )
}

export default ServicesComponentstwo
