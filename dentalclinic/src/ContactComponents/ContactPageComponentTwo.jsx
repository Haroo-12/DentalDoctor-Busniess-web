import React from 'react'
import {
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock,
 } from "react-icons/fa";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.856108619233!2d68.33693247360453!3d25.396699723594484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c718a0a78ab1d%3A0xdd00a40512469c09!2sDental%20%26%20Aesthetic%20Clinic%20Dr.Shaheer!5e1!3m2!1sen!2s!4v1784147041068!5m2!1sen!2s";

const ContactPageComponentTwo = () => {
  const sectionRef = useRef();
  const contactcontentbadge = useRef();
  const contactcontentone = useRef();
  const contactcontenttwo = useRef();

  useGSAP(() => {
    // Combined into one animated group with shared class instead of
    // three separate gsap.from + ScrollTrigger calls (fewer scroll listeners).
    gsap.from(
      [contactcontentbadge.current, contactcontentone.current, contactcontenttwo.current],
      {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        x: -50,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.from(".contactcontentfour", {
      opacity: 0,
      scale: 0.95,
      x: -50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contactcontentfour",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <div>
      <div className="lg:px-10" ref={sectionRef}>
        <div
          className="mx-5 lg:mx-0 mt-3 lg:mt-5 inline-flex w-fit items-center gap-2 bg-teal-50 border border-teal-700 rounded-full px-12 py-4 shadow-sm"
          ref={contactcontentbadge}
        >
          <span className="text-teal-700 text-md font-bold">Book Appoitment</span>
        </div>

        <h2
          className="px-5 lg:px-0 text-3xl lg:text-5xl font-bold pt-8 text-[var(--heading)]"
          ref={contactcontentone}
        >
          Schedule Your Visit
        </h2>

        <p
          className="px-5 lg:px-0 mt-2 text-[var(--text)] text-lg"
          ref={contactcontenttwo}
        >
          Book an appointment with our dental team and take the first step toward a healthier smile.
        </p>

        <div className="flex justify-center items-center lg:justify-between flex-col lg:flex-row gap-5 w-full pt-10 lg:pt-15">
          <div className="contactcontentfour w-[95%] bg-emerald-50 lg:w-[45%] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-teal-900 mb-6">
              {branchData.name}
            </h2>

            {branchData.details.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-start gap-4 mb-6 last:mb-0">
                  <span className="flex-shrink-0 w-11 h-11 rounded-full bg-white flex items-center justify-center">
                    <Icon className="w-4 h-4 text-teal-600" />
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>

                    {item.main && (
                      <p className="font-bold text-gray-900 text-lg">{item.main}</p>
                    )}
                    {item.sub && (
                      <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                    )}

                    {item.lines &&
                      item.lines.map((line, idx) => (
                        <p key={idx} className="text-gray-500 leading-relaxed">
                          {line}
                        </p>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="contactcontentfour w-[95%] lg:w-[45%] h-[410px] rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src={MAP_EMBED_SRC}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Dental Clinic Location"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPageComponentTwo