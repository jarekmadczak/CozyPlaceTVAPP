import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () =>{
    return (
        <>
    <div>
        <nav>
        <ul>
            <li>
            <Link to="/Sikorski"><h1>Sikorski</h1></Link>
            </li>
            <li>
            <Link to="/Apartament1"><h1>Apartament1</h1></Link>
            </li>
            <li>
            <Link to="/Apartament2"><h1>Apartament2</h1></Link>
            </li>
            <li>
            <Link to="/Apartament3"><h1>Apartament3</h1></Link>
            </li>
            <li>
            <Link to="/Apartament4"><h1>Apartament4</h1></Link>
            </li>
            <li>
            <Link to="/Apartament5"><h1>Apartament5</h1></Link>
            </li>
            <li>
            <Link to="/Apartament6"><h1>Apartament6</h1></Link>
            </li>
            <li>
            <Link to="/Lazienki"><h1>Lazienkowska</h1></Link>
            </li>
            <li>
            <Link to="/Oasis"><h1>Oasis</h1></Link>
            </li>
            <li>
            <Link to="/Redwood"><h1>Redwood</h1></Link>
            </li>
            <li>
            <Link to="/Sikorski2"><h1>Sikorski2</h1></Link>
            </li>  
            <li>
            <Link to="/Anno"><h1>Anno</h1></Link>
            </li>
            <li>
            <Link to="/Apartament3"><h1>Apartament3</h1></Link>
            </li>
            <li>
            <Link to="/IE"><h1>IE</h1></Link>
            </li>
        </ul>
        </nav>
  </div>
  <Outlet />
  </>
    );
};

export default Navigation