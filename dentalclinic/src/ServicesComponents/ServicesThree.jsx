import React, { useRef } from 'react'
import drshaheer from '../assets/Aboutimages/drshaheer.webp'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const ServicesThree = () => {
  const sectionRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();
const navigate = useNavigate()
  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
  <div className='flex justify-center items-center' ref={sectionRef}>
<div className="mt-13 flex w-[97%] flex-col items-center justify-between gap-5 lg:flex-row">
  <div className="w-full lg:w-[50%]" ref={textRef}>
    <h1 className="p-1 pt-5 text-2xl font-bold text-[var(--secondary)] lg:text-4xl">
      All Dental Treatments & Services
    </h1>

    <h1 className="p-1 text-2xl font-bold text-[var(--secondary)] lg:text-4xl">
      Under One Roof
    </h1>

    <p className="p-1 pt-5 text-[var(--text)]">
      Looking for trusted and expert dental care in Hyderabad, Sindh? Our
      clinic offers a complete range of treatments — from dental implants
      and root canal treatments to braces, wisdom tooth procedures, cosmetic
      dentistry, and teeth cleaning. Led by Dr. Shaheer, we combine advanced
      dental technology with personalized care to help patients achieve
      healthy, confident smiles. Every treatment is performed with precision,
      comfort, and a commitment to long-lasting results.
    </p>

<Button text="Book Now" className="backgroundcol w-full lg:w-[40%] mt-5 mx-2" onClick={()=>{navigate("/contact#contact-form")}}/>

  </div>

  <div className="h-[300px] w-[300px] overflow-hidden rounded-full lg:h-[350px] lg:w-[350px]" ref={imageRef}>
    <img
      src={drshaheer}
      alt="Dr. Shaheer"
      className="h-full w-full rounded-full object-cover"
    />
  </div>
</div>
  </div>
  )
}

export default ServicesThree