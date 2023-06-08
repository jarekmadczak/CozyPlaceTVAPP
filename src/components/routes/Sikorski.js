import React  from "react";
import Logo from '../pages/logo.png'
import {Link} from 'react-scroll'
import { Suspense } from 'react';
const Sliders = React.lazy(() => import('../pages/Sliders'));
const Header =React.lazy(() => import('../pages/Header')); 
const Welcome =React.lazy(() => import('../pages/welcome/Welcome')); 
const Socials =React.lazy(() => import('../pages/Socials')); 

const Sikorski = () =>{
  var body = document.body,
  html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );
 function autoscroll(time,name) {
  console.log(name)
 setTimeout( function() {  document.getElementById(name).click();}, time*1000);
 console.log("scroled");
}
return (
      <div onLoad={autoscroll(10,"header")}>
        <Link id="welcom" to='welcome' spy={true} smooth={true} duration={1000} ></Link>
        <Link id="header" to='regulamin' spy={true} smooth={true} offset={-1*(height/3.6)}  duration={1000}   ></Link>
        <Link id="social" to='socialeid' spy={true} smooth={true}  ></Link>  
        {/* to do id w klasie np header to regulamin i id ktore wywołuejmy w funcki  height wyskosc strony i trezba obrocic */}
         <Suspense fallback={ <Loading /> }>
            <Welcome onLoad={autoscroll(2,"welcom")} />
            <Sliders  onLoad={autoscroll(20,"social")} />
            <Header  />
            <Socials/>
        </Suspense> 
    
  </div>
    );
};

function Loading() {
  return <div className="loading"><img  className="loadinglogo" src={Logo}></img></div> ;
}


export default Sikorski