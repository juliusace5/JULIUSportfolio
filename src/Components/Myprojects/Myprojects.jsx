import React from 'react';
import Style from './Myprojects.module.css';
import image1 from '../../Assets/projectimage6.jpg';
import image2 from '../../Assets/projectimage5.jpg';
import image3 from '../../Assets/projectimage3.jpg';
import image4 from '../../Assets/projectimage4.jpeg';

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
                                <h3>Mayframe Consultancy</h3>
                                <p>
                                    Mayframe has a dedicated consultancy services division that assists businesses in various domains. The consultancy services cover a wide range of areas, including strategic planning, operations management, financial analysis, marketing strategies, and more. By leveraging industry expertise and employing a results-driven approach, the consultancy team at Mayframe Group helps businesses optimize their operations, overcome challenges, and achieve sustainable growth.
                                </p>
                                <h5>VISIT &#8594;</h5>
                            </div>
                        </div>

                        <div className={Style.flex1image2}>
                            <img src={image2} alt="" />
                            <div className={Style.myText2}>
                                <h3>Mayframe Consultancy</h3>
                                <p>
                                    Mayframe has a dedicated consultancy services division that assists businesses in various domains. The consultancy services cover a wide range of areas, including strategic planning, operations management, financial analysis, marketing strategies, and more.
                                </p>
                                <h5>VISIT &#8594;</h5>
                            </div>
                        </div>
                    </div>

                    <div className={Style.flex2}>
                        <div className={Style.flex2image1}>
                            <img src={image3} alt="" />
                            <div className={Style.myText3}>
                                <h3>Mayframe Consultancy</h3>
                                <p>
                                    Mayframe has a dedicated consultancy services division that assists businesses in various domains. The consultancy services cover a wide range of areas, including strategic planning, operations management, financial analysis, marketing strategies, and more.
                                </p>
                                <h5>VISIT &#8594;</h5>
                            </div>
                        </div>

                        <div className={Style.flex2image2}>
                            <img src={image4} alt="" />
                            <div className={Style.myText4}>
                                <h3>Mayframe Consultancy</h3>
                                <p>
                                    Mayframe has a dedicated consultancy services division that assists businesses in various domains. The consultancy services cover a wide range of areas, including strategic planning, operations management, financial analysis, marketing strategies, and more.
                                </p>
                                <h5>VISIT &#8594;</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprojects;
