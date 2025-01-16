import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Center from "./Component/Center";
import Carousel from "./Component/Carousel";
import ProductCarousel from "./Component/ProductCarousel";
import OfferCards from "./Component/OfferCards";
import Cart from "./Component/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]); // Cart state

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Add product to cart
  };

  return (
    <>
      {/* Pass cartItems to Header */}
      <Header cartItems={cartItems} />
      <Carousel />
      <Center />
      <OfferCards />
      <ProductCarousel />
      <Footer />

      {/* Render Cart normally */}
      <Cart cartItems={cartItems} />
    </>
  );
}

export default App;
