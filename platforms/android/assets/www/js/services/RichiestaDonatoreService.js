myApp.service('richiestaDonatoreService', function() {
	  var richiesta = {};

	  this.saveRichiesta = function(temp) {
		  richiesta=angular.copy(temp);
	  };

	  this.getRichiesta = function(){
	      return richiesta;
	  };

	});