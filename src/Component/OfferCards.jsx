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
      title: 'Up to 75% off | Electronics & accessories',
      items: [
        { text: '', image: 'https://tinyurl.com/5n8tz9up' },
      ],
    },
    {
      title: 'Up to 60% off | Daily needs',
      items: [
        { text: 'Household & personal care', image: 'household_image_url' },
        { text: 'Food & beverages', image: 'food_image_url' },
        { text: 'Baby care', image: 'babycare_image_url' },
        { text: 'Pet care', image: 'petcare_image_url' },
      ],
    },
    {
      title: 'Up to 60% off | Playtime for little ones',
      items: [
        { text: 'Up to 60% off | Playmats', image: 'playmats_image_url' },
        { text: 'Up to 50% off | Push walkers', image: 'pushwalkers_image_url' },
        { text: 'Up to 45% off | Rockers', image: 'rockers_image_url' },
        { text: 'Up to 60% off | Baby toys', image: 'babytoys_image_url' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-gray-100">
      {offers.map((offer, index) => (
        <div className="bg-white shadow-md rounded-lg p-4" key={index}>
          <h3 className="text-lg font-bold mb-4">{offer.title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {offer.items.map((item, idx) => (
              <div className="flex flex-col items-center text-center" key={idx}>
                <img src={item.image} alt={item.text} className="w-20 h-20 object-cover mb-2" />
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">See all offers</a>
        </div>
      ))}
    </div>
  );
};

export default OfferCards;
