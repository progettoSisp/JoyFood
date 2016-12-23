myApp.controller('ricercaDonazioneController', function($scope,$http,localDbService, $timeout,remoteApiService,filtriService,ricercaService) {
	$scope.opzioni="Più Opzioni";
	$scope.goOpzioni = false;
	$scope.carrelli=[];
	$scope.dialog;
	$scope.latitudine;
	$scope.longitudine;
	$scope.indirizzo;
	$scope.groups= [{key:"tipo", values: [{ "name": "Carne","id": "1"},{ "name": "Pesce","id": "2"},{ "name": "Frutta","id": "3"}]},
	                {key:"classificazione",values: [{"name": "Vegano","id": "1"},{"name": "Celiaco","id": "2"},{"name": "Vegetariano","id": "3"}]},
	                {key:"allergene",values: [{"name": "Mais","id": "1"},{"name": "Latteria","id": "2"}]}
	                ];

	$scope.load = function(page) {
		$scope.mySplitterContent.load(page)
	}
	
	$scope.open = function() {
		$scope.mySplitterSide.open();
	} 

	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.toggleoptions = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};

	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};

	ons.ready(function() {
	       console.log("YEAU");
	       ons.createDialog('loader.html',{parentScope: $scope}).then(function(dialog) {
	  		 $scope.dialog=dialog;
	  	 	});
	      });
	
	$scope.ricerca=function(){
		$scope.$parent.dialog.show();
		$scope.valori=$("form.ricerca-form").serialize();
		var request = {	
				'address': $scope.indirizzo
		};
		geocoder = new google.maps.Geocoder();
		geocoder.geocode(request, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				$scope.latitudine = results[0].geometry.location.lat();
				$scope.longitudine = results[0].geometry.location.lng();
				console.log("Latitudine = "+$scope.latitudine);
				console.log("Longitudine = "+$scope.longitudine);
				$scope.valori= ($scope.valori+"&latitudine="+$scope.latitudine+"&longitudine="+$scope.longitudine);
				console.log($scope.valori);
			}
			
		});
		console.log($scope.valori);
		var settings = {
		          "url": "https://joyfoodamministratore-sisp.rhcloud.com/api/ricercaDonazione",
		          "method": "POST",
		          "headers": {
		            "content-type": "application/x-www-form-urlencoded",
		          },
		          "data": $scope.valori
		          };
		        $http(settings)
		            .then(function(response) {
		            	ricercaService.saveRicerca(response.data);
		            	$scope.$parent.dialog.hide();
		            	myNavigator.pushPage("html/AngeloFrancesco/risultati_ricerca_donazione.html")
		            }
		           ,function error(response) {
		        	   console.log(response);
		        	   $scope.$parent.dialog.hide();
		           });
	}
});