myApp.controller('datiAziendaController', function($scope,$http, remoteAppService, remoteApiService,donazioniService,userService) {

		$scope.azienda={};
		console.log("inserimentoDatiAziendaController");
		$scope.sedi=[];
		
		$scope.sedi=userService.getSedi();
        
		$scope.init = function () {
			$scope.sede=donazioniService.getSede();
	         $scope.azienda=userService.getAzienda();
	         console.log($scope.azienda);
		}
		
		$scope.init();
		
		$scope.selezionaSede= function(sede){
			donazioniService.setSede(sede);
			myNavigator.pushPage("html/AlbertoChiara/visualizza_dati_sede.html");
		}
			
		$scope.inputDisabilitato = true;
		$scope.salvaDisabilitato = true;
    	$scope.modificaDisabilitato = false;

		$scope.nat1livRiempito = true;
		$scope.nat2livRiempito = true;

		$scope.shownGroup1 = true;
		$scope.shownGroup2 = true;
		
		$scope.denominazione = 'DenominazioneProva';
		$scope.CF = 'VVVBBB66T66T555T';
		$scope.sedeLegale = 'Sede Legale prova';
		$scope.stato = 'STATOPROVA';
	    $scope.nat1LivFromDB = 'Nat1LivA';
	    $scope.nat2LivFromDB = 'Nat2LivA2';
	    $scope.nat1LivSelezionata = $scope.nat1LivFromDB;
	    $scope.nat2LivSelezionata = $scope.nat2LivFromDB;

		
	    $scope.clickModifica=function(){
	    	$scope.inputDisabilitato = !$scope.inputDisabilitato;
	    	$scope.salvaDisabilitato = !$scope.salvaDisabilitato;
	    	$scope.modificaDisabilitato = !$scope.modificaDisabilitato;
	
	    };
	    
	    $scope.clickSalva=function(){
	    	$scope.inputDisabilitato = true;
	    	$scope.salvaDisabilitato = true;
	    	$scope.modificaDisabilitato = false;
	    	
	    	console.log("denominazione: "+$scope.denominazione);
	    	console.log("CF: "+$scope.CF);
	    	console.log("sedeLegale: "+$scope.sedeLegale);
	    	console.log("Natura di 1 livello: "+$scope.nat1LivSelezionata);
	    	console.log("Natura di 2 livello: "+$scope.nat2LivSelezionata);
	    	
	   	 ons.notification.alert({
	   	  message: 'Dati salvati con successo-Controllare in console i dati che verranno salvati',
	   		  title: 'JoyFood'
	   	  });
	    };
	    
	
	$scope.saveChanges= function(azienda){
		console.log("idAzienda: "+azienda.idAzienda);
		console.log("CF: "+azienda.cf);
		console.log("denominazione: "+azienda.denominazione);
		console.log("statoAzienda: "+azienda.statoAzienda.idStatoAzienda);
		console.log("tipoAzienda: "+azienda.tipoAzienda.idTipoAzienda);
		console.log("sedeLegale: "+azienda.sedeLegale);
		console.log("note: "+azienda.note);
		console.log("natGiur: "+azienda.natGiud1lvl.id);

		var settings = {
				"async": true,
				"crossDomain": true,
				"url": "https://joyfoodamministratore-sisp.rhcloud.com/api/updateAzienda",
				"method": "POST",
				"headers": {
					"content-type": "application/x-www-form-urlencoded",
					"cache-control": "no-cache",
				},
				"data": "cf="+ azienda.cf+
					"&denominazione="+ azienda.denominazione+
					"&statoAzienda="+azienda.statoAzienda.idStatoAzienda+
					"&tipoAzienda="+azienda.tipoAzienda.idTipoAzienda+
					"&sedeLegale="+azienda.sedeLegale+
					"&note="+azienda.note+
					"&codNaturaGiuridica1lvl="+azienda.natGiud1lvl.id+
					"&codAzienda="+azienda.idAzienda
				}
		$http(settings).done(function (response) {
			console.log(response);
			ons.notification.alert('Your profile has been saved correctly');
		});
		};
	
	
});




