"use client";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Contact Form Submitted:", formData);
   
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <section className="container mx-auto py-12 px-4 md:px-12  rounded-lg">
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Prefer to write to us? Fill out the form, and we'll get back to you
          shortly!
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
        
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" // Added bg-gray-100
              placeholder="Mary" 
              required
            />
          </div>

         
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" // Added bg-gray-100
              placeholder="Mary"
              required
            />
          </div>

          
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" // Added bg-gray-100
              placeholder="070225689" 
             
            />
          </div>

          {/* Message Field */}
          <div className="md:col-span-1">
            
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4" 
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" // Added bg-gray-100
              placeholder="Hi" 
              required
            ></textarea>
          </div>

         
          <div className="md:col-span-2 flex justify-center md:justify-start">
           
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
