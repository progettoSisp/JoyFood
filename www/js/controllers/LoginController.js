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
        username=$scope.field1;
        password=$scope.field2;
        console.log("login "+$scope.field1+" "+$scope.field2);
        remoteApiService.login(username,password).then(function (user) {
            console.log(user);
            if(user.tipoUtente){
                 localDbService.Init();
                  filtriService.Init();
                      myNavigator.resetToPage("slidingmenu.html");
            }

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