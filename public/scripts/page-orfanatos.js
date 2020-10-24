
//Aqui criamos o mapa
const map = L.map('mapid').setView([-14.9285358,13.5044904], 15);

//Cria e adiciona o titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);


//Criação do icone
const icon = L.icon({iconUrl:"./public/images/map-marker.svg",
iconSize:[58,68],
iconAnchor:[29,68],
popupAnchor:[170, 2]

})

//Criação do Popup overlay
const popup = L.popup({
    closeButton:false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240

}).setContent('Lar das meninas <a href="orfanatos.html?id=1"class="choose-orfanatos"> <img src="./public/images/arrow-white.svg"> </a>')



//Esse codigo aqui ele coloca aquele pontinho de localização no mapa. O marcador e abre um popup
L.marker([-14.9285358,13.5044904],{icon})
.addTo(map)
.bindPopup(popup)
    