import React from "react";
import Style from "./Myprojects.module.css";
import image1 from "../../Assets/projectimage6.jpg";
import image2 from "../../Assets/projectimage5.jpg";
import image3 from "../../Assets/projectimage3.jpg";
import image4 from "../../Assets/projectimage4.jpeg";

const Myprojects = ({ id }) => {
  return (
    <div id={id} className={Style.container}>
      <div className={Style.innercontainer}>
        <div className={Style.header}>
          <h3>MY PROJECTS</h3>
        </div>
        <div className={Style.image}>
          <div className={Style.flex1}>
            <div className={Style.flex1image1}>
              <img src={image1} alt="" />
              <div className={Style.myText1}>
                <h3>Figma Land</h3>
                <p>
                  Figmaland is a modern and responsive landing page designed
                  specifically for freelance web developers. Created as part of
                  my coursework at NIIT, it showcases my ability to blend
                  aesthetic design with practical functionality. The page
                  features a sleek user interface, intuitive navigation, and
                  compelling calls to action.
                </p>
                <h5>
                  {" "}
                  <a href="https://figma-land-orcin.vercel.app/">VISIT</a>{" "}
                  &#8594;
                </h5>
              </div>
            </div>

            <div className={Style.flex1image2}>
              <img src={image2} alt="" />
              <div className={Style.myText2}>
                <h3>Click2Work</h3>
                <p>
                  A web application designed for the ITcore Talent Development
                  Initiative, a non-profit focused on bridging Nigeria’s IT
                  skill gap. The platform highlights the Click2Work program,
                  which provides underserved youths access to quality IT
                  education by removing financial barriers. Developed to support
                  Nigeria’s developmental goals, the app serves as an
                  information hub for ITcore's efforts to foster digital
                  literacy and job creation.
                </p>
                <h5>
                  {" "}
                  <a href="https://click2work.vercel.app/">VISIT</a> &#8594;
                </h5>
              </div>
            </div>
          </div>

          <div className={Style.flex2}>
            <div className={Style.flex2image1}>
              <img src={image3} alt="" />
              <div className={Style.myText3}>
                <h3>Trafalgar</h3>
                <p>
                  A mobile and online platform for Trafalgar, offering
                  affordable, accessible healthcare solutions with a focus on
                  quality and progressive care.
                </p>
                <h5>
                  {" "}
                  <a href="https://trafalgar-eosin.vercel.app/">VISIT</a>{" "}
                  &#8594;
                </h5>
              </div>
            </div>

            <div className={Style.flex2image2}>
              <img src={image4} alt="" />
              <div className={Style.myText4}>
                <h3>D-express</h3>
                <p>
                  A user-friendly online pharmacy platform for D-Express,
                  featuring onsite delivery services. Designed to prioritize
                  your health with convenient and reliable pharmaceutical
                  solutions.
                </p>
                <h5>
                  {" "}
                  <a href="https://d-expressph.vercel.app/">VISIT</a>{" "}
                  &#8594;
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
