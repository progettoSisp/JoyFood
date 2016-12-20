/**
 * Created by Aerdna on 17-Sep-16.
 */

myApp.controller('dettaglioDonazioneController', function(donazioniService,$scope,$http) {
		$scope.donazione;
		
		$scope.init = function () {
			console.log("INIT");
			$scope.donazione=donazioniService.getDonazioni();
			console.log($scope.donazione);
		}
		
		$scope.init();
		
});