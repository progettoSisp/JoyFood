myApp.controller('storicoRichiesteController', function($scope,$http,prodottoService,richiestaService) {

	console.log("storicoRichiesteController");
	$http.post("http://joyfoodamministratore-sisp.rhcloud.com/api/listRichiesta")
	.then(function(response) {
		$scope.richieste = response.data;
	});

//	$scope.changeView=function(richiesta){
//		richiestaService.saveRichiesta(richiesta);
//		console.log("titolo: "+richiesta.carrello.titolo);
//	    myNavigator.pushPage("html/AndreaGianmarco/dettaglio_richiesta.html");
//	}
	
});