import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import sikandarhusain from '../assets/reviewimage/sikandar.png'
import rafaybugiho from '../assets/reviewimage/rafaybugiho.png'
import saadkhan from '../assets/reviewimage/saadkhan.png'
import Heo from '../assets/reviewimage/Heo.png'

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
const Review = () => {
    const [expanded, setExpanded] = useState({});
  return (
    <div className='w-full flex justify-center items-center flex-col'>
   <div className='w-[95%] pt-25'>
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

    </div>
<div className="w-full pt-8 flex justify-center flex-wrap gap-5">
  {reviewscard.map((review, index) => (
    <div
      key={index}
      className="w-[95%] sm:w-[47%] lg:w-[29%] bg-white shadow-2xl rounded-xl p-5"
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
    </div>
 
  )
}

export default Review
