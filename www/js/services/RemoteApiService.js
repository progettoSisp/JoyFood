myApp.service('remoteApiService', function($q,$http,userService) {
    var user = {};

     this.toString= function(value){
         var str="";
              $.each(value, function(idx2,val2) {
                   str=str+ idx2 + "=" + val2+"&";
              });
              return str.substr(0, str.length-1);
     }

    this.login = function(username,password) {
        var deferred = $q.defer();
        var str=this.toString({user: username, password: password});
        var settings = {
          "url": "https://joyfoodamministratore-sisp.rhcloud.com/user/login",
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
          },
          "data": str
          };
        $http(settings)
            .then(function(response) {
                if(response.headers('X-AUTH-TOKEN')){
                    console.log(response.headers('X-AUTH-TOKEN'));
                     user=response.data;
                     user.token=response.headers('X-AUTH-TOKEN');
                     userService.setUser(user);
                     console.log("USER");
                      console.log(userService.getUser(user));
                     deferred.resolve(response.data);
                }
            }
           ,function error(response) {
            console.log(response);
                 deferred.resolve(response);
            });
        return deferred.promise;
    };

    this.register = function(user){
        var deferred = $q.defer();
          var str=this.toString(user);
                var settings = {
                  "url": "https://joyfoodamministratore-sisp.rhcloud.com/user/register",
                  "method": "POST",
                  "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                  },
                  "data": str
                  };
        $http(settings)
        .then(function(response) {
            deferred.resolve(response.data);
        }
        ,function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    this.updateUser= function(user){
        var deferred = $q.defer();
                  var str=this.toString(user);
                        var settings = {
                          "url": "https://joyfoodamministratore-sisp.rhcloud.com/user/updateUser",
                          "method": "POST",
                          "headers": {
                            "content-type": "application/x-www-form-urlencoded",
                          },
                          "data": str
                          };
                $http(settings)
        .then(function(response) {
            deferred.resolve(response.data);
        },function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };


    this.getAzienda= function(){
        var deferred = $q.defer();
         $http.get("https://joyfoodamministratore-sisp.rhcloud.com/user/azienda")
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.insertAzienda= function(azienda){
        var deferred = $q.defer();
                  var str=this.toString(azienda);
                        var settings = {
                          "url": "https://joyfoodamministratore-sisp.rhcloud.com/user/insertAzienda",
                          "method": "POST",
                          "headers": {
                            "content-type": "application/x-www-form-urlencoded",
                          },
                          "data": str
                          };
        $http(settings)
       .then(function(response) {
            deferred.resolve(response.data);
        },function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    this.updateAzienda= function(azienda){
        var deferred = $q.defer();
        var str=this.toString(azienda);
        var settings = {
          "url": "https://joyfoodamministratore-sisp.rhcloud.com/updateAzienda",
          "method": "POST",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
          },
          "data": str
          };
       $http(settings)
        .then(function(response) {
            deferred.resolve(response.data);
        },function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    this.insertSede= function(sede){
      var deferred = $q.defer();
       var str=this.toString(sede);
              var settings = {
                "url": "https://joyfoodamministratore-sisp.rhcloud.com/insertSede",
                "method": "POST",
                "headers": {
                  "content-type": "application/x-www-form-urlencoded",
                },
                "data": str
                };
        $http(settings)
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

this.updateSede= function(sede){
      var deferred = $q.defer();
       var str=this.toString(sede);
              var settings = {
                "url": "https://joyfoodamministratore-sisp.rhcloud.com/insertSede",
                "method": "POST",
                "headers": {
                  "content-type": "application/x-www-form-urlencoded",
                },
                "data": str
                };
        $http(settings)
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.getSedi= function(){
      var deferred = $q.defer();
     $http.get("https://joyfoodamministratore-sisp.rhcloud.com/sedi")
        .then(function(response) {
            deferred.resolve(response.data);
        },function(response) {
            deferred.resolve(response);
        });
        return deferred.promise;
    };

    this.getDonazioni= function(){
        var deferred = $q.defer();
        $http.get("https://joyfoodamministratore-sisp.rhcloud.com/allDonazioni")
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.donazioniByAzienda= function(id){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/donazioniByAzienda","codAzienda="+id)
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.donazioniBySede= function(id){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/donazioniBySede","idSede="+id )
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.listRichiesteByDonazione== function(id){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/donazioniBySede","idDonazione="+id )
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.insertDonazione== function(donazione){
      var deferred = $q.defer();
      var str=this.toString(donazione);
             var settings = {
               "url": "https://joyfoodamministratore-sisp.rhcloud.com/insertDonazione",
               "method": "POST",
               "headers": {
                 "content-type": "application/x-www-form-urlencoded",
               },
               "data": str
               };
       $http(settings)
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.accettaRichiesta== function(id){
      var deferred = $q.defer();
      $http.post("https://joyfoodamministratore-sisp.rhcloud.com/accettaRichiesta","codDonazione="+id)
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
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
         .then(function(response) {
             deferred.resolve(response.data);
         },function(response) {
             deferred.resolve(response);
         });
         return deferred.promise;
    };

    this.ricercaDonazione== function(richiesta){
          var deferred = $q.defer();
          var str=this.toString(richiesta);
                 var settings = {
                   "url": "https://joyfoodamministratore-sisp.rhcloud.com/ricercaDonazione",
                   "method": "POST",
                   "headers": {
                     "content-type": "application/x-www-form-urlencoded",
                   },
                   "data": str
                   };
        $http(settings)
        .then(function(response) {
              deferred.resolve(response.data);
         },function(response) {
              deferred.resolve(response);
        });
    };

});
