
myApp.controller('lista_prodottiController', function($scope,$http, localDbService) { 

	console.log("lista prodotti ricercati");
	
	 $scope.lista_prodotti= function(prodottoTrovato){
		 console.log('lista prodotti');
		 var prodottoTrovato
		 var prodottoTrovato = {
				    "immagine": prodottoTrovato.immagine,
				    "nome": prodottoTrovato.nome,
				    "descrizione": prodottoTrovato.descrizione,
				//manca nome metodo recpuero prodotto 
				//remotoApiService.listaProdotti(prodottoTrovato);
				
				}
		}

});   
	



