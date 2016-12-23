myApp.controller('risultatiRicercaController', function($scope,$http, ricercaService,donazioniService) {
	
  $scope.carrelli=[];
  $scope.date=new Date().getTime();
  $scope.init=function(){
	  $scope.carrelli =ricercaService.getRicerca();
	  console.log($scope.carrelli);
  }
  
  $scope.changeView=function(carrello){	
		donazioniService.setDonazioni(carrello);
	    myNavigator.pushPage("html/AngeloFrancesco/dettaglio_donazione.html");
	}   
  
  $scope.init();
  
});