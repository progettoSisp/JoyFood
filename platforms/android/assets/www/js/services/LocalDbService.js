 myApp.service('localDbService', function(remoteAppService,$q) {
    	  var  db= window.openDatabase("database", "1.0", "joyfooddatabase", 1000000);

    	  this.Init= function() {
    	      db.transaction(function(transaction) {
//    	    	  	transaction.executeSql('DROP TABLE IF EXISTS Classificazione ');
//	         		transaction.executeSql('DROP TABLE IF  EXISTS Tipo ');
//	         		transaction.executeSql('DROP TABLE IF  EXISTS Categoria ');
    	    	  	transaction.executeSql('DROP TABLE IF  EXISTS SottoCategoria ');
//	         		transaction.executeSql('DROP TABLE IF  EXISTS Allergene ');
//	         		transaction.executeSql('DROP TABLE IF  EXISTS Prodotto');
    	    	  	transaction.executeSql('DROP TABLE IF  EXISTS ProdottoAllergene');
//	         		transaction.executeSql('DROP TABLE IF  EXISTS DemoTable ');
//	         		transaction.executeSql('DROP TABLE IF  EXISTS Utente');
	         		transaction.executeSql('DROP TABLE IF  EXISTS ProdottoAllegene');
    	    	  				//transaction.executeSql('DROP TABLE IF EXISTS ProdottoAllegene');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Classificazione (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Tipo (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Categoria (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS SottoCategoria (id INTEGER PRIMARY KEY ASC,categoria INTEGER,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Allergene (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Prodotto (id INTEGER PRIMARY KEY ASC,classificazione INTEGER, sottoCategoria INTEGER, tipo INTEGER, nome TEXT,immagine BLOB, descrizione)');
                                transaction.executeSql('CREATE TABLE IF NOT EXISTS ProdottoAllergene (codProdotto INTEGER,codAllergene )');
              });
              this.updateClassificazione();
              this.updateTipo();
              this.updateCategoria();
              this.updateSottoCategoria();
              this.updateAllergene();
              this.updateProdottoAllergene();
              this.updateProdotti();
    	  };
    	  
    	  
    	this.updateProdottoAllergene= function(){
    		 var response=remoteAppService.getProdottoAllergene().then(function (response) {
 	            console.log(response);
 	                if(response!=null){
                              var data=response;
                              console.log(data);
                          db.transaction(function(transaction) {
                          		for(var i=0;i<data.length;i++){
                          			console.log(data[i].prodotto.id+","+data[i].allergene.id);
                          			transaction.executeSql('INSERT INTO ProdottoAllergene  VALUES (?,?)', [data[i].prodotto.id,data[i].allergene.id]);
                          		}

                          	});
                          }else{
                              console.log("ERROR Classificazione "+response.status);
                          }
 	            });
    	}
    	
    	this.updateClassificazione= function(){
    	            var response=remoteAppService.getClassificazione().then(function (response) {
    	            console.log(response);
    	                if(response!=null){
                                 var data=response;
                             db.transaction(function(transaction) {
                             		for(var i=0;i<data.length;i++){
                             			transaction.executeSql('INSERT INTO Classificazione  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                             		}

                             	});
                             }else{
                                 console.log("ERROR Classificazione "+response.status);
                             }
    	            });
            };

        this.updateTipo=function(){
            	 remoteAppService.getTipo().then(function (response) {
            	        if(response!=null ){
                            data = response;
                           if(data){
                           	db.transaction(function(transaction) {
                           		for(var i=0;i<data.length;i++){
                           			transaction.executeSql('INSERT INTO Tipo VALUES (?,?)', [data[i].id, data[i].descrizione]);
                           		}

                           	});
                           }else{
                               console.log("ERROR Tipo  "+response);
                           }

                     };
            	 });
            };

         this.updateCategoria=function(){
            	remoteAppService.getCategoria().then(function(response){
            	    if(response!=null){
                            data = response;
                         	db.transaction(function(transaction) {
                         		for(var i=0;i<data.length;i++){
                         			transaction.executeSql('INSERT INTO Categoria VALUES (?,?)', [data[i].id, data[i].descrizione]);
                         		}

                         	});
                         }else{
                             console.log("ERROR Categoria  "+response);
                         }
            	});
            	};

          this.updateSottoCategoria=  function(){
               remoteAppService.getSottoCategoria().then(function(response){
               console.log(response);
                   if(response!=null ){
                          data = response;
                        if(data){
                        	console.log("updateSottoCategoria");		
                        console.log(data);
                            db.transaction(function(transaction) {
                                for(var i=0;i<data.length;i++){
                                    transaction.executeSql('INSERT INTO SottoCategoria VALUES (?,?,?)', [data[i].id, data[i].categoria.id,data[i].descrizione]);
                                }

                            });
                        }else{
                            console.log("ERROR SottoCategoria "+response);
                        }
                   }
               });
            };

          this.updateAllergene=function(){
             var response=remoteAppService.getAllergene	().then(function(response){
                if(response!=null){
                     data = response;
                     db.transaction(function(transaction) {
                        for(var i=0;i<data.length;i++){
                        			transaction.executeSql('INSERT INTO Allergene  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                        		}

                        	});
                        }else{
                            console.log("ERROR Allergene"+response);
                        }
             });

            };


          this.updateNatGiud1lvl= function(){
                var response=remoteAppService.getNatGiud2lvl().then(function(response){
                    if(response!=null){
                        data = respons;
                        db.transaction(function(transaction) {
                        for(var i=0;i<data.length;i++){
                        			transaction.executeSql('INSERT INTO NatGiud1lvl  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                        		}

                        	});
                        }else{
                            console.log("LOGIN "+response);
                        }
                });

                };

          this.updateNatGiudwlvl= function(){
                remoteAppService.getNatGiud2lvl().then(function(response){
                        if(response!=null){
                            data = response;
                            db.transaction(function(transaction) {
                            for(var i=0;i<data.length;i++){
                            			transaction.executeSql('INSERT INTO NatGiudlvl  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                            		}

                            	});
                            }else{
                                console.log("LOGIN "+response);
                            }
                });

                };

           this.updateProdotti= function(){
                          remoteAppService.getProdotto().then(function(response){
                                  if(response!=null){
                                      data = response;
                                       console.log("PRODOTTI");
                                      console.log(data);
                                      db.transaction(function(transaction) {
                                      for(var i=0;i<data.length;i++){
                                      			transaction.executeSql('INSERT INTO Prodotto  VALUES (?,?,?,?,?,?,?)', [data[i].id,data[i].classificazione.id,data[i].sottoCategoria.id,data[i].tipo.id,data[i].nome, data[i].immagine,data[i].descrizione]);
                                      		}

                                      	});
                                      }else{
                                          console.log("LOGIN "+response);
                                      }
                          });

                          };

            this.getClassificazione= function(){
            	var deferred = $q.defer();
                    db.transaction(function (transaction) {
                        transaction.executeSql('SELECT * FROM Classificazione', [], function(tx,result) {
                          deferred.resolve(result.rows);
                          }, function(result) {
                          deferred.resolve(result);
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                    });
                 return deferred.promise;
            };

            this.getTipo= function(){
            	var deferred = $q.defer();
                 db.transaction(function (transaction) {
                     transaction.executeSql('SELECT * FROM Tipo', [], function(tx,result) {
                         deferred.resolve(result.rows);
                         }, function(result) {
                         deferred.resolve(result);
                           console.log('SELECT SQL statement ERROR: ' + error.message);
                         });

                 });
                 return deferred.promise;
            };

            this.getAllergene= function(){
            	var deferred = $q.defer();
                             db.transaction(function (transaction) {
                                     transaction.executeSql('SELECT * FROM Allergene', [], function(tx,result) {
                                       deferred.resolve(result.rows);
                                      }, function(error) {
                                      result=error
                                        console.log('SELECT SQL statement ERROR: ' + error.message);
                                      });
                    });
                 return deferred.promise;
             };

            this.getCategoria= function(){
            	var deferred = $q.defer();
                  db.transaction(function (transaction) {
                         transaction.executeSql('SELECT * FROM Categoria', [], function(tx,result) {
                            deferred.resolve(result.rows);
                          }, function(error) {
                          result=error
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                    });
                 return deferred.promise;
            };

            this.getSottoCategoria= function(){
            	var deferred = $q.defer();
                   db.transaction(function (transaction) {
                          transaction.executeSql('SELECT * FROM SottoCategoria', [], function(tx,result) {
                            deferred.resolve(result.rows);
                           }, function(error) {
                           result=error
                             console.log('SELECT SQL statement ERROR: ' + error.message);
                           });
                    });
                   return deferred.promise;
             };
            this.getNatGiudlvl= function(){
            	var deferred = $q.defer();
                 db.transaction(function (transaction) {
                         transaction.executeSql('SELECT * FROM NatGiudlvl', [], function(tx,result) {
                           deferred.resolve(result.rows);
                          }, function(error) {
                          result=error
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                    });
                 return deferred.promise;
            };

            this.getNatGiudlv2= function(){
            	var deferred = $q.defer();
                 db.transaction(function (transaction) {
                         transaction.executeSql('SELECT * FROM NatGiudlv2', [], function(tx,result) {
                            deferred.resolve(result.rows);
                          }, function(error) {
                          result=error
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                    });
                 return deferred.promise;
            };

            this.prodotti= function(categoria,classificazione,allergene,tipo,sottoCategoria){
            	var deferred = $q.defer();
                 var result;
                 var query='SELECT * FROM Prodotto WHERE '
                 var cat="";
                 if(categoria && categoria.length>0){
                        cat="("
                        for(var i=0;i<categoria.length-1;i++){
                           cat=cat+"categoria="+categoria[i]+" OR ";
                        }
                      cat=cat+categoria[categoria.length-1]+")"
                 }
                 query=query+cat;
                if(classificazione && classificazione.length>0){
                    if(cat){
                       query=cat+" AND ";
                    }
                    cat="("
                    for(var i=0;i<classificazione.length-1;i++){
                        cat=cat+"classificazione="+classificazione[i]+" OR ";
                    }
                       cat=cat+classificazione[classificazione.length-1]+")"
                }
                if(allergene && allergene.length>0){
                    if(cat){
                        query=cat+" AND ";
                     }
                     cat="("
                     for(var i=0;i<allergene.length-1;i++){
                         cat="allergene="+allergene[i]+" OR ";
                     }
                   cat=allergene[allergene.length-1]+")"
                  }

                if(tipo && tipo.length>0){
                 if(!cat){
                    query=cat+" AND ";
                  }
                     cat="("
                     for(var i=0;i<tipo.length-1;i++){
                         cat=tipo[i]+" OR ";
                     }
                   cat=tipo[tipo.length-1]+")"
                  }
                 if(sottoCategoria && sottoCategoria.length>0){
                    if(cat){
                    query=cat+" AND ";
                    }
                      cat="("
                      for(var i=0;i<sottoCategoria.length-1;i++){
                          cat=sottoCategoria[i]+" OR";
                      }
                    cat=sottoCategoria[sottoCategoria.length-1]+")"
                   }
                   query=query+cat;
                  db.executeSql(query, [], function(rs) {
                           result=rs;
                          }, function(error) {
                          result=error
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                 return result;
            };


});