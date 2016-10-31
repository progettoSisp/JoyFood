myApp.controller('dettaglioUtenteController', function($scope,$http, userService) { 

	console.log("Dettaglio utente");
	
	 $scope.user = userService.getUser();

});   
	