import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import places from '../../countries';


export default class Panama extends Component {
  constructor(props) {
		super(props);
		this.state = {
			currPos: {lat: 8.953133, lng: -79.535756},
			mapObj: {},
			selectedMarker: {},
      view: []
		}
		this.markersShowing = [];
		this.places = [];
		this.componentDidMount = this.componentDidMount.bind(this);
    this.showOverview = this.showOverview.bind(this);
    this.showActivities = this.showActivities.bind(this);
    this.showRestaurants = this.showRestaurants.bind(this);
    this.showBars = this.showBars.bind(this);
    this.showNeighborhoods = this.showNeighborhoods.bind(this);
    this.showCafes = this.showCafes.bind(this);
    this.showPlaylist = this.showPlaylist.bind(this);
    this.showRead = this.showRead.bind(this);

	}

  componentDidMount() {
		const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 14
		});
    const panama = places[1];
      this.setState({
        mapObj: map,
        view: panama.overview
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
	}

  showOverview(){
    const panama = places[1];
      this.setState({
        view: panama.overview
    })
  }

  showNeighborhoods(){
    const panama = places[1];
      this.setState({
        view: panama.neighborhoods
    })
  }

  showActivities(){
    const panama = places[1];
      this.setState({
        view: panama.activities
    })
  }

  showRestaurants(){
    const panama = places[1];
      this.setState({
        view: panama.restaurants
    })
  }

  showBars(){
    const panama = places[1];
      this.setState({
        view: panama.bars
    })
  }

  showCafes(){
    const panama = places[1];
      this.setState({
        view: panama.cafes
    })
  }

  showPlaylist(){
    const panama = places[1];
      this.setState({
        view: panama.playlist
    })
  }

  showRead(){
    const panama = places[1];
      this.setState({
        view: panama.read
    })
  }

   render(){

     return(
       <div id="panama-page">
         <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div id="map-text" col-md-4>
                esto es: casco viejo
              </div>
              <div id="back-text" col-md-4>
                <Link to={`/travel/central-america`}>go elsewhere.</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <ul className="nav nav-tabs col-md-offset-5">
                <li role="presentation"  onClick={this.showOverview}><a href='#/travel/central-america/panama'>overview.</a></li>
                <li role="presentation"  onClick={this.showNeighborhoods}><a href='#/travel/central-america/panama'>neighborhoods.</a></li>
                <li role="presentation"  onClick={this.showActivities}><a href='#/travel/central-america/panama'>activities.</a></li>
                <li role="presentation"  onClick={this.showRestaurants}><a href='#/travel/central-america/panama'>restaurants.</a></li>
                <li role="presentation"  onClick={this.showBars}><a href='#/travel/central-america/panama'>bars.</a></li>
                <li role="presentation"  onClick={this.showCafes}><a href='#/travel/central-america/panama'>cafes.</a></li>
                <li role="presentation"  onClick={this.showPlaylist}><a href='#/travel/central-america/panama'>playlist.</a></li>
                <li role="presentation"  onClick={this.showRead}><a href='#/travel/central-america/panama'>read.</a></li>


              </ul>
            </div>
            <div className="row">
              <div className="col-md-5">
              <div id="mapid"></div>
            </div>


              <div className="col-md-7" id="articles-border">
                {
                  this.state.view
                }
              </div>
            </div>


            <div className="row">
              <div id="individual-country-pics">
              <img  className="col-md-4" src="files/img/panama1.jpg" />
              <img  className="col-md-4" src="files/img/panama2.jpg" />
              <img  className="col-md-4" src="files/img/panama3.jpg" />
              </div>
            </div>


        </div>

      </div>
        )
  }
}
