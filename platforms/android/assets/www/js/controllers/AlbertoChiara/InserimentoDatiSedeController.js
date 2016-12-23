myApp.controller('inserimentoDatiSedeController', function($scope,$http,userService) {


		$scope.clickAggiungi=function(nuovaSede){
			$scope.$parent.dialog.show();
			console.log(nuovaSede);
			$scope.aggiungiDisabilitato=true;
			$scope.campoDisabilitato=true;
			$scope.azienda=userService.getAzienda()[0];
			console.log($scope.azienda);
			var latitudine;
			var longitudine;
			var indirizzopergoogle = nuovaSede.comuneSede + " " + nuovaSede.indirizzoSede;
			var request = {	
					'address': indirizzopergoogle
			};
			console.log(indirizzopergoogle);
			geocoder = new google.maps.Geocoder();
			geocoder.geocode(request, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					latitudine = results[0].geometry.location.lat();
					longitudine = results[0].geometry.location.lng();
					console.log("Latitudine = "+latitudine);
					console.log("Longitudine = "+longitudine);
				}
				
				var settings = {
				          "url": "https://joyfoodamministratore-sisp.rhcloud.com/api/insertSede",
				          "method": "POST",
				          "headers": {
				            "content-type": "application/x-www-form-urlencoded",
				          },
				          "data": "codAzienda="+$scope.azienda.idAzienda+
				          		  "&comuneSede="+nuovaSede.comuneSede+
				          		  "&indirizzoSede="+nuovaSede.indirizzoSede+
				          		  "&denominazioneSede="+nuovaSede.denominazioneSede+
				          		  "&latitudine="+latitudine+
				          		  "&longitudine="+longitudine+
				          		  "&capSede="+1+
				          		  "&provinciaSede="+nuovaSede.provinciaSede+
				          		  "&note="+nuovaSede.note
				          };
				        $http(settings).then(function(response) {
				        	$http.get("https://joyfoodamministratore-sisp.rhcloud.com/api/azienda").then(function(response) {
					        	 userService.saveAzienda(response.data);
					        	 var user=userService.getUser();
					        	 user.tipoUtente.idTipoUtente=1;
					        	 userService.setUser(user);
					        	 $scope.$parent.dialog.hide();
					        	 ons.notification.alert('Company inserted correctly').then(function(ok) {
							         $scope.inviato=true;
					           		 myNavigator.resetToPage("slidingmenu.html");
					        	 });
				        	});
				        },function error(response) {
				            	$scope.inviato=false;
				            	$scope.$parent.dialog.hide();
				            	ons.notification.alert('Error, could not connect to the remote server');					
				        });
			});
		};
});