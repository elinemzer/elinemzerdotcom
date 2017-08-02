import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';


export default function CentralAmerica () {
  return (
    <div id="projects-page">
      <Navbar />

      <div className="row" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <h2 className="fancy-type" id="central-america-title">Central America & Cuba Travel Guides</h2>
      </div>

        <div className="row">
          <div className="container-fluid default-container">

          <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <Link className="thumbnail" to="/travel/central-america/mexico">
              <img src="files/img/mexico.jpg" />
              <div className="caption">
                <p id="project-tile-title">Mexico</p>
                <p id="project-tile-subtitle">My top haunts in Distrito Federal</p>
              </div>
            </Link>
         </div>

         <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
           <a className="thumbnail" href="https://www.youtube.com/watch?v=Ti1JUpZNuR8">
             <img src="files/img/belize.jpg" />
             <div className="caption">
               <p id="project-tile-title">Belize</p>
               <p id="project-tile-subtitle">Some backpacker tips for Caye Caulker</p>
             </div>
           </a>
        </div>

        <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <a className="thumbnail" href="https://www.youtube.com/watch?v=zSFJTfNxhyg">
            <img src="files/img/guatemala.jpg" />
            <div className="caption">
              <p id="project-tile-title">Guatemala</p>
              <p id="project-tile-subtitle">An in-depth look at my favorite country in the region</p>
            </div>
          </a>
       </div>

       <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
         <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
           <img src="files/img/nicaragua.jpg" />
           <div className="caption">
             <p id="project-tile-title">Nicaragua</p>
             <p id="project-tile-subtitle">Where all roads lead to Rivas</p>
           </div>
         </a>
      </div>

      <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
          <img src="files/img/costarica.jpg" />
          <div className="caption">
            <p id="project-tile-title">Costa Rica</p>
            <p id="project-tile-subtitle">Staying local in the region's most well-traveled nation</p>
          </div>
        </a>
     </div>

     <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
       <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
         <img src="files/img/panama.jpg" />
         <div className="caption">
           <p id="project-tile-title">Panama</p>
           <p id="project-tile-subtitle">A walk around Casco Viejo</p>
         </div>
       </a>
    </div>

    <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
        <img src="files/img/cuba.jpg" />
        <div className="caption">
          <p id="project-tile-title">Cuba</p>
          <p id="project-tile-subtitle">Things I wish I knew before I went to Cuba</p>
        </div>
      </a>
   </div>


      </div>
    </div>
  </div>
     )
   }
