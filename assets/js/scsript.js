

function initMap() {
    var macc = {lat: 51.16675, lng: -0.55323};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: macc}
    );
    var marker = new google.maps.Marker({position: macc, map: map});
}