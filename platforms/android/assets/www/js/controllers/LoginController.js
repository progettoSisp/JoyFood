/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('loginController', function($scope,$http,remoteApiService,localDbService,userService,filtriService) {
	var data;
	var db; 
	$scope.dialog;
	ons.ready(function() {
       console.log("YEAU");
       ons.createDialog('loader.html',{parentScope: $scope}).then(function(dialog) {
  		 $scope.dialog=dialog;
  	 	});
      });
	
	
	  this.toString= function(value){
	         var str="";
	              $.each(value, function(idx2,val2) {
	                   str=str+ idx2 + "=" + val2+"&";
	              });
	              return str.substr(0, str.length-1);
	     }
	
	$scope.field1;
	$scope.field2;
    $scope.login= function(){
    	console.log("login");
    	$scope.dialog.show();
        username=$scope.field1;
        password=$scope.field2; 
        var str=this.toString({user: username, password: password});
        var settings = {
          "url": "https://joyfoodamministratore-sisp.rhcloud.com/user/login",
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
          },
          "data": "user="+username+"&password="+password
          };
        $http(settings)
            .then(function(response) {
                if(response.headers('X-AUTH-TOKEN')){
                    console.log(response.headers('X-AUTH-TOKEN'));
                     user=response.data;
                     user.token=response.headers('X-AUTH-TOKEN');
                     userService.setUser(user);
                     console.log("USER");
                      console.log(userService.getUser(user));
                      localDbService.Init();
                      filtriService.Init();
                     $scope.dialog.hide();
                      myNavigator.resetToPage("slidingmenu.html");
                     
                }
            }
           ,function error(response) {
            console.log(response);
            	$scope.dialog.hide();
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