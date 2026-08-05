import React from 'react'
import Aboutimageone from '../assets/Aboutimages/Aboutimageone.webp'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Aboutintroductiontwo = () => {
     const sectionRef = useRef();
  const aboutcontentone = useRef(); 
  const aboutcontenttwo = useRef();
    useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(aboutcontentone.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutcontentone.current,
        start: "top 70%",   // jab element ka top, viewport ke 80% pe pohanche
        end: "top 30%",
        toggleActions: "play none none reverse",
      }
    });
      gsap.from(aboutcontenttwo.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutcontenttwo.current,
        start: "top 70%",   // jab element ka top, viewport ke 80% pe pohanche
        end: "top 30%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: sectionRef });
  return (
    <div>
       <div className='w-full lg:w-[96%] gap-8  mt-25 flex flex-col-reverse lg:flex-row  justify-between px-2 lg:px-0' ref={sectionRef}>
<div className='w-full lg:w-[45%]  flex justify-center'>
<div className='w-[97%]  lg:w-[90%] lg:h-[70%]' ref={aboutcontentone}>
  <img src={Aboutimageone} alt="" className='w-full h-full rounded-xl object-cover' />
</div>
</div>
<div className='w-full lg:w-[50%]  pb-4' ref={aboutcontenttwo}>
<h2 className="text-2xl lg:text-4xl font-bold text-[var(--secondary)] pt-4 px-1">
  Our Story –
</h2>
<h2 className="text-2xl lg:text-4xl font-bold text-[var(--secondary)] px-1">
  5+ Years of Trusted Care
</h2>
<p className='px-2 p-1 lg:p-2 text-[var(--text)] lg:pt-4'>
With over 5 years of experience in advanced dental care, Dr. Shaheer has been helping patients achieve healthier, brighter, and more confident smiles across Hyderabad, Sindh. As a highly qualified Dental Surgeon and Implantologist, he specializes in cosmetic dentistry, dental implants, root canal treatments, orthodontic braces, wisdom tooth procedures, and a wide range of advanced dental treatments. Through continuous training and the use of modern dental techniques, he ensures that every patient receives personalized care tailored to their unique needs. Combining clinical expertise with a patient-first approach, Dr. Shaheer is dedicated to providing safe, comfortable, and high-quality dental care that delivers lasting results and improved oral health for patients of all ages.
</p>
<p className='p-2 font-bold pt-3'>Your trusted destination for cosmetic dentistry, dental implants, root canal treatments, braces, and complete family dental care</p>
</div>
 </div>
    </div>
  )
}

export default Aboutintroductiontwo
