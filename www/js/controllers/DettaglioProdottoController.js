
myApp.controller('dettaglioProdottoController', function($scope,$http) { 

	console.log("Onsen UI is ready! 1 ");
	
	$scope.ready=function() {
		console.log("Onsen UI is ready! 2");
	
		
		// $http.get("https://joyfoodamministratore-sisp.rhcloud.com/login?user="+$scope.field1+"&password="+$scope.field2)
		 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/detailProduct?id=1")
	    
		.then(function(response) {
		$scope.myData = response.data.result;
		
		 if($scope.myData){
			 
			 console.log("ciao");
			
					document.getElementById('id').innerHTML = id;
					document.getElementById('nome').innerHTML = nome;
					document.getElementById('descrizione').innerHTML = descrizione;
					document.getElementById('descrizioneEstesa').innerHTML = descrizioneEstesa;
					document.getElementById('sottocategoria').innerHTML = sottocategoria;
					document.getElementById('classificazione').innerHTML = classificazione;
					document.getElementById('tipologia').innerHTML = tipologia;
					document.getElementById('allergene').innerHTML = allergene;
					document.getElementById('datacreazione').innerHTML = datacreazione;
			 }
		 
		 });
	};
});   
	



