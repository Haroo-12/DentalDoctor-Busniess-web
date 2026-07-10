import React from 'react'
import aboutimage from '../assets/images/Aboutimage.webp'
import aboutgirl from '../assets/images/aboutgirl.webp'
import Heading from '../components/Heading'
import { FaCheck, FaWhatsapp } from 'react-icons/fa'
import Button from '../components/Button'

const featuresList = [
  { id: 1, text: "4 fully equipped dental chairs for comfortable care" },
  { id: 2, text: "Advanced implant & digital X-ray systems" },
  { id: 3, text: "Painless single-sitting root canal procedures" },
  { id: 4, text: "Strict Class-B sterilization standards" },
  { id: 5, text: "Trusted by 5,000+ patients across Virar, Vasai, Nallasopara & Mumbai" },
]
const statsData = [
  {
    id: 1,
    stat: "15+ Years",
    line1: "Of Dental",
    line2: "Excellence",
  },
  {
    id: 2,
    stat: "5,000+ Smiles",
    line1: "Restored Across",
    line2: "Region",
  },
  {
    id: 3,
    stat: "4 Modern Units",
    line1: "Designed  Comfort",
    line2: "Precision",
  },
]
const AboutContents = () => {
  return (
    <div className='w-full flex  justify-center pt-10 flex-wrap'>
    <div className='w-[96%] lg:w-[94%] flex lg:flex-row flex-col-reverse justify-between flex-wrap'>
<div className="w-full lg:w-[42%]   flex  items-center justify-center lg:justify-start ">
    <div className='w-[95%] h-[80%] mt-4'>
    <img src={aboutimage} alt="" className='w-full h-full rounded-2xl' />
    </div>
    
</div>
<div className='w-full lg:w-[50%]  lg:px-5'>
     <div className="mt-5   inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-9 py-2 shadow-sm">
      <span className="text-teal-700  text-sm font-bold">Why Choose Us</span>
    </div>
    <Heading text="Why Choose  Dental  & Aesthetic Clinic" className=" text-3xl lg:text-5xl  pt-5 leading-tight text-[var(--secondary)] "/>
    <div className='pt-4 font-medium text-[var(--text)]'>
With over <span className='font-bold'>15 years of experience,</span>  our clinic combines expert care, advanced technology, and a patient-first approach to deliver world-class dental results right here in <span className='font-bold'>Virar West.</span>
    </div>
     <div className='pt-4 font-medium text-[var(--text)]'>
     Whether it’s your first dental visit or a complex implant treatment, our focus is always on your comfort, safety, and satisfaction.
    </div>
        <div className="w-full pt-8">
      {/* Checklist */}
      <ul className="flex flex-col gap-6">
        {featuresList.map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            <FaCheck className="text-[var(--secondary)] mt-1.5 flex-shrink-0" size={18} />
            <span className="text-[var(--text)] text-lg lg:text-normal">
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Button + WhatsApp */}
      <div className="flex items-center justify-between mt-5 lg:mx-4 mb-3 py-3 flex-wrap gap-4">
   <button className='font-bold shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer py-5 px-8 bg-gradient-to-r from-[#278981]  to-[rgb(28,150,140)] text-[var(--background)] rounded-xl'>Learn More about us</button>
        </div>
        </div>
    </div>      
  

    </div>
      <div className='w-[97%]  lg:p-2 text-[var(--background)]  '>
<div className='w-full rounded-2xl lg:px-8 pt-7 bg-gradient-to-b from-[#1c968c] to-[#0f4c4a] flex justify-between flex-col lg:flex-row '>
<div className='lg:w-[55%]  w-full lg:px-0 px-4'>
        <Heading text="Book Your Dental" className="text-2xl lg:text-4xl leading-tight"/>
        <Heading text="Appointment in Virar for a" className="text-2xl lg:text-4xl leading-tight"/>
        <Heading text="Confident, Pain-Free Smile" className="text-2xl lg:text-4xl leading-tight"/>
       <p className='pt-5'>
        Take the next step toward the smile you’ve always wanted. At Mhatre Dental Clinic & Implant Centre, our expert team combines care, precision, and advanced technology to make every treatment smooth, safe, and truly rewarding.
       </p>
<div className='w-full  pt-10 flex gap-6 lg:flex-row flex-col'>


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
</div>
<div className='flex justify-center items-center lg:pt-0 pt-12 mb-5'>
<div className='w-[400px] h-[400px] rounded-full flex justify-center'>
<img src={aboutgirl} alt="" className='h-[90%] w-[90%] lg:w-full lg:h-full  rounded-full bg-cover' />
</div>
</div>
</div>

    </div>
    </div>

  )
}

export default AboutContents
