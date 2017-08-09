import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';


export default class Belize extends Component {
  constructor(props) {
		super(props);
		this.state = {
			currPos: {lat: 17.7612, lng: -88.0277}, // default location: caye caulker
      mapObj: {},
			selectedMarker: {},
      view: []
		}
		this.markersShowing = [];
		this.places = [];
		this.componentDidMount = this.componentDidMount.bind(this);
    this.showOverview = this.showOverview.bind(this);
    this.showActivities = this.showActivities.bind(this);
    this.showBudget = this.showBudget.bind(this);
    this.showRead = this.showRead.bind(this);

	}

  componentDidMount() {
		const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});

      this.setState({
        mapObj: map,
        view:
        <div>
          <p>With its tropical vibes, reggae music and english-speaking populace, Belize feels a lot more like the Caribbean then the rest of its Central American neighbors.</p>
          <p>Formerly British Honduras, it became its own country in 1981, and has a population of around 400,000, roughly the size of Oakland. I spent a week in Caye Caulker, which is often the first or last stop on the Central American backpacker trail. Other popular spots are Ambergris Caye (more upscale and resort-y), Hopkins (a small town in the south), and San Ignacio (a town in the west famous for its caves).</p>
          <p><strong>Getting in: By air or bus you'll have to come through Belize City, which is probably not a place you'll want to hang around for too long. Boats to the Cayes can be found on the main docs in the downtown area and leave hourly.</strong></p>
          <p><strong>Must Do's: </strong>Chill at the Split, read a novel, go snorkeling </p>
       </div>
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
      createPin('ChIJu0QJq-ONXI8RAwfeP7n4Aso'); //the split
      createPin('ChIJ8bzBZeSNXI8RPauZO9gW4OI'); //bellas
      createPin('ChIJx3IbQO-NXI8RclgLFqZY0GQ'); //reggaebar
	 }

  showOverview(){

      this.setState({
        view:
        <div>
          <p>With its tropical vibes, reggae music and english-speaking populace, Belize feels a lot more like the Caribbean then the rest of its Central American neighbors.</p>
          <p>Formerly British Honduras, it became its own country in 1981, and has a population of around 400,000, roughly the size of Oakland. I spent a week in Caye Caulker, which is often the first or last stop on the Central American backpacker trail. Other popular spots are Ambergris Caye (more upscale and resort-y), Hopkins (a small town in the south), and San Ignacio (a town in the west famous for its caves).</p>
          <p><strong>Getting in: By air or bus you'll have to come through Belize City, which is probably not a place you'll want to hang around for too long. Boats to the Cayes can be found on the main docs in the downtown area and leave hourly.</strong></p>
          <p><strong>Must Do's: </strong>Chill at the Split, read a novel, go snorkeling </p>
       </div>
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
  createPin('ChIJu0QJq-ONXI8RAwfeP7n4Aso'); //the split
  createPin('ChIJ8bzBZeSNXI8RPauZO9gW4OI'); //bellas
  createPin('ChIJx3IbQO-NXI8RclgLFqZY0GQ'); //reggaebar
  }

  showActivities(){
    const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});

      this.setState({
        mapObj: map,
        view:
        <div>
          <p>Caye Caulker is chilllllll... like there's not much to do here. The whole island takes about 20 minutes to walk across, and there are a small handfull of different hostel options, including the notoriously-named Dirty McNasty's. We stayed at <strong>Bella's</strong> a cute place with lots of hammocks and cold showers.</p>
          <p>The main thing to do during the day is hang out at <strong> The Split, </strong> a dock and bar where the island splits in two. Great place to post up with a book and take a dip in the water every now and then. </p>
          <p>There are fresh fish stands all over the place, a number of little cafes and like two bars. We had a few fun nights at the aptly named <strong> ReggaeBar. </strong></p>
        </div>
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
    createPin('ChIJu0QJq-ONXI8RAwfeP7n4Aso'); //the split
    createPin('ChIJ8bzBZeSNXI8RPauZO9gW4OI'); //bellas
    createPin('ChIJx3IbQO-NXI8RclgLFqZY0GQ'); //reggaebar
     }

  showBudget(){

      this.setState({
        view:
        <div>
          <p><em>I was there in July 2015, Belize dollar was fixed at 2:1 to the US dollar. </em></p>
            <p><strong>Hostel Bed: </strong> $8-$10/night</p>
            <p><strong>Nice dinner of fresh fish: </strong> $15 </p>
            <p><strong>Bottle of Belikan Beer, bar: </strong>$2.50</p>
            <p><strong>Water Taxi from Belize City: </strong> $10 </p>
        </div>
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
  createPin('ChIJu0QJq-ONXI8RAwfeP7n4Aso'); //the split
  createPin('ChIJ8bzBZeSNXI8RPauZO9gW4OI'); //bellas
  createPin('ChIJx3IbQO-NXI8RclgLFqZY0GQ'); //reggaebar
  }

  showRead(){

      this.setState({
        view:
        <div>
          <p><strong><a href="https://www.wired.com/2012/12/ff-john-mcafees-last-stand/">John McAfee's Last Stand </a></strong></p>
          <p><strong><a href="https://www.nytimes.com/2015/05/24/magazine/the-lonely-fight-against-belizes-antigay-laws.html">The Lonely Fight Against Belize's Anti-gay laws </a></strong></p>
        </div>
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
  createPin('ChIJu0QJq-ONXI8RAwfeP7n4Aso'); //the split
  createPin('ChIJ8bzBZeSNXI8RPauZO9gW4OI'); //bellas
  createPin('ChIJx3IbQO-NXI8RclgLFqZY0GQ'); //reggaebar
  }

   render(){

     return (
       <div id="belize-page">
         <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div id="map-text" col-md-4>
                esto es: caye caulker, belize
              </div>
              <div id="back-text" col-md-4>
                <Link to={`/travel/central-america`}>go elsewhere.</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <ul className="nav nav-tabs col-md-offset-5">
                <li role="presentation"  onClick={this.showOverview}><a href='#/travel/central-america/belize'>overview.</a></li>
                <li role="presentation"  onClick={this.showActivities}><a href='#/travel/central-america/belize'>what to know.</a></li>
                <li role="presentation"  onClick={this.showBudget}><a href='#/travel/central-america/belize'>budget.</a></li>
                <li role="presentation"  onClick={this.showRead}><a href='#/travel/central-america/belize'>read.</a></li>


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
              <img  className="col-md-4" src="files/img/belize.jpg" />
              <img  className="col-md-4" src="files/img/belize1.jpg" />
              <img  className="col-md-4" src="files/img/belize2.jpg" />
              </div>
            </div>


        </div>

      </div>
        )
  }
}
