myApp.controller('inserimentoDatiSedeController', function($scope,$http) {

	ons.ready(function() {
	console.log("inserimentoDatiSedeController");
	//QUERY SEDI http://joyfoodamministratore-sisp.rhcloud.com/listSedeByAzienda?id=1
	//QUERY AZIENDA "https://joyfoodamministratore-sisp.rhcloud.com/detailCompany?id=123"


	$scope.clickAggiungi=function(nuovaSede){

		$scope.aggiungiDisabilitato=true;
		$scope.campoDisabilitato=true;
		
		
		//GEOLOCALIZZAZIONE
		var latitudine;
		var longitudine;
		var request = {	
				'address': nuovaSede.indirizzosede
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

		ons.notification.alert({
			title: 'JoyFood',
			message: 'Sede inserita'
		});

	};
	});

});