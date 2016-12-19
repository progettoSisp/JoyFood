
myApp.controller('richiesteDonatoreController', function($scope,$http,prodottoService,richiestaDonatoreService) {

	$scope.date=new Date();
	
	$scope.init=function(){
		$scope.richieste =richiestaDonatoreService.getRichiesta();
	};

	$scope.init();
//	$scope.changeView=function(richiesta){
//		richiestaService.saveRichiesta(richiesta);
//		console.log("titolo: "+richiesta.carrello.titolo);
//	    myNavigator.pushPage("html/AndreaGianmarco/dettaglio_richiesta.html");
//	}
	
});