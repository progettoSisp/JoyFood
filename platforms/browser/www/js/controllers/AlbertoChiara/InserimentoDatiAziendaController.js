myApp.controller('inserimentoDatiAziendaController', function($scope,$http, remoteAppService, remoteApiService) {

	ons.ready(function() {


		console.log("inserimentoDatiAziendaController");

		$scope.inputDisabilitato = true;
		$scope.nat2livDisabilitato = true;
		$scope.nat1livRiempito = false;
		$scope.nat2livRiempito = false;
		$scope.shownGroup1 = false;
		$scope.shownGroup2 = false;

		//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
		//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"


		remoteAppService.getNatGiud1lvl().then(function(response) {


			$scope.n1 = response;
			console.log('Nature 1 Livello:');
			console.log($scope.n1);

			$scope.nat1liv= [];
			angular.forEach($scope.n1,function(value){
				$scope.nat1liv.push(value.descrizione);
			});
		});

		remoteAppService.getNatGiud2lvl().then(function(response) {

			$scope.n2 = response;
			console.log('Nature 2 Livello:');
			console.log($scope.n2);

			$scope.nat2liv= [];
			angular.forEach($scope.n2,function(value){
				var nuova_nat_2_liv = {};
				nuova_nat_2_liv['descnat1liv']=value.natGiud1lvl.descrizione;
				nuova_nat_2_liv['descrizione']=value.descrizione;
				$scope.nat2liv.push(nuova_nat_2_liv);

			});



		});





		$scope.toggleGroup1 = function(group1) {
			if ($scope.isGroupShown1(group1)) {
				$scope.shownGroup1 = null;
			} else {
				$scope.shownGroup1 = group1;
			}
		};

		$scope.toggleGroup2 = function(group2) {
			if(!$scope.nat2livDisabilitato){
				if ($scope.isGroupShown2(group2)) {
					$scope.shownGroup2 = null;
				} else {
					$scope.shownGroup2 = group2;
				}
			}
		};


		$scope.isGroupShown1 = function(group1) {
			return $scope.shownGroup1 === group1;
		};

		$scope.isGroupShown2 = function(group2) {
			return $scope.shownGroup2 === group2;
		};





		$scope.click1Livello=function(descrizione){
			var myEl = angular.element(document.querySelector('#natGiud2LivElem'));
			myEl.removeClass('natGiudDisabled');  
			
			$scope.nat1livRiempito = true;
			$scope.nat2livDisabilitato = false;
			$scope.nat2livRiempito = false;
			$scope.nat1LivSelezionata = descrizione;
			$scope.nat2livVisualizzate = [];
			angular.forEach($scope.nat2liv,function(value, key){

				if(descrizione==value.descnat1liv)
					$scope.nat2livVisualizzate.push(value.descrizione);
			});



		};

		$scope.click2Livello=function(descrizione){
			$scope.nat2LivSelezionata = descrizione;
			$scope.nat2livRiempito = true;
		}


		$scope.clickAggiungi=function(nuovaAzienda){

			$scope.aggiungiDisabilitato=true;
			$scope.campoDisabilitato=true;
			nuovaAzienda.nat1LivSelezionata=$scope.nat1LivSelezionata;
			nuovaAzienda.nat2LivSelezionata=$scope.nat2LivSelezionata;
			
			console.log('Sto inserendo l\'azienda nuovaAzienda:');
			console.log('nuovaAzienda.denominazione: '+nuovaAzienda.denominazione);
			console.log('nuovaAzienda.CF: '+nuovaAzienda.CF);
			console.log('nuovaAzienda.sedeLegale: '+nuovaAzienda.sedeLegale);
			console.log('nuovaAzienda.nat1LivSelezionata: '+nuovaAzienda.nat1LivSelezionata);
			console.log('nuovaAzienda.nat2LivSelezionata: '+nuovaAzienda.nat2LivSelezionata);
			
			//LOGIN LO FACCIO QUA PER NON PASSARE DALLA PAGINA DI LOGIN
			var username = "utente3";
			var password = "sisp";
	        remoteApiService.login(username,password).then(function (user) {
	        	console.log('LOGIN EFFETTUATO nella pagina InserimentoDatiAzienda');
				
	        	//INSERT SUL DB:
				remoteApiService.insertAzienda(nuovaAzienda).then(function(response) {

		        	console.log('Inserimento nuova azienda effettuato');
				});
	        });
	        

			
		};

	});	 
});




