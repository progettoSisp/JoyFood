myApp.controller('storicoRichiesteController', function($scope,$http,prodottoService,richiestaService) {

	$scope.date=new Date();
	
	$scope.init=function(){
		$scope.richieste =richiestaService.getRichiesta();
	};

	$scope.init();
//	$scope.changeView=function(richiesta){
//		richiestaService.saveRichiesta(richiesta);
//		console.log("titolo: "+richiesta.carrello.titolo);
//	    myNavigator.pushPage("html/AndreaGianmarco/dettaglio_richiesta.html");
//	}
	
});