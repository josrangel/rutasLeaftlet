//se crea el objeto que contiene la referencia al mapa, se especifica el nombre del div donde mostrara el mapa, las cordenadas con de iniciara la vista y el zoom inicial
var mymap = L.map('mapid').setView([19.2943267, -98.8473032], 5);

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';//La url donde obtendra el mapa, se puede sustituir por otros
var osmAttrib = "mapa Prueba";//Nombre que se mostrara en la parte inferior derecha del mapa, algunos piden que se les de la atribucion: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, { //se crea un objeto para que la imagen del mapa obtenida de la url de osmUrl
	    minZoom: 5, //se especifica el zoom minimo permitido
	    maxZoom: 16, //se especifica el zoom maximo permitido
	    attribution: osmAttrib //se le especifica la atribucion
	});
osm.addTo(mymap);//se agrega el objeto anterior al mapa

var nuevaRuta; //se crea una variable donde se guardara la ruta

function creaRuta(){ //se crea una funcion que realizara la creacion de la ruta, no es necesario ponerlo en una funcion
	nuevaRuta=L.Routing.control({ //se asigna a la variable el objeto de la ruta
  	waypoints: [
    	L.latLng(19.250041, -98.870591), //Se crean los objetos por cada coordenada
    	L.latLng(19.290904, -98.919100),
    	L.latLng(19.4326068, -99.1353936)
  	]
	});/**/

	nuevaRuta.addTo(mymap);	//se agrega la ruta al mapa
}

function agregaAuto(lat, longi){
	var auto = L.icon({//se crea un objeto de icono
    	iconUrl: '../marcadorAuto.png',//se especifica de donde obtendra el icono

    	iconSize:     [30, 35], // size of the icon
    	//shadowSize:   [50, 64], // size of the shadow
    	//iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    	//shadowAnchor: [4, 62],  // the same for the shadow
    	//popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
	L.marker([lat, longi], {icon: auto}).addTo(mymap); //se agrega  un marcador a las coordenadas especificadas, se le pasa el objeto de icono y se agrega al mapa
}

creaRuta(); //se ejecuta la funcion
agregaAuto(19.321152, -98.941006);//se llama la funcion para crear el marcador de un auto con las coordenadas especificadas
agregaAuto(19.427430, -99.110135);//se llama la funcion para crear el marcador de un auto con las coordenadas especificadas

//para mas informacion, consultar la documentacion de Leaflet y Routing machine:
//https://leafletjs.com/examples.html
//http://www.liedman.net/leaflet-routing-machine/tutorials/