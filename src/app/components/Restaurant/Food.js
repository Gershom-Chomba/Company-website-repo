// src/app/components/Restaurant/FastFoodSection.js

import Image from 'next/image';
import Link from 'next/link';

const Food = () => {
  const fastFoodImages = [
    '/burger-coca-cola.jpg',
    '/burger-fries.jpg',
    '/sharwarma.jpg',
    '/burger.jpg',
    '/food-beverage.jpg'
  ];

  return (
    <div className="py-8 sm:py-16 bg-gray-100">
      {/* Restaurant Name and Advertisement Text */}
      <div className="text-center mb-6 sm:mb-8 px-4 sm:px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-600">
          Njovu Eats
        </h2>
        <p className="text-gray-700 mt-2 sm:mt-4 text-sm sm:text-base">
            Njovu Eats! 
            Satisfy your cravings with our delicious selection of fast food, 
            crafted with fresh ingredients and a lot of love. 
            From mouth-watering burgers to crispy fries and refreshing beverages, 
            we have something for everyone. 
            Do not miss out on our exclusive deals!
        </p>
      </div>

      {/* Fast Food Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-2 sm:px-4 md:px-8">
        {fastFoodImages.map((image, index) => (
          <div key={index} className="relative w-full h-32 sm:h-40 md:h-48">
            <Image
              src={image}
              alt={`Fast Food ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Button to Link to Fast Food Page */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <Link href="/Restaurants/Food">
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition">
            View More Fast Food Deals
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Food;
