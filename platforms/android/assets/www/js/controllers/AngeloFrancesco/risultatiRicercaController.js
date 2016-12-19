myApp.controller('risultatiRicercaController', function($scope,$http, ricercaService) {

	
	 array=[];
	 console.log(donazioneService.getDonazione());
console.log("risultatiRicercaController");


  $scope.carrelli =ricercaService.getRicerca();


 


 
// $scope.changeView=function(carrello){
//  donazioneService.saveDonazione(carrello);
//  console.log(carrello.idCarrello);
  //myNavigator.pushPage("html/SilviaVincenzo/dettaglio_prodotto.html");
 //}

});