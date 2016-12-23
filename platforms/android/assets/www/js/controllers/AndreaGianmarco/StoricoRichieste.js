myApp.controller('storicoRichiesteController', function($scope,$http,donazioniService) {

	$scope.date=new Date();
	
	$scope.init=function(){
		$scope.$parent.dialog.show();
		$http.post("http://joyfoodamministratore-sisp.rhcloud.com/api/listRichiesta")
		.then(function(response) {
			$scope.$parent.dialog.hide();
			$scope.richieste=JSON.parse(response.data);
			console.log(response.data);
		},function error(response) {
	       	$scope.$parent.dialog.hide();
	       	ons.notification.alert('Error, could not connect to the remote server');					
		});
	};
	
	$scope.dettaglioDonazione=function(id){
		$scope.$parent.dialog.show();
		var date=new Date().getTime();
		var settings = {
		          "url": "http://joyfoodamministratore-sisp.rhcloud.com/api/donazioneByRichiesta",
		          "method": "POST",
		          "headers": {
		            "content-type": "application/x-www-form-urlencoded",
		          },
		          "data": "conRichiesta="+id
		          };
		        $http(settings).then(function(response) {
		        	$scope.$parent.dialog.hide();
		        	donazioniService.setDonazioni(response.data);
		        	myNavigator.pushPage("html/AngeloFrancesco/dettaglio_donazione.html");
		        },function error(response) {
		            	$scope.$parent.dialog.hide();
		            	ons.notification.alert('Error, could not connect to the remote server');					
		        });
	};

	$scope.init();
	
});