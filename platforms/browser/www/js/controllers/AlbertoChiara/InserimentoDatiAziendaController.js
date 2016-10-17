myApp.controller('inserimentoDatiAziendaController', function($scope,$http) {


	console.log("inserimentoDatiAziendaController");
	
	$scope.inputDisabilitato = true;
	//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
	//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"
	 $http.get("http://joyfoodamministratore-sisp.rhcloud.com/public/listAllTipoAzienda")
	    
		.then(function(response) {
			//var aaa = response.data[0].denominazioneSede+" "+response.data[1].denominazioneSede;
			//$scope.denominazioneSede = response.data.denominazioneSede;
			//$scope.indirizzoSede = response.data.indirizzoSede;
			console.log('pronti');
			console.log('numeroTipi = '+response.data.length);
			$scope.tipi = response.data;
			
					
			$scope.tipi_azienda= [];
			 angular.forEach($scope.tipi,function(value, key){
				 $scope.tipi_azienda.push(value.descrizione);
				});
			 
			  
//			 ons.notification.alert({
//				 title: 'JoyFood',
//			  message: $scope.tipi_azienda
//			    });


			 
			 






		    $scope.accordionPrimoLivello = ['Tipo azienda','Natura giuridica I livello','Natura giuridica II livello'];

//		    $scope.accordionSecondoLivello = [[tipi_azienda],['Natura 1','Natura 2','Natura 3'],['x.1','x.2','x.3']];
		    $scope.accordionSecondoLivello = [$scope.tipi_azienda,['Natura 1','Natura 2','Natura 3'],['x.1','x.2','x.3']];
		    
		    
		  $scope.groups = [];
		  
		for (var i = 0; i < $scope.accordionPrimoLivello.length; i++) {
		$scope.groups[i] = {
		name: $scope.accordionPrimoLivello[i],
		items: []
		};
		for (var j = 0; j < $scope.accordionSecondoLivello[i].length; j++) {
		$scope.groups[i].items.push($scope.accordionSecondoLivello[i][j]);

		}
		    
		    $scope.toggleGroup = function(group) {
		    	if ($scope.isGroupShown(group)) {
		    	$scope.shownGroup = null;
		    	} else {
		    	$scope.shownGroup = group;
		    	}
		    	};
		    	
		    $scope.toggleoptions = function(group) {
		    	if ($scope.isGroupShown(group)) {
		    	$scope.shownGroup = null;
		    	} else {
		    	$scope.shownGroup = group;
		    	}
		    	};

		    	$scope.isGroupShown = function(group) {
		    	return $scope.shownGroup === group;
		    	};
		 
		 
		}
		});
			 
			 
	 
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
	
	 


