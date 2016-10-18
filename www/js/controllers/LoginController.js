/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('loginController', function($scope,$http,remoteApiService,localDbService) {
	var data;
	var db; 
	ons.ready(function() {
       console.log("YEAU");
      });
	$scope.field1;
	$scope.field2;
    $scope.login= function(){
       var utente=remoteApiService.login($scope.field1,$scope.field2);

    }

});