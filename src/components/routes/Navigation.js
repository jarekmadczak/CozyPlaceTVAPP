import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () =>{
    return (
        <>
    <div>
        <nav>
        <ul>
            <li>
            <a href="/Sikorski.js">sikorski</a>
            
            </li>
            <li>
                 <a href="/Navigation.js">glowna</a>
            </li>
           
        </ul>
        </nav>
  </div>
  </>
    );
};

export default Navigation