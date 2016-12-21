myApp.service('userService', function() {
    	  var user = {};
    	  var view=false;
    	  var observerCallbacks = [];
    	  var sedi = [];
    	  var azienda=[];
          this.setUser= function(user) {
                this.user=angular.copy(user);
                if(this.user.tipoUtente.idTipoUtente==1){
                	view=true;
                }else{
                	view=false;
                }
    	  }

    	  this.getUser= function(){
    	    return this.user
    	  }
    	  
    	  this.getView= function(){
    		  return view;
    	  }
    	  
    	  this.changeView= function(){
    		  if(this.user.tipoUtente.idTipoUtente==1){
    			  console.log("USER SERVICE");
    		  	view=!view;
    		  	console.log(view);
    		  }
    	  }
    	  
    	  this.getSedi=function(){
    		  return this.sedi;
    	  }
    	  
    	  this.saveSedi=function(sedi){
    		  return this.sedi=angular.copy(sedi);
    	  }
    	  
    	  this.getAzienda=function(){
    		  return this.azienda;
    	  }
    	  
    	  this.saveAzienda=function(azienda){
    		  return this.azienda=angular.copy(azienda);
    	  }

})