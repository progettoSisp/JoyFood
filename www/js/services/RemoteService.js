 myApp.service('remoteAppService', function($http,$q) {
var deffered = $q.defer();
  var data = [];
  var myService = {};

this.getClassificazione = function(){
							var deferred = $q.defer();
                         	 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllClassificazione")
                                       .success(function(response) {
                                         data = response.data;
                                         deferred.resolve(response);
                                       })
                                       .error(function(response) {
                                    	   deferred.resolve(response);
                                       });
                                          return deferred.promise;
                                      };

 this.getCategoria = function(){
 var deferred = $q.defer();
                         	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllCategoria")
                                       .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                       })
                                       .error(function(response) {
                                    	   deferred.resolve(response);
                                       });
                                           return deferred.promise;
                      };

  this.getSottoCategoria = function(){
  var deferred = $q.defer();
                          	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllSottoCategoria")
                                        .success(function(response) {
                                         data = response.data;
                                         deferred.resolve(response);
                                        })
                                        .error(function(response) {
                                     	   deferred.resolve(response);
                                        });
                                            return deferred.promise;
                       };

  this.getAllergene = function(){
  var deferred = $q.defer();
                          	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllAllergene")
                                        .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                        })
                                        .error(function(response) {
                                        	 deferred.resolve(response);
                                        });
                          	            return  deferred.promise;
                                };

  this.getTipo = function(){
  var deferred = $q.defer();
                          	            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllTipo")
                                        .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                        })
                                        .error(function(response) {
                                        	 deferred.resolve(response);
                                        });
                          	          return deferred.promise;
                       };
    this.getProdotto= function(){
    var deferred = $q.defer();
                            $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllProdotti")
                                         .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                         })
                                         .error(function(response) {
                                              deferred.resolve(response);
                                         });
                            return deferred.promise;
                            };

    this.getNatGiud1lvl=function(){
    var deferred = $q.defer();
                                $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllNatGiud1lvl")
                                    .success(function(response) {
                                         data = response.data;
                                         deferred.resolve(response);
                                            })
                                    .error(function(response) {
                                    	 deferred.resolve(response);
                                     });
                                return deferred.promise;
                                };
    this.getNatGiud2lvl=function(){
    var deferred = $q.defer();
                                $http.get("https://joyfoodamministratore-sisp.rhcloud.com/public/listAllNatGiud2lvl")
                                    .success(function(response) {
                                        data = response.data;
                                        deferred.resolve(response);
                                            })
                                    .error(function(response) {
                                    	 deferred.resolve(response);
                                     });
                                return deferred.promise;
                                };

    	});