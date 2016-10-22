
myApp.controller('homeController', function($scope,$http, $timeout,localDbService) {
	var data;
	var db; 
	var map;
	 $scope.map;
     $scope.markers = [];
     $scope.markerId = 1;
     
     ons.ready(function() {
    	 //navigator.geolocation.getCurrentPosition(onSuccess,onError);
    	 localDbService.getClassificazione().then(function (result) {
             console.log(result);
    	 });

    });
     
     

	
});