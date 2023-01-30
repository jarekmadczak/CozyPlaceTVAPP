import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "./motion";
import logo from "./icona.png";


const Socials = (refs)  =>{

    return (
        <div className="sociale" >
             <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings`}>

        <motion.div variants={textVariant(.4)} className={'flexCenter'}>
          <div>
            <p className="SocialeTopText">Our Socails if you consider another visit</p>
            <p  className="SocialeBottomText">you can count on discounts by contacting us by them</p>
            
          </div>
        </motion.div>
 <div className={`flexCenter`}>        
            <p className="SocialeimgBottomText1"><img className="smallicons" src={logo}></img> cozyplace.pl </p>
            <p className="SocialeimgBottomText1"><img className="smallicons" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></img> cozyplace.krakow </p>
            <p className="SocialeimgBottomText1"> <img className="smallicons" src="https://cdn-icons-png.flaticon.com/512/59/59157.png"></img> Cozy Place Apartamenty</p>
            </div>
        <div className={`flexCenter`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="http://www.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=https%3A%2F%2Fwww.instagram.com%2Fcozyplace.krakow%2F&chs=180x180&choe=UTF-8&chld=L|0" alt="project" className="socialinsta" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="http://www.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=https%3A%2F%2Fcozyplace.pl%2Fapartamenty&chs=180x180&choe=UTF-8&chld=L|0" alt="project" className="socialstrona" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="http://www.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=https%3A%2F%2Fwww.facebook.com%2FCozy-Place-Apartamenty-103654381508479&chs=180x180&choe=UTF-8&chld=L|0" alt="project" className="socialfacebok" />
        </div>
       
            <div className={`flexCenter`}>
            <div className={'bottomsociale'}>
             </div>
            <div className={'bottomsociale'}>
            <motion.div variants={textVariant(.4)} className={'flexCenter'}>
            <div className={'red'}>
            <p className="SocialeTopText">KONTAKT</p>
            <p  className="SocialeBottomTextK">+ 48 502 590 584 - EN<img className="smalluk" src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg"></img>         + 48 515 010 510 - PL<img className="smalluk" src="https://upload.wikimedia.org/wikipedia/commons/7/7d/National_Flag_of_Poland.png"></img></p>
            {/* <p  className="SocialeBottomTextK">+ 48 515 010 510 - PL<img className="smalluk" src="https://upload.wikimedia.org/wikipedia/commons/7/7d/National_Flag_of_Poland.png"></img></p> */}
          </div>
        </motion.div>
            </div>
            <div className={'bottomsociale'}>
                    
            </div>
            </div>
            
    </motion.section>
  
        </div>
    );
};

export default Socials