import React, { useRef } from "react";

const ProductCarousel = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      image: "https://shorturl.at/OPEEL",
      title: "POCO M6 5G (Galactic Black, 4GB RAM, 128GB Storage)",
      description: "MediaTek Dimensity 6100+ 5G",
      rating: 5,
      price: "₹8,998.00",
      originalPrice: "₹12,999.00",
      discount: "-31%",
      delivery: "Tomorrow, January 16",
    },
    {
      id: 2,
      image: "https://shorturl.at/PmDo5",
      title: "ProElite Smart Case for iPad 10th Generation",
      description: "10.9 inch [Auto Wake/Sleep]",
      rating: 4.5,
      price: "₹489.00",
      originalPrice: "₹1,999.00",
      discount: "-76%",
      delivery: "Sunday, January 19",
    },
    {
      id: 3,
      image: "https://shorturl.at/SrvNS",
      title: "2025 Study Material for CFA Level 1",
      description: "Set of 6 Books + 25th Hour QB",
      rating: 4,
      price: "₹2,989.00",
      originalPrice: "₹5,000.00",
      discount: "-40%",
      delivery: "FREE Delivery",
    },
    {
      id: 4,
      image: "https://shorturl.at/yNH3n",
      title: "Electronic Spices DC Buzzer",
      description: "Small Enclosed Piezo Electronic Buzzer Alarm 95DB",
      rating: 3.5,
      price: "₹94.00",
      originalPrice: "₹149.00",
      discount: "-37%",
      delivery: "Tomorrow, January 16",
    },
    {
      id: 5,
      image: "https://shorturl.at/YZqXU",
      title: "Flame Sensor",
      description: "Flame-sensor",
      rating: 3.5,
      price: "₹324.00",
      originalPrice: "₹1,409.00",
      discount: "-27%",
      delivery: "Tomorrow, January 26",
    },
    {
      id: 6,
      image: "https://tinyurl.com/yuk88nrv",
      title: "Alphanumeric Display",
      description: "Silicon TechnoLabs LCD 16x2 Alphanumeric Display (JHD162A)",
      rating: 4,
      price: "₹227.00",
      originalPrice: "₹499.00",
      discount: "-55%",
      delivery: "Tomorrow, January 21",
    },
    {
      id: 7,
      image: "https://tinyurl.com/5n8782fz",
      title: "iPhone 15",
      description: "iPhone",
      rating: 3.5,
      price: "₹43,499.00",
      originalPrice: "₹59,900.00",
      discount: "-27%",
      delivery: "Tomorrow, January 20",
    },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Pass product to App's cart state
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Inspired by your browsing history</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full shadow-lg z-10"
        >
          ◀
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll space-x-4 scrollbar-hide"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] bg-white p-4 shadow-lg rounded-lg border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-500 text-xs">{product.description}</p>
              <div className="mt-2 text-yellow-500 text-sm">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-green-700 font-bold">{product.price}</span>
                <span className="line-through text-gray-500 text-xs">
                  {product.originalPrice}
                </span>
              </div>
              <p className="text-xs text-gray-500">{product.discount}</p>
              <p className="text-xs text-blue-600">{product.delivery}</p>

              {/* Add to Cart Button */}
              <button
                className="mt-4 bg-black text-white text-sm py-1 px-3 rounded-lg hover:bg-gray-800 transition"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full shadow-lg z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
