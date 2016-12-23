/**
 * Created by Aerdna on 17-Sep-16.
 */

myApp.controller('confermaDonazioneController', function(donazioniService,$scope,$timeout,$http,prodottoService) {
		$scope.donazione;
		$scope.map1;
		$scope.init = function () {
			console.log("INIT");
			$scope.donazione=donazioniService.getDonazioni();
			console.log($scope.donazione);
			$scope.prodotti=donazioniService.getProdotti();
			console.log($scope.prodotti);
			$scope.sede=donazioniService.getSede();
			console.log($scope.sede);
		}
		
		$scope.init();
		
		$timeout(function(){
			console.log("time");
	    	 var latlng = new google.maps.LatLng($scope.sede.longitudine, $scope.sede.latitudine);
	         var myOptions = {
	             zoom: 12,
	             center: latlng,
	             mapTypeId: google.maps.MapTypeId.ROADMAP
	         };
	    	$scope.map1 = new google.maps.Map(document.getElementById("map_canvas_sede"), myOptions);
	    	console.log($scope.map1);
	        $scope.overlay1 = new google.maps.OverlayView();
	        $scope.overlay1.draw = function() {}; // empty function required
	        $scope.overlay1.setMap($scope.map1);
	        var point = new google.maps.Point($scope.sede.longitudine, $scope.sede.latitudine );
	        var coordinates = $scope.overlay1.getProjection().fromContainerPixelToLatLng(point);
	        var marker = new google.maps.Marker({
	            position: coordinates,
	            map: $scope.map1
	        });
	        $scope.map1.setCenter({lat: $scope.sede.longitudine, lng: $scope.sede.latitudine}); 
		},100);
		
		$scope.saveDonation= function(){
			ons.notification.confirm({message: 'Do you want to save your donation?'})
			.then(function(ok) {
				if(ok){
						var str="codsede="+$scope.sede.idSede+
						"&titolo="+$scope.donazione.titolo+
						"&descrizione="+$scope.donazione.descrizione+
						"&dataInizio="+$scope.donazione.dataInizio+
						"&dataFine="+$scope.donazione.dataFine+
						"&flagIndivisibile="+1;
						angular.forEach($scope.prodotti, function(value, key) {
							 var prodotto={
									 "id": value.id,
									 "idUnita": 1,
									 "quantita": value.quantita,
									 "pezzi":value.pezzi
							 }
							 str=str+"&prodotto="+JSON.stringify(prodotto);
						});
						console.log(str);
						var settings = {
					          "url": "https://joyfoodamministratore-sisp.rhcloud.com/api/insertDonazione",
					          "method": "POST",
					          "headers": {
					            "content-type": "application/x-www-form-urlencoded",
					          },
					          "data": str
					          };
					        $http(settings)
					            .then(function(response) {
					                	ons.notification.alert('Your donation has been saved correctly').then(function(ok) {
					                		 myNavigator.resetToPage("slidingmenu.html");
					                	});
					            }
					           ,function error(response) {
					        	   ons.notification.alert('Error, the donation could not be saved');					        	   
					           });
				}
			    
			});
		}
		
		$scope.changeView=function(prodotto){
		    prodottoService.saveProdotto(prodotto);
		    console.log(prodotto.id);
		    myNavigator.pushPage("html/SilviaVincenzo/dettaglio_prodotto.html");
		}
				
});