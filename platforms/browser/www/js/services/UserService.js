myApp.service('userService', function() {
    	  var user = {};

          this.setUser= function(user) {
                this.user=angular.copy(user);
    	  }

    	  this.getUser= function(){
    	    return this.user
    	  }

})