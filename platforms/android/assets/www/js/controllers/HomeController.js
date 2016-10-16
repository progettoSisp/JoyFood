
myApp.controller('homeController', function($scope,$http, $timeout) {
	var data;
	var db; 
	var map;
	 $scope.map;
     $scope.markers = [];
     $scope.markerId = 1;
     
     ons.ready(function() {
    	 navigator.geolocation.getCurrentPosition(onSuccess,onError);
    });
     
     
     function onSuccess(position) {
    	   console.log('Latitude: '          + position.coords.latitude          + '\n' +
    	          'Longitude: '         + position.coords.longitude         + '\n' +
    	          'Altitude: '          + position.coords.altitude          + '\n' +
    	          'Accuracy: '          + position.coords.accuracy          + '\n' +
    	          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    	          'Heading: '           + position.coords.heading           + '\n' +
    	          'Speed: '             + position.coords.speed             + '\n' +
    	          'Timestamp: '         + position.timestamp                + '\n');
    	};

    	// onError Callback receives a PositionError object
    	//
    	function onError(error) {
    	   console.log('code: '    + error.code    + '\n' +
    	          'message: ' + error.message + '\n');
    	}
     
     //Map initialization  
	$timeout(function(){
		
        var latlng = new google.maps.LatLng(45.484150, 9.200465);
        var myOptions = {
            zoom: 12,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $scope.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
        $scope.overlay = new google.maps.OverlayView();
        $scope.overlay.draw = function() {}; // empty function required
        $scope.overlay.setMap($scope.map);
        $scope.element = document.getElementById('map_canvas');
        $http.get("https://joyfoodamministratore-sisp.rhcloud.com/listAllSedi")
        .then(function(response) {
             data = response.data;
            if(data){
            	console.log(data);
            		for(var i=0;i<data.length;i++){
            			if(data[i].cordinateGpsSede){
            				console.log(data[i].cordinateGpsSede);
            				  var partsOfStr = data[i].cordinateGpsSede.split(',');
            				  var point = new google.maps.Point(parseInt(partsOfStr[0]), parseInt(partsOfStr[1]));
            		            var coordinates = $scope.overlay.getProjection().fromContainerPixelToLatLng(point);

            		            var marker = new google.maps.Marker({
            		                position: coordinates,
            		                map: $scope.map
            		            });

            		            marker.id = $scope.markerId;
            		            $scope.markerId++;
            		            $scope.markers.push(marker);

            			}
            			
            			
            		}
            }else{
                console.log("LOGIN "+response.data.error);
            }
           
	  });
    },100);
	
});