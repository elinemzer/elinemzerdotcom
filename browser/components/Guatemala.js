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
        <p>Far and away my favorite country in Central America, Guate has something for everyone. Spectacular volcanos, unique Mayan culture, and truly warm, friendly people who speak easy-to-understand Spanish.</p>
        <p>There's pretty solid weather all year round, with the summer being a tad more rainy, and the Northeast region near Tikal being generally more tropical. It's an incredibly affordable country and there are options for people of all budgets.</p>
        <p>It's a country where the laid back vibe attracts people back year after year. I've spent a good deal of time in Antigua and around Lake Atitlan so included specific guides for those locales...enjoy!</p>
        <p><strong>Getting in: </strong>There isn't great public transport options from the main airport in Guatemala City. During the day there are hourly shuttles to Antigua (45 min, $10) but if you arrive at night you'll have to take a cab ($35-40). I never had any notable trouble at the land borders with Mexico in the Northwest, Belize in the Northeast and El Salvador in the south. </p>
        <p><strong>Must Dos: </strong>Drink coffee and mezcal in colorful Antigua, take in the majestic volcanos at Lake Atitlan, check out the Mayan ruins of Tikal, ride a chicken bus.</p>
     </div>
    })
      map.addListener('center_changed', () => {
        window.setTimeout(() => {
          this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
        }, 1000)
      })
 }

showOverview(){
  const map = new google.maps.Map(document.getElementById('mapid'), {
    center: this.state.currPos,
    zoom: 7
  });
    this.setState({
      view:
      <div>
        <p>Far and away my favorite country in Central America, Guate has something for everyone. Spectacular volcanos, unique Mayan culture, and truly warm, friendly people who speak easy-to-understand Spanish.</p>
        <p>There's pretty solid weather all year round, with the summer being a tad more rainy, and the Northeast region near Tikal being generally more tropical. It's an incredibly affordable country and there are options for people of all budgets.</p>
        <p>It's a country where the laid back vibe attracts people back year after year. I've spent a good deal of time in Antigua and around Lake Atitlan so included specific guides for those locales...enjoy!</p>
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
        <p>Guatemala is not a huge country, but road conditions and general pace of travel make getting around sometimes a haul. In 1.5 to 2 weeks, you could easily make it to the major highlights though: the colonial vibes and volcanos of <strong>Antigua</strong>, a relaxing weekend at <strong>Atitlan</strong>, the Mayan Ruins of <strong>Tikal</strong> in the Northeast and the unique water formations of <strong>Semuc Champey.</strong> </p>
        <p>With a bit more time, you could tack on a trip to the still-developing Pacific coast at <strong>Monterico or El Paredon</strong>, take a week of Spanish in <strong>Quetzaltenango(Xela)</strong>, a more gritty, authentic experience than Antigua, or spend some time in oft-overlooked Guatemala City (Zonas 4 & 10 are the nicest)</p>
        <p><strong>Getting Around:</strong> Almost all of the tourist destinations have little tour offices that offer shuttle services to other major destinations. These are mildly uncomfortable vans that are always packed to the brim with backpackers. Each route typically runs about 2-3 times per day. There are nicer Pullman buses available on routes going to and from Guatemala City. Chicken buses are abundant, cheap, chaotic, and a fun way to practice your spanish and get a taste of local culture. They tend to take a bit longer than the shuttles and it's easy to get lost or overpay if your spanish is shaky. That said, they're fun and unique!</p>
        <p>Antigua --> Atitlan: 3-4 hours, $10 shuttle, $4 chicken bus (transfer at Chimaltenango & again at Cuatro Caminos to get to Panajachel)</p>
        <p>Antigua --> Pacific Coast: 3-5 hours, $10 shuttle, $5 chicken bus + boat (3 transfers)</p>
        <p>Antigua --> Semuc Champey: 8-10, hours, $10 shuttle</p>
        <p>Tikal --> Semuc Champey: 8-9, hours, $10 shuttle, chicken bus would take a long time and require a transfer at Coban I think</p>
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
    center: {lat: 14.6907, lng: -91.2025},
    zoom: 12
  });

    this.setState({
      mapObj: map,
      view:
      <div>
        <p>"It really is too much of a good thing" quipped Aldous Huxley famously. The descent into Lake Atitlan, usually made in an over-crowded shuttle van or a speeding chicken bus is in my mind one of the most spectacular travel experiences out there. </p>
        <p>The lake is surrounded by majestic volcanos and steep hills, and lined with a handful of Mayan villages and backpacker outposts, accessible by a network of water-taxi wooden boats that run every ten minutes or so between towns and occasionally face harrowing waves. </p>
        <p>A quick overview of the towns around the lake: </p>
        <p><strong>San Pedro la Laguna: </strong>Most backpackers end up staying in San Pedro, a labyrinthine town full of back alleys, cheap hostels and stray dogs. I find the town to have a funny charm, which definitely wears off after more than a few days. <strong>Hostel Fe</strong> is a popular accomodation choice, and the hilarious British owner runs a fun weekly trivia night on Friday nights that anyone can join. <strong>Zoola</strong>, an Israeli outpost, is also a cool spot, with a mediterranean cafe and a lakefront pool. The best food in town is at <strong>Idea Connection,</strong> an italian run cafe/brunch place. Nightlife is a bit druggy and centers around a bar called <strong>Sublime</strong> not far from the main dock. To avoid the backpackers and get a bit more of a local experience in San Pedro, just trek up the hill from the main dock. There is a whole other area to the town up there near where the chicken busses leave from that feels much more Mayan.</p>
        <p><strong>San Marcos la Laguna: </strong>How San Marcos became a major hippie outpost, I don't know, but you've been warned. Think cacao shamans, month-long lunar healing silent retreats, and canadian backpackers who haven't showered in awhile. That said, the <strong>nature preserve to the left of the boat dock</strong> is one of the most lovely spots around the lake and is definitely worth hanging at for an afternoon with a good book. The water is also much cleaner over there so you can swim. </p>
        <p><strong>Santa Cruz la Laguna: </strong>There's not much going on in Santa Cruz, but if what you're looking for is true relaxation, I'd recommend booking a few nights at <strong>La Iguana Perdida.</strong> It's a beautiful hostel/hotel with a range of room types, a chill common area and fun family-style dinners. Can get a bit rowdy on the weekends. Lot's of hammocks, no wifi and good vibes.</p>
        <p><strong>Santiago Atitlan: </strong>The biggest Mayan town on the lake. Most travelers do not stay here, but it is worth a day trip if you have time to try and find the shrine to <a href="https://en.wikipedia.org/wiki/Maxim%C3%B3n">Maximón,</a> the saint of all things sinful and a true Guatemalan legend. The shrine moves around every year or so (and there are some imitators), but if you ask around a bit you'll find it ;)</p>
        <p><strong>Panajachel: </strong>The biggest tourist town at the Lake, with more of an older expat vibe. It feels incredibly touristy. I'd recommend skipping altogether, unless you need to get a chicken bus to or from Antigua.</p>
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
    createPin('ChIJN7vw51dLiYURirapOxTXuss'); //iguana perdida
    createPin('ChIJwcVbOcm1joURS2oXWZVqSaI'); //sublime
    createPin('ChIJpepHH7a1joURnwoddxe7FcY'); //idea connection
    createPin('ChIJXS77_re1joUR-fsG8TiInNc'); //zoola
    createPin('ChIJkafoK7zKjoURbh5_pblxDCU'); //santiago atitlan
    createPin('ChIJdW5wyly0joURhIcmGxa0XIQ'); //san marcos nature preserve



}

showBudget(){
  const map = new google.maps.Map(document.getElementById('mapid'), {
    center: this.state.currPos,
    zoom: 7
  });
    this.setState({
      view:
      <div>
        <p><em>Based on Quetzal fixed to USD at 7.5 to 1. You can easily live in Antigua for $1300 a month, cheaper in other areas. </em></p>
          <p><strong>Decent Airbnb room, shared apartment: </strong> $12-$20/night</p>
          <p><strong>Shared room, hostel: </strong> $7-$10/night</p>
          <p><strong>Coffee: </strong> $1.8 </p>
          <p><strong>Sit Down dinner in Antigua, mid-range restaurant: </strong>$11</p>
          <p><strong>Bottle of rum, supermarket: </strong> $4.5 </p>
          <p><strong>Mezcal + Beer, Cafe No Se: </strong>$4.6</p>
          <p><strong>Three avocados, local market: </strong>75 cents</p>
          <p><strong>Acatenango Overnight Volcano Hike: </strong>$27</p>
          <p><strong>Bag of melon or piña: </strong>70 cents</p>
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
        <p><strong><a href="http://www.newyorker.com/magazine/2011/04/04/a-murder-foretold">A Murder Foretold: </a></strong>An incredible exploration into corruption and political violence in Guatemala City</p>
        <p><strong><a href="https://www.nytimes.com/2016/07/03/magazine/the-secrets-in-guatemalas-bones.html">The Secret in Guatemala's Bones: </a></strong>How anthropology work is bringing justice for victims of the civil war</p>
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
