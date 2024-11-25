import Image from 'next/image';
import Link from 'next/link';

const ConstructionSection = () => {
  const constructionImages = [
    '/block-machine.jpeg',
    '/blocks-solid.jpg', // Replace with your image paths
    '/blocks-hollow.jpg',
    '/paving-blocks.jpg',
    '/decorative-blocks.jpg',
  ];

  return (
    <div className="py-8 sm:py-16 bg-gray-100">
      {/* Section Title and Description */}
      <div className="text-center mb-6 sm:mb-8 px-4 sm:px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-600">
          Njovu Blocks
        </h2>
        <p className="text-gray-700 mt-2 sm:mt-4 text-sm sm:text-base">
          Njobvu Blocks is specialized in the supply of quality blocks ranging from 4 inches,
          6 inches, 8 inches and different shapes of pavers
        </p>
      </div>

      {/* Construction Materials Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-2 sm:px-4 md:px-8">
        {constructionImages.map((image, index) => (
          <div key={index} className="relative w-full h-32 sm:h-40 md:h-48">
            <Image
              src={image}
              alt={`Construction Material ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Button to Link to Construction and Machinery Page */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <Link href="/Construction">
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition">
            View More Construction Materials
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConstructionSection;
