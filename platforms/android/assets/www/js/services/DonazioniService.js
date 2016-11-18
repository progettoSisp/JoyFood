myApp.service('donazioniService', function() {
    	  var donazioni = {};

          this.setDonazioni= function(donazioni) {
                this.donazioni=angular.copy(donazioni);
    	  }

    	  this.getDonazioni= function(){
    	    return this.donazioni
    	  }

})