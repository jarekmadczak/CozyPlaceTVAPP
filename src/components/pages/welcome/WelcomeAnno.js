import React from "react";
import Logo from '../logo.png'
import img from '../welcome/anno_domini.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";

const WelcomeAnno = () =>{
    return (
        <div id="welcome">
        <div className="welcome">
              
        <img alt="alsd" src={img} className="img" />
    
    
       </div>
       
        <div  className="text" >
            
        <img  src={Logo}  className="logo"></img>
            <div className="text-wrapper">
            <div className="box t1">Welcome  </div>
                <div className="box t2">Witamy  </div>
       

            </div>
            
        </div>
    
    </div>
    );
};

export default WelcomeAnno