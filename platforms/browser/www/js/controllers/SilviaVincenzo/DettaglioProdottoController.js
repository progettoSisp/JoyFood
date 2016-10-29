
myApp.controller('dettaglioProdottoController', function($scope,$http,remoteApiService) { 

	console.log("Onsen UI is ready! 1 ");

	$scope.insertProdotto= function(prodotto){
		var prodotto = {};
		prodotto.immagine = "prodotto.immagine";
		prodotto.nome = "prodotto.nome";
		prodotto.descrizione = "prodotto.descrizione";
		prodotto.descrizioneEstesa = "prodotto.descrizioneEstesa";
		prodotto.tipo = "prodotto.tipo";
		prodotto.classificazione = "prodotto.classificazione";
		prodotto.categoria = "prodotto.categoria";
		prodotto.sottocategoria = "prodotto.sottocategoria";
		prodotto.allergene = "prodotto.allergene";

		remoteApiService.detailProdotto(prodotto);
	}

	console.log("Onsen UI is ready! 2");


	// $http.get("https://joyfoodamministratore-sisp.rhcloud.com/login?user="+$scope.field1+"&password="+$scope.field2)
//	$http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/detailProduct?id=1")

//	.then(function(response) {
//	$scope.myData = response.data;
//	console.log(response.data);
//	if($scope.myData){
//	$scope.image=response.data.immagine;
//	console.log("ciao");
//	$scope.id=response.data.id;
//	$scope.nome = response.data.nome;
//	$scope.descrizione = response.data.descrizione;
//	$scope.descrizioneEstesa = response.data.descrizioneEstesa;
//	$scope.sottocategoria = response.data.sottocategoria;
//	$scope.classificazione = response.data.classificazione;
//	$scope.tipologia = response.data.tipologia;
//	$scope.allergene = response.data.allergene;
//	$scope.datacreazione = response.data.dataCreazione;
//	}

//	});

});   




