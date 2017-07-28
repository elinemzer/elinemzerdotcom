import React from 'react';
import { Link } from 'react-router';

export default function Home () {
  return (
    <div id="home-page">
      <img src="files/img/IMG_8779.jpg" />
      <div className="shader col-6-xs"></div>
      <div className="home-container default-container">

      <div id="rectangle" className="panel panel-default">
        <div id="rectanglefont" className="panel-body">
           ELI NEMZER
        </div>
      </div>

      <div id="aboutlocator">
        <Link to="/about" id="homelinks">about.</Link>
      </div>

      <div id="writinglocator">
        <Link to="/writing" id="homelinks">writing.</Link>
      </div>

      <div id="travellocator">
        <Link to="/travel" id="homelinks">travel.</Link>
      </div>

      <div id="projectslocator">
        <Link to="/projects" id="homelinks">projects.</Link>
      </div>

      <div id="readinglocator">
        <Link to="/reading" id="homelinks">reading list.</Link>
      </div>

      <div id="home-resume">
      <p><a href="files/img/resume.pdf"> resume </a> | <a href="https://www.linkedin.com/in/elinemzer"> linkedin </a> | <a href="https://github.com/elinemzer">github</a> | <a href="https://www.facebook.com/Nemzer7"> facebook</a> | <a href="https://www.instagram.com/nemz7/?hl=en"> instagram </a></p>
      </div>

      </div>
    </div>
  )
}
