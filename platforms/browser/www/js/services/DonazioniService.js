myApp.service('donazioniService', function() {
    	  var donazioni = {};
    	  var sede={};
    	  var prodotti=[];
    	  
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
    	    return this.donazioni;
    	  }
    	  
          this.addProdotto= function(prodotto) {
        	  var prod={};
        	  console.log(prodotto);
        	  if(!prodotti){
        		  prodotti=new Array();
        	  }
        	  angular.copy(prodotto,prod)
        	  console.log(prod);
              prodotti.push(prod);
        	  console.log(prodotti);
	  	  }
	
	  	  this.getProdotti= function(){
	  		console.log("PROD");
	  		console.log(prodotti);
	  	    return prodotti;
	  	  }
	  	  
	  	  this.removeProdotti=function(index){
	  		this.prodotti=this.prodotti.splice(index, 1);
	  	  }

})