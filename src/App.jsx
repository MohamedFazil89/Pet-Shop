// src/App.js
import React from "react";
// import NavBar from "./Components/structures/NavBar";
import ProductList from "./Components/ProductList";
import Home from "./Components/structures/Home"
import ImageSlider from "./Components//structures/ImageSlide"
function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Home />
      <ImageSlider />
      <ProductList />
    </div>
  );
}

export default App;
