import React, { useState, useEffect } from 'react';
import Style from './Header.module.css';

const Header = ({ scrollToSection }) => {
    const [isTransparent, setIsTransparent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { 
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${Style.container} ${isTransparent ? Style.transparent : ''}`}>
            <div className={Style.innercontainer}>
                <div className={Style.logo}>
                    <h1>JULIUS</h1>
                    <h1>ANIGHORO</h1>
                </div>

                <div className={Style.nav}>
                    <ul>
                        <li className={Style.remove}><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
                        <li className={Style.remove}><a href="#about" onClick={() => scrollToSection('about')}>About Me</a></li>
                        <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                        <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;



