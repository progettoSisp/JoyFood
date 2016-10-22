
myApp.controller('homeController', function($scope,$http, $timeout,filtriService) {
	var data;
	var db; 
	var map;
	 $scope.map;
     $scope.markers = [];
     $scope.markerId = 1;
     $scope.prova
     ons.ready(function() {
    	 //navigator.geolocation.getCurrentPosition(onSuccess,onError);
    	 console.log(filtriService.getClassificazione());
    });

     $scope.print=function(){
        console.log(filtriService.getClassificazione());
     };
     

	
});