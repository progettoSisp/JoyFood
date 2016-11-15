myApp.controller('listaProdottiController', function($scope,$http,prodottoService) {

	console.log("listaProdottiController");
	$http.get("http://joyfoodamministratore-sisp.rhcloud.com/public/listAllProdotti")

	.then(function(response) {
		console.log('prodotti = '+response.data.length);
		
		$scope.prodotti = response.data;
		
	});

	$scope.changeView=function(prodotto){
	    prodottoService.saveProdotto(prodotto);
	    console.log(prodotto.id);
	    myNavigator.pushPage("html/SilviaVincenzo/dettaglio_prodotto.html");
	}

});