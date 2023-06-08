import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Slider.scss";
import a1 from '../slider/a1.jpg'
import a2 from '../slider/a2.jpg'
import a3 from '../slider/a3.jpg'
import a4 from '../slider/a4.jpg'
import { sliderData } from "../../slider-data";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
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
 

    <div  className="slider">
      {sliderData.map((slide, index) => {
        if(slide.image==="a1"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                   <img src={a1} alt="slide" effect="blur" className="image" class="sliderimg"/>
               
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="a2"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                   <img src={a2} alt="slide" effect="blur" className="image" class="sliderimg"/>
               
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="a3"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                   <img src={a3} alt="slide" effect="blur" className="image" class="sliderimg"/>
               
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="a4"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={a4} alt="slide" effect="blur" className="image" class="sliderimg"/>
               
                </div>
              )}
            </div>
          );
        }
        
      })}
    </div>
  );
};

export default Slider;
