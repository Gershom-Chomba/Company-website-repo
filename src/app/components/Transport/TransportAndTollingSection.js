import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TransportAndTollingSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-8">Njovu Transport and Tolling Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/logistics.jpg"
              alt="Logistics"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Logistics Services</h3>
            <p className="text-gray-700 mt-2">
              Providing efficient and reliable transportation solutions for goods and materials.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/tolling-services.jpg"
              alt="Tolling Services"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Tolling Services</h3>
            <p className="text-gray-700 mt-2">
              Smooth and transparent tolling services for all major roads and bridges.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/vehicle-maintenance.jpg"
              alt="Vehicle Maintenance"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Vehicle Maintenance</h3>
            <p className="text-gray-700 mt-2">
              Comprehensive vehicle maintenance to ensure the highest level of performance.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/Transport">
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TransportAndTollingSection;
