"use client"
import React, { useState } from 'react';


const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Newsletter Signup Email:', email);
    alert('Thank you for subscribing!'); 
    setEmail(''); 
  };

  return (
    <section id="newsletter-section" className="container mx-auto py-12 px-4 md:px-12   text-center"> {/* Added id for linking */}
      {/* Headline */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Stay Connected
      </h2>

      {/* Subheading */}
      <p className="text-lg text-gray-700 mb-8">
        Subscribe to our newsletter for the latest updates, success stories, and ways you can make a difference.
      </p>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"> {/* Responsive flex layout */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="py-3 px-4 rounded-md w-full sm:flex-grow text-gray-800 focus:outline-none shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-blue-700 transition duration-200 w-full sm:w-auto focus:outline-none"        >
          Subscribe
        </button>
      </form>
       <p className="text-sm text-gray-600 mt-4">
         We respect your privacy. Unsubscribe at any time.
       </p>
    </section>
  );
};

export default NewsletterSection;
