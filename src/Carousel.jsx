import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex >= items.length - 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="gallery">
        <span>
            <p className="title">Gallery</p>
            <a className="see_all" href="#">see all</a>
        </span>
        <div className="carousel">
            <div className="carousel-wrapper">
                <button onClick={handlePrevClick} className="left-arrow">
                    &#10094;
                </button>
                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                    {items.map((item, index) => (
                        <div className="carousel-item" key={index}>
                        <img src={item.image} alt={item.title} className="carousel-image" />
                        <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
                <button onClick={handleNextClick} className="right-arrow">
                    &#10095;
                </button>
            </div>
            
        </div>
    </section>
    
  );
};

export default Carousel;
