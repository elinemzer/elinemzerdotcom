import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';

export default function Travel () {
  return (
    <div id="travel-page">
    <Navbar />
      <img src="files/img/fuego.jpg" />
      <div id="travel-text">
      ¿adónde va?
      </div>

      <div id="travel-smalltext">
        From 2015-2017, I spent most of my time wandering and working remotely in Latin America. Here are some ideas and tips for fellow travelers!
      </div>

      <div className="region">
      <ul id="travel-tabs" className="nav nav-tabs">
        <li role="presentation"><a href='#/travel/central-america'>central america.</a></li>
        <li role="presentation"><a href='#/travel/south-america'>south america.</a></li>
      </ul>
    </div>

      <div id="travel-caption">
      <h5>el hato, sacatepéquez department, guatemala</h5>
      </div>
    </div>
  )
}
