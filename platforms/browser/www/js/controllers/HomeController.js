
myApp.controller('homeController', function($scope,$http, $timeout,remoteAppService,userService) {
	var data;
	var db; 
	var map;
	var sedi;
	$scope.map;
    $scope.markers = [];
    $scope.markerId = 1;
    $scope.sedi;
    $scope.view;
    
	$scope.init = function () {
		$scope.view=userService.getView();
	}
	
	$scope.centerMap = function(){
		console.log("CENTER");
		$scope.map.setCenter({lat: 45.484150, lng: 9.200465}); 
	}
	
	$scope.init();
    
    $scope.changeView= function(){
    	console.log("HOME")
    	userService.changeView();
    	$scope.view=userService.getView();
    }
     
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
        remoteAppService.getAllSedi().then(function(response) {
        	console.log("RESPONSE");
        console.log(response);
        $scope.sedi=response;
             data = response;
            if(data){
            	console.log(data);
            		for(var i=0;i<data.length;i++){
            			console.log("CICLO");
            			console.log(data[i]);
            			if(data[i].longitudine && data[i].latitudine ){
            				console.log(data[i].longitudine+" "+data[i].latitudine);
            				console.log(point);
            				  var point = new google.maps.Point(data[i].longitudine, data[i].latitudine);
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