myApp.controller('inserimentoDatiSedeController', function($scope,$http) {

	
	console.log("inserimentoDatiSedeController");
	//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
	//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"
	 
	 
    $scope.clickAggiungi=function(){
//        $("#Denominazione").prop('readonly', false);
//        $("#CF").prop('readonly', false);
//        $("#SedeLegale").prop('readonly', false);
//        $("#Categoria").prop('readonly', false);
//        $("#modificabutton").prop('disabled', true);
//        $("#salvabutton").prop('disabled', false);
  
    	$scope.aggiungiDisabilitato=true;
    	$scope.campoDisabilitato=true;
 ons.notification.alert({
	 title: 'JoyFood',
  message: 'Sede inserita correttamente'
    });
    	
    };
 
 
	


});