import React from 'react';

const OfferCards = () => {
  const offers = [
    {
      title: 'Minimum 50% off | Amazon brands & more',
      items: [
        { text: 'Minimum 50% off | Beds', image: 'https://shorturl.at/AFOcV' },
        { text: 'Starting ₹299 | Storage containers', image: 'https://shorturl.at/jH6aa' },
        { text: 'Minimum 40% off | Racks & holders', image: 'https://shorturl.at/9aGe9' },
        { text: 'Minimum 45% off | Bean bags', image: 'https://tinyurl.com/yc3b8ayf' },
      ],
    },
    {
      title: 'Up to 60% off | Daily needs',
      items: [
        { text: 'Household & personal care', image: 'https://shorturl.at/Y6UH9' },
        { text: 'Food & beverages', image: 'https://shorturl.at/jcwQh' },
        { text: 'Baby care', image: 'https://shorturl.at/vuwpL' },
        { text: 'Pet care', image: 'https://shorturl.at/P3Zb4' },
      ],
    },
    {
      title: 'Up to 60% off | Love ones',
      items: [
        { text: 'Up to 10% off | Flowers', image: 'http://surl.li/ebsjnd' },
        { text: 'Up to 50% off | Purse', image: 'http://surl.li/mhzoyv' },
        { text: 'Up to 45% off | Watch', image: 'http://surl.li/qzfyxx' },
      ],
    },
    {
      title: 'Up to 60% off | Playtime for Big Ones',
      items: [
        { text: 'Up to 60% off | Jeans', image: 'http://surl.li/czdkkc' },
        { text: 'Up to 50% off | Clothes', image: 'http://surl.li/xhicpl' },
        { text: 'Up to 45% off | Shirt', image: 'http://surl.li/lhbtgw' },
        { text: 'Up to 60% off | T-shirt', image: 'http://surl.li/dcobdf' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-100">
      {offers.map((offer, index) => (
        <div className="bg-white shadow-md rounded-lg p-4" key={index}>
          <h3 className="text-lg font-bold mb-4">{offer.title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {offer.items.map((item, idx) => (
              <div className="flex flex-col items-center text-center" key={idx}>
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-20 h-20 object-cover mb-2"
                />
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="text-blue-600 text-sm mt-4 inline-block hover:underline"
          >
            See all offers
          </a>
        </div>
      ))}
    </div>
  );
};

export default OfferCards;
