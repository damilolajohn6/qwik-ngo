"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react"; 

const ContactSection = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Get in Touch with Us!
        </h2>
        <p className="text-gray-600 mb-2">
          Questions? Feedback? We're here to assist you with all your fashion
          needs.
        </p>
        <Link href="/contact" passHref>
          <Button
            variant="link"
            className="text-blue-500 font-semibold p-0 h-auto"
          >
            Contact Us
          </Button>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Card */}
        <div className="border rounded-2xl p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition">
          <Phone className="text-gray-700" size={28} />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Call Us:</h4>
            <a
              href="tel:+2348079056834"
              className="text-blue-500 font-semibold hover:underline block"
            >
              +234 807-905-6834
            </a>
            <p className="text-gray-600 text-sm mt-1">
              Available 9 AM - 6 PM (Mon-Sat)
            </p>
          </div>
        </div>

        {/* Email Card */}
        <div className="border rounded-2xl p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition">
          <Mail className="text-gray-700" size={28} />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Email Us:</h4>
            <a
              href="mailto:info@pathway.com"
              className="text-blue-500 font-semibold hover:underline block"
            >
              info@pathway.com
            </a>
            <p className="text-gray-600 text-sm mt-1">
              Replies within 24 hours
            </p>
          </div>
        </div>

        {/* Live Chat Card */}
        <div className="border rounded-2xl p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition">
          <MessageCircle className="text-gray-700" size={28} />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Live Chat:</h4>
            <p className="text-gray-600 text-sm">
              Available on our website (9 AM - 8 PM Daily)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
