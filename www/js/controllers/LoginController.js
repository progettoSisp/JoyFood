/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('loginController', function($scope,$http) {
	var data;
	var db; 
	ons.ready(function() {
       console.log("YEAU");
      });
	$scope.field1;
	$scope.field2;
    $scope.login= function(){  	
    	var settings = {
    			  "async": true,
    			  "crossDomain": true,
    			  "url": "https://joyfoodamministratore-sisp.rhcloud.com/user/login",
    			  "method": "POST",
    			  "headers": {
    			    "content-type": "application/x-www-form-urlencoded",
    			    "cache-control": "no-cache",
    			    "postman-token": "12636e7f-1f18-a26d-29f6-6984ed1bd229"
    			  },
    			  "data": {
    			    "user":$scope.field1,
    			    "password": $scope.field2
    			  }
    			}
    	$.ajax(settings).done(function (response) {
    		console.log(response);
                 myNavigator.resetToPage('slidingmenu.html')
                 console.log("LOGIN "+response.data.result);
                 db= window.openDatabase("database", "1.0", "joyfooddatabase", 1000000);

         });      
    }
    

});