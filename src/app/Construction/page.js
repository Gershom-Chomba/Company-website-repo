import React from 'react';
import Image from 'next/image';

const Construction = () => {
  // Updated articles array with multiple images
  const articles = [
    {
      id: 1,
      title: 'Constructions',
      summary: 'Njovu Constructions.',
      content:
        'This is a full content explaining the Njobvu Engineering and architecture in construction.',
      images: ['/construction.jpg', '/building.jpg'],
    },
    {
      id: 2,
      title: 'Block Making and Pavers',
      summary: 'Challenges and opportunities in block making and pavers.',
      content:
        'Exploring the challenges faced in the business of block making and pavers. Come to Njobvu Blocks for your quality blocks and pavers.',
      images: ['/blocks.jpg', '/paving-blocks.jpg'],
    },
    {
      id: 3,
      title: 'Sustainable Materials',
      summary: 'Using eco-friendly materials in construction.',
      content:
        'This article covers various sustainable materials that can be used in modern construction for a greener future.',
      images: ['/solarpanel.jpg', '/inverter.jpg', '/battery.jpg', '/home-inverter.jpg'],
    },
  ];

  // Construction machinery remains the same
  const machinery = [
    {
      id: 1,
      name: 'Block Making Machine',
      description: 'Efficient machine for producing high-quality concrete blocks.',
      imageUrl: '/block-machine.jpeg',
    },
    {
      id: 2,
      name: 'Road construction, Road maintenance and drainages',
      description: 'Versatile machine used for digging and excavation.',
      imageUrl: '/excavator.jpg',
    },
    {
      id: 3,
      name: 'Construction of bridges and crossing points',
      description: 'Machine used to mix concrete for construction.',
      imageUrl: '/concrete-mixer.jpg',
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-green-600 text-3xl font-bold text-center mb-8">Njovu Construction and block making services</h1>

      {/* Construction Articles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Construction</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.summary}</p>
                <p className="text-gray-500 mt-2 text-sm">{article.content}</p>
              </div>

              {/* Multiple Images Section */}
              <div className="grid grid-cols-2 gap-2 p-4">
                {article.images.map((image, idx) => (
                  <div key={idx} className="relative w-full h-32">
                    <Image
                      src={image}
                      alt={`${article.title} - Image ${idx + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Construction Machinery Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Njovu Construction Machinery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {machinery.map((machine) => (
            <div key={machine.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={machine.imageUrl}
                  alt={machine.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{machine.name}</h3>
                <p className="text-gray-600 mt-2">{machine.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Construction;
