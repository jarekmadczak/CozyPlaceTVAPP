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
            <div className="text-wrapper">
                <div className="box t1">Welcome</div>
                <div className="box t3">Witamy</div>
                <div className="box t2">On Sikorski</div>
                <div className="box t4">Na Sikorski</div>

            </div>
            
        </div>
    
    </div>
    );
};

export default Welcome