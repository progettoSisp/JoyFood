myApp.service('remoteApiService', function($q,$http,userService) {
    var user = {};

    this.login = function(username,password) {
        var deferred = $q.defer();
        $http.post("https://joyfoodamministratore-sisp.rhcloud.com/user/login", {user: username, password: password})
            .success(function(data, status, headers, config) {
                if(headers('X-AUTH-TOKEN')){
                    console.log(headers('X-AUTH-TOKEN'));
                     user=data;
                     user.token=headers('X-AUTH-TOKEN');
                     userService.setUser(user);
                     deferred.resolve(data);
                }
            })
            .error(function(response) {
                 deferred.resolve(response);
            });
        return deferred.promise;
    };

    this.register = function(user){
        var deferred = $q.defer();
        $http.post("https://joyfoodamministratore-sisp.rhcloud.com/user/register", {
            user:user.username,
            password:user.password,
            mail:user.email,
            nome:user.nome,
            cognome:user.cognome,
            sesso:user.sesso,
            codFiscale:user.codFiscale,
            statoNascita:user.statoNascita,
            provinciaNascita:user.provinciaNascita,
            comuneNascita:user.comuneNascita,
            provinciaResidenza:user.provinciaResidenza,
            capNascita:user.capNascita,
            comuneResidenza:user.comuneResidenza,
            indirizzoResidenza:user.indirizzoResidenza,
            capResidenza: user.capResidenza,
            telefono: user.telefono
        })
        .success(function(response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    this.updateUser= function(user){
        var deferred = $q.defer();
        $http.post("https://joyfoodamministratore-sisp.rhcloud.com/user/updateUser", {
            user:user.username,
            mail:user.email,
            nome:user.nome,
            cognome:user.cognome,
            sesso:user.sesso,
            codFiscale:user.codFiscale,
            statoNascita:user.statoNascita,
            provinciaNascita:user.provinciaNascita,
            comuneNascita:user.comuneNascita,
            provinciaResidenza:user.provinciaResidenza,
            capNascita:user.capNascita,
            comuneResidenza:user.comuneResidenza,
            indirizzoResidenza:user.indirizzoResidenza,
            capResidenza: user.capResidenza,
            telefono: user.telefono
        })
        .success(function(response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };


    this.getAzienda= function(){
        var deferred = $q.defer();
         $http.get("https://joyfoodamministratore-sisp.rhcloud.com/user/azienda")
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.insertAzienda= function(azienda){
        var deferred = $q.defer();
        $http.post("https://joyfoodamministratore-sisp.rhcloud.com/insertAzienda", {
            cf:azienda.cf,
            stato:azienda.stato,
            denominazione:azienda.denominazione,
            sedeLegale:azienda.sedeLegale,
            note:azienda.note,
            codNaturaGiuridica1lvl:azienda.codNaturaGiuridica1lvl
        })
        .success(function(response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    this.updateAzienda= function(azienda){
        var deferred = $q.defer();
        $http.post("https://joyfoodamministratore-sisp.rhcloud.com/updateAzienda", {
            cf:azienda.cf,
            stato:azienda.stato,
            denominazione:azienda.denominazione,
            sedeLegale:azienda.sedeLegale,
            note:azienda.note,
            codNaturaGiuridica1lvl:azienda.codNaturaGiuridica1lvl
        })
        .success(function(response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    this.insertSede= function(sede){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/insertSede", {
        codAzienda      :sede.codAzienda,
        tipoSedeService:sede.tipoSedeService,
        provinciaSede:sede.provinciaSede,
        comuneSede    :sede.comuneSede,
        indirizzoSede:sede.indirizzoSede,
        capSede:sede.capSede,
        denominazioneSede:sede.denominazioneSede,
        cordinateGpsSede:sede.cordinateGpsSede,
        note:sede.note,
        latitudine:sede.latitudine,
        longitudine:sede.longitudine
      })
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

this.updateSede= function(sede){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/updateSede", {
        codSede      :sede.id,
        tipoSedeService:sede.tipoSedeService,
        provinciaSede:sede.provinciaSede,
        comuneSede    :sede.comuneSede,
        indirizzoSede:sede.indirizzoSede,
        capSede:sede.capSede,
        denominazioneSede:sede.denominazioneSede,
        cordinateGpsSede:sede.cordinateGpsSede,
        note:sede.note,
        latitudine:sede.latitudine,
        longitudine:sede.longitudine
      })
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.getSedi= function(){
      var deferred = $q.defer();
     $http.get("https://joyfoodamministratore-sisp.rhcloud.com/sedi")
        .success(function(response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    this.getDonazioni= function(){
        var deferred = $q.defer();
        $http.get("https://joyfoodamministratore-sisp.rhcloud.com/allDonazioni")
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.donazioniByAzienda= function(id){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/donazioniByAzienda",{
           codAzienda:id
      })
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.donazioniBySede= function(id){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/donazioniBySede",{ idSede:id })
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.listRichiesteByDonazione== function(id){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/donazioniBySede",{ idDonazione:id })
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.insertDonazione== function(donazione){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/insertDonazione",{
            codsede:donazione.codSede,
            titolo:donazione.titolo,
            descrizione:donazione.descrizione,
            dataInizio:donazione.dataInizio,
            dataFine:donazione.dataFine,
            immagine:donazione.immagine,
            flagIndivisibile:donazione.flagIndivisibile,
            note:donazione.note,
            prodotto:donazione.prodotto,
      })
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.accettaRichiesta== function(id){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/accettaRichiesta",{
            codDonazione:id
      })
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.inserimentoRichiesta== function(richiesta){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/inserimentoRichiesta",{
           idCarrello:richiesta.idCarrello,
           prodotto:richiesta.prodotto
      })
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.ricercaDonazione== function(richiesta){
          var deferred = $q.defer();
          $http.post("https://joyfoodamministratore-sisp.rhcloud.com/ricercaDonazione",{
            idCarrello:richiesta.idCarrello,
            prodotto:richiesta.prodotto
         })
        .success(function(response) {
              deferred.resolve(response);
         })
         .error(function(response) {
              deferred.resolve(response);
        });
    };

});
