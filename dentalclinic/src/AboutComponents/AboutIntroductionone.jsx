import React from 'react'
import Button from '../components/Button'
import drshaheer from '../assets/Aboutimages/drshaheer.webp'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const AboutIntroductionone = () => {
         const sectionRef = useRef();
      const aboutcontentone = useRef(); 
      const aboutcontenttwo = useRef();
        useGSAP(() => {
        gsap.from(aboutcontentone.current, {
          opacity: 0.4,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
            y:30,
        });
          gsap.from(aboutcontenttwo.current, {
          opacity: 0.4,
          scale: 0.95,
          duration: 0.8,
          y:30,
          ease: "power3.out",
        });
      }, { scope: sectionRef });
  return (
    <div className='w-full flex justify-center  lg:px-0 ' ref={sectionRef}>
      <div className='w-[96%]  flex justify-between lg:flex-row flex-col gap-8' ref={aboutcontentone}>
<div className="w-full lg:w-[45%] pt-10 ">
<h1 className='text-2xl lg:text-4xl px-2 p-1 font-bold text-[var(--secondary)]'>
  Meet Dr. Shaheer – Leading
</h1>
<h1 className='text-2xl lg:text-4xl px-2 font-extrabold p-1 text-[var(--secondary)]'>
  Cosmetic & Implant Dentist
</h1>
<p className='pt-5 p-2 text-[var(--text)]'>Dr. Shaheer is a highly qualified Dental Surgeon and Implantologist in Hyderabad, Sindh. With advanced training in cosmetic dentistry, dental implants, root canal treatments, braces, wisdom tooth surgery, and jaw correction procedures, he is dedicated to delivering exceptional dental care and long-lasting smile transformations for every patient.</p>
{/* <button className=''>Book Now</but/ton> */}
<Button text="Book Now" className="backgroundcol mt-5 mx-2"/>
</div>
<div className='w-full lg:w-[40%] flex justify-center items-center pt-8' ref={aboutcontenttwo}>
<div className='h-[300px] w-[300px] lg:w-[370px] lg:h-[370px]  rounded-full'>
<img src={drshaheer}
  className="w-full h-full rounded-full object-cover scale-110"
alt='image'/>
</div>
</div>

</div>
    </div>
  )
}

export default AboutIntroductionone
