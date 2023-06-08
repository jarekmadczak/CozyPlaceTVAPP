import { useState, useEffect } from "react";
import { sliderData } from "../../sliders-data";
import "./Slider.scss";
import s1 from '../slider/s1.jpg'
import s2 from '../slider/s2.jpg'
import s3 from '../slider/s3.jpg'
import s4 from '../slider/s4.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
const SliderS = () => {
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
 

    <div className="slider" class="sliderM">
      {sliderData.map((slide, index) => {
        if(slide.image==="s1"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                   <img src={s1} alt="slide" effect="blur" className="image" class="sliderimg"/>
               
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="s2"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={s2} alt="slide" effect="blur" className="image" class="sliderimg"/>
               
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="s3"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={s3} alt="slide" effect="blur" className="image" class="sliderimg"/>
               
                </div>
              )}
            </div>
          );
        }
        if(slide.image==="s4"){
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                   <img src={s4} alt="slide" effect="blur" className="image" class="sliderimg"/>
               
                </div>
              )}
            </div>
          );
        }
        
      })}
    </div>
  );
};

export default SliderS;
