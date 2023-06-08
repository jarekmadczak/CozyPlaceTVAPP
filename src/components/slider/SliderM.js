import { useState, useEffect } from "react";
import { sliderData } from "../../sliderm-data";
import "./Slider.scss";
import m1 from '../slider/m1.jpg'
import m2 from '../slider/m2.jpg'
import m3 from '../slider/m3.jpg'
import m4 from '../slider/m4.jpg'
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
        if(slide.image==="m1"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide &&  (
                <div>
                  <img src={m1} alt="slide" effect="blur" className="image" class="sliderimg"/>
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="m2"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide &&  (
                <div>
                  <img src={m2} alt="slide" effect="blur" className="image" class="sliderimg"/>
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="m3"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide &&  (
                <div>
                  <img src={m3} alt="slide" effect="blur" className="image" class="sliderimg"/>
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="m4"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide &&  (
                <div>
                  <img src={m4} alt="slide" effect="blur" className="image" class="sliderimg"/>
                </div>
              )}
            </div>
          );
        }
        
       
      })}
    </div>
  );
};

export default SliderM;
