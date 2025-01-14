import React from "react";

const Centre = () => {
  // Sample data for cards
  const categories = [
    {
      title: "Keep shopping for",
      items: [
        {
          name: "Men's flip-flops",
          image:
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94d4a7e560494aa2a249971a4813df6d_9366/AQUO_SLIP_ON_M_Beige_JJ5202_01_00_standard.jpg",
          viewed: "14 viewed",
        },
        {
          name: "Calculators",
          image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQoa-4Z-yWD0RxfbalUdZuqGrlbSh5no9U05G_JpFVkanaYTfADAh3W22kg4VxLg4AAEuN0LgYdUidXmIxnA3gfNvCYgEEE-9ngDZalBWr6WvJQuH_ogHb1", 
          viewed: "1 viewed",
        },
      ],
    },
    {
      title: "Deals based on your shopping trends",
      items: [
        {
          name: "10% off",
          image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVwbSGGEwdLbNl_mHmGUMD8FF7WpKNVK4SE5v6dN86G8c3uIgx7WcKdL3n36KO4S7Fxl4H014VTqDM63rdGwLlRhVVW68fdq5kXyUcP7RfprymGsMGXtNJ6w", 
          offer: "Republic Day Sale",
        },
        {
          name: "12% off",
          image:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPt2P2LPYzY1hbOdoCsxDiMIiOzXTbz7rd1r001Xin3XYIT7H2g1zkvIWyyuUrJuFaciiwvQv3rJ1JS5ZLJ7shAZnvWA2tCnGH4hFCOm5OYtX50rjsdGkd", 
            offer: "Republic Day Sale",
        },
      ],
    },
    {
      title: "Minimum 50% off | Home, kitchen & more",
      items: [
        {
          name: "Kitchen essentials",
          image:
            "https://shorturl.at/Gwqzp", // Replace with actual image link
        },
        {
          name: "Home decor",
          image:
            "https://shorturl.at/chWj3", // Replace with actual image link
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-md p-4 border border-gray-200"
          >
            <h2 className="text-lg font-bold mb-4">{category.title}</h2>
            <div className="grid grid-cols-2 gap-4">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">{item.name}</p>
                  {item.viewed && (
                    <p className="text-xs text-gray-500">{item.viewed}</p>
                  )}
                  {item.offer && (
                    <span className="text-xs text-red-600">{item.offer}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Centre;
