import React from 'react';
import Style from './Header.module.css';

const Header = ({ scrollToSection }) => {
    return (
        <div className={Style.container}>
            <div className={Style.innercontainer}>
                <div className={Style.logo}>
                    <h1>JULIUS</h1>
                    <h1>ANIGHORO</h1>
                </div>

                <div className={Style.nav}>
                    <ul>
                        <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
                        <li><a href="#about" onClick={() => scrollToSection('about')}>About Me</a></li>
                        <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                        <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;


