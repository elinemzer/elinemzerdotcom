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
          <p>CDMX is hot right now, and it's easy to see why. It's a vibrant, affordable metropolis with incredible food and a vibrant cultural and literary scene.</p>
          <p>Easily reachable from both coasts, it's highlights are awesome for a long weekend getaway while its nuances could take years to explore. It's massive in both population and physical size, but in recent years has mostly shed its reputation for being rough around the edges. The weather is spring-like year-round and the extensive metro makes getting around less daunting as well.</p>
          <p><strong>Getting in: </strong>The airport is not in the greatest neighborhood, but the metro runs straight to it and ubers are cheap</p>
          <p><strong>Must Do's: </strong>Eat tons of Al Pastor tacos, live the latin hipster dream in the Roma and Condesa neighborhoods, explore Frida Kahlo and Diego Riviera's haunts in Coyoacan </p>
       </div>
      })
    		map.addListener('center_changed', () => {
    			window.setTimeout(() => {
    				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
    			}, 1000)
    		})
	 }

  showOverview(){

      this.setState({
        view:
        <div>
          <p>CDMX is hot right now, and it's easy to see why. It's a vibrant, affordable metropolis with incredible food and a vibrant cultural and literary scene.</p>
          <p>Easily reachable from both coasts, it's highlights are awesome for a long weekend getaway while its nuances could take years to explore. It's massive in both population and physical size, but in recent years has mostly shed its reputation for being rough around the edges. The weather is spring-like year-round and the extensive metro makes getting around less daunting as well.</p>
          <p><strong>Getting in: </strong>The airport is not in the greatest neighborhood, but the metro runs straight to it and ubers are cheap</p>
          <p><strong>Must Do's: </strong>Eat tons of Al Pastor tacos, live the latin hipster dream in the Roma and Condesa neighborhoods, explore Frida Kahlo and Diego Riviera's haunts in Coyoacan </p>
       </div>
    })
  }

  showNeighborhoods(){
    const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 13
		});
      this.setState({
        mapObj: map,
        view:
        <div>
          <p>Most gringos don't stray too far from <strong>La Condesa and La Roma Norte</strong>. These are adjacent areas that are both pretty walkable, with beautiful tree-lined streets and cafes and concept shops that ooze the global hip aesthetic. Parque Mexico and Parque España are great hangouts in Condesa, where you're likely to find beautiful dogs that would make San Franciscans blush. In Roma, Avenida Alvaro Obregon is a large street that cuts across the heart of the neighborhood. Much of the best night life is here as well, with Roma being more of a hipster bar vibe and Condesa trending more towards late-night clubs.</p>
          <p>On the south side of town, <strong>Coyoacan</strong> is another beautiful area, with a charming main square, lots of colorful buildings and nice outdoor cafes. The Frida Kahlo museum here, but the neighborhood itself is definitely worth an afternoon. Or if you want to see how Carlos Slim lives, head to <strong>Polanco.</strong></p>
          <p>The historic <strong>Centro</strong> area is also worth visiting, although definitely feels a little more seedy than the others mentioned. </p>
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

      this.setState({
        mapObj: map,
        view:
        <div>
          <p>There are tons of museums, particularly for those interested in art, but in just a few days I would'nt miss the <strong>Frida Kahlo museum</strong> in Coyoacan or the incredible and massive <strong> Anthropology museum </strong> located in the huge Bosques del Chapultepec park.</p>
          <p>In Centro, start at the impressive <strong> Zocalo </strong> and work your way to the Museo de Bellas Artes. </p>
          <p>In the month I lived in the city though, my single favorite thing to do was walk or jog around the <strong> Calle Amsterdam </strong> loop in La Condesa, an incredibly beautiful tree-lined circular street that takes about 25 minutes to walk around.</p>
          <p>If you're into street markets, <strong>Mercado Medellin</strong> in Roma Sur and the <strong>central market in Coyoacan</strong> are both great. </p>
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

      this.setState({
        mapObj: map,
        view:
        <div>
          <p>I mostly ate tacos here. My go-tos:</p>
            <p>1. <strong>Tacos Alvaro Obregon</strong></p>
            <p>2. <strong>Taqueria Los Parados</strong></p>
            <p>3. <strong>Tacos HOLA el Guero </strong></p>
            <p>4. <strong>Tacos el Tizoncito</strong></p>

          <p>For a nicer sit-down meal, <strong>Contramar</strong> lives up to the hype and has excellent seafood. <strong>La Chicha</strong> is a fun place in Roma Norte that has a good happy hour and is always crowded with locals.</p>
          <p><strong>Mercado Roma</strong> is a recently-opened super hip food court (think Chelsea Market) but has lots of excellent options and a rooftop beergarden </p>
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

      this.setState({
        mapObj: map,
        view:
        <div>
          <p>I found the nightlife scene to be a bit difficult to navigate as a solo traveler, which is not abnormal for a massive city, but it is worth noting that I never found a very central area where all the nightlife was on a given night. </p>
          <p>Most of the top bars are in Roma Norte. Speakeasies are en vogue and prices are good -- even at the top cocktail bars you'll pay about half of what you'd pay in a US city.</p>
          <p><em>Some top spots: </em></p>
            <p><strong>La Clandestina:</strong> great spot with hundreds of Mezcals</p>
            <p><strong>Balmori Roofbar:</strong> trendy rooftop spot in Roma</p>
            <p><strong>Hanky Panky Cocktail Bar:</strong> speakeasy -- cool but difficult to get into</p>
            <p><strong>Licoreria Limantour:</strong> nice cocktail bar on Obregon</p>
            <p><strong>Lilit:</strong> dark bar with concept store across the street</p>
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

      this.setState({
        mapObj: map,
        view:
        <div>
          <p><em>My Favorites: </em></p>
            <p><strong>Chiquitito:</strong> as the name implies, a cute but tiny place in Condesa. Great coffee and good vibes.</p>
            <p><strong>Cucurucho:</strong> basically Chiquitito but on the Roma side of the hood.</p>
            <p><strong>Dosis:</strong> this was my go-to for working. Big space, globally chic in that it could be anywhere, but strong wifi and big place so you can stay awhile.</p>
            <p><strong>Cafe B:</strong> another nice place to work in Condesa, near the Amsterdam loop.</p>
            <p><strong>Cardinal:</strong> they have a couple locations. The Roma one is a nice place with outdoor seating off one of the main squares.</p>
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
        createPin('ChIJ3f4lPyX_0YUR8lpHjtzEGxM');  //dosis
        createPin('ChIJU5A2ITz_0YURsC60fDL48L0');  //cucurucho
        createPin('ChIJV_W9HGr_0YURpcwR_-cpQWg');  //chiquitito
        createPin('ChIJ05Z2Hzv_0YURcUimdYlMwkM'); //casa cardinal
        createPin('ChIJj1fIpTj_0YURXyxFscmpylc'); //cafe b
}

  showBudget(){

      this.setState({
        view:
        <div>
          <p><em>As of March 2017, when peso was about 19:1 to the dollar. I'd estimate it's around a $1500/month town. </em></p>
            <p><strong>Decent Airbnb room, shared apartment: </strong> $20-$30/night</p>
            <p><strong>Three Al Pastor tacos (dinner): </strong> $3 </p>
            <p><strong>Sit Down dinner, mid-range restaurant: </strong>$8</p>
            <p><strong>Six pack of Corona, supermarket: </strong> $3 </p>
            <p><strong>Cocktail at trendy bar: </strong>$5.50</p>
            <p><strong>Coffee: </strong>$2.20</p>
            <p><strong>Subway ride: </strong>25 cents</p>
            <p><strong>Uber ride (20 minutes): </strong>$5</p>
            <p><strong>Museum Entrance: </strong>$6</p>
        </div>
    })
  }

  showRead(){

      this.setState({
        view:
        <div>
          <p><strong><a href="http://www.newyorker.com/news/news-desk/who-killed-ruben-espinosa-and-nadia-vera">Who Killed Ruben Espinosa and Nadia Vera?: </a></strong>A murder mystery in CDMX</p>
          <p><strong><a href="http://www.nybooks.com/articles/1969/09/11/a-special-supplement-a-death-in-the-sanchez-family/?pagination=false">A Death in the Sanchez Family: </a></strong>A 1950's mystery</p>
        </div>
    })
  }

   render(){

     return (
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
                <li role="presentation"  onClick={this.showBudget}><a href='#/travel/central-america/mexico'>budget.</a></li>
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
