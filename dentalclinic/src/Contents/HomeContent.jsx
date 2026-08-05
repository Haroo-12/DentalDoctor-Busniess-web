import Heading from '../components/Heading'
import Button from '../components/Button'
import { FaStar } from "react-icons/fa";
import heroimg from '../assets/images/heroimg.webp'
import { useNavigate } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
let homedata = [
    {
        headingone : "Your Perfect Smile",
        headingtwo : "Starts Here",
        para : "World-class dental care delivered with compassion. From routine checkups to complete smile makeovers, we're here to help you achieve a healthy, confident smile.",
        btn1 : "Our Services",
        btn2 : "Book an appoitment",


    }
    ,
   
  
]
let homecards = [
         {
            no : "5+",
            year : " Experience",
        },
        {
            no : "6K+",
            year : "Happy Clients"
        },
        {
            no : "99%",
            year : "Satisfication"
        }
]
const HomeContent = () => {
const heroRef = useRef();
const herone = useRef();
const herotwo = useRef()
useGSAP(() => {
  // const tl = gsap.timeline();
 gsap.from(herone.current, {
    opacity: 0,
    duration: 1,
      y: -50,
    scale : 0.95,
    ease: "power3.out",
  });
gsap.from(herotwo.current, {
    opacity: 0,
    duration: 1,
    y: 50,
    scale : 0.9,
    ease: "power2.out",
  });
}, { scope: heroRef });
const navigate = useNavigate()
  return (
    <section className=' lg:flex lg:flex-row flex-col' ref={heroRef}>
    
 <div className="pt-5 w-full sm:w-full lg:w-[50%]  flex  justify-center  flex-col " ref={herone}>
<div className="lg:mx-10 mx-4 inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-9 py-2 shadow-sm">
  <span className="text-teal-700"><FaStar/></span>
  <span className="text-teal-700 font-medium text-sm">Trusted by 1000+ Patients</span>
</div>
{ homedata.map((items , index)=>{
        return(
            <div key={index}>
                <div className='lg:px-8 pt-5 lg:pt-5 w-full'>
 <div className="flex flex-col gap-1 px-3">
  <Heading text={items.headingone} className="w-full text-3xl lg:text-5xl leading-tight text-[var(--secondary)]"/>
  <Heading text={items.headingtwo} className="w-full text-3xl lg:text-5xl leading-tight text-[var(--secondary)]"/>
</div>
    </div>
   <div className='px-4  pt-4 lg:px-11 lg:pt-5 w-full'>
<p className='text-[var(--text)] leading-6.5 lg:leading-normal'>
    {items.para}
</p>
   </div>
   <div className='flex gap-5 lg:gap-10 lg:mx-10 mx-4 pt-5 lg:pt-6 lg:flex-row flex-col'>
    <Button className="bg-gradient-to-r from-[#278981]  to-[rgb(28,150,140)] py-4 lg:px-4 lg:py-2" text={items.btn1} onClick={()=>{navigate("/services")}} />
    <Button className="border-1 text-[var(--text)] border-gray-400 py-4 lg:px-4 lg:py-2 hover:[background:var(--primary-gradient)] hover:text-[var(--background)]" text={items.btn2} onClick={()=>{navigate("/contact#contact-form")}}/>
   </div>
            </div>
        )
    })
}
<div className='w-full lg:mx-10 pt-10 lg:pt-5 flex justify-center lg:justify-start lg:gap-5 gap-3 '>
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
<div className='w-full flex justify-center items-center lg:w-[45%] pt-15 lg:pt-0' ref={herotwo}>
  <div className="relative w-full lg:w-[90%] aspect-[4/3] lg:aspect-auto lg:h-[80%]">
    <img
      src={heroimg}
      alt=""
      className="w-full h-full object-cover rounded-3xl shadow-xl"
    
    />

    <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-xl shadow-lg">
      ⭐ 5.0 Rating
    </div>

    <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-xl shadow-lg">
      👨‍⚕️ 6000+ Patients
    </div>
  </div>
</div> 


    </section>
  )
}

export default HomeContent
