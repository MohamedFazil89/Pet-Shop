// src/App.js
import React from "react";
// import NavBar from "./Components/structures/NavBar";
import ProductList from "./Components/ProductList";
import Home from "./Components/structures/Home"
import ImageSlider from "./Components//structures/ImageSlide"
import About from "./Components/structures/About"
import Footer from "./Components/structures/footer"
function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Home />
      <ImageSlider />
      <ProductList />
      <About />
      <Footer />
    </div>
  );
}

export default App;
