
myApp.controller('richiesteDonatoreController', function($scope,$http,prodottoService,richiestaDonatoreService) {

	$scope.date=new Date();
	
	$scope.init=function(){
		$scope.$parent.dialog.show();
		$http.post("http://joyfoodamministratore-sisp.rhcloud.com/api/listRichiesteRicevute")
		.then(function(response) {
			$scope.$parent.dialog.hide();
			$scope.richieste=JSON.parse(response.data);
			console.log(response.data);
		},function error(response) {
	       	$scope.$parent.dialog.hide();
	       	ons.notification.alert('Error, could not connect to the remote server');					
		});
	};

	$scope.init();
	
});