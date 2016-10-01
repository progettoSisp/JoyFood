
myApp.controller('dettaglioProdottoController', function($scope,$http) { 

	console.log("Onsen UI is ready! 1 ");
	

		console.log("Onsen UI is ready! 2");
	
		
		// $http.get("https://joyfoodamministratore-sisp.rhcloud.com/login?user="+$scope.field1+"&password="+$scope.field2)
		 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/detailProduct?id=1")
	    
		.then(function(response) {
		$scope.myData = response.data;
		console.log(response.data);
		 if($scope.myData){
			 $scope.image=response.data.immagine;
			 console.log("ciao");
			 $scope.id=response.data.id;
			 $scope.nome = response.data.nome;
			 $scope.descrizione = response.data.descrizione;
			 $scope.descrizioneEstesa = response.data.descrizioneEstesa;
			 $scope.sottocategoria = response.data.sottocategoria;
			 $scope.classificazione = response.data.classificazione;
			 $scope.tipologia = response.data.tipologia;
			 $scope.allergene = response.data.allergene;
			 $scope.datacreazione = response.data.dataCreazione;
			 }
		 
		 });

});   
	



