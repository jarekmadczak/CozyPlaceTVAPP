import { useState, useEffect } from "react";
import { sliderData } from "../../sliderm-data";
import "./Slider.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SliderM = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);

  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
 

    <div className="slider" class="sliderM">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <LazyLoadImage src={slide.image} alt="slide" effect="blur" className="image" class="sliderimg"/>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SliderM;
