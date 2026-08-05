import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { casesData } from '../Multiplearray/CasesData.js'
import {FaWhatsapp} from "react-icons/fa";
import Cases from '../Pages/Cases'

const GalleryCardDetail = () => {
  const navigate = useNavigate()
  let [selectedimage , setselectedimage] = useState("both")
  const {id} = useParams()
  let vals = casesData.find(items => Number(items.id) == id)
  return (
  <div className='w-full flex justify-center '>
  <div className='w-full flex justify-around flex-col  lg:flex-row gap-5  pt-5 min-h-screen pb-5 lg:w-[98%] bg-teal-50 border border-teal-700 mt-5 rounded-2xl'>
      <div className='w-full lg:w-[40%]  pb-7 flex flex-col justify-center items-center '>
        <div className='w-[90%] h-[340px] lg:w-[450px] lg:h-[370px] bg-white shadow-2xl border border-gray-200  rounded-2xl flex flex-col justify-center'>
          
{
  selectedimage === "both" &&(
    <>
                 <div className="relative w-full h-[180px] p-1">
        <img
          src={vals.beforeImage}
          // alt={`${item.treatment} Before`}
          className="w-full h-full rounded-xl object-cover"
        />

        <span className="absolute top-3 left-3 bg-[#278981] text-white text-xs px-3 py-1 rounded-full font-semibold">
          Before
        </span>
      </div>

    
      <div className="relative w-full h-[180px] p-1">
        <img
          src={vals.afterImage}
          // alt={`${item.treatment} After`}
          className="w-full h-full rounded-xl object-cover"
        />

        <span className="absolute top-3 left-3 bg-[rgb(28,150,140)] text-white text-xs px-3 py-1 rounded-full font-semibold">
          After
        </span>
      </div>
    </>
  )
}
{
  selectedimage === "before" &&(
    <div className="relative w-full h-full p-1">
      <img
        src={vals.beforeImage}
        className="w-full h-full rounded-xl lg:object-cover"
      />
      <span className="absolute top-3 left-3 bg-[#278981] text-white text-xs px-3 py-1 rounded-full">
        Before
      </span>
    </div>
  )
}
{
  selectedimage === "after" &&(
    <div className="relative w-full h-full p-1">
      <img
        src={vals.afterImage}
        className="w-full h-full rounded-xl lg:object-cover"
      />
      <span className="absolute top-3 left-3 bg-[#278981] text-white text-xs px-3 py-1 rounded-full">
        after
      </span>
    </div>
  )
}
        </div>
        <div className=' w-full pt-12 lg:pt-3 flex justify-center items-center gap-6'>
<div className="w-[25%] h-[90px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#278981]/60" onClick={()=>{setselectedimage("before")}}><img src={vals.beforeImage} alt="" className='w-full h-full object-cover rounded-2xl' /></div>
<div className="w-[25%] h-[90px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#278981]/60" onClick={()=>{setselectedimage("after")}}><img src={vals.afterImage} alt="" className='w-full h-full object-cover rounded-2xl' /></div>
<div className="w-[25%] h-[90px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#278981]/60" onClick={()=>{setselectedimage("both")}}>          
        <img
          src={vals.beforeImage}
          // alt={`${item.treatment} Before`}
          className="w-full h-[50%] rounded-t-2xl  object-cover"
        />
   

    
        <img
          src={vals.afterImage}
          // alt={`${item.treatment} After`}
          className="w-full h-[50%] rounded-b-2xl  object-cover"
        />

      </div>
      

        </div>
      </div>
      <div className='w-full lg:w-[50%] '>
<div className='pt-8 px-5'>
          <div className='flex flex-col gap-4 lg:justify-between lg:flex-row'>
          <p>⭐⭐⭐⭐⭐ <span className='text-[var(--text)] lg:font-normal'>5.0 google rating</span></p>
          <p className='text-[var(--secondary)] font-normal lg:font-bold '>By Dr Shaheer</p>
        </div>
        <h1 className='text-3xl font-bold pt-7'>{vals.treatment}</h1>
        <p className='pt-7 text-[var(--text)] leading-7 lg:leading-normal '>{vals.description}</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

  {/* Duration */}
  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-slate-500 font-medium">Treatment Duration</p>
    <h3 className="text-xl font-bold text-[var(--secondary)] mt-2">
      {vals.duration}
    </h3>
  </div>

  {/* Recovery */}
  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-slate-500 font-medium">Recovery Time</p>
    <h3 className="text-xl font-bold text-[var(--secondary)] mt-2">
      {vals.recovery}
    </h3>
  </div>

  {/* Difficulty */}
  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-slate-500 font-medium">Procedure</p>
    <h3 className="text-xl font-bold text-[var(--secondary)] mt-2">
      {vals.difficulty}
    </h3>
  </div>

</div>

{/* Treatment Highlights */}

<div className="mt-4 lg:hidden bg-white border border-slate-200 rounded-2xl pb-4 py-4 px-3 shadow-sm">
  <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">
    Treatment Highlights
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  lg:hidden">
    {vals.highlights.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-3 bg-[var(--light)] rounded-xl px-4 py-3"
      >
        <div className="w-8 h-8 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center">
          ✓
        </div>

        <p className="font-medium text-slate-700">{item}</p>
      </div>
    ))}
  </div>
</div>
        <div className='w-full pt-8 flex justify-center items-center '>
         <Button className='w-[98%] backgroundcol px-5 py-5 rounded-xl font-bold text-white' text="Book Appoitment" onClick={()=>{navigate("/contact#contact-form")}}> </Button>
        </div>
</div>
      </div>
    </div>
  </div>

  )

}

export default GalleryCardDetail
