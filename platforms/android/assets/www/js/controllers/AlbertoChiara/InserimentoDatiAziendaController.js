myApp.controller('inserimentoDatiAziendaController', function($scope,$http) {

	
	console.log("inserimentoDatiAziendaController");
	//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
	//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"
	 
	 $scope.showCategoria = false;
	 $scope.showNaturaGiurdicaI = false;
	 $scope.showNaturaGiurdicaII = false;
	 
	 $scope.chiudiCategoria=function(){
		 $scope.showCategoria = ! $scope.showCategoria;
	 }
	 
	 $scope.chiudiNaturaGiuridicaI=function(){
		 $scope.showNaturaGiuridicaI = ! $scope.showNaturaGiuridicaI;
	 }
	
	 $scope.chiudiNaturaGiuridicaII=function(){
		 $scope.showNaturaGiuridicaII = ! $scope.showNaturaGiuridicaII;
	 }
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
  message: 'Azienda inserita correttamente'
    });
    	
    };
 
 
	


});