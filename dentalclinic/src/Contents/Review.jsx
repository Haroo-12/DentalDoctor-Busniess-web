import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import sikandarhusain from '../assets/reviewimage/sikandar.png'
import rafaybugiho from '../assets/reviewimage/rafaybugiho.png'
import saadkhan from '../assets/reviewimage/saadkhan.png'
import Heo from '../assets/reviewimage/Heo.png'
import ReviewCards from '../ReviewComponents/ReviewCards'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Review = () => {
     const sectionRef = useRef();
    const reviewscontentone = useRef(); 
    const reviewscontenttwo = useRef();
      useGSAP(() => {
      const tl = gsap.timeline();
      gsap.from(reviewscontentone.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
          x:-50,
        scrollTrigger: {
          trigger: reviewscontentone.current,
          start: "top 65%",   
          toggleActions: "play none none reverse",
        }
      });
        gsap.from(reviewscontenttwo.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        x:-50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: reviewscontenttwo.current,
          start: "top 65%",   // jab element ka top, viewport ke 80% pe pohanche
          end: "top 50%",
          toggleActions: "play none none reverse",
        }
      });
    }, { scope: sectionRef });
  return (
    <div className='w-full flex justify-center items-center flex-col lg:pt-8 ' ref={sectionRef}>
   <div className='w-[95%] pt-25' ref={reviewscontentone}>
      <div className="px-5">
         <div className=" mx-0  inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-12 py-4 shadow-sm">
      <span className="text-teal-700  text-md font-bold">Patient Reviews</span>
    </div>
  <h2 className="text-3xl lg:text-5xl font-bold pt-8 text-[var(--heading)]">
    What Our Patients Say
  </h2>

  <p className="mt-2 text-[var(--text)] text-lg">
    Real experiences from real patients who trusted us with their smiles.
  </p>
</div>
<ReviewCards/>
    </div>

    </div>
 
  )
}

export default Review
