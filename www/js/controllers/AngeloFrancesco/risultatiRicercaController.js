myApp.controller('risultatiRicercaController', function($scope,$http, donazioneService) {

	
	 array=[];
	 console.log(donazioneService.getDonazione());
console.log("risultatiRicercaController");


  $scope.carrelli = donazioneService.getDonazione();


 


 
// $scope.changeView=function(carrello){
//  donazioneService.saveDonazione(carrello);
//  console.log(carrello.idCarrello);
  //myNavigator.pushPage("html/SilviaVincenzo/dettaglio_prodotto.html");
 //}

});