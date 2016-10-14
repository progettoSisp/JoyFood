/**
 * Created by Aerdna on 17-Sep-16.
 */

myApp.controller('donazioneController', function($scope,$http) {
    $scope.signUp= function(){
        alert("ok");
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