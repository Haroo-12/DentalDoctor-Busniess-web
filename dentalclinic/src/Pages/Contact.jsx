import React from 'react'

import ContactPageComponentTwo from '../ContactComponents/ContactPageComponentTwo'
import ContactPageComponent from '../ContactComponents/ContactPageComponent'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Contact = () => {
   const sectionRef = useRef();
  
           useGSAP(() => {
            gsap.from(".contactmain", {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            x:-50,
            stagger: 0.2,
            ease: "power2.out",
          });
        }, { scope: sectionRef });
  return (
    <div>
      <div className='flex justify-center flex-col' ref={sectionRef}>
        <div className='contactmain px-4 lg:px-9 pt-10 flex justify-between items-center'>
<div className='lg:w-[80%] w-full'>
            <h1 className='p-1 text-xl lg:text-6xl font-bold text-[var(--secondary)]'>Contact Dr. Shaheer for Expert</h1>
          <h1 className='p-1 text-xl lg:text-6xl font-bold text-[var(--secondary)]'> Dental Care</h1>
          <p className=' text-[var(--text)] pt-6'>
            Looking for trusted and advanced dental treatment in Hyderabad, Sindh?  Book your appointment  
            with  Dr . Shaheer and receive personalized care for a healthier, more confident smile.
          </p>
</div>


        </div>
        <div className='pt-14'>

<ContactPageComponentTwo/>
        </div>
     <ContactPageComponent/>
      </div>
    </div>
  )
}

export default Contact
