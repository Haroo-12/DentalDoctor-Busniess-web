// import React from 'react'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import sikandarhusain from '../assets/reviewimage/sikandar.png'
import rafaybugiho from '../assets/reviewimage/rafaybugiho.png'
import saadkhan from '../assets/reviewimage/saadkhan.png'
import Heo from '../assets/reviewimage/Heo.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
let reviewscard = [
  {
    name: "Gul",
    image: null,
    initial: "G",
    rating: 5,
    reviewabout:
      "I had an excellent experience at Dental and Aesthetic Clinic. Dr. Shaheer is very skilled, gentle, and explained everything clearly before starting my procedure. The environment is neat and clean. Thank you for your services.",
  },
  {
    name: "Sikandar Hussain",
    image: sikandarhusain,
    initial: "S",
    rating: 5,
    reviewabout:
      "The best dental experience I've ever had in my life. The care and consideration from the first phone call to the follow-up was five-star all the way.",
  },
  {
    name: "Saad Khan",
    image: saadkhan,
    initial: "S",
    rating: 5,
    reviewabout:
      "I went there for a checkup and Dr. Shaheer found that I had waited too long on a cavity. I needed a root canal, and he handled it with great care and professionalism.",
  },
  {
    name: "Rafay Bughio",
    image: rafaybugiho,
    initial: "R",
    rating: 4,
    reviewabout:
      "Excellent experience with Dr. Shaheer. Very professional, gentle, and explained everything clearly. The treatment was smooth and comfortable.",
  },
  {
    name: "Heo",
    image: Heo,
    initial: "H",
    rating: 5,
    reviewabout:
      "I had two implants done and later returned for a root canal. Dr. Shaheer has excellent clinical skills and provides outstanding dental care.",
  },
  {
    name: "Salam Kazi",
    image: null,
    initial: "S",
    rating: 5,
    reviewabout:
      "I was an anxious patient initially, but Dr. Shaheer got me through extractions, bone grafting, and implants comfortably. Highly recommended.",
  },
];
const ReviewCards = () => {
     const sectionRef = useRef();
    // const servicescontenttwo = useRef();
useGSAP(() => {
  const cards = gsap.utils.toArray(".reviews-card");
  cards.forEach((card ,index) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
        delay: (index % 3) * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
  });
}, { scope: sectionRef });


    const [expanded, setExpanded] = useState({});

  return (
   
      <div className="w-full pt-20 flex justify-center flex-wrap gap-5" ref={sectionRef}>
     
  {reviewscard.map((review, index) => (
    <div
      key={index}
      className="reviews-card w-[95%] sm:w-[47%] lg:w-[29%] bg-white shadow-2xl rounded-xl p-5"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex justify-center items-center bg-gradient-to-r from-[#278981] to-[rgb(28,150,140)]">
          {review.image ? (
            <img
              src={review.image}
              alt={review.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <h1 className="text-xl font-bold text-white">
              {review.initial}
            </h1>
          )}
        </div>

        <div>
          <h1 className="font-bold text-lg text-[var(--secondary)]">
            {review.name}
          </h1>

          <div className="flex gap-1 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={
                  star <= review.rating
                    ? "text-[#278981]"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review */}
      <div className="mt-4">
        <p
          className={`text-[var(--text)] leading-relaxed ${
            expanded[index] ? "" : "line-clamp-4"
          }`}
        >
          {review.reviewabout}
        </p>

        {review.reviewabout.length > 180 && (
          <button
            onClick={() =>
              setExpanded((prev) => ({
                ...prev,
                [index]: !prev[index],
              }))
            }
            className="mt-2 text-[#278981] underline font-medium cursor-pointer"
          >
            {expanded[index] ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  ))}
</div>

  )
}

export default ReviewCards
