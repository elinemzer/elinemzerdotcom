import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';


export default function Europe () {
  return (
    <div id="projects-page">
      <Navbar />
      <div className="container-fluid default-container">
        <h2 className="fancy-type" id="europe-title">European Travel Guides</h2>
        <div className="row">

          <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
              <img src="files/img/portugal.jpg" />
              <div className="caption">
                <p id="project-tile-title">Portugal</p>
                <p id="project-tile-subtitle">Lisbon & the north coast</p>
              </div>
            </a>
         </div>

         <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
           <a className="thumbnail" href="https://www.youtube.com/watch?v=Ti1JUpZNuR8">
             <img src="files/img/spain.jpg" />
             <div className="caption">
               <p id="project-tile-title">Spain</p>
               <p id="project-tile-subtitle">Spain, Catalunya y el Pais Vasco</p>
             </div>
           </a>
        </div>

        <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <a className="thumbnail" href="https://www.youtube.com/watch?v=zSFJTfNxhyg">
            <img src="files/img/france.jpg" />
            <div className="caption">
              <p id="project-tile-title">France</p>
              <p id="project-tile-subtitle">Recommendations for Paris & Bordeaux</p>
            </div>
          </a>
       </div>

       <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
         <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
           <img src="files/img/brazil.jpg" />
           <div className="caption">
             <p id="project-tile-title">Holland</p>
             <p id="project-tile-subtitle">Cool spots in Amsterdam</p>
           </div>
         </a>
      </div>

      <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
          <img src="files/img/ireland.jpg" />
          <div className="caption">
            <p id="project-tile-title">Ireland</p>
            <p id="project-tile-subtitle">Dublin & the countryside</p>
          </div>
        </a>
     </div>

     <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
       <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
         <img src="files/img/denmark.jpg" />
         <div className="caption">
           <p id="project-tile-title">Denmark</p>
           <p id="project-tile-subtitle">Copenhagen city guide</p>
         </div>
       </a>
    </div>

    <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
        <img src="files/img/sweden.jpg" />
        <div className="caption">
          <p id="project-tile-title">Sweden</p>
          <p id="project-tile-subtitle">Stockholm city guide</p>
        </div>
      </a>
   </div>

   <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
     <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
       <img src="files/img/germany.jpg" />
       <div className="caption">
         <p id="project-tile-title">Germany</p>
         <p id="project-tile-subtitle">Favorite spots in Berlin & Munich</p>
       </div>
     </a>
  </div>

  <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
    <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
      <img src="files/img/croatia.jpg" />
      <div className="caption">
        <p id="project-tile-title">The Balkans</p>
        <p id="project-tile-subtitle">Ideas for a trip to the Balkans</p>
      </div>
    </a>
 </div>

 <div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
   <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
     <img src="files/img/iceland.jpg" />
     <div className="caption">
       <p id="project-tile-title">Iceland</p>
       <p id="project-tile-subtitle">The best spots to stop on the ring road</p>
     </div>
   </a>
</div>

<div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
  <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
    <img src="files/img/turkey.jpg" />
    <div className="caption">
      <p id="project-tile-title">Turkey</p>
      <p id="project-tile-subtitle">Istanbul and beyond</p>
    </div>
  </a>
</div>

<div id="project-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
  <a className="thumbnail" href="https://piscesaquascaping.herokuapp.com/">
    <img src="files/img/italy.jpg" />
    <div className="caption">
      <p id="project-tile-title">Italy</p>
      <p id="project-tile-subtitle">Favorite Roman hideouts</p>
    </div>
  </a>
</div>


      </div>
    </div>
  </div>
     )
   }
