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
		  zoom: 13
		});
    const mexico = places[0];
      this.setState({
        mapObj: map,
        view: mexico.overview
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
        function createPin (pinID) {
        const service = new google.maps.places.PlacesService(map);
        service.getDetails({placeId: pinID }, function(place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                // google.maps.event.addListener(marker, 'click', function() {
                //     infowindow.setContent('<div class="infoWindow">' + place.name +'</div>');
                //     infowindow.open(map, this);
                // });
              }
        });
        }
      createPin('ChIJ3f4lPyX_0YUR8lpHjtzEGxM');  //dosis
      createPin('ChIJU5A2ITz_0YURsC60fDL48L0');  //cucurucho
      createPin('ChIJV_W9HGr_0YURpcwR_-cpQWg');  //chiquitito 
	 }

  showOverview(){
    const mexico = places[0];
      this.setState({
        view: mexico.overview
    })
  }

  showNeighborhoods(){
    const mexico = places[0];
      this.setState({
        view: mexico.neighborhoods
    })
  }

  showActivities(){
    const mexico = places[0];
      this.setState({
        view: mexico.activities
    })
  }

  showRestaurants(){
    const mexico = places[0];
      this.setState({
        view: mexico.restaurants
    })
  }

  showBars(){
    const mexico = places[0];
      this.setState({
        view: mexico.bars
    })
  }

  showCafes(){
    const mexico = places[0];
    const allCafes = mexico.cafes.map(cafe => {
      return cafe
    })

      this.setState({
        view: allCafes
    })
  }

  showPlaylist(){
    const mexico = places[0];
      this.setState({
        view: mexico.playlist
    })
  }

  showRead(){
    const mexico = places[0];
      this.setState({
        view: mexico.read
    })
  }

   render(){

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
                <li role="presentation"  onClick={this.showRestaurants}><a href='#/travel/central-america/mexico'>restaurants.</a></li>
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
                {
                  this.state.view
                }
              </div>
            </div>


            <div className="row">
              <div id="individual-country-pics">
              <img  className="col-md-4" src="files/img/mexico1.jpg" />
              <img  className="col-md-4" src="files/img/mexico2.jpg" />
              <img  className="col-md-4" src="files/img/mexico3.jpg" />
              </div>
            </div>


        </div>

      </div>
        )
  }
}
