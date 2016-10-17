 myApp.service('localDbService', function(remoteService) {
    	  var  db= window.sqlitePlugin.openDatabase("database", "1.0", "joyfooddatabase", 1000000);

    	  this.Init= function() {
    	      db.transaction(function(transaction) {
                           		transaction.executeSql('DROP TABLE IF EXISTS UTENTE');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Utente (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('INSERT INTO Utente  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Classificazione (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Tipo (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Categoria (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS SottoCategoria (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Allergene (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		transaction.executeSql('CREATE TABLE IF NOT EXISTS Prodotto (id INTEGER PRIMARY KEY ASC,descrizione)');
                           		updateClassificazione();
                           		updateTipo();
                           		updateCategoria();
                           		updateSottoCategoria();
                           		updateAllergene();
                           		updateProdotti();
                           	});
    	  };

    	this.updateClassificazione=function(){
    	            var response=remoteService.getClassificazione()
                    if(response!=null && response.data!=null){
                        var data=response.data;
                    	db.transaction(function(transaction) {
                    		for(var i=0;i<data.length;i++){
                    			transaction.executeSql('INSERT INTO Classificazione  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                    		}

                    	});
                    }else{
                        console.log("ERROR Classificazione "+response.status);
                    }
            };

        this.updateTipo=function(){
            	 var response=remoteService.getClassificazione()
                 if(response!=null && response.data!=null){
                     data = response.data;
                    if(data){
                    	db.transaction(function(transaction) {
                    		for(var i=0;i<data.length;i++){
                    			transaction.executeSql('INSERT INTO Tipo VALUES (?,?)', [data[i].id, data[i].descrizione]);
                    		}

                    	});
                    }else{
                        console.log("ERROR Tipo  "+response.data.error);
                    }

        	  });
            };

         this.updateCategoria=function(){
            	 var response=remoteService.getClassificazione()
                      if(response!=null && response.data!=null){
                        data = response.data;
                    	db.transaction(function(transaction) {
                    		for(var i=0;i<data.length;i++){
                    			transaction.executeSql('INSERT INTO Categoria VALUES (?,?)', [data[i].id, data[i].descrizione]);
                    		}

                    	});
                    }else{
                        console.log("ERROR Categoria  "+response.data.error);
                    }
            };

          this.updateSottoCategoria=  function(){
            var response=remoteService.getClassificazione()
                  if(response!=null && response.data!=null){
                      data = response.data;
                    if(data){
                    	db.transaction(function(transaction) {
                    		for(var i=0;i<data.length;i++){
                    			transaction.executeSql('INSERT INTO SottoCategoria VALUES (?,?,?)', [data[i].id, data[i].descrizione,data[i].descrizione,data[i].categoria.id]);
                    		}

                    	});
                    }else{
                        console.log("ERROR SottoCategoria "+response.data.error);
                    }

            }
         };

          this.updateAllergene=function(){
             var response=remoteService.getClassificazione()
                             if(response!=null && response.data!=null){
                                 data = response.data;
                 db.transaction(function(transaction) {
                    for(var i=0;i<data.length;i++){
                    			transaction.executeSql('INSERT INTO Allergene  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                    		}

                    	});
                    }else{
                        console.log("ERROR Allergene"+response.data.error);
                    }
            };


          this.updateNatGiud1lvl= function(){
                var response=remoteService.getNatGiud2lvl()
                  if(response!=null && response.data!=null){
                      data = response.data;
                db.transaction(function(transaction) {
                                for(var i=0;i<data.length;i++){
                                			transaction.executeSql('INSERT INTO NatGiud1lvl  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                                		}

                                	});
                                }else{
                                    console.log("LOGIN "+response.data.error);
                                }
                };

          this.updateNatGiudwlvl= function(){
                var response=remoteService.getNatGiud2lvl()
                  if(response!=null && response.data!=null){
                      data = response.data;
                db.transaction(function(transaction) {
                                for(var i=0;i<data.length;i++){
                                			transaction.executeSql('INSERT INTO NatGiudlvl  VALUES (?,?)', [data[i].id, data[i].descrizione]);
                                		}

                                	});
                                }else{
                                    console.log("LOGIN "+response.data.error);
                                }
                };

            this.getClassificazione= function(){
                 var result;
                         db.executeSql('SELECT * FROM Classificazione', [], function(rs) {
                           result=rs;
                          }, function(error) {
                          result=error
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                 return result;
            };

            this.getTipo= function(){
                             var result;
                                     db.executeSql('SELECT * FROM Tipo', [], function(rs) {
                                       result=rs;
                                      }, function(error) {
                                      result=error
                                        console.log('SELECT SQL statement ERROR: ' + error.message);
                                      });
                             return result;
            };

            this.getAllergene= function(){
                             var result;
                                     db.executeSql('SELECT * FROM Allergene', [], function(rs) {
                                       result=rs;
                                      }, function(error) {
                                      result=error
                                        console.log('SELECT SQL statement ERROR: ' + error.message);
                                      });
                             return result;
             };

            this.getCategoria= function(){
                 var result;
                         db.executeSql('SELECT * FROM Categoria', [], function(rs) {
                           result=rs;
                          }, function(error) {
                          result=error
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                 return result;
            };

            this.getSottoCategoria= function(){
                  var result;
                          db.executeSql('SELECT * FROM SottoCategoria', [], function(rs) {
                            result=rs;
                           }, function(error) {
                           result=error
                             console.log('SELECT SQL statement ERROR: ' + error.message);
                           });
                  return result;
             };
            this.getNatGiudlvl= function(){
                 var result;
                         db.executeSql('SELECT * FROM NatGiudlvl', [], function(rs) {
                           result=rs;
                          }, function(error) {
                          result=error
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                 return result;
            };

            this.getNatGiudlv2= function(){
                 var result;
                         db.executeSql('SELECT * FROM NatGiudlv2', [], function(rs) {
                           result=rs;
                          }, function(error) {
                          result=error
                            console.log('SELECT SQL statement ERROR: ' + error.message);
                          });
                 return result;
            };

            this.prodotti= function(categoria,classificazione,allergene,tipo,sottoCategoria){
                 var result;
                 var query='SELECT * FROM Prodotto WHERE '
                 var cat="";
                 if(categoria && categoria.length>0){
                        cat="("
                        for(int i=0;i<categoria.length-1;i++){
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
                    for(int i=0;i<classificazione.length-1;i++){
                        cat=cat+"classificazione="classificazione[i]+" OR ";
                    }
                       cat=cat+classificazione[classificazione.length-1]+")"
                }
                if(allergene && allergene.length>0){
                    if(cat){
                        query=cat+" AND ";
                     }
                     cat="("
                     for(int i=0;i<allergene.length-1;i++){
                         cat="allergene="+allergene[i]+" OR ";
                     }
                   cat=allergene[allergene.length-1]+")"
                  }

                if(tipo && tipo.length>0){
                 if(!cat){
                    query=cat+" AND ";
                  }
                     cat="("
                     for(int i=0;i<tipo.length-1;i++){
                         cat=tipo[i]+" OR ";
                     }
                   cat=tipo[tipo.length-1]+")"
                  }
                 if(sottoCategoria && sottoCategoria.length>0){
                    if(cat){
                    query=cat+" AND ";
                    }
                      cat="("
                      for(int i=0;i<sottoCategoria.length-1;i++){
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


}