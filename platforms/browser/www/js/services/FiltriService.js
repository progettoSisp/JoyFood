myApp.service('filtriService', function(localDbService) {
   classificazione={};
   tipo={};
   categoria={};
    sottoCategoria={};
  allergene={};

     this.Init= function() {
          localDbService.getClassificazione().then(function (result) {
             	classificazione=result;
          });
          localDbService.getTipo().then(function (result) {
              	 tipo=result;
          });
          localDbService.getCategoria().then(function (result) {
               categoria=result;
           });
          localDbService.getSottoCategoria().then(function (result) {
                sottoCategoria=result;
           });
          localDbService.getAllergene().then(function (result) {
               allergene=result;
          });
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