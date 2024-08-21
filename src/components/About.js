import React, { useEffect, useState } from 'react';
import myImage from "../assets/your-image.jpg";

const About = () => {
  const resumeLink = "https://drive.google.com/file/d/1zulDDgHLckTMdxMoZIGiTOEGwveqqP5l/view?usp=sharing";

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Full Stack Developer',
    'Programmer',
    'ML Developer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      setText(isDeleting 
        ? currentPhrase.substring(0, text.length - 1) 
        : currentPhrase.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [text, isDeleting, typingSpeed]);

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1 className="name-text">Hi, I am <br /> Anirudh Yellamraju</h1>
          <h2 className='typing-effect'>
            <span className="intro-text">I am a </span>
            <span className="dynamic-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p>
            I am a passionate tech enthusiast with expertise in Full Stack Web Development, Machine Learning, and programming. I thrive on embracing new challenges with a growth mindset, aiming to create innovative solutions and make meaningful contributions to the tech world.
          </p>
          <a 
            href={resumeLink} 
            className="btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Check Resume
          </a>        
        </div>
          <div className="about-image">
            <img src={myImage} alt="Anirudh Yellamraju" />
          </div>
      </div>
    </section>
  );
};

export default About;
