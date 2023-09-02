var myMap;
var osm;
var OpenTopoMap;
var googleStreet;
var googleSatellite;
var googleTerrain;
var googleHybrid;
var baselayers;
var Overlay1;
var UniName;
var ctlPan;
var ctlZoomSlider;
var ctlMousePosition;
var ctlMeasure;
var ctlEasyButton;
var ctlSideBar;
var ctlDraw;
var fDrawGroup;
var ctlStyle;
var mapScale;
var searchLayer;
var zoomHome;
                                    //Markers
var Uch;
var Hub;
var KAPCO;
var BQPS;
var KPC;
var JAM;
var HUBCO;
var ENG;
var THAR;
var PAT;
var ARK;
var GUL;
var DAS;
var AZD;
var TAR;
var JHM;
var WDF;
var HAWA;
var ZOR;
var TBT;
var HHM;
var ZNFA;
var ZLU;
var KCH1;
var KCH2;
//GeoJSON
var Pakistan;
                                // ICON DEFINITION....
// Thermal
var iconThermal = L.icon({
    iconUrl: 'img/Thermal.png',
    iconSize: [18, 18],
    iconAnchor: [5, 5],
    popupAnchor: [5, 5]
});
// Hydel
var iconHydel = L.icon({
    iconUrl: 'img/Hydel1.png',
    iconSize: [15, 15],
    iconAnchor: [5, 5],
    popupAnchor: [5, 5]
});
// Wind
var iconWind = L.icon({
    iconUrl: 'img/Wind.png',
    iconSize: [15, 15],
    iconAnchor: [5, 5],
    popupAnchor: [5, 5]
});
// Solar
var iconSolar = L.icon({
    iconUrl: 'img/Solar.png',
    iconSize: [18, 18],
    iconAnchor: [5, 5],
    popupAnchor: [5, 5]
});
$(document).ready(function () {
    myMap = L.map('map_div', { center: [30, 70], zoom: 5.499999999, zoomControl: false });

    //BASEMAPS
    //osm layer
    osm = L.tileLayer.provider(provider = 'OpenStreetMap.Mapnik');
    //Open Topograhic Map
    OpenTopoMap = L.tileLayer.provider(provider = 'OpenTopoMap');
    //google street
    googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    myMap.addLayer(googleStreet);
    //google satellite
    googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    //Google Terrain
    googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    //google hybrid
    googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    //LAYER CONTROL
    baselayers = {
        "Open Street Map Layer": osm,
        "Open Topograhic Layer": OpenTopoMap,
        "Google Street Layer": googleStreet,
        "Google Satellite Layer": googleSatellite,
        "Google Terrain Layer": googleTerrain,
        "Google Hybrid Layer": googleHybrid,

    }
                                        //POLYGONS FILES
    
    //Pakistan Admin
    Pakistan = L.geoJSON.ajax('data/PAK_adm0.geojson', {
        style: function (feature) {
            return {
                color: "#000000",
                 weight: '1',
                 fillColor: '#E1E1E1',
                 fillOpacity: 0
            };
        },
    }).addTo(myMap);
                                            //Thermal Technology
    Uch = L.marker([28.582, 68.172],{
        icon: iconThermal,
        title: "UCH-II Power Project"
    }).addTo(myMap).bindPopup('<img src = "./img/UCH.PNG" style = "width: 300px">')
    Hub = L.marker([24.919, 66.689],{
        icon: iconThermal,
        title: "660 MW Coal-Fired Power Plant"
    }).addTo(myMap).bindPopup('<img src = "./img/HUB.PNG" style = "width: 300px">')
    KAPCO = L.marker([30.147, 71.023],{
        icon: iconThermal,
        title: "KAPCO 660 MW Coal-Fired Power Plant"
    }).addTo(myMap).bindPopup('<img src = "./img/KAPCO.PNG" style = "width: 300px">')
    BQPS = L.marker([24.789, 67.360],{
        icon: iconThermal,
        title: "BQPS-III 900 MW RLNG Based Combined Cycle Power Project"
    }).addTo(myMap).bindPopup('<img src = "./img/BQPS.PNG" style = "width: 300px">')
    KPC = L.marker([24.856, 67.155],{
        icon: iconThermal,
        title: "Dual-Fuel Combined Cycle Power Plant KPC-II"
    }).addTo(myMap).bindPopup('<img src = "./img/KPC.PNG" style = "width: 300px">')
    JAM = L.marker([25.474, 68.267],{
        icon: iconThermal,
        title: "Jamshoro Power Generation Project"
    }).addTo(myMap).bindPopup('<img src = "./img/JAM.PNG" style = "width: 300px">')
    HUBCO = L.marker([24.908, 66.695],{
        icon: iconThermal,
        title: "HUBCO Thar Coal Power Project"
    }).addTo(myMap).bindPopup('<img src = "./img/HUBCO.PNG" style = "width: 300px">')
    ENG = L.marker([24.791, 67.378],{
        icon: iconThermal,
        title: "Engro Powergen Limited 450 MW RLNG CCPP"
    }).addTo(myMap).bindPopup('<img src = "./img/ENG.PNG" style = "width: 300px">')
    THAR = L.marker([24.816, 70.391],{
        icon: iconThermal,
        title: "Coal-Fired Power Plant in Energy Park, Block II Thar Coalfields"
    }).addTo(myMap).bindPopup('<img src = "./img/THAR.PNG" style = "width: 300px">')
                                        //Hydropower
    PAT = L.marker([34.342, 73.429],{
        icon: iconHydel,
        title: "Patrind Hydropower Project"
    }).addTo(myMap).bindPopup('<img src = "./img/PAT.PNG" style = "width: 300px">')
    ARK = L.marker([36.026, 71.737],{
        icon: iconHydel,
        title: "Arkari Gol Hydropower Project"
    }).addTo(myMap).bindPopup('<img src = "./img/ARK.PNG" style = "width: 300px">')
    GUL = L.marker([33.455, 73.863],{
        icon: iconHydel,
        title: "Gulpur Hydropower Project"
    }).addTo(myMap).bindPopup('<img src = "./img/GUL.PNG" style = "width: 300px">')
    DAS = L.marker([35.301, 73.203],{
        icon: iconHydel,
        title: "Dasu Hydropower Project"
    }).addTo(myMap).bindPopup('<img src = "./img/DAS.PNG" style = "width: 300px">')
    AZD = L.marker([33.76775000, 73.57151389],{
        icon: iconHydel,
        title: "Azad Pattan Hydropower Project"
    }).addTo(myMap).bindPopup('<img src = "./img/AZD.PNG" style = "width: 300px">')
    TAR = L.marker([34.088, 72.699],{
        icon: iconHydel,
        title: "Tarbela 5th Extension Hydropower Project"
    }).addTo(myMap).bindPopup('<img src = "./img/TAR.PNG" style = "width: 300px">')
                                        //Wind Power
    JHM = L.marker([25.164, 68.007],{
        icon: iconWind,
        title: "Wind Power Project Jhimpir Power (Pvt.) Limited"
    }).addTo(myMap).bindPopup('<img src = "./img/JHM.PNG" style = "width: 300px">')
    WDF = L.marker([24.919, 67.805],{
        icon: iconWind,
        title: "Windfarm At Jhimpir"
    }).addTo(myMap).bindPopup('<img src = "./img/WDF.PNG" style = "width: 300px">')
    HAWA = L.marker([25.255, 67.979],{
        icon: iconWind,
        title: "Hawa Energy (Pvt.) Ltd"
    }).addTo(myMap).bindPopup('<img src = "./img/HAWA.PNG" style = "width: 300px">')
    ZOR = L.marker([25.042, 67.996],{
        icon: iconWind,
        title: "Zorlu Enerji"
    }).addTo(myMap).bindPopup('<img src = "./img/ZOR.PNG" style = "width: 300px">')
    TBT = L.marker([25.013, 67.852],{
        icon: iconWind,
        title: "Triconboston Wind Power Project"
    }).addTo(myMap).bindPopup('<img src = "./img/TBT.PNG" style = "width: 300px">')
                                        //Solar Power
    HHM = L.marker([27.419, 69.007],{
        icon: iconSolar,
        title: "Scatec Solar Power Project"
    }).addTo(myMap).bindPopup('<img src = "./img/HHM.PNG" style = "width: 300px">')
    ZNFA = L.marker([30.903, 71.560],{
        icon: iconSolar,
        title: "Atlas Solar Power Project"
    }).addTo(myMap).bindPopup('<img src = "./img/ZNFA.PNG" style = "width: 300px">')
    ZLU = L.marker([29.281, 71.789],{
        icon: iconSolar,
        title: "Zorlu Solar Pakistan (Pvt.) Ltd"
    }).addTo(myMap).bindPopup('<img src = "./img/ZLU.PNG" style = "width: 300px">')
    KCH1 = L.marker([30.435, 66.920],{
        icon: iconSolar,
        title: "Solar PV Power Project Kuchlak-II & III"
    }).addTo(myMap).bindPopup('<img src = "./img/KCH1.PNG" style = "width: 300px">')
    // KCH2 = L.marker([30.435, 66.920],{icon: iconSolar
    // }).addTo(myMap).bindPopup('<img src = "./img/KCH2.JPG" style = "width: 300px">')
    //Overlay
    L.control.layers(baselayers).addTo(myMap);
    //Home Button
    zoomHome = L.Control.zoomHome();
    zoomHome.addTo(myMap);

    //Draw Group
    fDrawGroup = new L.featureGroup().addTo(myMap);
    //Draw Features on Map
    ctlDraw = new L.Control.Draw({
        edit: {
            featureGroup: fDrawGroup
        }
    });
    ctlDraw.addTo(myMap);
    myMap.on('draw:created', function (e) {
        fDrawGroup.addLayer(e.layer)
    });
    ctlStyle = L.control.styleEditor(option = { position: 'topleft' }).addTo(myMap);
                                        // Scale
    mapScale =  L.control.scale().addTo(myMap);
                                    //logo and UniName
    L.Control.Watermark = L.Control.extend({
        onAdd: function (map) {
            var img = L.DomUtil.create('img');
            img.src = 'img/UOB.jpg';
            img.style.width = '150px';
            return img;
        },
    });
    L.control.Watermark = function (opts) {
        return new L.Control.Watermark(opts);
    }
    L.control.Watermark({ position: 'bottomright' }).addTo(myMap);
    L.Control.geocoder().addTo(myMap);
})
