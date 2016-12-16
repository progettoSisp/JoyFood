 myApp.service('ricercaService', function() {
    	  var ricerca = {};

    	  this.saveRicerca = function(temp) {
    		  ricerca=angular.copy(temp);
    	  };

    	  this.getRicerca = function(){
    	      return ricerca;
    	  };

    	});