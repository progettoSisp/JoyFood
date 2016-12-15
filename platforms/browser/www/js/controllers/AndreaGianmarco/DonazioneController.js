/**
 * Created by Aerdna on 17-Sep-16.
 */

myApp.controller('donazioneController', function(donazioniService,$scope,$http) {
		$scope.sedi;
		$scope.date = new Date();
		$scope.donazione;
		$scope.sede=donazioniService.getSede();
		$scope.prodotti=donazioniService.getProdotti();
		
		$scope.init = function () {
			console.log($scope.prodotti);
			console.log("INIT");
			$scope.sede=donazioniService.getSede();
			console.log($scope.sede);
		}
		
		$scope.init();
		
        $http.get("https://joyfoodamministratore-sisp.rhcloud.com/api/sediUtente")
            .then(function(response) {
            	$scope.sedi=response.data;
            });
        
        $scope.selezionaSede= function(sede){
        	console.log("CLICK");
        	console.log(sede);
        	donazioniService.setSede(sede);
        	console.log(donazioniService.getSede());
        	myNavigator.pushPage('html/AndreaGianmarco/nuova_donazione.html');
        }
        
        $scope.creaCarrello= function(donazione){
        	console.log("CLICK1");
        	console.log(donazione);
        	console.log($scope.donazione);
        	var don={};
        	angular.copy($scope.donazione, don);
        	console.log(don);
        	don.dataInizio=$scope.donazione.dataInizio.getTime();
        	don.dataFine=$scope.donazione.dataFine.getTime();
        	don.codsede=$scope.sede.idSede;
        	donazioniService.setDonazioni(don);
        	myNavigator.pushPage('html/AndreaGianmarco/creazione_carrello.html');
        }
        
        
        
        $scope.inserisciImmagine= function() {
            navigator.camera.getPicture(dump_pic, fail, {
                quality : 50,
                destinationType: Camera.DestinationType.DATA_URL,
                targetWidth: 100,
                targetHeight: 100
            });
        }
        
        $scope.inserisciProdotto= function() {
        	myNavigator.pushPage('html/SilviaVincenzo/ricerca_prodotto.html');
        }
        
        myNavigator.once("postpop",function(){
        	console.log("STOSI");
        	console.log(donazioniService.getProdotti());
        	console.log($scope.prodotti);
        	$scope.prodotti=donazioniService.getProdotti();
    	});

});