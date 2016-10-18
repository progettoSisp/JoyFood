myApp.service('remoteApiService', function($q,$http,$status,userService) {
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
    });


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
            cf=azienda.cf,
            stato=azienda.stato,
            denominazione=azienda.denominazione,
        })
        .success(function(response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    });

    this.updateAzienda= function(azienda){
        var deferred = $q.defer();
        $http.post("https://joyfoodamministratore-sisp.rhcloud.com/updateAzienda", {



        })
        .success(function(response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    });

    this.insertSede= function(sede){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/insertSede")
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    });

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
    });

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
    });

    this.donazioniByAzienda= function(){
      var deferred = $q.defer();
      $http.get("https://joyfoodamministratore-sisp.rhcloud.com/allDonazioni")
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    });

    this.donazioniBySede= function(){
      var deferred = $q.defer();
      $http.get("https://joyfoodamministratore-sisp.rhcloud.com/donazioniBySede",{})
         .success(function(response) {
             deferred.resolve(response);
         })
         .error(function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    });
})   donazioniBySede listRichiesteByDonazione insertDonazione  accettaRichiesta inserimentoRichiesta ricercaDonazione