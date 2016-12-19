
myApp.controller('dettaglioDonazioneController', function($scope,$http,donazioniService,prodottoService) { 

	
	$scope.donazione;
	
	$scope.init=function(){
		$scope.donazione =donazioniService.getDonazioni();
		console.log($scope.donazione);
	};
	
	$scope.dettaglioProdotto=function(prodotto){
		prodottoService.saveProdotto(prodotto);
		myNavigator.pushPage("html/SilviaVincenzo/dettaglio_prodotto.html")
	}

	$scope.init();
	
});   
	



