myApp.service('donazioniService', function() {
    	  var donazioni = {};
    	  var sede={};
    	  
          this.setSede= function(sede) {
              this.sede=angular.copy(sede);
	  	  }
	
	  	  this.getSede= function(){
	  	    return this.sede
	  	  }
    	  
          this.setDonazioni= function(donazioni) {
                this.donazioni=angular.copy(donazioni);
    	  }

    	  this.getDonazioni= function(){
    	    return this.donazioni
    	  }

})