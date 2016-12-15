myApp.controller('ricercaDonazioneController', function($scope,$http,localDbService, $timeout,remoteApiService,filtriService) {
	$scope.opzioni="Più Opzioni";
	$scope.goOpzioni = false;
	$scope.carrelli=[];


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

	/*
  $timeout(callAtTimeout, 0);

   function callAtTimeout() {




	   filtriService.Init();
		                  console.log(filtriService.getTipo() );
		                  console.log(filtriService.getClassificazione());
		                  console.log(filtriService.getAllergene());
	   $scope.groups= [{key:"Tipo", values: filtriService.getTipo() },
		               {key:"Classificazione",values: filtriService.getClassificazione()},
		               {key:"Allergeni",values:filtriService.getAllergene()}
		               ];   
	 }


	 */

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


	$scope.latitudine;
	$scope.longitudine;
	$scope.indirizzo;
	
	
	$scope.ricerca=function(){
	
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
		
		
		
		
		 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllCarrelli")
         .then(function(response) {
        	$scope.carrelli=response;
        	myNavigator.pushPage("html/AngeloFrancesco/risultati_ricerca_donazione.html")
            console.log(response.data);
         },function(response) {
        	 console.log(response);
         });
	
		
//	    for (i=0; i<$scope.valori.length; i++){
//	    	
//	    //	$scope.key=$scope.valori[i].name;
//	    	console.log($scope.key);
//	    	$scope.richiesta[$scope.key].setValue($scope.valori[i].value);
//	    	
//	    }
//	 
//	   console.log($scope.richiesta);
	   //console.log(filtriService.getClassificazione());
	   //$scope.formData = JSON.parse($("form.ricerca-form").serializeArray());
	
	
	/*	remoteApiService.ricercaDonazione($scope.valori).then(function (risultato) {
			
			console.log(risultato);
		});*/

	}
});