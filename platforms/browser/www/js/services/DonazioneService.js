/**
 * Created by Aerdna on 13-Sep-16.
 */
 myApp.service('donazioneService', function() {
       var donazione=[];

       this.saveDonazione = function(temp) {
           donazione=temp;
       };

       this.getDonazione = function(){
           return donazione;
       };

     });