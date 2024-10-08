import React from "react";
import Style from "./Hero.module.css";
import Heropic from "../../Assets/portpic1.png";
import LazyLoad from 'react-lazyload';

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
            <a href="https://drive.google.com/uc?export=download&id=1XH2r2oiBcWO2PKnkLf82K8X4bwzpLGuh">Download CV</a>
          </div>
        </div>

        <div className={Style.imageside}>
          <LazyLoad height={500} offset={100}>
            <img src={Heropic} alt="Julius" />
          </LazyLoad>
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

