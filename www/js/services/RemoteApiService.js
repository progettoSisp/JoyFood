myApp.service('remoteApiService', function($http,$status,userService) {
    	   var user = {};

    	  this.login = function(username,password) {
    	            $http.post("https://joyfoodamministratore-sisp.rhcloud.com/user/login", {user: username, password: password})
                                    .success(function(data, status, headers, config) {
                                    if(headers('X-AUTH-TOKEN')){
                                          console.log(headers('X-AUTH-TOKEN'));
                                          $http.defaults.headers.common['X-AUTH-TOKEN'] = headers('X-AUTH-TOKEN');
                                          return data;
                                    }
                                    })
                                    .error(function(response) {
                                        return error;
                                    });
    	  };

    	  this.register = function(user){
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
                            return response.data;
                            })
                            .error(function(response) {
                                return error;
                            });
           };

           this.updateUser= function(user){
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
                                        return response.data;
                                        })
                                        .error(function(response) {
                                            return error;
                                        });
                       });
           })

           this.getAzienda= function(){
           $http.get("https://joyfoodamministratore-sisp.rhcloud.com/user/azienda"
                .success(function(response) {
                    return response.data;
                })
                .error(function(response) {
                    return error;
                });
            };

           this.insertAzienda= function(azienda){
             $http.post("https://joyfoodamministratore-sisp.rhcloud.com/insertAzienda", {



                          	            })
                .success(function(response) {
                    return response.data;
                })
                .error(function(response) {
                    return error;
                });
            });

            this.updateAzienda= function(azienda){
                        $http.post("https://joyfoodamministratore-sisp.rhcloud.com/updateAzienda", {



                                     	            })
                           .success(function(response) {
                               return response.data;
                           })
                           .error(function(response) {
                               return error;
                           });
                       });

           this.insertSede= function(sede){
             $http.post("https://joyfoodamministratore-sisp.rhcloud.com/insertSede")
                .success(function(response) {
                    return response.data;
                })
                .error(function(response) {
                    return error;
                });
            });

           this.getSedi= function(){
             $http.get("https://joyfoodamministratore-sisp.rhcloud.com/sedi")
                .success(function(response) {
                    return response.data;
                })
                .error(function(response) {
                    return error;
                });
            });

           this.getDonazioni= function(){
             $http.get("https://joyfoodamministratore-sisp.rhcloud.com/allDonazioni")
                .success(function(response) {
                    return response.data;
                })
                .error(function(response) {
                    return error;
                });
            });
           this.donazioniByAzienda= function(){
             $http.get("https://joyfoodamministratore-sisp.rhcloud.com/allDonazioni")
                .success(function(response) {
                    return response.data;
                })
                .error(function(response) {
                    return error;
                });
            });
})   donazioniBySede listRichiesteByDonazione insertDonazione  accettaRichiesta inserimentoRichiesta ricercaDonazione