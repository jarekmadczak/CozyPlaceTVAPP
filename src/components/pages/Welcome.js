import React from "react";
import Logo from '../pages/logo.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Welcome = () =>{
    return (
        <div id="welcome">
        <div className="welcome">
              
        <img alt="alsd"   src="https://cozyplace.pl/lib/uz84dh/Apartament-Krakow52-l4p4tj1y.jpg" className="img" />
    
    
       </div>
       
        <div  className="text" >
            
        <img  src={Logo}  className="logo"></img>
            <div className="text-wrapper">
                <div className="box t1">Welcome  On  Apartament </div>
                <div className="box t2">Witamy  na   Apartamencie </div>
       

            </div>
            
        </div>
    
    </div>
    );
};

export default Welcome