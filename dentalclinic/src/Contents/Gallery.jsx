import React from 'react'
import Button from '../components/Button'
import bracesafter from '../assets/casesimages/bracessafter.webp'
import bracesbefore from '../assets/casesimages/bracesbefore.webp'
import dentalimplementsbefore from '../assets/casesimages/dentalimplements.webp'
import dentalimplementsafter from '../assets/casesimages/dentalimplementsafter.webp'
import gumsafter from '../assets/casesimages/gumsafter.webp'
import gumsbefore from '../assets/casesimages/gumsbefore.webp'
import polishingafter from '../assets/casesimages/polishingafter.webp'
import polishingbefore from '../assets/casesimages/polishingbefore.webp'
import rootcanalafter from '../assets/casesimages/rootcanalafter.webp'
import rootcanalbefore from '../assets/casesimages/rootcanalbefore.webp'
import wisomtoothafter from '../assets/casesimages/wisdomtoothafter.webp'
import wisdomtoothbefore from '../assets/casesimages/wisdomtoothbefore.webp'
import GalleryCard from '../GalleryComponents/GalleryCard'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const casesData = [
  {
    id: 1,
    treatment: "Braces & Aligners",
    beforeImage: bracesbefore,
    afterImage: bracesafter,
  },
  {
    id: 2,
    treatment: "Dental Implants",
    beforeImage: dentalimplementsbefore,
    afterImage: dentalimplementsafter,
  },
  {
    id: 3,
    treatment: "Gum Surgery",
    beforeImage: gumsbefore,
    afterImage: gumsafter,
  },
  {
    id: 4,
    treatment: "Scaling & Polishing",
    beforeImage: polishingbefore,
    afterImage: polishingafter,
  },
  {
    id: 5,
    treatment: "Root Canal Treatment",
    beforeImage: rootcanalbefore,
    afterImage: rootcanalafter,
  },
  {
    id: 6,
    treatment: "Wisdom Tooth Removal",
    beforeImage: wisdomtoothbefore,
    afterImage: wisomtoothafter,
  },
];
const Gallery = () => {
       const sectionRef = useRef();
      const gallerycontentone = useRef(); 
      
        useGSAP(() => {
        const tl = gsap.timeline();
        gsap.from(gallerycontentone.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
            x:-50,
          scrollTrigger: {
            trigger: gallerycontentone.current,
            start: "top 65%",   // jab element ka top, viewport ke 80% pe pohanche
            // end: "top 50%",
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
