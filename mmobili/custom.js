$(function () {

    function initMap() {

        var location = new google.maps.LatLng(42.679982, 23.311475);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
            '<h3>MMOBILI CLASSIC FURNITURE SHOWROOM</h3>' +
            '<h4>(1408 "Vitosha" blvd. №150) </h4>' +
            '<div class="info-content">' +
            '<p>Mmobili is a trademark with long lasting history and experience in the furniture manufacturing.</p>' +
            '<p>The company makes furniture from natural materials- solid and veneered panel, in Italian classical style, which is preferred by people with exquisite taste both here and abroad.</p>' +
            '<p>Mmobili offers a variety of different finishes and furniture decorations. Hand-aging, painting and other more specific art techniques.</p>' +
            '<p>The original Mmobili Decorati ideas are treated with a special finishing that mimics surface crackings. They are hand painted by artists with motifs of flowers, landscapes etc., which adds artistry and charm to any interior.</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        var styles= [{"position":"center"}];

        map.set('styles', styles);


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});