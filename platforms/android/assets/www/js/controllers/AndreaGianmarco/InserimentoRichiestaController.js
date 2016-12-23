myApp.controller('inserimentoRichiestaController', function($scope,$http,donazioniService,prodottoService) {
	$scope.donazione;
    $scope.descrizione;
    $scope.dataRitiro;
    $scope.init = function () {
		console.log("INIT");
		$scope.donazione=donazioniService.getDonazioni();
		console.log($scope.donazione);
		angular.forEach($scope.donazione.carrelloProdottos, function(value, key) {
			value.selezione=0;
		});
	}
	
	$scope.init();
	
    $scope.saveRequest=function(){
    	 $scope.$parent.dialog.show();
    	var str="idCarrello="+$scope.donazione.idCarrello+
    	"&dataRitiro="+$scope.dataRitiro.getTime()+
    	"&descrizione="+$scope.descrizione;
    	angular.forEach($scope.donazione.carrelloProdottos, function(value, key) {
			if(value.selezione>0){
				var prodotto={
						"id":value.prodotto.id,
						"pezzi":value.selezione
				}
				str=str+"&prodotto="+JSON.stringify(prodotto);
			}
		});
		var settings = {
				"url": "https://joyfoodamministratore-sisp.rhcloud.com/api/inserimentoRichiesta",
				"method": "POST",
				"headers": {
					"content-type": "application/x-www-form-urlencoded",
				},
				"data": str
		};
		$http(settings).then(function(response) {
			$scope.$parent.dialog.hide();
			ons.notification.alert('Request inserted correctly').then(function(ok) {		 
		         $scope.inviato=true;
          		 myNavigator.resetToPage("slidingmenu.html");
       	 	});
		},function error(response) {
	       	$scope.inviato=false;
	       	$scope.$parent.dialog.hide();
	       	ons.notification.alert('Error, could not connect to the remote server');					
		});
	}
    
    $scope.changeView=function(prodotto){
	    prodottoService.saveProdotto(prodotto);
	    console.log(prodotto.id);
	    myNavigator.pushPage("html/SilviaVincenzo/dettaglio_prodotto.html");
	}
    
});   
