
myApp.controller('homeController', function($scope,$http, $timeout,remoteAppService,userService,richiestaService,richiestaDonatoreService) {
	var data;
	var db; 
	var map;
	var sedi;
	var geocoder = new google.maps.Geocoder();
	$scope.map;
    $scope.markers = [];
    $scope.markerId = 1;
    $scope.sedi;
    $scope.view;
    $scope.markerWindow=[];
    var openMarker;
	$scope.init = function () {
		$scope.view=userService.getView();
		$http.post("http://joyfoodamministratore-sisp.rhcloud.com/api/listRichiesta")
		.then(function(response) {
			console.log(response.data);
			richiestaService.saveRichiesta(JSON.parse(response.data));
		});
		
		$http.post("http://joyfoodamministratore-sisp.rhcloud.com/api/listRichiesteRicevute")
		.then(function(response) {
			console.log(response.data);
			richiestaDonatoreService.saveRichiesta(JSON.parse(response.data));
		});
	}
	
	$scope.init();
	
	$scope.inbox=function(){
		if($scope.view){
			myNavigator.pushPage("html/AndreaGianmarco/richieste_ricevute.html");
		}else{
			myNavigator.pushPage("html/AndreaGianmarco/richieste_accettate.html");
		}
	};
	
	$scope.outbox=function(){
		if($scope.view){
			myNavigator.pushPage("html/AndreaGianmarco/donazioni_attive.html");
		}else{
			myNavigator.pushPage("html/AndreaGianmarco/richieste_inviate.html");
		}
	};
	
	$scope.centerMap = function(){
		console.log("CENTER");
		$scope.map.setCenter({lat: 45.484150, lng: 9.200465}); 
	}

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
            		            var contentString = '<div id="content">'+
            		            '<div id="siteNotice">'+
            		            '</div>'+
            		            '<div style="font-weight: 500; line-height: 16px; font-size: 15px; margin-bottom: 6px;">'+data[i].azienda.denominazione+'<br>'+data[i].denominazioneSede+'</div>'+
            		            '<div id="bodyContent">'+
            		            '<div  style="font-size: 14px; opacity: 0.4; margin-bottom: 6px;"><i class="fa fa-map-marker"></i>&nbsp'+data[i].indirizzoSede+','+data[i].comuneSede+' '+data[i].provinciaSede+' '+
            		            '</div></div>'+
            		            '</div>'+
            		            '</div>';

            		            var infowindow = new google.maps.InfoWindow({
            		            	content: contentString
            		            });
            		            $scope.markerWindow.splice(marker.id, 0, infowindow);
            		            marker.addListener('click', function() {
            		            	if(openMarker && $scope.markerWindow[openMarker]){
            		            		console.log("MID1 "+openMarker);
            		            		$scope.markerWindow[openMarker].close();
            		            	}
            		            	if($scope.markerWindow[this.id]){
	            		            	console.log("MID2 "+this.id);
	            		            	openMarker=this.id;
	            		            	$scope.map.setCenter(this.position); 
	            		            	$scope.markerWindow[this.id].open(map, this);
            		            	}
            		            });
            		            $scope.markerId++;
            		            $scope.markers.push(marker);   
            			}
            		}
            		console.log($scope.markers);
            		console.log($scope.markerWindow);
            }else{
                console.log("LOGIN "+response.data.error);
            }

	  });
    },100);

});