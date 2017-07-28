import React from 'react';
import { Link } from 'react-router';
import Navbar from './navbar';

export default function Travel () {
  return (
    <div id="travel-page">
    <Navbar />
      <img src="files/img/fuego.jpg" />
      <div id="travel-text">
      ¿adónde va?
      </div>

      <div className="region">
      <ul className="nav nav-tabs">
        <li role="presentation"><a href='#/reading'>usa.</a></li>
        <li role="presentation"><a href='#/reading'>central america.</a></li>
        <li role="presentation"><a href='#/reading'>south america.</a></li>
        <li role="presentation"><a href='#/reading'>europe.</a></li>

      </ul>
    </div>

      <div id="travel-caption">
      <h5>el hato, sacatepéquez department, guatemala</h5>
      </div>
    </div>
  )
}
