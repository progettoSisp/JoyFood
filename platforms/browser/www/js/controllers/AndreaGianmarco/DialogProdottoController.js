/**
 * Created by Aerdna on 17-Sep-16.
 */

myApp.controller('dialogProdottoController', function(dialogService,$scope) {
		$scope.prodotto=dialogService.getProdotto();
		$scope.init = function () {
			document.getElementById('dialog1').show();
		}
		
		$scope.init();
		
		
		$scope.confirm = function() {
			console.log("CLICK");
		}
});