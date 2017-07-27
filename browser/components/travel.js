import React from 'react';
import { Link } from 'react-router';
import Navbar from './navbar';

export default function Travel () {
  return (
    <div id="travel-page">
    <Navbar />
      <img src="files/img/salvador.jpg" />

      <div id="travel-text">
      ¿adónde va?
      </div>


      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>


      <div id="travel-caption">
      <h5>morro de pelourinho, salvador, bahia</h5>
      </div>
    </div>
  )
}
