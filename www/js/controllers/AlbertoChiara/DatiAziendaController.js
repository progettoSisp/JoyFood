myApp.controller('datiAziendaController', function($scope,$http, remoteAppService, remoteApiService) {

	ons.ready(function() {


		console.log("inserimentoDatiAziendaController");

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

		
//		remoteApiService.getAzienda().then(function(response) {
//			
//			$scope.a = response;
//			console.log('Azienda:');
//			console.log($scope.a);
//			
//			
//			
//				$scope.denominazione = response.data.denominazione;
//				$scope.cf = response.data.cf;
//				$scope.sedeLegale = response.data.sedeLegale;
//				$scope.stato = response.data.stato;
//		
//	});

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

			$scope.nat2livVisualizzate = [];
			angular.forEach($scope.nat2liv,function(value, key){

				if(value.descnat1liv==='Nat1LivA')
					$scope.nat2livVisualizzate.push(value.descrizione);
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
		
				if ($scope.isGroupShown2(group2)) {
					$scope.shownGroup2 = null;
				} else {
					$scope.shownGroup2 = group2;
				}
	
		};


		$scope.isGroupShown1 = function(group1) {
			return $scope.shownGroup1 === group1;
		};

		$scope.isGroupShown2 = function(group2) {
			return $scope.shownGroup2 === group2;
		};





		$scope.click1Livello=function(descrizione){

			
			$scope.nat1livRiempito = true;
			$scope.nat2livRiempito = false;
			$scope.nat1LivSelezionata = descrizione;

			$scope.nat2livVisualizzate = [];
			angular.forEach($scope.nat2liv,function(value, key){

				if(descrizione==value.descnat1liv)
					$scope.nat2livVisualizzate.push(value.descrizione);
			});
		    $scope.nat2LivFromDB = false;


		};


		$scope.click2Livello=function(descrizione){
			$scope.nat2LivSelezionata = descrizione;
			$scope.nat2livRiempito = true;
		}


		
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
	    
	  

	});	 
});




