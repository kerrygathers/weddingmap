(function () {

        var options = {
            center: [40.687, -73.976],
            zoom: 14.1,
            zoomSnap: .5,
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


        var csvData = omnivore.csv('data/places.csv')
            .on('ready', function (e) {
                drawMap(e.target.toGeoJSON());
            })
            .on('error', function (e) {
                console.log(e.error[0].message);
            });


        function drawMap(places) {


            var options = {
                pointToLayer: function (feature, latlng) {

                    if (feature.properties.type == "event") {

                        var icon = L.icon({
                            iconUrl: feature.properties.icon,
                            iconSize: [21, 21],
                            popupAnchor: [-0, -0],
                            className: "icon-event"
                        });
                    }

                    if (feature.properties.type != "event") {

                        var icon = L.icon({
                            iconUrl: feature.properties.icon,
                            iconSize: [18, 18],
                            popupAnchor: [-0, -0],
                            className: "icon-event"
                        });
                    }

                    return L.marker(latlng, {
                        icon: icon
                    });
                },
                onEachFeature: function (feature, layer) {

                    var props = feature.properties;

                    layer.bindPopup("<p class='tooltip-title'>" + props.name + " <a href='" + props.website + "' target='_blank'>" + " <svg class='icon popup-link'><use xlink:href='#icon-globe'/></svg></a></p>" + "<p class='tooltip-body'>" + props.address + " <a href='" + props.directions + "' target='_blank'>" + "<svg class='icon popup-link'><use xlink:href='#icon-bear-right'/></svg></a></p>" + "<p class='tooltip-body'>" + props.notes + "</p>");
                }

            }

            var places = L.geoJson(places, options).addTo(map);

        }

        var unionZoom = document.getElementById('union');

        unionZoom.onclick = function () {

            var latlng = L.latLng(40.6799227, -73.9891736);

            map.setView(latlng, 15);

            var popup = L.popup()
                .setLatLng(latlng)
                .setContent("<p class='tooltip-title'>501 Union <a href='http://www.501union.com/' target='_blank'> <svg class='icon popup-link'><use xlink:href='#icon-globe'/></svg></a></p><p class='tooltip-body'>501 Union St <a href='https://www.google.com/maps/dir/?saddr=&daddr=501+Union+St+Brooklyn+NY' target='_blank'><svg class='icon popup-link'><use xlink:href='#icon-bear-right'/></svg></a></p><p class='tooltip-body'></p>")
                .openOn(map);
        }

        var sistersZoom = document.getElementById('sisters');

        sistersZoom.onclick = function () {

            var latlng = L.latLng(40.6829068, -73.9653217);

            map.setView(latlng, 15);

            var popup = L.popup()
                .setLatLng(latlng)
                .setContent("<p class='tooltip-title'>Sisters <a href='http://sistersbklyn.com/' target='_blank'> <svg class='icon popup-link'><use xlink:href='#icon-globe'/></svg></a></p><p class='tooltip-body'>900 Fulton St <a href='https://www.google.com/maps/dir/?saddr=&daddr=900+Fulton+St+Brooklyn+NY' target='_blank'><svg class='icon popup-link'><use xlink:href='#icon-bear-right'/></svg></a></p><p class='tooltip-body'>The first meal Hallie and Kerry had as residents of Brooklyn was at Sisters, so it's the perfect place to welcome you to the neighborhood.</p>")
                .openOn(map);

        }

        var diveZoom = document.getElementById('dive');

        diveZoom.onclick = function () {

            var latlng = L.latLng(40.686764, -73.9548035);

            map.setView(latlng, 15);

            var popup = L.popup()
                .setLatLng(latlng)
                .setContent("<p class='tooltip-title'>Do or Dive Bar <a href='https://www.royalpalmsshuffle.com/' target='_blank'> <svg class='icon popup-link'><use xlink:href='#icon-globe'/></svg></a></p><p class='tooltip-body'>514 Union St <a href='https://www.google.com/maps/dir/?saddr=&daddr=1108+Bedford+Ave+Brooklyn+NY' target='_blank'><svg class='icon popup-link'><use xlink:href='#icon-bear-right'/></svg></a></p><p class='tooltip-body'>Do or Dive is Rookie 's favorite bar, and not just because it'
                    s the only bar that will
                    let him hang out inside.If you 're in town in time, meet us here on Friday afternoon and try the frozen coffee.</p>")
                        .openOn(map);
                }

            var lavenderZoom = document.getElementById('lavender');

            lavenderZoom.onclick = function () {

                var latlng = L.latLng(40.6786174, -73.9898909);

                map.setView(latlng, 15);

                var popup = L.popup()
                    .setLatLng(latlng)
                    .setContent("<p class='tooltip-title'>Lavender Lake <a href='http://www.lavenderlake.com/' target='_blank'> <svg class='icon popup-link'><use xlink:href='#icon-globe'/></svg></a></p><p class='tooltip-body'>383 Carroll St <a href='https://www.google.com/maps/dir/?saddr=&daddr=383+Carroll+St+Brooklyn+NY' target='_blank'><svg class='icon popup-link'><use xlink:href='#icon-bear-right'/></svg></a></p><p class='tooltip-body'></p>")
                    .openOn(map);

            }



        })();
