myApp.service('userService', function() {
    	  var user = {};

          this.setUser= function(user) {
                this.user=angular.copy(user);
    	  }

    	  this.getUSer= function(){
    	    return this.user
    	  }

})