import React from 'react'
import {
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock , 
  FaUser,
//   FaPhoneAlt,
  FaHospital,
  FaCalendarAlt,
  FaRegFileAlt,
  FaWhatsapp,
  FaEnvelope,
  FaPhone
 } from "react-icons/fa";
import Footer from '../Layout/Footer';

import ContactPageComponentTwo from '../ContactComponents/ContactPageComponentTwo';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Contactcontents = () => {
    const branchData = {
  name: "Main (Qasimabad)",
  details: [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "Address",
      lines: [
        "C 09, Faraz Centre, Main Wadhu Wah Rd, Qasimabad, Hyderabad",
        "Hyderabad Sindh Pakistan",
      ],
    },
    {
      id: 2,
      icon: FaPhoneAlt,
      title: "Branch Phone",
      main: "0315 4266999",
      sub: "Main Helpline: +92 3361266122",
    },
    {
      id: 3,
      icon: FaClock,
      title: "Business Hours",
      lines: ["Mon - Sun: 12 PM - 10 PM"],
    },
  ],
};
const sidebarInfo = {
  title: "Book Online",
  description:
    'Fill out the form to create your appointment request. Clicking "Book on WhatsApp" will open a pre-filled chat with our receptionist.',
  contacts: [
    { id: 1, icon: FaEnvelope, value: "info@smileprodental.pk" },
    { id: 2, icon: FaPhone, value: "+92 333 2669991 (Main)" },
  ],
};
const formFields = [
  { id: 1, label: "Full Name", icon: FaUser, type: "text", placeholder: "shaheer" },
  { id: 2, label: "Phone Number", icon: FaPhoneAlt, type: "text", placeholder: "03*****" },
  { id: 3, label: "Preferred Branch", icon: FaHospital, type: "text", placeholder: "Qasmabad" },
  { id: 4, label: "Treatment / Service", icon: null, type: "text", placeholder: "Dental Implants" },
{
  id: 5,
  label: "Preferred Date (Optional)",
  icon: FaCalendarAlt,
  placeholder: "07/22/2026",
  type : "date",
  fullWidth: true
}
];
  return (
    <div className='flex justify-center flex-col items-center pt-8 lg:pt-15'>
      <div className='lg:w-[95%]  w-full  mt-10'>
 <ContactPageComponentTwo/>


      </div>

    </div>
  )
}

export default Contactcontents
