myApp.controller('ricercaDonazioneController', function($scope,$http,localDbService, $timeout,remoteApiService,filtriService) {
	$scope.opzioni="Più Opzioni";
	$scope.goOpzioni = false;



	$scope.groups= [{key:"Tipo", values: [{ "name": "Carne","id": "01"},{ "name": "Pesce","id": "02"},{ "name": "Frutta","id": "id_carne"}]},
	                {key:"Classificazione",values: [{"name": "Vegano","id": "id_class_1"},{"name": "Celiaco","id": "id_class_1"},{"name": "Vegetariano","id": "id_class_1"}]},
	                {key:"Allergeni",values: [{"name": "Mais","id": "id_class_1"},{"name": "Latteria","id": "id_class_1"}]}
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


	$scope.ricerca=function(richiesta){

		console.log(richiesta);
		//console.log(filtriService.getClassificazione());	
		remoteApiService.ricercaDonazione(richiesta).then(function (risultato) {
			
			console.log(risultato);
		});

	}
});