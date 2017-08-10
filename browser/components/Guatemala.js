import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';



export default class Guatemala extends Component {
  constructor(props) {
		super(props);
		this.state = {
			currPos: {lat: 15.7835, lng: -90.2308},
			mapObj: {},
			selectedMarker: {},
      view: []
		}
		this.markersShowing = [];
		this.places = [];
		this.componentDidMount = this.componentDidMount.bind(this);
    this.showOverview = this.showOverview.bind(this);
    this.showAntigua = this.showAntigua.bind(this);
    this.showAtitlan = this.showAtitlan.bind(this);
    this.showNeighborhoods = this.showNeighborhoods.bind(this);
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
    zoom: 7
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
    createPin('ChIJFQslsHQOiYURPXIDKSu6hvc'); //antigua
    createPin('ChIJcYeyyh7IiIURftRIp-68rog'); //el paredon
    createPin('ChIJk7SDwMdKiYUREEm11vczbgo'); //lake atitlan
    createPin('ChIJA2fydTRBioURINyurPEc5pM'); //semuc champey
    createPin('ChIJXz9EVSGNX48RcqljlU4KcAA'); //flores
    createPin('ChIJP53IP_6XjoURDwAPHwH_pzs'); //xela


  }

showAntigua(){
  const map = new google.maps.Map(document.getElementById('mapid'), {
    center: {lat: 14.5586, lng: -90.7295},
    zoom: 14
  });

    this.setState({
      mapObj: map,
      view:
      <div>
        <p>Set in a valley surrounded by the Agua, Fuego, and Acatenango Volcanos, Antigua is just 40 minutes west of the bustle and grit of Guatemala City but oozes a magical charm that captivates travelers from around the globe. It's a small town on a roughly 10x10 grid of colorful cobblestone streets, known as a hub for Spanish schools and coffee enthusiasts.</p>
        <p>I've spent multiple months here over three visits and find it to be a relaxing place for a yearly refresh. Due to the Central Time Zone, year-round spring-like weather, loads of nice cafes and general first-world comforts, its an attractive spot for digital nomads as well. </p>
        <p><strong> To Do: </strong>Take a Spanish Class! There are loads of schools scattered around town, all offerring some version of 20hrs a week, one-on-one conversationsl spanish lessons. My buddy and I had a good experience with <strong> Antigueña Academy,</strong> although I think the individual teacher you are paired with matters more than the school itself.</p>
        <p>There's a short hike on the north side of town up to <strong>Cerro de la Cruz</strong> which gives you a nice overview of the town and volcanos to the south. An even better view is at <strong>Earth Lodge,</strong> an awesome place to hang out in the afternoons. It's an eco-lodge located in the hills above town that can be reached by booking a shuttle from El Hostal on Avenida 1a. Great for sunset happy hour and family-style dinners.</p>
        <p>The local market is on the west side of town and has great produce and lots of other fun informal economy-type goods. For a more upscale market experience, head to <strong>Caoba Farms</strong> on Saturdays from about 10-4 there is great live music and lots of food. Not too far from Caoba is a funky old swimming pool area called El Pilar in San Cristobal el bajo. It's not really on any map but is fun on hot days, just ask locals for la piscina and you'll find it.</p>
        <p>A trip to Guatemala is not complete without hiking a Volcano, and there are two good options out of Antigua. Pacaya is a half-day, easy hike that lots of tour operators offer for $8-10. For the more adventurous, Acatenango is an overnight adventure, that on a clear night is absolutely spectacular. DRESS WARM! BUY CLOTHES AT THE MARKET! IT IS FREEZING AT THE TOP OF ACATENANGO! That said, I highly recommend doing it.</p>
        <p><strong>Restaurants: </strong>For a small town, there are tons of options from all over the world. I typically start my days at Y tu Piña Tambien, across from No Se on 1st Avenida. For lunch hour, my go-to is the rotisserie chicken at <strong>Rincon Tipico.</strong> For dinner, <strong>Porque No?</strong> is my favorite joint in town. <strong>Toku Baru</strong>, a funny indonesian place is also a great affordable option.</p>
        <p><strong>Cafes: </strong>There are tons. My favorites are <strong>Refuge</strong> (6th Avenida), <strong>Fat Cat</strong> (4th Calle), <strong>Estudio</strong> (2nd Avenida), and <strong>La Terraza</strong> (5th Avenida).</p>
        <p><strong>Bars: </strong>Although some nights might feel like you're in Bed Stuy and not Central America, <strong>Cafe No Se</strong> remains a classic. Candlelit vibes, live music every night and flowing mezcal make this my favorite spot in town. <strong>The Snug</strong> is a tiny irish pub that is also fun most nights. <strong>El Barrio</strong> is a newer collection of four or five bars in one patio area, good for watching big sports games. If you're into hanging with the backpacker/hostel crowd, try Reilly's on Monday, Las Vibras on Wednesdays/Saturdays, and Lucky Rabbit | Mono Loco on other nights.</p>
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
    createPin('ChIJn8VYNrUNiYURDHJNMzA8ovo'); //earth lodge
    createPin('ChIJeYkRNWsOiYUR1L4koQfA4xk'); //caoba
    createPin('ChIJU2ASgHEOiYURgXUUBAk5zpU'); //cafe no se
    createPin('ChIJVTh8jwwOiYURBp8vrbjwU8Y'); //refuge coffee
    createPin('ChIJ1zLbXnMOiYURq7YjFDWVqEM'); //fat cat coffee
    createPin('ChIJNYTlsnMOiYURfX8Tnx-tcaQ'); //porque no
    createPin('ChIJ0SRO_nIOiYURAa_0biqbrho'); //rincon tipico
    createPin('ChIJdSdKPw0OiYURegF1C-j5C6c'); //mercado



  }

showAtitlan(){
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
              esto es: guatemala
            </div>
            <div id="back-text" col-md-4>
            <Link to={`/travel/central-america`}> go elsewhere. </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <ul className="nav nav-tabs col-md-offset-5">
              <li role="presentation"  onClick={this.showOverview}><a href='#/travel/central-america/guatemala'>overview.</a></li>
              <li role="presentation"  onClick={this.showNeighborhoods}><a href='#/travel/central-america/guatemala'>where to go.</a></li>
              <li role="presentation"  onClick={this.showAntigua}><a href='#/travel/central-america/guatemala'>in and around antigua.</a></li>
              <li role="presentation"  onClick={this.showAtitlan}><a href='#/travel/central-america/guatemala'>at the lake.</a></li>
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
            <img  className="col-md-4" src="files/img/guatemala4.jpg" />
            <img  className="col-md-4" src="files/img/guatemala5.jpg" />
            <img  className="col-md-4" src="files/img/guatemala6.jpg" />
            <img  className="col-md-4" src="files/img/guatemala7.jpg" />
            <img  className="col-md-4" src="files/img/guatemala8.jpg" />
            <img  className="col-md-4" src="files/img/guatemala9.jpg" />
            <img  className="col-md-4" src="files/img/guatemala10.jpg" />
            <img  className="col-md-4" src="files/img/guatemala11.jpg" />
            <img  className="col-md-4" src="files/img/guatemala12.jpg" />
            <img  className="col-md-4" src="files/img/guatemala13.jpg" />
            <img  className="col-md-4" src="files/img/guatemala14.jpg" />
            <img  className="col-md-4" src="files/img/guatemala15.jpg" />
            <img  className="col-md-4" src="files/img/guatemala16.jpg" />
            <img  className="col-md-4" src="files/img/guatemala17.jpg" />
            <img  className="col-md-4" src="files/img/guatemala18.jpg" />
            </div>
          </div>


      </div>

    </div>
      )
}
}
