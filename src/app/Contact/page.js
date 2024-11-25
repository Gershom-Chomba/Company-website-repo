'use client'

import React from 'react';
import Image from 'next/image';

const page = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Form data collection
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Logic to send an email (via backend integration)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Your message has been sent!');

    // Reset form
    event.target.reset();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Contact Form Section */}
      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 px-4 sm:px-8 lg:px-16 bg-green-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative w-full h-64 lg:h-80">
            <Image
              src="/location.jpeg" // Replace with your location image path
              alt="Our Location"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Where to Find Us
            </h2>
            <p className="text-gray-700 text-lg">
              Our office is located in the heart of Chirundu. 
              Come visit us at Plot No. 503 WorkBook Investments Limited T2 Road Chirundu, Zambia, 
              where we are committed to providing the best service and solutions for all your needs. 
              We are open Monday to Friday from 8:00 AM to 5:00 PM.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
