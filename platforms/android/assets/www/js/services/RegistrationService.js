/**
 * Created by Aerdna on 13-Sep-16.
 */
 myApp.service('registrationService', function() {
    	  var user = {};

    	  this.saveUser = function(temp) {
    	      user=angular.copy(temp);
    	      console.log(user);
    	  };

    	  this.getUser = function(){
    	      return user;
    	  };

    	});