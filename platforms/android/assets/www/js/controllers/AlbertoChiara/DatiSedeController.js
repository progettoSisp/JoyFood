myApp.controller('datiSedeController', function($scope,$http,donazioniService,$timeout) {
	$scope.map1;
	$scope.sede=donazioniService.getSede();	  
    $scope.carrelli=[];

    $scope.init = function () {
    	var settings = {
      		  "async": true,
      		  "crossDomain": true,
      		  "url": "http://joyfoodamministratore-sisp.rhcloud.com/api/donazioniBySede",
      		  "method": "POST",
      		  "headers": {
      		    "x-auth-token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZWEifQ.yO2HG0apmQhtJ6UqLHGvHwmzeqLex8BmAlwhV6W8XZnlxF46VYPxfi_jmU_7vK0XnWK94lsqy7rq2Wz8U8CNfg",
      		    "content-type": "application/x-www-form-urlencoded",
      		    "cache-control": "no-cache",
      		    "postman-token": "8ef7df35-41df-8364-621e-5c0fdae67e96"
      		  },
      		  "data": {
      		    "idSede": $scope.sede.idSede
      		  }
      		}

      		$.ajax(settings).done(function (response) {
      			console.log(response);
      			  $scope.carrelli=response;
      		});
	}
	
	$scope.init();
	
	$timeout(function(){
		console.log("time");
    	 var latlng = new google.maps.LatLng(donazioniService.getSede().latitudine,donazioniService.getSede().longitudine);
         var myOptions = {
             zoom: 12,
             center: latlng,
             mapTypeId: google.maps.MapTypeId.ROADMAP
         };
    	$scope.map1 = new google.maps.Map(document.getElementById("map_canvas_sede"), myOptions);
    	console.log($scope.map1);
        $scope.overlay1 = new google.maps.OverlayView();
        $scope.overlay1.draw = function() {}; // empty function required
        $scope.overlay1.setMap($scope.map1);
        var marker = new google.maps.Marker({
            position: {lat: donazioniService.getSede().latitudine,lng:donazioniService.getSede().longitudine},
            map: $scope.map1
        });
	},100);
	

});