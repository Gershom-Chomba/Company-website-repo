"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  // Array of six background images
  const images = [
    '/engineering.jpg', 
    '/gas-cylinder.jpg',
    '/tech-2.jpg',
    '/food-beverage.jpg',  // replace with the paths to your images
    '/construction.jpg',
    '/transport (2).jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Slideshow */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Background ${index + 1}`}
          layout="fill"
          objectFit="cover"
          quality={100}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-2xl px-4">
        <p className="text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-4">WorkBook Investments Limited</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">Trading as Njovu</h1>
        <p className="text-sm md:text-lg mb-4 md:mb-8">
          Specialized in Fast Food and Beverages, Construction, supply of building materials, Block making and pavers, Gas refilling services,
          Engineering and Technology, Transport and Tolling services.
        </p>
        <Link href="/Contact" passHref>
            <button className="px-4 py-2 md:px-6 md:py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </Link>
      </div>
    </div>
  );
};

export default HeroSection;
