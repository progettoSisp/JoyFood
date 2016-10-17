myApp.service('userService', function($http,$status) {
    	  var user = {};

          this.setUser= function(user) {
                this.user=angular.copy(user);
    	  }

    	  this.getUSer= function(){
    	    return this.user
    	  }

})