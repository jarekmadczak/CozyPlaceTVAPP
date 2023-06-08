import React  from "react";
import Welcome from "../pages/welcome/Welcome";
import Header from "../pages/Header";
import Sliders from "../pages/Sliders";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../pages/motion";
import logo from "../pages/icona.png";
const IE = () =>{
return (
    <div>
            <Welcome />
            <Sliders /> 
            <Header/>
            <div className={'red'}>
            <p className="SocialeTopText">KONTAKT</p>
            <p  className="SocialeBottomTextK">+48 502 590 584 - EN<img className="smalluk" src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg"></img>  +48 515 010 510 - PL<img className="smalluk" src="https://upload.wikimedia.org/wikipedia/commons/7/7d/National_Flag_of_Poland.png"></img></p>
            </div>
           
    </div>
    );
};



export default IE