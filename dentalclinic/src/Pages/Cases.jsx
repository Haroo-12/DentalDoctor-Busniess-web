import React from 'react'
import GalleryCard from '../GalleryComponents/GalleryCard'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Cases = () => {
 const sectionRef = useRef();

         useGSAP(() => {
          gsap.from(".casemain", {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          x:-50,
          stagger: 0.2,
          ease: "power2.out",
        });
      }, { scope: sectionRef });
  return (
    <div ref={sectionRef}>
      <div className='casemain px-4 pt-7 lg:px-8 lg:w-[80%]'>
   
   <h1 className='pt-6 text-2xl lg:text-5xl font-bold lg:px-3 p-1 text-[var(--secondary)]'>Real Patient Smile Transformations</h1>
     <p className='text-[var(--text)] lg:px-3 p-1 pt-4 lg:block '>
Explore real before-and-after cases that showcase our expertise, advanced treatments, and commitment to creating healthy, confident smiles.
   </p>
</div>
    <GalleryCard/>
    </div>
  )
}

export default Cases
