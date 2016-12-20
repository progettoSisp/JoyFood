myApp.controller('listaDonazioniController', function($scope,$http,donazioniService) {

		$http.post("http://joyfoodamministratore-sisp.rhcloud.com/api/allDonazioni")
		.then(function(response) {
			$scope.carrelli = response.data;
		});

		$scope.date=new Date().getTime();
	$scope.changeView=function(carrello){	
		donazioniService.setDonazioni(carrello);
	    myNavigator.pushPage("html/AngeloFrancesco/dettaglio_donazione.html");
	}   

});
