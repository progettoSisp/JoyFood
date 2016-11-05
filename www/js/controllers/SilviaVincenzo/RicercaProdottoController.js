myApp.controller('ricercaProdottoController', function($scope,$http,localDbService, $timeout,remoteApiService,filtriService) {
	$scope.opzioni="Più Opzioni";
	$scope.goOpzioni = false;



	$scope.groups= [{key:"Tipo", values: [{ "name": "Carne","id": "01"},{ "name": "Pesce","id": "02"},{ "name": "Frutta","id": "03"}]},
	                {key:"Classificazione",values: [{"name": "Vegano","id": "01"},{"name": "Celiaco","id": "02"},{"name": "Vegetariano","id": "03"}]},
	                {key:"Allergene",values: [{"name": "Mais","id": "01"},{"name": "Latteria","id": "02"}]}
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


	$scope.richiesta={};
	

	$scope.ricerca=function(){
		$scope.richiesta={};
		//console.log(richiesta.pippo);
	
		$scope.valori=$("form.ricerca-form").serialize();
		

		console.log($scope.valori);

		remoteApiService.ricercaProdotto($scope.valori).then(function (risultato) {
			
			console.log(risultato);
		});

	}
});