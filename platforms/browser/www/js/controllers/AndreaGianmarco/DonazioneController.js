/**
 * Created by Aerdna on 17-Sep-16.
 */

myApp.controller('donazioneController', function(donazioniService,$scope,$http) {
		$scope.sedi;
		$scope.sede=donazioniService.getSede();
		console.log($scope.sede);
		
		$scope.init = function () {
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

});