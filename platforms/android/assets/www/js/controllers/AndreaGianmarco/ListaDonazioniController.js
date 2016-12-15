myApp.controller('listaDonazioniController', function($scope,$http,donazioniService) {

		$http.post("http://joyfoodamministratore-sisp.rhcloud.com/api/allDonazioni")
		.then(function(response) {
			$scope.carrelli = response.data;
		});

	 
		$scope.changeView=function(carrello){
		
		donazioniService.setDonazioni(carrello);
		console.log(carrello);
	    myNavigator.pushPage("html/AndreaGianmarco/inserimento_richiesta.html");
	}   

});
