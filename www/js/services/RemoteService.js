 myApp.service('remoteService', function($http,$status) {
var deffered = $q.defer();
  var data = [];
  var myService = {};

this.getClassificazioni = function({
                         	 return $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllClassificazione")
                                       .success(function(response) {
                                         data = response.data;
                                         deffered.resolve();
                                       })
                                       .error(function(response) {
                                           return error;
                                       });
                                          return deffered.promise;
                                      });

 this.getCategoria = function({
                         	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllCategoria")
                                       .success(function(response) {
                                        data = response.data;
                                         deffered.resolve();
                                       })
                                       .error(function(response) {
                                           return error;
                                       });
                                           return deffered.promise;
                      };

  this.getAllergene = function({
                          	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllAllergene")
                                        .success(function(response) {
                                        data = response.data;
                                         deffered.resolve();
                                        })
                                        .error(function(response) {
                                            return error;
                                        };
                                            return deffered.promise;
                                };

  this.getTipo = function({
                          	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllTipo")
                                        .success(function(response) {
                                        data = response.data;
                                         deffered.resolve();
                                        })
                                        .error(function(response) {
                                            return error;
                       };
                       };
    this.getProdotto= function({
                            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllProdotti")
                                         .success(function(response) {
                                        data = response.data;
                                         deffered.resolve();
                                         })
                                         .error(function(response) {
                                              return error;
                                         };
                            };

    this.getNatGiud1lvl=function({
                                $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllNatGiud1lvl")
                                    .success(function(response) {
                                         data = response.data;
                                          deffered.resolve();
                                            })
                                    .error(function(response) {
                                           return error;
                                     };
                                };
    this.getNatGiud2lvl=function({
                                $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllNatGiud2lvl")
                                    .success(function(response) {
                                        data = response.data;
                                         deffered.resolve();
                                            })
                                    .error(function(response) {
                                           return error;
                                     };
                                };

    	});