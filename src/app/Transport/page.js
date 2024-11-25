import React from 'react';
import Image from 'next/image';

const TransportAndTollingServices = () => {
  // Articles for Transport and Tolling Services
  const transportArticles = [
    {
      id: 1,
      title: 'Efficient Logistics Solutions',
      summary: 'How our logistics services ensure timely deliveries.',
      content:
        'With advanced fleet management systems and experienced drivers, we provide seamless logistics solutions to ensure your goods arrive safely and on time.',
      imageUrl: '/transport-2.jpg', // Replace with the actual image path
    },
    {
      id: 2,
      title: 'Tolling Services for Smooth Travel',
      summary: 'Reliable tolling services for hassle-free commutes.',
      content:
        'Our tolling services are designed to provide drivers with efficient and reliable payment systems, reducing wait times and improving travel experiences.',
      imageUrl: '/tolling.jpg',
    },
    {
      id: 3,
      title: 'Vehicle Maintenance and Safety',
      summary: 'Ensuring safety and reliability in our transport services.',
      content:
        'We prioritize vehicle maintenance and safety checks to ensure the highest standards in our transportation services, providing peace of mind to our clients.',
      imageUrl: '/vehicle-maintenance.jpg',
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-green-600 text-3xl font-bold text-center mb-8">Njovu Transport and Tolling Services</h1>

      {/* Articles Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
          Transport and Tolling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {transportArticles.map((article) => (
            <div key={article.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.summary}</p>
                <p className="text-gray-500 mt-2 text-sm">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TransportAndTollingServices;
