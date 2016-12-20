/**
 * Created by Aerdna on 17-Sep-16.
 */

myApp.controller('confermaDonazioneController', function(donazioniService,$scope,$http) {
		$scope.donazione;
		$scope.map1;
		$scope.init = function () {
			console.log("INIT");
			$scope.donazione=donazioniService.getDonazioni();
			console.log($scope.donazione);
		}
		
		$scope.init();
				
});