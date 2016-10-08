myApp.controller('datiSedeController', function($scope,$http) {

	
	console.log("datiSedeController");
	//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
	//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"
	 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/detailPlaces?id=1")
	    
		.then(function(response) {
			//var aaa = response.data[0].denominazioneSede+" "+response.data[1].denominazioneSede;
			$scope.denominazioneSede = response.data.denominazioneSede;
			$scope.indirizzoSede = response.data.indirizzoSede;

//		$scope.myData = response.data.result;
//		
//		 if($scope.myData){
//			 
//			 console.log(cf);
//			
//			 }
		 
		 });
	
	

	$scope.inputDisabilitato = true;
	$scope.salvaDisabilitato = true;
	$scope.modificaDisabilitato = false;

	
    $scope.clickModifica=function(){

    	$scope.inputDisabilitato = false;
    	$scope.salvaDisabilitato = false;
    	$scope.modificaDisabilitato = true;

    	
    };
    
    $scope.clickSalva=function(){
    	$scope.inputDisabilitato = true;
    	$scope.salvaDisabilitato = true;
    	$scope.modificaDisabilitato = false;
    };
    
 
	


});