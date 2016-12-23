myApp.controller('inserimentoDatiAziendaController', function($scope,$http,userService) {

		$scope.nuovaAzienda;
		$scope.inviato;
		
		$scope.clickAggiungi=function(nuovaAzienda){
			$scope.$parent.dialog.show();
			var settings = {
			          "url": "https://joyfoodamministratore-sisp.rhcloud.com/api/insertAzienda",
			          "method": "POST",
			          "headers": {
			            "content-type": "application/x-www-form-urlencoded",
			          },
			          "data": "denominazione="+nuovaAzienda.denominazione+
			          		  "&sedeLegale="+nuovaAzienda.sedeLegale+
			          		  "&CF="+nuovaAzienda.CF+
			          		  "&note="+nuovaAzienda.note+
			          		  "&codNaturaGiuridica1lvl=1"+
			          		  "&codTipo=1"+
			          		  "&codStato=1"
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
	    };

});




