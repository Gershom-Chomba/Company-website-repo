import React from 'react';
import Image from 'next/image';

const EngineeringAndTechnology = () => {
  // Articles for Engineering
  const engineeringArticles = [
    {
      id: 1,
      title: 'The Future of Electrical Engineering',
      summary: 'Innovations in renewable energy and power systems.',
      content: 'Exploring how advancements in electrical engineering are revolutionizing renewable energy systems and creating sustainable power grids.',
      imageUrl: '/inverter.jpg', // Replace with your actual image path
    },
    {
      id: 2,
      title: 'Electrical Safety in Construction',
      summary: 'Best practices for electrical safety on job sites.',
      content: 'Guidelines and tips for ensuring electrical safety during construction projects, focusing on preventing accidents and hazards.',
      imageUrl: '/electrical-safety.jpg',
    },
    {
      id: 3,
      title: 'Mechanical Engineering Innovations',
      summary: 'Breakthroughs in mechanical design and automation.',
      content: 'A look at the latest innovations in mechanical engineering, including advancements in robotics and automation.',
      imageUrl: '/mechanical-engineering.jpg',
    },
  ];

  // Articles for Technology
  const technologyArticles = [
    {
      id: 1,
      title: 'Cyber Security in the Digital Age',
      summary: 'Protecting personal and organizational data from cyber threats.',
      content: 'An overview of cyber security strategies and tools to combat increasing cyber threats in the digital world.',
      imageUrl: '/cyber-security.jpg', // Replace with your actual image path
    },
    {
      id: 2,
      title: 'The Role of AI in Cyber Security',
      summary: 'How AI is transforming cyber defense mechanisms.',
      content: 'This article explores how artificial intelligence is being used to predict, detect, and respond to cyber threats in real-time.',
      imageUrl: '/ai-cyber-security.jpg',
    },
    {
      id: 3,
      title: 'The Internet of Things (IoT)',
      summary: 'The interconnected world of smart devices.',
      content: 'Discover how IoT is changing industries, from smart homes to connected healthcare.',
      imageUrl: '/iot.jpg',
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-8 lg:px-16">
      <h1 className="text-green-600 text-3xl font-bold text-center mb-8">Engineering and Technology</h1>

      {/* Engineering Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">Engineering Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {engineeringArticles.map((article) => (
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

      {/* Technology Section */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">Technology Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {technologyArticles.map((article) => (
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

export default EngineeringAndTechnology;
