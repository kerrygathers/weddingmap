(function () {

    var options = {
        center: [40.687, -73.976],
        zoom: 14.1,
        zoomSnap: .1,
        zoomControl: false
    }

    var map = L.map('map', options);

    // Add map tiles
    var tiles = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });

    tiles.addTo(map);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    /*
    var csvData = omnivore.csv('data/itinerary.csv')
        .on('ready', function (e) {
            drawMap(e.target.toGeoJSON());
        })
        .on('error', function (e) {
            console.log(e.error[0].message);
        });


    function drawMap(tripStops) {

        var options = {
            pointToLayer: function (feature, latlng) {

                var icon = L.icon({
                    iconUrl: "./icons/site.svg",
                    iconSize: [18, 18],
                    popupAnchor: [-22, -22],
                    className: "icon"
                });

                return L.marker(latlng, {
                    icon: icon
                });
            },
            onEachFeature: function (feature, layer) {

                layer.bindTooltip("<p class='tooltip-title'>" + feature.properties.site + "</p>" +
                    "<p class='tooltip-sub'>" + feature.properties.place + ", " + feature.properties.country + "</p>");

                layer.on({
                    click: closeIntro
                });
            }
        }

        var tripStops = L.geoJson(tripStops, options).addTo(map);

    }


            // populate HTML elements with relevant info
            $(".site-title span:first-child").html(props.site);

            // populate HTML elements with relevant info
            $(".site-subtitle span:first-child").html(props.place + ", " + props.country);

        })
    }

*/


})();
