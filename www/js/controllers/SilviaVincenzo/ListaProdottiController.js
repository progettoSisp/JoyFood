myApp.controller('listaProdottiController', function($scope,$http) {

	console.log("listaProdottiController");
	$http.get("http://joyfoodamministratore-sisp.rhcloud.com/public/listAllProdotti")

	.then(function(response) {
		console.log('prodotti = '+response.data.length);
		$scope.prodotti = response.data;
	});
});