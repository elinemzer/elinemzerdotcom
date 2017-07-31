import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';


export default function Writing () {
  return (
    <div id="writing-page">
      <Navbar />
      <div className="container-fluid default-container">
        <h2 className="fancy-type" id="writing-title">Articles, Thoughts & Essays</h2>
        <div className="row">

          <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <a className="thumbnail" href="http://www.rioonwatch.org/?p=34763">
              <img src="files/img/informality.jpg" />
              <div className="caption">
                <p id="article-tile-title">'Caipirinha! Caipirinha!' Stories from Pedra do Sal</p>
                <p id="article-tile-subtitle">An in-depth look at the informal economy in Rio de Janeiro.</p>
              </div>
            </a>
         </div>

         <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
           <a className="thumbnail" href="http://www.rioonwatch.org/?p=30710">
             <img src="https://static01.nyt.com/images/2015/09/26/world/26BRAZIL/26BRAZIL-master1050.jpg" />
             <div className="caption">
               <p id="article-tile-title">The Deep Inequality of Brazil's Tax Code</p>
               <p id="article-tile-subtitle">A deep dive into the systemic policies of regressive taxation fundamental to Brazil’s notoriously complex tax code.</p>
             </div>
           </a>
        </div>

        <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <a className="thumbnail" href="http://www.rioonwatch.org/?p=32871">
            <img src="http://www.rioonwatch.org/wp-content/uploads/2016/09/dilmaelula.jpg" />
            <div className="caption">
              <p id="article-tile-title">Demystifying Brazil's Web of Political Parties</p>
              <p id="article-tile-subtitle">Making sense of the political process in one of Latin America's most volitile countries.</p>
            </div>
          </a>
       </div>
       </div>

      <div className="row">
       <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
         <a className="thumbnail" href="http://www.rioonwatch.org/?p=30636">
           <img src="files/img/favela.jpg" />
           <div className="caption">
             <p id="article-tile-title">Understanding Rio's Violence</p>
             <p id="article-tile-subtitle">An assessment of the various ways in which poverty is criminalized in Brazil</p>
           </div>
         </a>
       </div>

       <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
         <a className="thumbnail" href="http://blog.undergradresearch.northwestern.edu/blog/elikate/">
           <img src="files/img/bitcoin.jpg" />
           <div className="caption">
             <p id="article-tile-title">Argentine Bitcoin Blog</p>
             <p id="article-tile-subtitle">Stories from Buenos Aires in early 2015 where I researched early adopters of Bitcoin who were using the cryptocurrency as an alternative to the volatile peso.</p>
           </div>
         </a>
       </div>

       <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
         <a className="thumbnail" href="https://nomadnemz.wordpress.com/2014/06/19/cruzando-la-frontera/">
           <img src="files/img/border.jpg" />
           <div className="caption">
             <p id="article-tile-title">Cruzando La Frontera</p>
             <p id="article-tile-subtitle">A long, strange trek across the Nicaraguan Border in 2014.</p>
           </div>
         </a>
       </div>
      </div>

      <div className="row">
        <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <a className="thumbnail" href="https://nomadnemz.wordpress.com/2013/11/04/i-ordered-an-iced-coffee-in-europe-and-this-is-what-i-got/">
            <img src="files/img/icedcoffee.jpg" />
            <div className="caption">
              <p id="article-tile-title">I ordered an iced coffee in Europe, and this is what I got.</p>
              <p id="article-tile-subtitle">Before Cold Brew went global.</p>
            </div>
          </a>
        </div>

        <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <a className="thumbnail" href="https://nomadnemz.wordpress.com/2013/08/09/longrides/">
            <img src="files/img/freeway.jpg" />
            <div className="caption">
              <p id="article-tile-title">Headed West</p>
              <p id="article-tile-subtitle">On Freeway Narratives.</p>
            </div>
          </a>
        </div>

        <div id="article-tile" className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <a className="thumbnail" href="https://medium.com/@elinemzer/reflecting-on-the-innocence-of-main-street-6c52ed9c73d7">
            <img src="files/img/iowa.jpg" />
            <div className="caption">
              <p id="article-tile-title">Reflecting on the Innocence of Main Street</p>
              <p id="article-tile-subtitle">Taking a look at my college application essay about Iowa, 8 years later.</p>
            </div>
          </a>
        </div>

       </div>

     </div>

    </div>
  )
}
