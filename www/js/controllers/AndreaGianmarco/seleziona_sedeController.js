
myApp.controller('seleziona_sedeController', function($scope,$http,remoteApiService,UserService) {

	console.log("Seleziona Sede Controller");


    $scope.utente=userService.getUser();
    $scope.azienda=remoteApiService.getAzienda();
    var id =  remoteApiService.getAzienda().id;
    
    $http.get("http://joyfoodamministratore-sisp.rhcloud.com/public/listSedeByAzienda?id="+ id)
    .then(function(response) {
		console.log('pronti');
		console.log('numeroSedi = '+response.data.length)
		$scope.sedi = response.data;	 
	 });
    
    
    $scope.lista_sedi= function(id){
		 console.log('lista sedi');
		 var sede
		 var sede = {
				    "provincia": sede.provincia,
				    "indirizzo": sede.indirizzo,
			
				 
				
				}
		}
    
    
});   




