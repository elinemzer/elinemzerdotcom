import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';


export default class Nicaragua extends Component {
  constructor(props) {
		super(props);
		this.state = {
			currPos: {lat: 12.8654, lng: -85.2072}, // default location: entire country
			mapObj: {},
			selectedMarker: {},
      view: []
		}
		this.markersShowing = [];
		this.places = [];
		this.componentDidMount = this.componentDidMount.bind(this);
    this.showOverview = this.showOverview.bind(this);
    this.showNeighborhoods = this.showNeighborhoods.bind(this);
    this.showGranada = this.showGranada.bind(this);
    this.showBudget = this.showBudget.bind(this);
    this.showRead = this.showRead.bind(this);

	}

componentDidMount() {
  		const map = new google.maps.Map(document.getElementById('mapid'), {
  		  center: this.state.currPos,
  		  zoom: 7
  		});
      this.setState({
        mapObj: map,
        view:
        <div>
          <p>Far and away my favorite country in Central America, Guate has something for everyone. Spectacular volcanos, unique Mayan culture, and truly warm, friendly people who speak easy-to-understand Spanish.</p>
          <p>There's pretty solid weather all year round, with the summer being a tad more rainy, and the Northeast region near Tikal being generally more tropical. It's an incredibly affordable country and there are options for people of all budgets.</p>
          <p>It's a country where the laid back vibe attracts people back year after year. I've spent a good deal of time in Antigua and around Lake Atitlan so included specific guides for those locales...enjoy!</p>
       </div>
      })
        map.addListener('center_changed', () => {
          window.setTimeout(() => {
            this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
          }, 1000)
        })
   }

  showOverview() {
  		const map = new google.maps.Map(document.getElementById('mapid'), {
  		  center: this.state.currPos,
  		  zoom: 7
  		});
      this.setState({
        mapObj: map,
        view:
        <div>
          <p>Far and away my favorite country in Central America, Guate has something for everyone. Spectacular volcanos, unique Mayan culture, and truly warm, friendly people who speak easy-to-understand Spanish.</p>
          <p>There's pretty solid weather all year round, with the summer being a tad more rainy, and the Northeast region near Tikal being generally more tropical. It's an incredibly affordable country and there are options for people of all budgets.</p>
          <p>It's a country where the laid back vibe attracts people back year after year. I've spent a good deal of time in Antigua and around Lake Atitlan so included specific guides for those locales...enjoy!</p>
       </div>
      })
        map.addListener('center_changed', () => {
          window.setTimeout(() => {
            this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
          }, 1000)
        })
   }

  showNeighborhoods(){
    const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
    const nicaragua = places[1];
      this.setState({
        mapObj: map,
        view: nicaragua.neighborhoods
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

  showGranada(){
    const map = new google.maps.Map(document.getElementById('mapid'), {
      center: {lat: 11.9344, lng: -85.9560},
      zoom: 14
    });
      this.setState({
        mapObj: map,
        view: nicaragua.activities
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
      createPin('ChIJeSryR-0MdI8RuMoyQWDb1z0'); //garden cafe
      createPin('ChIJ296jJL4MdI8R5Z7oLkCeOLc'); //garaje
      createPin('ChIJ8adRqJQOdI8RaFiu7nEYA7g'); //laguna apoyo
      createPin('ChIJJzJqTulydI8R5w_UrRFxWwc'); //isletas
    }

  showBudget() {
    const map = new google.maps.Map(document.getElementById('mapid'), {
      center: this.state.currPos,
      zoom: 7
    });
      this.setState({
        view:
        <div>
          <p><em>If you avoid the really touristy stuff in San Juan Del Sur, Nicaragua is really cheap. Probably about $1200 a month cheap. </em></p>
            <p><strong>Decent Airbnb room, shared apartment: </strong> $12-$20/night</p>
            <p><strong>Hammock bed, hostel: </strong> $3-$5/night</p>
            <p><strong>Coffee: </strong> $1.2 </p>
            <p><strong>Sit Down dinner in Granada, mid-range restaurant: </strong>$11</p>
            <p><strong>Bottle of Flor de Caña, supermarket: </strong> $4 </p>
            <p><strong>Sunday Funday Pool Crawl: </strong>$30</p>
            <p><strong>Three avocados, local market: </strong>75 cents</p>
            <p><strong>Motorbike rental, Ometepe: </strong>$25/day</p>
            <p><strong>Surfboard rental: </strong>$8</p>
        </div>
    })
  }

  showRead(){
    const map = new google.maps.Map(document.getElementById('mapid'), {
      center: this.state.currPos,
      zoom: 7
    });
      this.setState({
        view:
        <div>
          <p><strong><a href="https://longreads.com/2014/08/26/mango-mango-a-family-a-fruit-stand-and-survival-on-4-50-a-day/">Mango! Mango!: </a></strong>A day in the life of an informal street vendor in Managua's central market</p>
          <p><strong><a href="http://www.believermag.com/issues/201101/?read=article_unferth">Internacionalista: </a></strong>A look at the expat scene during the civil war in the 80's</p>
          <p><strong><a href="https://www.outsideonline.com/1920826/boomtown-gringo-girl-and-her-murder">The Boomtown, The Gringo, The Girl and Her Murder: </a></strong>Following the Eric Volz trial in SJDS</p>
        </div>
    })
  }

   render(){

     return(
       <div id="nicaragua-page">
         <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div id="map-text" col-md-4>
                esto es: nicaragua
              </div>
              <div id="back-text" col-md-4>
                <Link to={`/travel/central-america`}>go elsewhere.</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <ul className="nav nav-tabs col-md-offset-5">
                <li role="presentation"  onClick={this.showOverview}><a href='#/travel/central-america/nicaragua'>overview.</a></li>
                <li role="presentation"  onClick={this.showNeighborhoods}><a href='#/travel/central-america/nicaragua'>where to go.</a></li>
                <li role="presentation"  onClick={this.showGranada}><a href='#/travel/central-america/nicaragua'>in and around granada.</a></li>
                <li role="presentation"  onClick={this.showBudget}><a href='#/travel/central-america/nicaragua'>budget.</a></li>
                <li role="presentation"  onClick={this.showRead}><a href='#/travel/central-america/nicaragua'>read.</a></li>


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
              <img  className="col-md-4" src="files/img/nicaragua1.jpg" />
              <img  className="col-md-4" src="files/img/nicaragua2.jpg" />
              <img  className="col-md-4" src="files/img/nicaragua3.jpg" />
              <img  className="col-md-4" src="files/img/nicaragua4.jpg" />
              <img  className="col-md-4" src="files/img/nicaragua5.jpg" />
              <img  className="col-md-4" src="files/img/nicaragua6.jpg" />
              <img  className="col-md-4" src="files/img/nicaragua7.jpg" />
              <img  className="col-md-4" src="files/img/nicaragua8.jpg" />
              <img  className="col-md-4" src="files/img/nicaragua9.jpg" />
              </div>
            </div>


        </div>

      </div>
        )
  }
}
