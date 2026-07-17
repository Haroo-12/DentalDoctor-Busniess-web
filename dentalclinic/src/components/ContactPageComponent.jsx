import React from 'react'
// import React from 'react'
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
const ContactPageComponent = () => {
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
    <div>
       <div className="w-[100%] mt-10 mx-auto rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row bg-white">
      {/* Sidebar */}
      <div className="md:w-1/3 bg-slate-900 text-white p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{sidebarInfo.title}</h2>
        <p className="text-slate-300 leading-relaxed mb-8">{sidebarInfo.description}</p>
 
        <div className="space-y-3">
          {sidebarInfo.contacts.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.id} className="flex items-center gap-2 text-teal-300">
                <Icon className="w-4 h-4" />
                <span>{c.value}</span>
              </div>
            );
          })}
        </div>
      </div>
 
      {/* Form */}
          <div className="md:w-2/3 p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {formFields.map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.id} className={field.fullWidth ? "sm:col-span-2" : ""}>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  {field.label}
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3">
                  {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-[100%]  outline-none bg-transparent text-slate-700"
                  />
                </div>
              </div>
            );
          })}
 
          {/* Additional Message - full width */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold text-slate-800 mb-2">
              Additional Message (Optional)
            </label>
            <div className="flex items-start gap-3 border border-slate-200 rounded-xl px-4 py-3">
              <FaRegFileAlt className="w-4 h-4 text-slate-400 mt-1" />
              <textarea
                rows={3}
                placeholder="Any details you'd like to share..."
                className="w-full outline-none resize-none bg-transparent text-slate-700"
              />
            </div>
          </div>
        </div>
 
        {/* WhatsApp Button */}
        <button className="mt-8 w-full bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-md">
          <FaWhatsapp className="w-5 h-5" />
          Book on WhatsApp
        </button>
        <p className="text-center text-sm text-slate-400 mt-3">
          You will be redirected to WhatsApp to send your appointment details.
        </p>
      </div>
    </div>
    </div>
  )
}

export default ContactPageComponent
