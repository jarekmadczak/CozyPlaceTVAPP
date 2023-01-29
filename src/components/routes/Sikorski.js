import React from "react";
import Logo from '../pages/logo.png'
import { Suspense } from 'react';
const Sliders = React.lazy(() => import('../pages/Sliders'));
const Header =React.lazy(() => import('../pages/Header')); 
const Welcome =React.lazy(() => import('../pages/Welcome')); 

const Sikorski = () =>{
 
return (
      <div>
        <Suspense fallback={ <Loading /> }>
            <Welcome />
            <Sliders />
            <Header />
        </Suspense>
    
  </div>
    );
};
function Loading() {
  return <h2>🌀 Loading... <img  src={Logo}  className="logo"></img></h2> ;
}
export default Sikorski