import React, { useState, useEffect, useCallback } from 'react'
import {
  FaPhoneAlt, FaUser, FaCalendarAlt, FaRegFileAlt,
  FaWhatsapp, FaEnvelope, FaPhone
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

// ✅ Ye sahi hai bahar rakhna — koi state reference nahi hai
const sidebarInfo = {
  title: "Book Online",
  description:
    'Fill out the form to create your appointment request. Clicking "Book on WhatsApp" will open a pre-filled chat with our receptionist.',
  contacts: [
    { id: 1, icon: FaEnvelope, value: "info@smileprodental.pk" },
    { id: 2, icon: FaPhone, value: "+92 333 2669991 (Main)" },
  ],
};

// ✅ Options bhi static hain, bahar theek hai
const treatmentOptions = [
  "Dental Implants",
  "Root Canal",
  "Teeth Whitening",
  "Braces",
  "Smile Makeover",
  "Scaling & Polishing",
];

const ContactPageComponent = () => {
  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [treatment, settreatment] = useState("");
  const [date, setdates] = useState("");
  const [message, setmessage] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const handleNameChange = useCallback((e) => setname(e.target.value), []);
  const handlePhoneChange = useCallback((e) => setphonenumber(e.target.value), []);
  const handleTreatmentChange = useCallback((e) => settreatment(e.target.value), []);
  const handleDateChange = useCallback((e) => setdates(e.target.value), []);
  const handleMessageChange = useCallback((e) => setmessage(e.target.value), []);

  function handlesubmit(e) {
    e.preventDefault();
    if (!name || !phonenumber || !treatment || !date) {
      return alert("Please fill all required fields.");
    }

    const textmessage = `
🦷 *New Appointment Request*

👤 Name: ${name}

📞 Phone: ${phonenumber}

🩺 Treatment: ${treatment}

📅 Preferred Date: ${date}

📝 Additional Message:
${message}
`;

    const phone = "923149234050";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(textmessage)}`,
      "_blank"
    );
  }

  // ✅ Ye state-dependent hai, isliye component ke andar hi rehna zaroori hai
  const formFields = [
    {
      id: 1,
      label: "Full Name",
      icon: FaUser,
      type: "text",
      placeholder: "Your Name",
      required: true,
      onchange: handleNameChange,
      value: name,
    },
    {
      id: 2,
      label: "Phone Number",
      icon: FaPhoneAlt,
      type: "number",
      placeholder: "03*****",
      required: true,
      onchange: handlePhoneChange,
      value: phonenumber,
    },
    {
      id: 3,
      label: "Dental Treatment",
      icon: null,
      type: "select",
      placeholder: "Dental Implants",
      fullWidth: true,
      required: true,
      value: treatment,
      onchange: handleTreatmentChange,
      options: treatmentOptions,
    },
    {
      id: 4,
      label: "Preferred Date (Optional)",
      icon: FaCalendarAlt,
      placeholder: "07/22/2026",
      type: "date",
      fullWidth: true,
      required: true,
      onchange: handleDateChange,
      value: date,
    },
  ];

  return (
    <div id='contact-form'>
      <div className="w-[97%] mt-10 mx-auto rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row bg-white">
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

        <form className="md:w-2/3 p-10" onSubmit={handlesubmit}>
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
                    {field.type === "select" ? (
                      <select
                        value={field.value}
                        onChange={field.onchange}
                        required={field.required}
                        className="w-full outline-none bg-transparent text-slate-700"
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        onChange={field.onchange}
                        value={field.value}
                        required={field.required}
                        type={field.type || "text"}
                        placeholder={field.placeholder}
                        className="w-full outline-none bg-transparent text-slate-700"
                      />
                    )}
                  </div>
                </div>
              );
            })}

            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-slate-800 mb-2">
                Additional Message (Optional)
              </label>
              <div className="flex items-start gap-3 border border-slate-200 rounded-xl px-4 py-3">
                <FaRegFileAlt className="w-4 h-4 text-slate-400 mt-1" />
                <textarea
                  onChange={handleMessageChange}
                  value={message}
                  rows={3}
                  placeholder="Any details you'd like to share..."
                  className="w-full outline-none resize-none bg-transparent text-slate-700"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-md"
          >
            <FaWhatsapp className="w-5 h-5" />
            Book on WhatsApp
          </button>
          <p className="text-center text-sm text-slate-400 mt-3">
            You will be redirected to WhatsApp to send your appointment details.
          </p>
        </form>
      </div>
    </div>
  )
}

export default ContactPageComponent