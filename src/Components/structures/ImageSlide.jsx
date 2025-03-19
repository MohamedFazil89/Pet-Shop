import React, { useEffect, useRef, useState } from 'react';
import "../styles/ImageSilder.css";


export default function ImageSlide() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-abstract-pet-shop-blog-header-design-template-49cec1367005c2a91db3f7be46b54733_screen.jpg?ts=1721626296",
     "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dog-pets-banner-design-template-0dab7b985f19195d70505c13e804bd0e_screen.jpg?ts=1737156522",
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/the-best-dog-food-flyer-design-template-ff64e6d1132c681f3599e6d3e1d700fe_screen.jpg?ts=1737292821",
       "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pet-shop-design-template-3249e68fc0ddc67a27a39fbc7ba710ad_screen.jpg?ts=1740988213"];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.offsetWidth * newIndex,
          behavior: "smooth",
        });
      }
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <section className="container">
      <p className='Updates-title'>UPDATES</p>
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {images.map((src, index) => (
            <img
              key={index}
              id={`slide-${index + 1}`}
              src={src}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="slider-nav">
          {images.map((_, index) => (
            <a
              key={index}
              href={`#slide-${index + 1}`}
              className={currentIndex === index ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(index);
                if (sliderRef.current) {
                  sliderRef.current.scrollTo({
                    left: sliderRef.current.offsetWidth * index,
                    behavior: "smooth",
                  });
                }
              }}
            ></a>
          ))}
        </div>
      </div>
    </section>
  );
}
