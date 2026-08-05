import React from 'react'
// import React from 'react'
import aboutimage from '../assets/images/Aboutimage.webp'
import aboutgirl from '../assets/images/aboutgirl.webp'
import Heading from '../components/Heading'
import { FaCheck, FaWhatsapp } from 'react-icons/fa'
import Button from '../components/Button'
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Aboutintroductionthree = () => {
const navigate = useNavigate()
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
const featuresList = [
  { id: 1, text: "5+ years of trusted experience in dental care" },
  { id: 2, text: "Modern dental treatments with advanced technology" },
  { id: 3, text: "Comprehensive care for patients of all ages" },
  { id: 4, text: "Patient-focused treatment with high safety standards" },
  { id: 5, text: "Trusted by Thousand of satisfied patients" },
]
const statsData = [
  {
    id: 1,
    stat: "15+ Years",
    line1: "Of Dental",
    line2: "Excellence",
  },
  {
    id: 2,
    stat: "5,000+ Smiles",
    line1: "Restored Across",
    line2: "Region",
  },
  {
    id: 3,
    stat: "4 Modern Units",
    line1: "Designed  Comfort",
    line2: "Precision",
  },
]
  return (
    <div className='w-[96%] lg:w-[94%] flex lg:flex-row flex-col-reverse justify-between flex-wrap px-2 lg:px-0' ref={sectionRef}>
<div className="w-full lg:w-[42%]   flex  items-center justify-center lg:justify-start " ref={aboutcontentone}>
    <div className='w-[95%] h-[80%] mt-4'>
    <img src={aboutimage} alt=""   loading="lazy" className='w-full h-full rounded-2xl' />
    </div>
    
</div>
<div className='w-full lg:w-[50%]  lg:px-5' ref={aboutcontenttwo}>
     <div className="mt-5   inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-9 py-2 shadow-sm">
      <span className="text-teal-700  text-sm font-bold">Why Choose Us</span>
    </div>
    <Heading text="Why Choose  Dental  & Aesthetic Clinic" className=" text-3xl lg:text-5xl  pt-5 leading-tight text-[var(--secondary)] "/>
    <div className='pt-4 font-medium text-[var(--text)]'>
With over <span className='font-bold'>5 years of experience,</span> Dr. Shaheer combines expert dental care, modern technology, and a patient-first approach to deliver exceptional treatment and healthy smiles. Our focus is on providing safe, comfortable, and personalized dental care for every patient.
    </div>
 <div className='pt-4 font-medium text-[var(--text)]'>
  From routine checkups to advanced dental procedures, Dr. Shaheer is committed to delivering high-quality treatment with a focus on patient comfort, safety, and long-term oral health.
</div>
        <div className="w-full pt-8">
      {/* Checklist */}
      <ul className="flex flex-col gap-6">
        {featuresList.map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            <FaCheck className="text-[var(--secondary)] mt-1.5 flex-shrink-0" size={18} />
            <span className="text-[var(--text)] text-lg lg:text-normal">
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Button + WhatsApp */}
      <div className="flex items-center justify-between mt-5 lg:mx-4 mb-3 py-3 flex-wrap gap-4">
   <button className='font-bold  shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer py-5 px-8 bg-gradient-to-r from-[#278981]  to-[rgb(28,150,140)] text-[var(--background)] rounded-xl' onClick={()=>{navigate("/about")}}>Learn More about us</button>
        </div>
        </div>
    </div>      
  

    </div>
  )
}

export default Aboutintroductionthree
