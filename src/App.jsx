import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Center from "./Component/Center";
import Carousel from "./Component/Carousel";
import ProductCarousel from "./Component/ProductCarousel";
import OfferCards from "./Component/OfferCards";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";

function App() {
  const [cartItems, setCartItems] = useState([]); // Cart state

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Add product to cart
  };

  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<WrapUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const WrapUp = () => {
  return (
    <>
      <Carousel />
      <Center />
      <OfferCards />
      <ProductCarousel />
    </>
  );
};

export default App;
