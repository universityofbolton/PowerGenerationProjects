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
var mrkCurrentLocation;
var popKeenjhar;
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
var companyLogo;
                                    //GeoJSON
var Pakistan;
var lyrThermal;
var lyrHydel;
var lyrSolar;
                                // ICON DEFINITION
// Thermal
var iconThermal = L.icon({
    iconUrl: 'img/Thermal.png',
    iconSize: [15, 15],
    iconAnchor: [5, 5],
    popupAnchor: [5, 5]
});
// Hydel
var iconHydel = L.icon({
    iconUrl: 'img/Hydel.png',
    iconSize: [20, 20],
    iconAnchor: [5, 5],
    popupAnchor: [5, 5]
});
// Solar
var iconSolar = L.icon({
    iconUrl: 'img/Solar.ico',
    iconSize: [20, 20],
    iconAnchor: [5, 5],
    popupAnchor: [5, 5]
});
$(document).ready(function () {
    myMap = L.map('map_div', { center: [30, 70], zoom: 5.499999999 });
    //Zoom Slider
    //ctlZoomSlider = L.control.zoomslider(option = { position: 'topright' }).addTo(myMap);

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
    
                                            //POINT FILES
    //Thermal Power
    lyrThermal = L.geoJSON.ajax('data/ThermalEnergy.geojson', {
        onEachFeature: (feature = {}, layer) => {
            const { properties = {} } = feature;
            const { Name } = properties;
            if (!Name) return;
            layer.bindPopup("<h5>" + properties.Name + "</h5>");
        },
        pointToLayer: function (geoJsonPoint, latlng) {
            return L.marker(latlng, {
                icon: iconThermal
            });
        }
    }).addTo(myMap);
    // Hydro Power
    lyrHydel = L.geoJSON.ajax('data/Hydel.geojson', {
        onEachFeature: (feature = {}, layer) => {
            const { properties = {} } = feature;
            const { Name } = properties;
            if (!Name) return;
            layer.bindPopup("<h5>" + properties.Name + "</h5>");
        },
        pointToLayer: function (geoJsonPoint, latlng) {
            return L.marker(latlng, {
                icon: iconHydel
            });
        }
    }).addTo(myMap);
    // Solar Power
    lyrHydel = L.geoJSON.ajax('data/SolarPower.geojson', {
        onEachFeature: (feature = {}, layer) => {
            const { properties = {} } = feature;
            const { Name } = properties;
            if (!Name) return;
            layer.bindPopup("<h5>" + properties.Name + "</h5>");
        },
        pointToLayer: function (geoJsonPoint, latlng) {
            return L.marker(latlng, {
                icon: iconSolar
            });
        }
    }).addTo(myMap);
    // lyrSuperSix = L.geoJSON.ajax('data/SuperSix.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h5>" + properties.Name + "</h5>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: SuperSix
    //         });
    //     }
    // }).addTo(myMap);
    // lyrCompleteWindProject = L.geoJSON.ajax('data/CompletedWindProject.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h5>" + properties.Name + "</h5>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: complete
    //         });
    //     }
    // }).addTo(myMap);
    // lyrPlannedWindProject = L.geoJSON.ajax('data/PlannedWindProject.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h5>" + properties.Name + "</h5>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: planned
    //         });
    //     }
    // }).addTo(myMap);
    // lyrUnderConsWindProject = L.geoJSON.ajax('data/UnderConstruction.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h5>" + properties.Name + "</h5>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: undercons
    //         });
    //     }
    // }).addTo(myMap);
    // //Protected Area Point
    // lyrBirdArea = L.geoJSON.ajax('data/birdarea.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { NATIONAL_N } = properties;
    //         if (!NATIONAL_N) return;
    //         layer.bindPopup("<h5>" + properties.NATIONAL_N + "</h5>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: areabird
    //         });
    //     }
    // }).addTo(myMap);
    // lyrGameReserve = L.geoJSON.ajax('data/gamereserve.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h5>" + properties.Name + "</h5>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: greserve
    //         });
    //     }
    // }).addTo(myMap);
    // lyrNationalPark = L.geoJSON.ajax('data/nationalpark.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h5>" + properties.Name + "</h5>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: park
    //         });
    //     }
    // }).addTo(myMap);
    // lyrWildLife = L.geoJSON.ajax('data/wildlife.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h5>" + properties.Name + "</h5>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: wsanctuary
    //         });
    //     }
    // }).addTo(myMap);

                                        //Receptors
    // lyrBatCave = L.geoJSON.ajax('data/BatCaves.json', {
    //     style: function (feature) {
    //         return {
    //             weight: 0.5
    //         }
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: bcave
    //         });
    //     },
    // }).addTo(myMap);
    // lyrBirdNest = L.geoJSON.ajax('data/BirdNest.json', {
    //     style: function (feature) {
    //         return {
    //             weight: 0.5
    //         }
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: bnest
    //         });
    //     },
    // }).addTo(myMap);
    // lyrGuggulPlant = L.geoJSON.ajax('data/GugalPlant.json', {
    //     style: function (feature) {
    //         return {
    //             weight: 0.5
    //         }
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: gplant
    //         });
    //     },
    // }).addTo(myMap);

                                        //Cities and Villages
    // lyrCity = L.geoJSON.ajax('data/city.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h6>" + properties.Name + "</h6>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: citi
    //         });
    //     }
    // });
    // lyrVillage = L.geoJSON.ajax('data/town.json', {
    //     onEachFeature: (feature = {}, layer) => {
    //         const { properties = {} } = feature;
    //         const { Name } = properties;
    //         if (!Name) return;
    //         layer.bindPopup("<h7>" + properties.Name + "</h7>");
    //     },
    //     pointToLayer: function (geoJsonPoint, latlng) {
    //         return L.marker(latlng, {
    //             icon: vil
    //         });
    //     }
    // });
    // //Road and Tracks
    // lyrMotorway = L.geoJSON.ajax('data/MotorwayM9.json', {
    //     style: {
    //         color: "#FFFF64",
    //         weight: 3
    //     }
    // });
    // lyrHighway = L.geoJSON.ajax('data/Highway.json', {
    //     style: {
    //         color: "white",
    //         weight: 4,
    //     }
    // });
    // lyrSealed = L.geoJSON.ajax('data/SealedRoads.json', {
    //     style: {
    //         color: "white",
    //         weight: 2
    //     }
    // });
    // lyrUnsealed = L.geoJSON.ajax('data/UnsealedRoad.json', {
    //     style: {
    //         color: "white",
    //         weight: 2,
    //         dashArray: '7,14',
    //     }
    // }).addTo(myMap);
    // lyrCompacted = L.geoJSON.ajax('data/CompactedRoad.json', {
    //     style: {
    //         color: "white",
    //         weight: 2,
    //         dashArray: '3,6',
    //     }
    // }).addTo(myMap);
    //Spatial Boundary
    // lyrSpatialBoundary = L.geoJSON.ajax('data/SpatialBoundary.json', {
    //     style: {
    //         fillcolor: '0',
    //         fillOpacity: '0',
    //         color: 'black',
    //     },
    // }).addTo(myMap);
    Overlay1 = {
        "Thermal Power Projects" : lyrThermal,
        "Hydro Power Projects" : lyrHydel,
    }
    L.control.layers(baselayers, Overlay1).addTo(myMap);

    //Draw Group
    fDrawGroup = new L.featureGroup().addTo(myMap);

    //Pan Buttons
    //ctlPan = L.control.pan().addTo(myMap);


    //Mouse Control Position
    //ctlMousePosition = L.control.mousePosition().addTo(myMap);

    //EasyButton
    // ctlEasyButton = L.easyButton('fa fa-location-arrow', function () {
    //     myMap.locate();
    // }).addTo(myMap);

    //MeasureDistance
    ctlMeasure = L.control.polylineMeasure().addTo(myMap);
    //SideBar
    // ctlSideBar = L.control.sidebar(placeholder = 'side-bar').addTo(myMap);
    // ctlEasyButton = L.easyButton('fa fa-align-justify', function () {
    //     ctlSideBar.toggle();
    // }).addTo(myMap);

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
                                    //logo and company name
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

    //EVENTS
    //left click
    //myMap.on('click', function (e) {
    //alert(e.latlng.toString());
    //});

    //right click
    // myMap.on('contextmenu', function (e) {
    // L.marker(e.latlng).addTo(myMap).bindPopup(e.latlng.toString());
    // })
    //call locate method
    // myMap.on('keypress', function (e) {
    //     if (e.originalEvent.key = 'l') {
    //         myMap.locate();
    //     }
    // })
    // myMap.on('locationfound', function (e) {
    //     if (mrkCurrentLocation) {
    //         mrkCurrentLocation.remove();
    //     }
    //     mrkCurrentLocation = L.circleMarker(e.latlng).addTo(myMap);
    //     myMap.setView(e.latlng, 14);
    // })
    // myMap.on('locationerror', function (e) {
    //     alert("location is not found");
    // })
    // get user location button

    // $('#get_user_location_id').click(function () {
    //     myMap.locate();
    // })
    //get_specific_location
    // $('#go_to_id').click(function () {
    //     myMap.setView([24.967385, 68.03627], 12)
    //     myMap.openPopup(popKeenjhar);
    // })
    //get_zoom_level
    // myMap.on('zoomend', function () {
    //     $("#zoom_level_id").html(myMap.getZoom());
    // })
    //get map center
    // myMap.on('moveend', function (e) {
    //     $('#map_center_id').html(lat_lng_to_string(myMap.getCenter()));
    // })
    //get_mouse_location
   //myMap.on('mousemove', function (e) {
        //$('#mouse_location_id').html(lat_lng_to_string(e.latlng));
    //})

    //custom function
    // function lat_lng_to_string(ll) {
    //     return "[" + ll.lat.toFixed(fractionDigits = 3) + ", " + ll.lng.toFixed(fractionDigits = 3) + "]";
    // }
})
