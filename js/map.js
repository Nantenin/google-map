function initMap() {
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let  Dakar = new google.maps.LatLng(14.7291607, -17.4692926);
    let mapOptions = {
      zoom:14,
      center: Dakar,
      mapId: '1'
    }

    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
    
    const marker = new google.maps.Marker({
      position: Dakar,
      map: map,
    });
  }
  
  function calcRoute() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    let request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
    
  }

  window.initMap = initMap;