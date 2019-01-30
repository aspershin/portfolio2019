var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10
        });
      }

"https://maps.googleapis.com/maps/api/js?key=AIzaSyALKvZu7DcQHR689o1h-jksRfdK9iE3KmY&callback=initMap"