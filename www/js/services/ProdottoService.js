/**
 * Created by Aerdna on 13-Sep-16.
 */
 myApp.service('prodottoService', function() {
    	  var prodotto = {};

    	  this.saveProdotto = function(temp) {
    	      prodotto=angular.copy(temp);
    	  };

    	  this.getProdotto = function(){
    	      return prodotto;
    	  };

    	});