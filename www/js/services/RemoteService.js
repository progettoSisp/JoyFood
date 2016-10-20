 myApp.service('remoteAppService', function($http,$q) {
var deffered = $q.defer();
  var data = [];
  var myService = {};

this.getClassificazioni = function(){
							var deferred = $q.defer();
                         	 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllClassificazione")
                                       .success(function(response) {
                                         data = response.data;
                                         deferred.resolve(response);
                                       })
                                       .error(function(response) {
                                    	   deferred.resolve(response);
                                       });
                                          return deffered.promise;
                                      };

 this.getCategoria = function(){
                         	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllCategoria")
                                       .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                       })
                                       .error(function(response) {
                                    	   deferred.resolve(response);
                                       });
                                           return deffered.promise;
                      };

  this.getAllergene = function(){
                          	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllAllergene")
                                        .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                        })
                                        .error(function(response) {
                                        	 deferred.resolve(response);
                                        });
                          	            return  deffered.promise;
                                };

  this.getTipo = function(){
                          	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllTipo")
                                        .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                        })
                                        .error(function(response) {
                                        	 deferred.resolve(response);
                                        });
                          	          return deffered.promise;
                       };
    this.getProdotto= function(){
                            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllProdotti")
                                         .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                         })
                                         .error(function(response) {
                                              deferred.resolve(response);
                                         });
                            return deffered.promise;
                            };

    this.getNatGiud1lvl=function(){
                                $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllNatGiud1lvl")
                                    .success(function(response) {
                                         data = response.data;
                                         deferred.resolve(response);
                                            })
                                    .error(function(response) {
                                    	 deferred.resolve(response);
                                     });
                                return deffered.promise;
                                };
    this.getNatGiud2lvl=function(){
                                $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllNatGiud2lvl")
                                    .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                            })
                                    .error(function(response) {
                                    	 deferred.resolve(response);
                                     });
                                return deffered.promise;                                     
                                };

    	});