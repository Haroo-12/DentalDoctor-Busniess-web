import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { FaStar } from "react-icons/fa";
import heroimg from '../assets/images/heroimg.webp'
let homedata = [
    {
        headingone : "Your Perfect Smile",
        headingtwo : "Starts Here",
        para : "World-class dental care delivered with compassion. From routine cleanings to complete smile makeovers — we've got you covered ",
        btn1 : "Our Services",
        btn2 : "Book an appoitment",


    }
    ,
   
  
]
let homecards = [
         {
            no : "15 +",
            year : " Experience",
        },
        {
            no : "10K +",
            year : "Happy Clients"
        },
        {
            no : "98%",
            year : "Satisfication"
        }
]
const Home = () => {

  return (
    <section className=' lg:flex lg:flex-row flex-col'>
    
 <div className="pt-5 w-full sm:w-full lg:w-[50%]  flex  justify-center  flex-col">
<div className="lg:mx-10 mx-4 inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-9 py-2 shadow-sm">
  <span className="text-teal-700"><FaStar/></span>
  <span className="text-teal-700 font-medium text-sm">Trusted by 1000+ Patients</span>
</div>
{ homedata.map((items , index)=>{
        return(
            <div key={index}>
                <div className='lg:px-8 pt-5 lg:pt-5 w-full' key={index} >
 <Heading text={items.headingone} className="w-full text-4xl lg:text-6xl px-3 py-1 text-[var(--secondary)]"/>
    <Heading text={items.headingtwo} className="text-4xl lg:text-6xl  px-3 py-1 text-[var(--secondary)]"/>
    </div>
   <div className='px-4  pt-4 lg:px-11 lg:pt-7 w-full'>
<p className='text-[var(--text)] text-xl'>
    {items.para}
</p>
   </div>
   <div className='flex gap-10 lg:mx-10 mx-4 pt-7'>
    <Button className="bg-gradient-to-r from-[#278981]  to-[#1c968c]" text={items.btn1}/>
    <Button className="border-1 text-[var(--text)] border-gray-400 " text={items.btn2}/>
   </div>
            </div>
        )
    })
}
<div className='w-full lg:mx-10 pt-10 flex lg:gap-5 gap-3 '>
    {homecards.map((items , index)=>{
        return(
  <div key={index} className="lg:w-[20%] w-[30%] h-[100px] flex justify-center items-center flex-col bg-white  shadow-2xl rounded-xl">

    <h1 className='text-2xl font-bold py-1'>{items.no}</h1>
    <p className=' py-1'>{items.year}</p>
</div>
            
        )
    })}
</div>

</div> 
<div className='w-full flex justify-center items-center lg:w-[45%] pt-10 lg:pt-0'>
  <div className="relative w-full lg:w-[90%] aspect-[4/3] lg:aspect-auto lg:h-[90%]">
    <img
      src={heroimg}
      alt=""
      className="w-full h-full object-cover rounded-3xl shadow-xl"
    />

    <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-xl shadow-lg">
      ⭐ 4.9 Rating
    </div>

    <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-xl shadow-lg">
      👨‍⚕️ 1000+ Patients
    </div>
  </div>
</div> 


    </section>
  )
}

export default Home
