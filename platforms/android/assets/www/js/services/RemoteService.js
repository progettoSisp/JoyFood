 myApp.service('remoteService', function() {
    	  var user = {};

    	  this.saveUser = function(temp) {
    	      user=angular.copy(temp);
    	      console.log(user);
    	  };

    	  this.getUser = function(){
    	      return user;
    	  };

    	});