import React from "react";
import Logo from '../pages/logo.png'


const Welcome = () =>{
    return (
        <div>
        <div className="welcome">
              
      
        <img src="https://cozyplace.pl/lib/uz84dh/Apartament-Krakow52-l4p4tj1y.jpg"  className="img"></img>
    
       </div>
        <div  className="text" >
        <img  src={Logo}  className="logo"></img>
            <div className="text-1">Welcome / Witamy </div>
            
        </div>
    
    </div>
    );
};

export default Welcome