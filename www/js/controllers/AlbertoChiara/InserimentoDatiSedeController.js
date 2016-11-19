myApp.controller('inserimentoDatiSedeController', function($scope,$http,remoteAppService, remoteApiService) {

	ons.ready(function(){
		console.log("inserimentoDatiSedeController");
		//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
		//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"


		$scope.clickAggiungi=function(nuovaSede){

			$scope.aggiungiDisabilitato=true;
			$scope.campoDisabilitato=true;


			//GEOLOCALIZZAZIONE
			var latitudine;
			var longitudine;
			var indirizzopergoogle = nuovaSede.comuneSede + " " + nuovaSede.indirizzoSede;
			var request = {	
					'address': indirizzopergoogle
			};

			geocoder = new google.maps.Geocoder();
			geocoder.geocode(request, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					latitudine = results[0].geometry.location.lat();
					longitudine = results[0].geometry.location.lng();
					console.log("Latitudine = "+latitudine);
					console.log("Longitudine = "+longitudine);
				}
			});

			//LOGIN LO FACCIO QUA PER NON PASSARE DALLA PAGINA DI LOGIN
			var username = "utente.donatore";
			var password = "sisp";
			remoteApiService.login(username,password).then(function (user) {
				console.log('LOGIN EFFETTUATO nella pagina InserimentoDatiSede');

				nuovaSede.codAzienda=3;
				nuovaSede.latitudine= latitudine;
				nuovaSede.longitudine= longitudine;
				
			



				//INSERT SUL DB:
				remoteApiService.insertSede(nuovaSede).then(function(response) {
					
					console.log('Inserimento nuova sede effettuato');
				});

				ons.notification.alert({
					title: 'JoyFood',
					message: 'Sede inserita'
				});


			});

		};
	});
});