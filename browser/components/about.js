import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home () {
  return (
  <div id="about-page">
    <Navbar />
    <div className="container-fluid">
      <div id="about-title">
        Eli Nemzer
      </div>
      <div className="row">

      <img className="col-md-5" src="files/img/IMG_8109.jpg" />

      <div id="about-subtitle" className="col-md-7">
        software developer, writer, & researcher.
      </div>

      <div className="row">
      <div id="about-text" className="col-md-7">
      <p>I'm fascinated by the intersection of globalization, demography and technology with a particular focus on the 'informal' economy, sustainable urban development, currency markets, and the future of work.</p>
      <p>I've done research on entrepreneurship in Rio de Janeiro's favelas, early-adopters of Bitcoin in Argentina and corruption in Guatemalan elections. I graduated from Northwestern University in 2015 and completed Fullstack Academy's Software Engineering Immersive in 2017. </p>

      <p>I'm happiest when I'm working hard on something challenging and meaningful, and drinking an iced espresso.</p>

      <p><a href="files/img/resume.pdf"> resume </a> | <a href="https://www.linkedin.com/in/elinemzer"> linkedin </a>| <a href="https://github.com/elinemzer">github</a> | <a href="https://www.facebook.com/Nemzer7"> facebook</a> | <a href="https://www.instagram.com/nemz7/?hl=en"> instagram </a> </p>

    </div>
    </div>

    </div>
  </div>
</div>
)
}
