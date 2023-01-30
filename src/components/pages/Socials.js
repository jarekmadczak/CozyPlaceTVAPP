import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "./motion";

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
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" alt="project" className="socialinsta" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="https://cozyplace.pl/files/dynamicContent/sites/uz84dh/images/pl/layout_1/l9sl5dik/element_9/logotyp_poziom_biale_tlo.jpg" alt="project" className="socialinsta" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="https://cozyplace.pl/lib/uz84dh/Apartament-Krakow52-l4p4tj1y.jpg" alt="project" className="socialinsta" />
        </div>
        <div className={`flexCenter`}>
            <p className="SocialeimgBottomText">Instagram</p>
            <p className="SocialeimgBottomText1">Strona</p>
            <p className="SocialeimgBottomText2">NW</p>
            </div>
    </motion.section>
       
            

        </div>
    );
};

export default Socials