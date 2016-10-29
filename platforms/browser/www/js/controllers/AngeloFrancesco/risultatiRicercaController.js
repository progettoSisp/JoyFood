myApp.controller('risultatiRicercaController', function($scope,$http) {
	
	console.log("risultatiRicercaController");
	//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
	//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"
	 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllCarrelli")
	    
		.then(function(response) {
			//var aaa = response.data[0].denominazioneSede+" "+response.data[1].denominazioneSede;
			$scope.idCarrello = response.data.idCarrello;
			$scope.sede = response.data.sede;
			$scope.titolo = response.data.titolo;
			$scope.codUtente = response.data.codUtente;
			$scope.descrizione = response.data.descrizione;
			$scope.DataInizio = response.data.dataInizio;
			$scope.DataFine = response.data.dataFine;
			$scope.image = response.data.immagine;
			$scope.flagIndivisibile = response.data.flagIndivisibile;
			$scope.note = response.data.note;
			$scope.carrelloProdotto = response.data.carrelloProdottos;
			$scope.richiestas = response.data.richiestas;

//		$scope.myData = response.data.result;
//		
//		 if($scope.myData){
//			 
//			 console.log(cf);
//			
			
			
//			 }
		 
		 });
	 });