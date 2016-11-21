myApp.controller('NuovaDonazioneController', function(donazioniService,$scope,$http) { 
	
	$scope.prodottoinviato = false;
	$scope.master = {};
	$scope.sede=donazioniService.getSede();
	console.log(donazioniService.getSede());
	
	showImg = function(imgUpload){
		//console.log("fileUpload");
		//$("#fileField").click();
		
	     
	            if (imgUpload.files && imgUpload.files[0]) {
	                var reader = new FileReader();
	                var test = reader.readAsDataURL(imgUpload.files[0]);
	                
	                
	                reader.onload = function (e) {
	                	
	                    $('#picture').attr('src', e.target.result);
	                        
	                    
	                    
	              
	                };
	                
	                console.log(test);

	            }
	       
		
	}
	
	
	$scope.reset = function(){
		
		
		$scope.newproduct = angular.copy($scope.master);
		$('#picture').attr('src', "");
		$("#fileField").val("");
        
        
		
		
	}
	
	$scope.invioprodotto = function(newproduct){
	 $scope.prodottoinviato = true;
	 /* var test2 = $http.get("http://joyfoodamministratore-sisp.rhcloud.com/public/listSedeByAzienda?id=1")
     .then(function(response) {
    	 $scope.sede = response.data.denominazioneSede;
         console.log("sedi: " + $scope.sede);
         


     });	
	 
	 console.log(JSON.stringify(test2));
	 	*/
	 
	var settings = {
			  "data": {
				  
				  "titolo": newproduct.title,
				  "descrizione": newproduct.description,
				  "datainizio": newproduct.datainizio,
				  "datafine": newproduct.datafine,
				  "sede": newproduct.sede,
				  
				  "divisibilita": newproduct.divisibilita,
				  "immagine": $("#picture").attr("src")
				  //"orainizio": newproduct.orainizio,
				  //"orafine": newproduct.orafine
				  

			 }
	 };
	
	console.log(settings);
	}
	 
	
	
	
	
});   
	


