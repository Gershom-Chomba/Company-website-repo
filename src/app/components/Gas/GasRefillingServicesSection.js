import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GasRefillingServicesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-8">Njovu Gas Refilling Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Highlighted Image */}
        <div className="col-span-1 md:col-span-2 relative w-full h-64">
          <Image
            src="/gas.jpeg"
            alt="Main Gas Refilling Service"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
            Safe and Reliable Gas Refilling Services
          </div>
        </div>

        {/* Supporting Images */}
        <div className="grid grid-rows-2 gap-4">
          <div className="relative w-full h-32">
            <Image
              src="/gas-cylinder.jpg"
              alt="Gas Cylinder"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-full h-32">
            <Image
              src="/liquified-gas.jpg"
              alt="Liquified Gas"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-700 mb-4">
          Our gas refilling services ensure safety and quality. We provide liquefied petroleum products and expert guidance for residential and industrial use.
        </p>
        <Link href="/Gas">
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GasRefillingServicesSection;
