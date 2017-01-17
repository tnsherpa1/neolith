$(function() {
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyB-fuziJ5-UqDxiEcFsfqff2GWZjEQQ1ts&&libraries=places&callback=init";
    document.body.appendChild(script);
});
// CUSTOM JS FILE //
var map; // global map variable
var markers = []; // array to hold map markers
function init() {
  // set some default map details, initial center point, zoom and style
  var mapOptions = {
    center: new google.maps.LatLng(41.850033, -87.6500523),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var geocoder = new google.maps.Geocoder();

//GeoCode to search
  function geocodeAddress(geocoder, resultsMap){
    var address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function(results,status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        map.setZoom(12);
      } else {
      alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  document.getElementById('finder').addEventListener('click', function(){
    geocodeAddress(geocoder, map);
  });

  // create the map and reference the div#map
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // get the dealers via ajax
  // and render them on the map
  renderPlaces();
}

var renderPlaces = function() {
	var infowindow =  new google.maps.InfoWindow({
	    content: ''
	});

	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {

			console.log(response);
			dealers = response;
			// first clear any existing markers, because we will re-add below
			clearMarkers();
			markers = [];
      var bounds = new google.maps.LatLngBounds();
			// now, loop through the dealers and add them as markers to the map
			for(var i=0;i<dealers.length;i++){
				var latLng = {
					lat: dealers[i].location[1],
					lng: dealers[i].location[0]
				};
				// make and place map maker.
        var image = 'https://neolith-countertops.s3.amazonaws.com/images/dealers.png';
				var marker = new google.maps.Marker({
				    map: map,
				    position: latLng,
				    title : dealers[i].title,
            icon: image
				});
        bindInfoWindow(marker, map, infowindow, dealers[i].title + '<br>' + dealers[i].address);
				// keep track of markers
				markers.push(marker);
        // extending bounds to contain this visible marker position
        bounds.extend( markers[i].getPosition() );
			}
      // setting new bounds to visible markers
      map.fitBounds(bounds);
		}
	});
};

// binds a map marker and infoWindow together on click
var bindInfoWindow = function(marker, map, infowindow, html) {
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(html);
        infowindow.open(map, marker);
    });
};

function clearMarkers(){
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null); // clears the markers
  }
}
