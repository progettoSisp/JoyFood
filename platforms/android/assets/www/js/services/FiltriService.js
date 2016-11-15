myApp.service('filtriService', function(localDbService,$q) {
   classificazione={};
   tipo={};
   categoria={};
    sottoCategoria={};
  allergene={};

     this.Init= function() {
    	 var deferred = $q.defer();
          localDbService.getClassificazione().then(function (result) {
        	  console.log(result);
             	classificazione=result;
             	  localDbService.getTipo().then(function (result) {
                	  console.log(result);
                      	 tipo=result;
                      	 localDbService.getCategoria().then(function (result) {
                       	  console.log(result);
                       	  categoria=result;
                       	 localDbService.getSottoCategoria().then(function (result) {
                       	  console.log(result);  
                       	  sottoCategoria=result;
                       	  localDbService.getAllergene().then(function (result) {
                        	  console.log(result); 
                        	  allergene=result;
                          });
                          });
                          });
                  });
          });
        
         
         
        
          console.log("INIT");
     }

     this.getClassificazione= function() {
        return classificazione;
     }
     this.getTipo= function() {
        return tipo;
     }
     this.getCategoria= function() {
        return categoria;
     }
     this.getSottoCategoria= function() {
        return  sottoCategoria;
     }
     this.getAllergene= function() {
        return allergene
     }


});