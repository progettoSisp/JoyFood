/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('loginController', function($scope,$http,remoteApiService,localDbService,filtriService) {
	var data;
	var db; 
	ons.ready(function() {
       console.log("YEAU");
      });
	$scope.field1;
	$scope.field2;
    $scope.login= function(){
    	  $("#loader").html("<div ons-loading-placeholder='home.html'><svg class='progress-circular'><circle class='progress-circular__primary' cx='50%' cy='50%' r='40%' fill='none' stroke-width='10%' stroke-miterlimit='10'/></svg></div>");
    	  
        username=$scope.field1;
        password=$scope.field2;
        console.log("login "+$scope.field1+" "+$scope.field2);
        remoteApiService.login(username,password).then(function (user) {
            console.log(user);
                 localDbService.Init();
                 filtriService.Init();
                  $("#loader").html("");
                      myNavigator.resetToPage("slidingmenu.html");
        });

    }

    $scope.toSting= function(value){
     var str="";
          $.each(value, function(idx2,val2) {
               str=str+ idx2 + "=" + val2+"&";
          });
          return str.substr(0, str.length-1);
    }

});