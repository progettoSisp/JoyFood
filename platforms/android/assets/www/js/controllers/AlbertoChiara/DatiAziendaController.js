myApp.controller('datiAziendaController', function($scope,$http) {

	
	console.log("datiAziendaController");
	//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
	//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"
//	 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123")
//	    
//		.then(function(response) {
//			//var aaa = response.data[0].denominazioneSede+" "+response.data[1].denominazioneSede;
//			$scope.denominazione = response.data.denominazione;
//			$scope.cf = response.data.cf;
//			$scope.sedeLegale = response.data.sedeLegale;
//			$scope.categoria = response.data.categoria;
//
//		 
//		 });
	
	

	$scope.inputDisabilitato = true;
	$scope.salvaDisabilitato = true;
	$scope.modificaDisabilitato = false;
	
	$scope.showNat1Livello = true;
	$scope.showNat2Livello = true;

	
    $scope.clickModifica=function(){
//        $("#Denominazione").prop('readonly', false);
//        $("#CF").prop('readonly', false);
//        $("#SedeLegale").prop('readonly', false);
//        $("#Categoria").prop('readonly', false);
//        $("#modificabutton").prop('disabled', true);
//        $("#salvabutton").prop('disabled', false);
    	$scope.inputDisabilitato = !$scope.inputDisabilitato;
    	$scope.salvaDisabilitato = !$scope.salvaDisabilitato;
    	$scope.modificaDisabilitato = !$scope.modificaDisabilitato;
//	 ons.notification.alert({
//     message: 'ciao'
//     });
//    	
    };
    
    $scope.clickSalva=function(){
    	$scope.inputDisabilitato = true;
    	$scope.salvaDisabilitato = true;
    	$scope.modificaDisabilitato = false;
   	 ons.notification.alert({
   	  message: 'Dati salvati con successo',
   		  title: 'JoyFood'
   	  });
    };
    

    $scope.clickNat1Liv = function(){
    	$scope.showNat1Livello = !$scope.showNat1Livello;

    };
    
    $scope.clickNat2Liv = function(){
    	$scope.showNat2Livello = !$scope.showNat2Livello;

    };
	


});