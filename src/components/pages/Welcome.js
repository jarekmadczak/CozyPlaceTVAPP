import React from "react";
import Logo from '../pages/logo.png'


const Welcome = () =>{
    return (
        <div>
        <div class="welcome">
              
      
        <img src="https://cozyplace.pl/lib/uz84dh/Apartament-Krakow52-l4p4tj1y.jpg"  class="img"></img>
    
       </div>
        <div  class="text" >
        <img  src={Logo}  class="logo"></img>
            <div class="text-1">Welcome / Witamy </div>
            Miłego Pobytu na sikorski
        </div>
    
    </div>
    );
};

export default Welcome