import React from 'react';
import { Link } from 'react-router';
import Navbar from './navbar';


export default function Projects () {
  return (
    <div id="projects-page">
      <Navbar />
      <div className="container-fluid default-container">
        <h2 className="fancy-type" id="projects-title">Apps & Projects</h2>
        <div className="row">

          <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
              <img src="files/img/pisces.png" />
              <div className="caption">
                <p id="project-tile-title">Pisces Aquascaping</p>
                <p id="project-tile-subtitle">A full-scale e-commerce platform for selling Tropical Fish.</p>
              </div>
            </a>
         </div>

         <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
           <a className="thumbnail" href="https://www.youtube.com/watch?v=Ti1JUpZNuR8">
             <img src="files/img/urbanization.png" />
             <div className="caption">
               <p id="project-tile-title">Mapping Urbanization</p>
               <p id="project-tile-subtitle">A data visualization mapping the world's megacities.</p>
             </div>
           </a>
        </div>

        <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <a className="thumbnail" href="https://www.youtube.com/watch?v=zSFJTfNxhyg">
            <img src="files/img/heartrate.png" />
            <div className="caption">
              <p id="project-tile-title">HeartRate</p>
              <p id="project-tile-subtitle">A gamified dating application featuring a multi-level compatibility quiz.</p>
            </div>
          </a>
       </div>
      </div>
    </div>
  </div>
     )
   }
