import React from 'react';
import { Link } from 'react-router';

export default function Navbar () {
  return (
  <ul className="nav nav-pills nav-stacked">
  <Link to="/about" id="navbarlinks">about.</Link>
  <Link to="/writing" id="navbarlinks">writing.</Link>
  <Link to="/travel" id="navbarlinks">travel.</Link>
  <Link to="/projects" id="navbarlinks">projects.</Link>
  <Link to="/reading" id="navbarlinks">reading list.</Link>
</ul>
)
}
