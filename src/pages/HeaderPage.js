import React, { useState, useEffect, useRef } from 'react';
import '../styles/HeaderPage.css'; // Import your CSS file
import lightbulb1 from '../assets/images/lightbulb-on.png';
import lightbulb2 from '../assets/images/bulb.svg';
import lightbulb3 from '../assets/images/lightbulb-on.png';
import lightbulb4 from '../assets/images/bulb.svg';
import Navbar from '../components/Navbar'; // Adjusted import path

const Header = () => {
    const texts = [
        'Shaping the Future with Technology & Innovation.',
        'Driving Business Excellence with Scalable Digital Solutions',
        'Extract, Connect & Make Sense of Complex Data.',
        'Simplify the Dev Journey, Maximize Efficiency',
    ];

    const images = [lightbulb1, lightbulb2, lightbulb3, lightbulb4]; // Array of images corresponding to texts

    // State to track current text index and animation state
    const [currentText, setCurrentText] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const textRef = useRef(null);

    const hideDuration = 1000; // Duration for hiding the text
    const showDuration = 4000; // Duration to show the text (before hiding again)
    useEffect(() => {
        const interval = setInterval(() => {
            // Trigger hide animation first
            setIsAnimating(false);
            // Update the text and image only after hide animation is done
            setTimeout(() => {
                setCurrentText((prevTextIndex) => (prevTextIndex + 1) % texts.length);
                // Trigger show animation
                setIsAnimating(true);
            }, hideDuration); // Wait until the hide animation is done before showing the new text

        }, showDuration + hideDuration); // Adjust interval timing to fit both hide and show durations
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <p className={`text ${isAnimating ? 'show' : 'hide'}`} ref={textRef}>
                    {texts[currentText].split(' ').slice(0, 3).join(' ')}<br />
                    {texts[currentText].split(' ').slice(3).join(' ')}
                </p>
                <img src={images[currentText]} alt="Lighting bulb" className="image" />
            </div>
            <div className="textcontent">
                <p className='textbottom'>
                    Let's get
                </p>
                <p className='textbottom1'>
                    innovative &gt;
                </p>
            </div>
        </div>
    );
};

export default Header;
