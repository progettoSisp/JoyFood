 myApp.service('dialogService', function() {
       var prodotto=[];

       this.saveProdotto = function(temp) {
           prodotto=temp;
       };

       this.getProdotto = function(){
           return prodotto;
       };

     });