/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('loginController', function($scope,$http,$cordovaSQLite) {
    $scope.login= function(){
    	
    	var db = $cordovaSQLite.openDB({ name: "my.db" });
        myNavigator.resetToPage('slidingmenu.html')
        $http.get("https://joyfoodamministratore-sisp.rhcloud.com/login?user="+$scope.field1+"&password="+$scope.field2)
            .then(function(response) {
                $scope.myData = response.data.result;
                if($scope.myData){
                    myNavigator.resetToPage('slidingmenu.html')
                    console.log("LOGIN "+response.data.result);
                }else{
                    console.log("LOGIN "+response.data.error);
                }


            });
    }

});