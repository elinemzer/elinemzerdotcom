import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import places from '../../countries';

export default class Mexico extends Component {
  constructor(props) {
		super(props);
		this.state = {
			currPos: {lat: 19.4007, lng: -99.1573}, // default location: roma norte,
			mapObj: {},
			selectedMarker: {}
		}
		this.markersShowing = [];
		this.places = [];
		this.componentDidMount = this.componentDidMount.bind(this);
    // this.showOverview = this.showOverview.bind(this);
		// this.showInfo = this.showInfo.bind(this);
	}

  componentDidMount() {
		const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
      this.setState({
        mapObj: map,
        view: []
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
	}

  // showOverview(){
  //   const filteredCountry = places.filter(place => {
  //     if (place.country === 'mexico'){
  //       return place;
  //     }
  //   })
  //
  //   const overview = () => {
  //     return {
  //       city: filteredCountry.city,
  //       overview: filteredCountry.overview,
  //       country: filteredCountry.country
  //     }
  //   }
  //     this.setState({
  //       view: overview,
  //       mapObj: map
  //   })
  // }

   render(){
          console.log('hi', this.state.view)

     return(
       <div id="mexico-page">
         <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div id="map-text" col-md-4>
                esto es: mexico d.f.
              </div>
              <div id="back-text" col-md-4>
                <Link to={`/travel/central-america`}>go elsewhere.</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <ul className="nav nav-tabs col-md-offset-5">
                <li role="presentation"  onClick={this.showOverview}><a href='#/travel/central-america/mexico'>overview.</a></li>
                <li role="presentation"  onClick={this.showNeighborhoods}><a href='#/travel/central-america/mexico'>neighborhoods.</a></li>
                <li role="presentation"  onClick={this.showActivities}><a href='#/travel/central-america/mexico'>activities.</a></li>
                <li role="presentation"  onClick={this.shoeRestaurants}><a href='#/travel/central-america/mexico'>restaurants.</a></li>
                <li role="presentation"  onClick={this.showBars}><a href='#/travel/central-america/mexico'>bars.</a></li>
                <li role="presentation"  onClick={this.showCafes}><a href='#/travel/central-america/mexico'>cafes.</a></li>
                <li role="presentation"  onClick={this.showPlaylist}><a href='#/travel/central-america/mexico'>playlist.</a></li>
                <li role="presentation"  onClick={this.showRead}><a href='#/travel/central-america/mexico'>read.</a></li>


              </ul>
            </div>
            <div className="row">
              <div className="col-md-5">
              <div id="mapid"></div>
            </div>


              <div className="col-md-7" id="articles-border">
              </div>
            </div>

        </div>

      </div>
        )
  }
}

// {
//   this.state.view.map(text => {
//     return (
//       <div id="list-text" key={text.overview}>
//         <p>{text.overview}</p>
//       </div>
//     )
//   })
// }
