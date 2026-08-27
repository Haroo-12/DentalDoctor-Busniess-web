import React from 'react'
import GalleryCard from '../GalleryComponents/GalleryCard'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Gallery = () => {
  const sectionRef = useRef();
  const gallerycontentone = useRef();

  useGSAP(() => {
    gsap.from(gallerycontentone.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
      x: -50,
      scrollTrigger: {
        trigger: gallerycontentone.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: sectionRef });

  return (
    <div className='w-full flex justify-center flex-col pt-10 lg:pt-18' ref={sectionRef}>

      <div className='w-full lg:w-[95%]  mt-5 pt-10' ref={gallerycontentone}>
        <div className="px-4 lg:px-12">
          <div className=" mx-0  inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-12 py-4 shadow-sm">
            <span className="text-teal-700  text-md font-bold">Treatment Results</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold pt-8 text-[var(--heading)]">
            Smile Transformations
          </h2>

          <p className="mt-2 text-[var(--text)] text-lg">
            See the life-changing results of our cosmetic, restorative, and implant treatments.
          </p>
        </div>
      </div>
      <GalleryCard/>
    </div>
  )
}

export default Gallery