// import React from 'react'
// // import React from 'react'
import Button from '../components/Button';
import { casesData } from '../Multiplearray/CasesData.js';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const GalleryCard = () => {
const navigate = useNavigate()
const sectionRef = useRef();
useGSAP(() => {
  const cards = gsap.utils.toArray(".gallery-card");
  cards.forEach((card ,index) => {
    gsap.from(card, {
    //  opacity: 0.95,
      scale: 0.95,
      duration: 1,
        delay: (index % 2) * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
  });
}, { scope: sectionRef });


  return (
    <div ref={sectionRef}>
   <div className="w-full flex flex-wrap justify-center gap-6 pt-20">
  {casesData.map((item) => (
    <div
      key={item.id}
     className="gallery-card group w-[96%] md:w-[45%] bg-white shadow-xl border border-gray-200 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(39,137,129,0.15)]"
    >
      {/* Before */}
      <div className="relative w-full h-[180px] p-1">
        <img
          loading='lazy'
          src={item.beforeImage}
          alt={`${item.treatment} Before`}
          className="w-full h-full rounded-xl object-cover"
        />

        <span className="absolute top-3 left-3 bg-[#278981] text-white text-xs px-3 py-1 rounded-full font-semibold">
          Before
        </span>
      </div>

      {/* After */}
      <div className="relative w-full h-[180px] p-1">
        <img
          src={item.afterImage}
          alt={`${item.treatment} After`}
          className="w-full h-full rounded-xl object-cover"
        />

        <span className="absolute top-3 left-3 bg-[rgb(28,150,140)] text-white text-xs px-3 py-1 rounded-full font-semibold">
          After
        </span>
      </div>

      {/* Footer */}
      <div className="px-4 py-5 flex justify-between items-center">
        <p className='flex'>
           <span className='lg:block hidden'>Treatment:</span>
          <span className="font-normal text-sm lg:font-bold ml-1">
            {item.treatment}
          </span>
        </p>

        <button
          onClick={(()=>{navigate(`/cases/${item.id}`)})}
          className="font-normal text-sm lg:font-bold bg-gradient-to-r from-[#278981] to-[rgb(28,150,140)] px-4 py-3 rounded-xl cursor-pointer text-white">
          View Case
          </button>
      </div>
    </div>
  ))}
</div>
    </div>
  )
}

export default GalleryCard
