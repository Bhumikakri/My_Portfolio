import React from 'react';
import './about.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/java-script.png';
import git from '../../assets/git.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import npm from '../../assets/npm.png';
import figma from '../../assets/figma.png';

const About = () => {
  return (
    <div className='AboutPage' id='Aboutt'>
      <h1>About Me</h1>
      <div className='Abouts'>
        <div className='LeftAbouts'>
          <p>
            Hello, I'm Bhumika Kumari 👋🏻, a dynamic and imaginative developer on a mission to create impactful solutions. My coding journey started with a simple project, sparking a continuous exploration of diverse technologies and frameworks. I thrive on turning ideas into reality, constantly learning and adapting in this ever-evolving coding landscape.
          </p>
          {/* <button>More</button> */}
        </div>

        <div className='skillImage'>
          <img src={html} />
          <img src={css} />
          <img src={javascript} />
          <img src={react} />
          <img src={git} />
          <img src={node} />
          <img src={npm} />
          <img src={figma} />
        </div>
      </div>
    </div>
  )
}

export default About