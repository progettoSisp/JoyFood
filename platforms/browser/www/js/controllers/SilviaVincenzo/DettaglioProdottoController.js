
myApp.controller('dettaglioProdottoController', function($scope,$http,remoteApiService,prodottoService) {

	console.log("Onsen UI is ready! 1 ");


    $scope.prodotto=prodottoService.getProdotto();


});   




