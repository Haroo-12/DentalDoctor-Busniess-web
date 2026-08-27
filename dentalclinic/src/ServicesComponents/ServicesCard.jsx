import React, { useRef, useCallback } from 'react'
import Heading from '../components/Heading'
import rootcanal from '../assets/images/servicesimages/rootcanal.webp'
import bracesandaligners from '../assets/images/servicesimages/bracesandaligners.webp'
import dentalimplents from '../assets/images/servicesimages/dentalimplents.webp'
import GumsSurgery from '../assets/images/servicesimages/GumsSurgery.webp'
import scalingpolishing from '../assets/images/servicesimages/scalingpolishing.webp'
import wisdomremoval from '../assets/images/servicesimages/wisdomremoval.webp'
import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: "Root Canal Treatment",
    image: rootcanal,
    description: "Advanced procedure that removes infected pulp, relieves pain, and preserves natural teeth effectively.",
  },
  {
    id: 2,
    title: "Braces & Aligners",
    image: bracesandaligners,
    description: "Straighten teeth and improve your smile with modern braces and nearly invisible aligners.",
  },
  {
    id: 3,
    title: "Dental Implants",
    image: dentalimplents,
    description: "Permanent tooth replacement solution designed to restore function, comfort, and confidence.",
  },
  {
    id: 4,
    title: "Gum Surgery",
    image: GumsSurgery,
    description: "Specialized treatment for advanced gum issues, helping restore healthy gums and oral health.",
  },
  {
    id: 5,
    title: "Scaling & Polishing",
    image: scalingpolishing,
    description: "Professional deep cleaning that removes plaque, tartar, and stains for a healthier smile.",
  },
  {
    id: 6,
    title: "Wisdom Tooth Removal",
    image: wisdomremoval,
    description: "Safe and comfortable extraction of impacted wisdom teeth to prevent pain and complications.",
  },
];

const ServicesCard = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const handleBookNow = useCallback(() => {
    navigate("/contact#contact-form");
  }, [navigate]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.batch(".service-card", {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            scale: 0.95,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          }),
      });
    });

    // Agar page already load ho chuka hai (SPA navigation case),
    // to seedha refresh karo. Warna load event ka wait karo.
    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    } else {
      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, { scope: sectionRef });

  return (
    <section
      className="w-full flex flex-wrap justify-center pt-10 gap-5"
      ref={sectionRef}
    >
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="service-card w-full sm:w-[48%] lg:w-[30%] bg-white shadow-2xl p-2 rounded-xl flex flex-col"
        >
          <div className="relative w-full">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                width={400}
                height={300}
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#278981] to-[rgb(28,150,140)] to-transparent"></div>
            </div>
          </div>

          <div className="px-3 pt-3 flex flex-col flex-1">
            <Heading text={service.title} className="text-xl font-bold" />
            <p className="mt-2 text-[var(--text)] leading-relaxed flex-1">
              {service.description}
            </p>
            <button
              onClick={handleBookNow}
              aria-label={`Book Now for ${service.title}`}
              className="px-5 py-3 lg:mb-2 mb-4 rounded-full text-white font-bold cursor-pointer mt-4 bg-gradient-to-r from-[#278981] to-[rgb(28,150,140)] self-start"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ServicesCard