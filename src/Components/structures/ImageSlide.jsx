import React, { useEffect, useRef, useState } from 'react';
import "../styles/ImageSilder.css";
import Dog from "../../assets/dog-4494554.jpg";
import Cat from "../../assets/cat-8612685.jpg";
import Woman from "../../assets/happyWoman.png";
import Cats from "../../assets/cat-8575641.jpg";

export default function ImageSlide() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Dog, Cat, Woman, Cats];

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
      <p>updates</p>
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
