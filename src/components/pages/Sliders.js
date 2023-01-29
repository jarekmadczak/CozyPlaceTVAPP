import React from "react";
import Slider from "../slider/Slider";
import SliderM from "../slider/SliderM";
import SliderS from "../slider/SliderS";
import SliderNazwa from "../slider/SliderNazwa";

const Sliders = () =>{
    return (
        <div className="sliders">
             <SliderNazwa />
           <SliderS /> 
           <SliderM /> 
           <Slider /> 
        </div>
    );
};

export default Sliders