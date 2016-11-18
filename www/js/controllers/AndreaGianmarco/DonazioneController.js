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

});