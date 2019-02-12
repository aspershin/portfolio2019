  function initMap() {
    var myLatLng = {lat: -25, lng: 131};

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}

// scr="https://maps.googleapis.com/maps/api/js?key=AIzaSyALKvZu7DcQHR689o1h-jksRfdK9iE3KmY&callback=initMap"

    // script(async defer src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap")

console.log('hello from map');