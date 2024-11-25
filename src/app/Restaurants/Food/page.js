import Image from 'next/image';

const NjobvuEats = () => {
  // Array of food items with images, names, and descriptions
  const foodItems = [
    {
      name: "Cheesy Burger",
      image: "/cheesy-burger.jpg",
      description: "Our signature Cheesy Burger, filled with gooey melted cheese and topped with fresh lettuce and tomatoes. Perfect for satisfying your burger cravings!",
    },
    {
      name: "Spicy Chicken Wings",
      image: "/spicy-wings.jpg",
      description: "Get ready for a kick! These spicy chicken wings are marinated with our special spices for an unforgettable taste experience.",
    },
    {
      name: "Loaded Fries",
      image: "/loaded-fries.jpg",
      description: "Fries topped with melted cheese, jalapenos, and a hint of smoky bacon bits. These loaded fries are sure to become your new favorite snack.",
    },
    {
      name: "Veggie Pizza",
      image: "/veggie-pizza.jpg",
      description: "Fresh and tasty! Our veggie pizza is topped with bell peppers, olives, mushrooms, and a delicious blend of cheeses.",
    },
    {
      name: "Tropical Smoothie",
      image: "/tropical-smoothie.jpg",
      description: "A refreshing blend of tropical fruits, perfect for cooling down on a hot day. Healthy and delicious!",
    },
    {
      name: "Sharwarma",
      image: "/sharwarma.jpg",
      description: "Indulge in the ultimate shawarma experience! Enjoy tender, marinated meat wrapped in a soft pita, topped with fresh veggies and flavorful sauces. It's a taste adventure in every bite!"
    }
  ];

  return (
    <div className="py-8 sm:py-16 bg-gray-100">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-600">
          Njovu Eats Fast Food Specials
        </h1>
        <p className="text-gray-700 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Check out our latest fast food offerings! Enjoy a variety of mouth-watering treats, from burgers to pizzas and refreshing drinks.
        </p>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8">
        {foodItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NjobvuEats;
