import React from "react";
import Slider from "../slider/Slider";
import SliderM from "../slider/SliderM";
import SliderS from "../slider/SliderS";

const Sliders = () =>{
    return (
        <div class="sliders">
            
           <SliderS /> 
           <SliderM /> 
           <Slider /> 
        </div>
    );
};

export default Sliders