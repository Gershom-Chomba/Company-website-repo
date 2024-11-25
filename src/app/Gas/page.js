import React from 'react';
import Image from 'next/image';

const GasRefillingServices = () => {
  // Articles for Gas Refilling Services
  const gasArticles = [
    {
      id: 1,
      title: 'Benefits of Using LPG',
      summary: 'Why LPG is a cleaner and more efficient energy source.',
      content:
        'Liquefied Petroleum Gas (LPG) is an environmentally friendly and efficient energy source. It produces fewer greenhouse gas emissions compared to other fossil fuels, making it a preferred choice for households and industries.',
      imageUrl: '/lpg-benefits.jpg', // Replace with your actual image path
    },
    {
      id: 2,
      title: 'Safety Tips for Handling LPG',
      summary: 'Essential guidelines for safe usage of LPG cylinders.',
      content:
        'Learn how to safely handle and store LPG cylinders to prevent accidents. This includes regular maintenance checks, proper ventilation, and leak detection techniques.',
      imageUrl: '/lpg-safety.jpg',
    },
    {
      id: 3,
      title: 'LPG in Commercial Applications',
      summary: 'The role of LPG in industrial and commercial sectors.',
      content:
        'LPG is widely used in commercial kitchens, factories, and other industries due to its high energy efficiency and reliability. Discover the various applications of LPG in commercial settings.',
      imageUrl: '/lpg-stove.jpg',
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-green-600 text-3xl font-bold text-center mb-8">Njovu Gas Refilling Services</h1>

      {/* Articles Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">Liquefied Petroleum Gas (LPG) Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gasArticles.map((article) => (
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

export default GasRefillingServices;
