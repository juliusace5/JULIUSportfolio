import React from "react";
import Style from "./Aboutme.module.css";
import Heropic from "../../Assets/portpic2.png";
import { FaWhatsappSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa"; // Corrected import

const PhoneNumber = "+2349035278177"; // Replace with your actual phone number

const Aboutme = ({ id }) => {
  return (
    <div id={id} className={Style.container}>
      <div className={Style.innercontainer}>
        <div className={Style.imageside}>
          <img src={Heropic} alt="Portrait" />
        </div>
        <div className={Style.textside}>
          <h3>About Me</h3>
          <h4>Web Developer</h4>
          <p>I'm a dedicated Web Developer with a strong passion for creating dynamic and responsive
            web applications. I have extensive experience in HTML, CSS,
            JavaScript, and React, which I've utilized to complete various
            impactful projects, including animating text in React using CSS.
            Currently, I'm working as an intern, continuously expanding my skill
            set and gaining valuable industry experience. I am well-versed in
            both frontend and backend technologies, including Node.js and
            MongoDB, enabling me to build robust full-stack applications. With a
            professional certification in project management, I approach my work
            with a strategic mindset, ensuring efficient and effective project
            execution.
          </p>

          <div className={Style.social}>
            <div className={Style.whatsapp}>
              <a
                href="https://wa.me/2349021786716"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare className={Style.whatsappicon} />
              </a>
            </div>

            <div className={Style.link}>
              <a
                href="http://linkedin.com/in/julius-anighoro-197659288"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={Style.linkicon} />
              </a>
            </div>

            <div className={Style.call}>
              <a
                href={`tel:${PhoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt className={Style.callicon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
