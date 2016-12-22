
myApp.controller('menuController', function($scope, userService) {

	$scope.user=userService.getUser();
	$scope.view=userService.getView();
	
	$scope.init = function () {
		console.log(userService.getUser());
		$scope.user=userService.getUser();
		$scope.view=userService.getView();
		console.log($scope.user);
	}
	
	$scope.init();
	
	$scope.logout=function(){
		userService.clear();
		slidingMenu.closeMenu();
		slidingMenu.setMainPage('index.html');
	};
	
	$scope.$watch(function() { return userService.getView(); }, function(newVal) { 
	    console.log("MENU WATCH");
	    $scope.init();
	}, true);
});