myApp.controller('visualizzaSediController', function($scope,$http) {

	
	console.log("visualizzaSediController");
	//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
	//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"
	 $http.get("http://joyfoodamministratore-sisp.rhcloud.com/public/listSedeByAzienda?id=1")
	    
		.then(function(response) {
			//var aaa = response.data[0].denominazioneSede+" "+response.data[1].denominazioneSede;
			//$scope.denominazioneSede = response.data.denominazioneSede;
			//$scope.indirizzoSede = response.data.indirizzoSede;
			console.log('pronti');
			console.log('numeroSedi = '+response.data.length);
			$scope.sedi = response.data;


//		$scope.myData = response.data.result;
//		
//		 if($scope.myData){
//			 
//			 console.log(cf);
//			
//			 }
		 
		 });
	
	


});