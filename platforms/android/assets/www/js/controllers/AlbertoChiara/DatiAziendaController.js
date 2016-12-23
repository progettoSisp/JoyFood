myApp.controller('datiAziendaController', function($scope,$http, remoteAppService, remoteApiService,donazioniService,userService) {

	$scope.azienda={};
	$scope.sedi=[];	
	$scope.sedi=userService.getSedi();
	$scope.inputDisabilitato = true;
	$scope.salvaDisabilitato = true;
	$scope.modificaDisabilitato = false;

	$scope.init = function () {
		$scope.sede=donazioniService.getSede();
		$scope.azienda=userService.getAzienda();
	}	
	
	$scope.init();
		
	$scope.selezionaSede= function(sede){
		donazioniService.setSede(sede);
		myNavigator.pushPage("html/AlbertoChiara/visualizza_dati_sede.html");
	}

	$scope.saveChanges= function(azienda){
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://joyfoodamministratore-sisp.rhcloud.com/api/updateAzienda",
			"method": "POST",
			"headers": {
				"content-type": "application/x-www-form-urlencoded",
				"cache-control": "no-cache",
			},
			"data": "CF="+nuovaAzienda.CF+
				"&denominazione="+ azienda.denominazione+
				"&statoAzienda="+azienda.statoAzienda.idStatoAzienda+
				"&tipoAzienda="+azienda.tipoAzienda.idTipoAzienda+
				"&sedeLegale="+azienda.sedeLegale+
				"&note="+azienda.note+
				"&codNaturaGiuridica1lvl="+azienda.natGiud1lvl.id+
				"&codAzienda="+azienda.idAzienda
			}
		$http(settings).then(function (response) {
			 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/api/azienda").then(function(response) {
	        	 userService.saveAzienda(response.data);
	        	 ons.notification.alert('Changens has been saved correctly').then(function(ok) {
	           		 myNavigator.resetToPage("slidingmenu.html");
	        	 });	
	         },function(response) {
	        	 console.log(response);
	         });	
		},function error(response) {
        	$scope.dialog.hide();
        	ons.notification.alert('Error, could not connect to the remote server');					
        });
	};
	
});




