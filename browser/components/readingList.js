import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './navbar';
import longform from '../../data';

export default function twentyFourteenList (){
  const life = longform.filter(article => {
    if (article.genre === 'Life') {
      console.log(article.title)
    }
  })


  return (
    <div id="articles-border">
      <h3>Title:</h3>
    </div>
  )
}
