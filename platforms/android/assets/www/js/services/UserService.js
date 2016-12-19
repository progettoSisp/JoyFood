myApp.service('userService', function() {
    	  var user = {};
    	  var view=false;
    	  var observerCallbacks = [];
    	  
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

})