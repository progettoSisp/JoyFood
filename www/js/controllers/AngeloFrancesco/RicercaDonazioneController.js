myApp.controller('ricercaDonazioneController', function($scope,$http,localDbService, $timeout,remoteApiService,filtriService) {
	$scope.opzioni="Più Opzioni";
	$scope.goOpzioni = false;



	$scope.groups= [{key:"tipo", values: [{ "name": "Carne","id": "01"},{ "name": "Pesce","id": "02"},{ "name": "Frutta","id": "03"}]},
	                {key:"classificazione",values: [{"name": "Vegano","id": "01"},{"name": "Celiaco","id": "02"},{"name": "Vegetariano","id": "03"}]},
	                {key:"allergene",values: [{"name": "Mais","id": "01"},{"name": "Latteria","id": "02"}]}
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


	$scope.richiesta={};
	

	$scope.ricerca=function(){
		$scope.richiesta={};
		//console.log(richiesta.pippo);
	
		$scope.valori=$("form.ricerca-form").serialize();
		

		console.log($scope.valori);

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
	
	//console.log($scope.formData);
		remoteApiService.ricercaDonazione($scope.valori).then(function (risultato) {
			
			console.log(risultato);
		});

	}
});