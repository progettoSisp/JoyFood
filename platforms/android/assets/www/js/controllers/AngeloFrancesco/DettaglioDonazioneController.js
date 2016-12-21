/**
 * Created by Aerdna on 17-Sep-16.
 */

myApp.controller('dettaglioDonazioneController', function(prodottoService,donazioniService,$scope,$http,$timeout) {
		$scope.donazione;
		$scope.map1;
		$scope.init = function () {
			console.log("INIT");
			$scope.donazione=donazioniService.getDonazioni();
			console.log($scope.donazione);
		}
		
		$scope.init();
		
		$timeout(function(){
			console.log("time");
	    	 var latlng = new google.maps.LatLng($scope.donazione.sede.longitudine, $scope.donazione.sede.latitudine);
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
	        var point = new google.maps.Point($scope.donazione.sede.longitudine, $scope.donazione.sede.latitudine );
	        var coordinates = $scope.overlay1.getProjection().fromContainerPixelToLatLng(point);
	        var marker = new google.maps.Marker({
	            position: coordinates,
	            map: $scope.map1
	        });
	        $scope.map1.setCenter({lat: $scope.donazione.sede.longitudine, lng: $scope.donazione.sede.latitudine}); 
		},100);
		
		$scope.changeView=function(prodotto){
		    prodottoService.saveProdotto(prodotto);
		    console.log(prodotto.id);
		    myNavigator.pushPage("html/SilviaVincenzo/dettaglio_prodotto.html");
		}
		
		$scope.inserisciRichiesta=function(){
			myNavigator.pushPage("html/AndreaGianmarco/inserimento_richiesta.html");
		}
		
});