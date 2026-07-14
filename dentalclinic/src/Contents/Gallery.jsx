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
  return (
    <div className='w-full flex justify-center flex-col '>
    <div className='w-[95%]  mt-5 pt-10'>
             <div className="px-12">
         <div className=" mx-0  inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-12 py-4 shadow-sm">
      <span className="text-teal-700  text-md font-bold">Patient Reviews</span>
    </div>
  <h2 className="text-3xl lg:text-5xl font-bold pt-8 text-[var(--heading)]">
    Smile Transformations
  </h2>

  <p className="mt-2 text-[var(--text)] text-lg">
    See the life-changing results of our cosmetic, restorative, and implant treatments.
  </p>
</div>   

    </div>
<div className="w-full flex flex-wrap justify-center gap-6 pt-10">
  {casesData.map((item) => (
    <div
      key={item.id}
     className="group w-[96%] md:w-[48%] bg-white shadow-xl border border-gray-200 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(39,137,129,0.15)]"
    >
      {/* Before */}
      <div className="relative w-full h-[180px] p-1">
        <img
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
        <p>
          Treatment:
          <span className="font-bold ml-1">
            {item.treatment}
          </span>
        </p>

        <Button
          text="View Case"
          className="bg-gradient-to-r from-[#278981] to-[rgb(28,150,140)]"
        />
      </div>
    </div>
  ))}
</div>
    </div>
  )
}

export default Gallery
