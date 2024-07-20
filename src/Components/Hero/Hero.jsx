import React from "react";
import Style from "./Hero.module.css";
import Heropic from "../../Assets/portpic1.png";

const Hero = ({ id }) => {
  return (
    <div id={id} className={Style.container}>
      <div className={Style.innercontainer}>
        
      <div className={Style.textside}>
    <h3>
        <span>Hi,</span> <span>I'm</span> <span>Julius</span>
    </h3>
    <p>
        A passionate developer dedicated to crafting dynamic and
        responsive web and mobile applications. With a keen eye for design
        and a solid foundation in modern technologies, I transform ideas
        into interactive, user-friendly digital experiences.
    </p>
    <div className={Style.anchor}>
    <a href="https://github.com/juliusace5" target="_blank" rel="noopener noreferrer">View GitHub</a>
     <a href="#contact">Contact</a>
     </div>
</div>


        <div className={Style.imageside}>
          <img src={Heropic} alt="" />
          <div className={Style.pictext}>
            Ready for new web development opportunities. Let's create amazing
            projects!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
