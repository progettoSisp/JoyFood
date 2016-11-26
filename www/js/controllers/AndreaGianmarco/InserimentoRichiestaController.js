myApp.controller('inserimentoRichiestaController', function($scope,$http,donazioniService) {

    $scope.richiesta = donazioniService.getDonazioni();
	
    $scope.insertRichiesta=function(){
		$scope.valori=$("form.insert-form").serialize();
		console.log("Richiesta: "+$scope.valori);

		var str= $scope.valori;
		var settings = {
				"url": "https://joyfoodamministratore-sisp.rhcloud.com/api/inserimentoRichiesta",
				"method": "POST",
				"headers": {
					"content-type": "application/x-www-form-urlencoded",
				},
				"data": str
		};
		$http(settings)
        .then(function(response) {
              console.log("ok");
         },function(response) {
        	 console.log("Errore");
        });
	}
    
    
});   
