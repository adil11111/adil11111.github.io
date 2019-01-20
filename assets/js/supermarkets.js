var map;
var mapDiv = document.getElementById('map');
var supermarkets;

function initMap() {
    loc = {
        lat: 40.76726143233122,
        lng: -73.93273473583793
    };

    map = new google.maps.Map(mapDiv, {
        zoom: 12,
        center: loc,
        mapTypeId: 'roadmap',
        keyboardShortcuts: false,
        zoomControl: true,
        disableDefaultUI: true
    });

    supermarkets = [
        new google.maps.Marker( {
            position: {lat: 40.8049741, lng: -73.9593299},
            map: map,
            title: 'Hitham Supermarket'
        }),
        new google.maps.Marker( {
            position: {lat: 40.7180565, lng: -73.9968762},
            map: map,
            title: 'Tan Tin-Hung Supermarket'
        }),
        new google.maps.Marker( {
            position: {lat: 40.7646114, lng: -73.989113},
            map: map,
            title: 'Stiles Farmers Market'
        }),
        new google.maps.Marker( {
            position: {lat: 40.7176573, lng: -73.9981301},
            map: map,
            title: 'Hong Kong Supermarket'
        }),
        new google.maps.Marker( {
            position: {lat: 40.7307288, lng: -73.9525199},
            map: map,
            title: 'Point View Deli'
        }),
        new google.maps.Marker( {
            position: {lat: 40.7304476, lng: -73.9535566},
            map: map,
            title: 'Key Food'
        }),
        new google.maps.Marker( {
            position: {lat: 40.640434,lng: -73.9876636},
            map: map,
            title: 'KRM Kollel Supermarket'
        }),
        new google.maps.Marker( {
            position: {lat: 40.7522809, lng: -73.9234615},
            map: map,
            title: 'Food Bazaar Supermarket'
        }),
        new google.maps.Marker( {
            position: {lat: 40.752377, lng: -73.9184258},
            map: map,
            title: 'National Wholesale Liquidators'
        }),
        new google.maps.Marker( {
            position: {lat: 40.7408275, lng: -73.904224},
            map: map,
            title: 'Dollar Tree'
        }),
        new google.maps.Marker( {
            position: {lat: 40.79539, lng: -73.9332109},
            map: map,
            title: 'Aldi'
        }),
        new google.maps.Marker( {
            position: {lat: 40.8359737, lng: -73.9460173},
            map: map,
            title: 'Foodtown'
        }),
        new google.maps.Marker( {
            position: {lat: 40.8797936, lng: -73.9095935},
            map: map,
            title: 'Kingsbridge-Riverdale Farmer\'s Market'
        }),
    ];
}

function focusOn(i) {
    var pos = {lat: supermarkets[i].position.lat(), lng: supermarkets[i].position.lng()};
    console.log(pos);
    map.setCenter(pos);
    map.setZoom(17);
    window.scrollTo(0, mapDiv.offsetTop - 100);
}
