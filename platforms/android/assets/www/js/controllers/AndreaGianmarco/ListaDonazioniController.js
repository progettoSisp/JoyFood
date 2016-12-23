myApp.controller('listaDonazioniController', function($scope,$http,donazioniService) {

	$scope.date=new Date().getTime();
	$scope.loaded=false;
	
	$scope.init=function(){
		 $scope.$parent.dialog.show();
		$http.post("http://joyfoodamministratore-sisp.rhcloud.com/api/allDonazioni").then(function(response) {
			$scope.loaded=true;
			console.log("loaded");
			$scope.carrelli = response.data;
			$scope.$parent.dialog.hide();
		},function error(response) {
			$scope.$parent.dialog.hide();
	    	ons.notification.alert('Error, could not connect to the remote server');					
	    });
		
	};	
		
	$scope.init();
	
	$scope.changeView=function(carrello){	
		donazioniService.setDonazioni(carrello);
	    myNavigator.pushPage("html/AngeloFrancesco/dettaglio_donazione.html");
	}   

});