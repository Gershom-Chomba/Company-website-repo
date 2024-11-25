"use client";

import { useState } from "react";
import Link from "next/link";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="text-gray-800">
      {/* Header Section */}
      <div
        className="bg-cover bg-center text-white py-16 md:py-24 px-4"
        style={{ backgroundImage: "url('/header-bg.jpg')" }}
      >
        <div className="bg-green-900 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-base md:text-lg mb-8">
              Welcome to{" "}
              <span className="font-semibold text-green-200">WorkBook</span>! We
              specialize in Fast food and Beverages, Construction, supply 
              of building materials, Block making and pavers, Gas refilling services
              Engineering and Technology, Transport and Tolling services. Our mission is to serve our
              community with excellence in every sector we touch.
            </p>
            <Link href="/About">
              <button className="bg-green-600 text-white px-6 md:px-8 py-3 rounded-full hover:bg-green-700 transition transform hover:scale-105">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        className="py-16 md:py-24 bg-cover bg-center text-gray-800"
        style={{ backgroundImage: "url('/location.jpeg')" }}
      >
        <div className="bg-white bg-opacity-90 max-w-4xl mx-auto p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-green-800">
            Contact Us
          </h2>
          <p className="text-center mb-6 text-gray-700">
            Have questions or want to work with us? Send us a message!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
