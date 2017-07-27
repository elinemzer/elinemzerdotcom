import React from 'react';
import { Link } from 'react-router';
import Navbar from './navbar';
import Footer from './footer';

export default function Home () {
  return (
  <div id="about-page">
    <Navbar />
    <div className="container-fluid default-container">
      <h2 className="fancy-type" id="about-title">Eli Nemzer</h2>
      <h3 id="about-subtitle">writer, researcher & software developer.</h3>
      <div id="about-text">
      <h4><p>I'm fascinated by the intersection of globalization, demography and technology with a particular focus on the 'informal' economy, sustainable urban development, currency markets, and the future of work.</p>
      <p>I've done research on entrepreneurship in Rio de Janeiro's favelas, early-adopters of Bitcoin in Argentina and corruption in Guatemalan elections. I graduated from Northwestern University in 2015 and completed Fullstack Academy's Software Engineering Immersive in 2017. </p>

      <p>I'm happiest when I'm working hard on something challenging and meaningful, and drinking an iced espresso.</p>

      </h4>
    </div>

    <div id="resume">
    <p><a href="files/img/resume.pdf"> resume </a> | <a href="https://www.linkedin.com/in/elinemzer"> linkedin </a> | <a href="https://www.facebook.com/Nemzer7"> facebook</a> | <a href="https://www.instagram.com/nemz7/?hl=en"> instagram </a> | <a href="https://github.com/elinemzer">github</a></p>
    </div>

    <img src="files/img/IMG_8109.jpg" />
    </div>
  </div>
)
}
