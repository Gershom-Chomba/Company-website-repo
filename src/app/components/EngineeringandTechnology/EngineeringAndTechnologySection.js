import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EngineeringAndTechnologySection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
        Njovu Engineering and Technology
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-gray-700 mb-4">
            We specialize in cutting-edge engineering solutions and technological advancements, 
            including electrical engineering and cybersecurity. Our mission is to provide 
            innovative solutions to drive sustainable growth and progress.
          </p>
          <Link href="/Engineering">
            <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 mt-4">
              Learn More
            </button>
          </Link>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative w-full h-48">
            <Image
              src="/electrical.jpg"
              alt="Electrical Engineering"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-full h-48">
            <Image
              src="/cyber-security.jpg"
              alt="Cybersecurity"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringAndTechnologySection;
