import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import places from '../../countries';


export default class Guatemala extends Component {
  constructor(props) {
		super(props);
		this.state = {
			currPos: {lat: 15.7835, lng: -90.2308}, // default location: roma norte,
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
    this.showBudget = this.showBudget.bind(this);
    this.showRead = this.showRead.bind(this);

	}

  componentDidMount() {
		const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
    const guatemala = places[0];
      this.setState({
        mapObj: map,
        view: guatemala.overview
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
	 }

  showOverview(){
    const guatemala = places[0];
      this.setState({
        view: guatemala.overview
    })
  }

  showNeighborhoods(){
    const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
    const guatemala = places[0];
      this.setState({
        mapObj: map,
        view: guatemala.neighborhoods
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
        function createPin (pinID) {
          const infowindow = new google.maps.InfoWindow({
              maxWidth: 350
             });
        const service = new google.maps.places.PlacesService(map);
        service.getDetails({placeId: pinID }, function(place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent('<div class="infoWindow">' + place.name +'</div>');
                    infowindow.open(map, this);
                });
              }
        });
      }
      createPin('ChIJ4zXmiUT_0YUR57jJi24HHO0'); //la condesa
      createPin('ChIJzeSi8jn_0YURMiXDZ-gzmi0'); //la roma
      createPin('ChIJ-UNIbQMC0oURdqnTwDJ30-Q'); //polanco
      createPin('ChIJAd0jvtz_0YURkB_9OyD0xd4'); //coyoacan
      createPin('ChIJ8bh9yyz50YURlL2cFjXnr98'); //centro
    }

  showActivities(){
    const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
    const guatemala = places[0];
      this.setState({
        mapObj: map,
        view: guatemala.activities
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
        function createPin (pinID) {
          const infowindow = new google.maps.InfoWindow({
              maxWidth: 350
             });
        const service = new google.maps.places.PlacesService(map);
        service.getDetails({placeId: pinID }, function(place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent('<div class="infoWindow">' + place.name +'</div>');
                    infowindow.open(map, this);
                });
              }
        });
      }
      createPin('ChIJgR1EcT7_0YUREAsbqALaMjc'); //mercado medellin
      createPin('ChIJOz-6AMT_0YURofTM9_ekAWI'); //frida kahlo museum
      createPin('ChIJ_6pkSM3-0YURDDaRslwM_0w'); //zocalo
      createPin('ChIJScjIILQB0oURJMVub-MaI4Q'); //anthropology museum
      createPin('ChIJb5QzwED_0YURQCgMF85waLs'); //hipodromo
      createPin('ChIJb67ro-j_0YURes-LYhd6tH8'); //coyoacan st


    }

  showRestaurants(){
		const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
    const guatemala = places[0];
      this.setState({
        mapObj: map,
        view: guatemala.restaurants
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
        function createPin (pinID) {
          const infowindow = new google.maps.InfoWindow({
              maxWidth: 350
             });
        const service = new google.maps.places.PlacesService(map);
        service.getDetails({placeId: pinID }, function(place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent('<div class="infoWindow">' + place.name +'</div>');
                    infowindow.open(map, this);
                });
              }
        });
      }
      createPin('ChIJez8vvy__0YURP0rx5WhEig4'); //contramar
      createPin('ChIJZeIEDEH_0YURpQ_UHx0ZTTo'); //tacos hola
      createPin('ChIJ5RLH1D7_0YURSMJSVlhAGCw'); //mercado roma
      createPin('ChIJsyICZBb_0YURFFEjAh6qYBo'); //taqueria los parados
      createPin('ChIJQVOX8Dr_0YURMvf_XgmgeCs'); //taqueria alvaro obregon
      createPin('ChIJie02fDv_0YURKP-IhZY_VHQ'); //la chicha
}
  showBars(){
		const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
    const guatemala = places[0];
      this.setState({
        mapObj: map,
        view: guatemala.bars
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
        function createPin (pinID) {
          const infowindow = new google.maps.InfoWindow({
              maxWidth: 350
             });
        const service = new google.maps.places.PlacesService(map);
        service.getDetails({placeId: pinID }, function(place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent('<div class="infoWindow">' + place.name +'</div>');
                    infowindow.open(map, this);
                });
              }
        });
        }
        createPin('ChIJX03s9zr_0YURHdcjFe9hbiE'); //limantour
        createPin('ChIJwYsplTv_0YURAjGjBCo9olU'); //balmori
        createPin('ChIJb0o-MkH_0YUReHcA77q4Mhc'); //la clandestina
        createPin('ChIJxRZMnzb_0YURMVE1PsNPolo'); //hanky panky
        createPin('ChIJ2_ua_zr_0YURRXldg2plimY'); //lilit
  }

  showCafes(){
		const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
    const guatemala = places[0];
      this.setState({
        mapObj: map,
        view: guatemala.cafes
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
        function createPin (pinID) {
          const infowindow = new google.maps.InfoWindow({
              maxWidth: 350
             });
        const service = new google.maps.places.PlacesService(map);
        service.getDetails({placeId: pinID }, function(place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent('<div class="infoWindow">' + place.name +'</div>');
                    infowindow.open(map, this);
                });
              }
        });
        }
        createPin('ChIJ3f4lPyX_0YUR8lpHjtzEGxM');  //dosis
        createPin('ChIJU5A2ITz_0YURsC60fDL48L0');  //cucurucho
        createPin('ChIJV_W9HGr_0YURpcwR_-cpQWg');  //chiquitito
        createPin('ChIJ05Z2Hzv_0YURcUimdYlMwkM'); //casa cardinal
        createPin('ChIJj1fIpTj_0YURXyxFscmpylc'); //cafe b
}

  showBudget(){
    const guatemala = places[0];
      this.setState({
        view: guatemala.budget
    })
  }

  showRead(){
    const guatemala = places[0];
      this.setState({
        view: guatemala.read
    })
  }

   render(){

     return(
       <div id="guatemala-page">
         <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div id="map-text" col-md-4>
                esto es: guatemala d.f.
              </div>
              <div id="back-text" col-md-4>
                <Link to={`/travel/central-america`}>go elsewhere.</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <ul className="nav nav-tabs col-md-offset-5">
                <li role="presentation"  onClick={this.showOverview}><a href='#/travel/central-america/guatemala'>overview.</a></li>
                <li role="presentation"  onClick={this.showNeighborhoods}><a href='#/travel/central-america/guatemala'>neighborhoods.</a></li>
                <li role="presentation"  onClick={this.showActivities}><a href='#/travel/central-america/guatemala'>activities.</a></li>
                <li role="presentation"  onClick={this.showRestaurants}><a href='#/travel/central-america/guatemala'>restaurants.</a></li>
                <li role="presentation"  onClick={this.showBars}><a href='#/travel/central-america/guatemala'>bars.</a></li>
                <li role="presentation"  onClick={this.showCafes}><a href='#/travel/central-america/guatemala'>cafes.</a></li>
                <li role="presentation"  onClick={this.showBudget}><a href='#/travel/central-america/guatemala'>budget.</a></li>
                <li role="presentation"  onClick={this.showRead}><a href='#/travel/central-america/guatemala'>read.</a></li>


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
              <img  className="col-md-4" src="files/img/guatemala1.jpg" />
              <img  className="col-md-4" src="files/img/guatemala2.jpg" />
              <img  className="col-md-4" src="files/img/guatemala3.jpg" />
              </div>
            </div>


        </div>

      </div>
        )
  }
}
