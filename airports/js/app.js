(function () {

    var options = {
        center: [40.696060, -73.955429],
        zoom: 11,
        zoomSnap: .5,
        zoomControl: false,
        doubleClickZoom: false,
        dragging: false,
        boxZoom: false

    }

    var map = L.map('map', options);

    // Add map tiles
    var tiles = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 11,
        maxZoom: 11,
        ext: 'png'
    });

    tiles.addTo(map);


    var csvData = omnivore.csv('data/airports.csv')
        .on('ready', function (e) {
            drawMap(e.target.toGeoJSON());
        })
        .on('error', function (e) {
            console.log(e.error[0].message);
        });


    function drawMap(places) {


        var options = {
            pointToLayer: function (feature, latlng) {

                var icon = L.icon({
                    iconUrl: feature.properties.icon,
                    iconSize: [21, 21],
                    popupAnchor: [-0, -0],
                    className: "icon-venue"
                });

                return L.marker(latlng, {
                    icon: icon,
                    popupOpen: true
                });
            }
        }

        var places = L.geoJson(places, options).addTo(map);

    }

    L.marker([40.767216, -73.860086], {
        icon: new L.DivIcon({
            className: 'lga',
            html: '<button class="btn round lga">LaGuardia (LGA)</button>'
        })
    }).addTo(map);

    L.marker([40.6392296, -73.7748746], {
        icon: new L.DivIcon({
            className: 'jfk',
            html: '<button class="btn round jfk">JFK</button>'
        })
    }).addTo(map);

    L.marker([40.682595, -74.166924], {
        icon: new L.DivIcon({
            className: 'ewr',
            html: '<button class="btn round ewr">Newark Liberty (EWR)</button>'
        })
    }).addTo(map);

    L.marker([40.6799227, -73.9891736], {
        icon: new L.DivIcon({
            className: 'union',
            html: '<button class="btn round union">501 Union</button>'
        })
    }).addTo(map);


})();
