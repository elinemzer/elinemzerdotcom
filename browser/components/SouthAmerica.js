import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';


export default function SouthAmerica () {
  return (
    <div id="projects-page">
      <Navbar />
      <div className="container-fluid default-container">
        <h2 className="fancy-type" id="south-america-title">South America Travel Guides</h2>
        <div className="row">

          <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
              <img src="files/img/colombia.jpg" />
              <div className="caption">
                <p id="project-tile-title">Colombia</p>
                <p id="project-tile-subtitle">Where to dance to J Balvin in Medellin</p>
              </div>
            </a>
         </div>

         <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
           <a className="thumbnail" href="https://www.youtube.com/watch?v=Ti1JUpZNuR8">
             <img src="files/img/peru.jpg" />
             <div className="caption">
               <p id="project-tile-title">Peru</p>
               <p id="project-tile-subtitle">Mostly just a bunch of photos of llamas</p>
             </div>
           </a>
        </div>

        <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <a className="thumbnail" href="https://www.youtube.com/watch?v=zSFJTfNxhyg">
            <img src="files/img/bolivia.jpg" />
            <div className="caption">
              <p id="project-tile-title">Bolivia</p>
              <p id="project-tile-subtitle">Dispatch from the land of socialism and salt flats</p>
            </div>
          </a>
       </div>

       <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
         <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
           <img src="files/img/brazil.jpg" />
           <div className="caption">
             <p id="project-tile-title">Brazil</p>
             <p id="project-tile-subtitle">From the favelas to the beaches: Ideas for trips of all shapes and sizes</p>
           </div>
         </a>
      </div>

      <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
          <img src="files/img/argentina.jpg" />
          <div className="caption">
            <p id="project-tile-title">Argentina</p>
            <p id="project-tile-subtitle">Blend in to Buenos Aires's hipster scene</p>
          </div>
        </a>
     </div>

     <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
       <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
         <img src="files/img/chile.jpg" />
         <div className="caption">
           <p id="project-tile-title">Chile</p>
           <p id="project-tile-subtitle">Valparaiso y mas</p>
         </div>
       </a>
    </div>


      </div>
    </div>
  </div>
     )
   }
