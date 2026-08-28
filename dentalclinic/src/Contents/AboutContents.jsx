import React from 'react'
import aboutgirl from '../assets/images/aboutgirl.webp'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { FaLocationArrow } from "react-icons/fa";
import Aboutintroductionthree from '../AboutComponents/Aboutintroductionthree'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export const statsData = [
  {
    id: 1,
    stat: "5+ Years",
    line1: "Of Dental",
    line2: "Excellence",
  },
  {
    id: 2,
    stat: "6,000+",
    line1: "Happy",
    line2: "Patients",
  },
  {
    id: 3,
    stat: "100%",
    line1: "Patient",
    line2: "Focused Care",
  },
];
const AboutContents = () => {
   const sectionRef = useRef();
  const aboutcontentone = useRef(); 
  const aboutcontenttwo = useRef();
    useGSAP(() => {
    gsap.from(aboutcontentone.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
        y:-50,
      scrollTrigger: {
        trigger: aboutcontentone.current,
        start: "top 65%",   // jab element ka top, viewport ke 80% pe pohanche
        // end: "top 50%",
        toggleActions: "play none none reverse",
      }
    });
      gsap.from(aboutcontenttwo.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      y:50,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutcontenttwo.current,
        start: "top 65%",   // jab element ka top, viewport ke 80% pe pohanche
        end: "top 50%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: sectionRef });
  return (
    <section className='w-full flex  justify-center pt-20 flex-wrap'>
<Aboutintroductionthree />
      <div className='w-[97%]  lg:p-2 text-[var(--background)]  ' ref={sectionRef}>
<div className='w-full rounded-2xl lg:px-8 pt-7 bg-gradient-to-b from-[#1c968c] pb-5 to-[#0f4c4a] flex justify-between flex-col lg:flex-row '>
<div className='lg:w-[55%]  w-full lg:px-0 px-4' ref={aboutcontentone}>
      <Heading text="Book Your Dental" className=" leading-7 text-xl lg:text-4xl lg:leading-tight" />
<Heading text="Appointment with Dr. Shaheer" className=" leading-7 text-xl lg:text-4xl lg:leading-tight" />
<Heading text="for a Healthy, Confident Smile" className="leading-7 text-xl lg:text-4xl lg:leading-tight" />
       <p className='pt-7 lg:pt-7'>
       Your smile deserves expert care. At Dr. Shaheer Dental Clinic, we provide advanced dental treatments with precision, compassion, and modern technology—helping you achieve a healthy, confident smile in a comfortable and trusted environment.
       </p>
<div className='w-full pt-14  lg:pt-10 flex gap-6 lg:flex-row flex-col'>


{

    statsData.map((items , index)=>{
        return(
              <div key={index} className='lg:w-[34%] w-[100%]  lg:h-[100px] h-[150px]  flex  items-center px-3 py-2 shadow-2xl flex-col justify-center rounded-2xl'>
    <h1 className=' font-extrabold'>{items.stat}</h1>
     <p className='text-md'>{items.line1}</p>
     <p className='text-md pt-2'>{items.line2}</p>

 </div>
        )
    })
}

   

</div>
<div className='w-full justify-center flex  lg:justify-start'>
<button className='flex justify-center items-center cursor-pointer mt-7 gap-4 font-bold text-[var(--secondary)] px-8 py-6 rounded-full bg-white' onClick={()=>{navigate("/contact#contact-form")}}>Book Appointment <span className='font-bold text-xl'><FaLocationArrow/></span> </button>

</div>
</div>
<div className='flex justify-center items-center lg:pt-0 pt-12 mb-5' ref={aboutcontenttwo}>
<div className='w-[400px] h-[400px] rounded-full flex justify-center'>
<img src={aboutgirl} alt=""   loading="lazy" className='h-[90%] w-[90%] lg:w-full lg:h-full  rounded-full bg-cover' />
</div>
</div>
</div>

    </div>
    </section>

  )
}

export default AboutContents
