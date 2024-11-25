import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  // Company services
  const services = [
    {
      title: 'Fast Food and Beverages',
      description: 'Delivering delicious fast food and refreshing beverages to satisfy your cravings.',
      image: '/burger-fries-coca-cola.jpg', // Replace with your image paths
    },
    {
      title: 'Construction',
      description: 'Providing top-notch construction services for residential, commercial, and industrial projects.',
      image: '/construction.jpg',
    },
    {
      title: 'Building Materials',
      description: 'Supplying high-quality building materials to meet your construction needs.',
      image: '/building-materials.jpg',
    },
    {
      title: 'Block Making and Pavers',
      description: 'Creating durable and high-quality blocks and pavers for various construction projects.',
      image: '/block-machine.jpeg',
    },
    {
      title: 'Gas Refilling Services',
      description: 'Reliable gas refilling services for both domestic and industrial use.',
      image: '/gas-stove.jpg',
    },
    {
      title: 'Engineering and Technology',
      description: 'Innovating in engineering and technology to drive progress.',
      image: '/electrical.jpg',
    },
    {
      title: 'Transport and Tolling Services',
      description: 'Efficient transport and tolling services for smooth logistics.',
      image: '/transport-tolling.jpg',
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      {/* About Section */}
      <section className="text-center mb-12">
        <h1 className="text-green-600 text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          We specialize in Fast Food and Beverages, Construction, Supply of Building Materials, 
          Block Making and Pavers, Gas Refilling Services, Engineering and Technology, Transport, 
          and Tolling Services. Our mission is to serve our community with excellence in every sector we touch.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Structure Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-6">Management & Ownership</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-left">
          <ul className="list-disc ml-6">
            <li>
              <strong>Corporate Structure:</strong>
              <div className="ml-4">
                <p>Shareholders (Board)</p>
                <p>Directors</p>
                <p>Department Managers</p>
                <p>Secretaries/Service Workers</p>
              </div>
            </li>
            <li className="mt-4">
              <strong>Shareholders:</strong>
              <span className="ml-2">5</span>
            </li>
            <li className="mt-4">
              <strong>Directors:</strong>
              <span className="ml-2 text-red-600">[RESTRICTED]</span>
            </li>
            <li className="mt-4">
              <strong>Business & Leadership Skills:</strong>
              <span className="ml-2 text-red-600">[RESTRICTED]</span>
            </li>
            <li className="mt-4">
              <strong>Office and Administrative Personnel:</strong>
              <span className="ml-2 text-red-600">[RESTRICTED]</span>
            </li>
            <li className="mt-4">
              <strong>Professionals & Advisors:</strong>
              <span className="ml-2 text-red-600">[RESTRICTED]</span>
            </li>
            <li className="mt-4">
              <strong>Accountants:</strong>
              <span className="ml-2 text-red-600">[RESTRICTED]</span>
            </li>
            <li className="mt-4">
              <strong>Current Customers & Projects:</strong>
              <span className="ml-2 text-red-600">[RESTRICTED]</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
