import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Center from "./Component/Center";
import Carousel from "./Component/Carousel";
import ProductCarousel from "./Component/ProductCarousel";

function App() {
  const [cartItems, setCartItems] = useState([]); // Cart state

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Add product to cart
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <Carousel />
      <Center />
      <ProductCarousel addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;
