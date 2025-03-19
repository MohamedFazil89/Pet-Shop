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
     <section id="Home">
      <Home />
      </section>
      <section id="Updates">
      <ImageSlider />
      </section>
      <section id="Cart">
      <p className='Updates-title'>Explore</p>

      <ProductList />
      </section>
      <section id="About">
      <About />
      </section>
      <section id="Footer">
      <Footer />
      </section>
    </div>
  );
}

export default App;
