import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () =>{
    return (
        <>
    <div>
        <nav>
        <ul>
            <li>
            <Link to="/sikorski"><h1>Sikorski</h1></Link>
            </li>
            
        </ul>
        </nav>
  </div>
  <Outlet />
  </>
    );
};

export default Navigation