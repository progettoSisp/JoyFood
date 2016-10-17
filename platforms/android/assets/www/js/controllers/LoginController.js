/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('loginController', function($scope,$http) {
	var data;
	var db; 
	ons.ready(function() {
       console.log("YEAU");
      });
	$scope.field1;
	$scope.field2;
    $scope.login= function(){  	
    	var settings = {
    			  "async": true,
    			  "crossDomain": true,
    			  "url": "https://joyfoodamministratore-sisp.rhcloud.com/user/login",
    			  "method": "POST",
    			  "headers": {
    			    "content-type": "application/x-www-form-urlencoded",
    			    "cache-control": "no-cache",
    			    "postman-token": "12636e7f-1f18-a26d-29f6-6984ed1bd229"
    			  },
    			  "data": {
    			    "user":$scope.field1,
    			    "password": $scope.field2
    			  }
    			}
    	$.ajax(settings).done(function (response) {
    		console.log(response);
                 myNavigator.resetToPage('slidingmenu.html')
                 console.log("LOGIN "+response.data.result);
                 db= window.openDatabase("database", "1.0", "joyfooddatabase", 1000000);
             	db.transaction(function(transaction) {
             		transaction.executeSql('DROP TABLE IF EXISTS UTENTE');
             		transaction.executeSql('CREATE TABLE IF NOT EXISTS Utente (id INTEGER PRIMARY KEY ASC,descrizione)');
             		transaction.executeSql('INSERT INTO Utente  VALUES (?,?)', [data[i].id, data[i].descrizione]);
             		transaction.executeSql('CREATE TABLE IF NOT EXISTS Classificazione (id INTEGER PRIMARY KEY ASC,descrizione)');
             		transaction.executeSql('CREATE TABLE IF NOT EXISTS Tipo (id INTEGER PRIMARY KEY ASC,descrizione)');
             		transaction.executeSql('CREATE TABLE IF NOT EXISTS Categoria (id INTEGER PRIMARY KEY ASC,descrizione)');
             		transaction.executeSql('CREATE TABLE IF NOT EXISTS SottoCategoria (id INTEGER PRIMARY KEY ASC,descrizione)');
             		transaction.executeSql('CREATE TABLE IF NOT EXISTS Allergene (id INTEGER PRIMARY KEY ASC,descrizione)');
             		updateClassificazione('https://joyfoodamministratore-sisp.rhcloud.com/listAllClassificazione')
             		updateTipo('http://joyfoodamministratore-sisp.rhcloud.com/listAllTipo')
             		updateCategoria('http://joyfoodamministratore-sisp.rhcloud.com/listAllCategoria')
             		updateSottoCategoria('http://joyfoodamministratore-sisp.rhcloud.com/listAllSottoCategoria')
             		updateAllergene('http://joyfoodamministratore-sisp.rhcloud.com/listAllAllergene')
             	});
         });      
    }
    
    function updateClassificazione(query){
    	$http.get(query)
        .then(function(response) {
             data = response.data;
            if(data){
            	db.transaction(function(transaction) {
            		for(var i=0;i<data.length;i++){
            			transaction.executeSql('INSERT INTO Classificazione  VALUES (?,?)', [data[i].id, data[i].descrizione]);
            		}
            		 
            	});
            }else{
                console.log("LOGIN "+response.data.error);
            }
           
	  });
    }
    
    function updateTipo(query){
    	$http.get(query)
        .then(function(response) {
             data = response.data;
            if(data){
            	db.transaction(function(transaction) {
            		for(var i=0;i<data.length;i++){
            			transaction.executeSql('INSERT INTO Tipo VALUES (?,?)', [data[i].id, data[i].descrizione]);
            		}
            		 
            	});
            }else{
                console.log("LOGIN "+response.data.error);
            }
           
	  });
    }
    
    function updateCategoria(query){
    	$http.get(query)
        .then(function(response) {
             data = response.data;
            if(data){
            	db.transaction(function(transaction) {
            		for(var i=0;i<data.length;i++){
            			transaction.executeSql('INSERT INTO Categoria VALUES (?,?)', [data[i].id, data[i].descrizione]);
            		}
            		 
            	});
            }else{
                console.log("LOGIN "+response.data.error);
            }
           
	  });
    }
    
    function updateSottoCategoria(query){
    	$http.get(query)
        .then(function(response) {
             data = response.data;
            if(data){
            	db.transaction(function(transaction) {
            		for(var i=0;i<data.length;i++){
            			transaction.executeSql('INSERT INTO SottoCategoria VALUES (?,?)', [data[i].id, data[i].descrizione]);
            		}
            		 
            	});
            }else{
                console.log("LOGIN "+response.data.error);
            }
           
	  });
    }
    
    function updateAllergene(query){
    	$http.get(query)
        .then(function(response) {
             data = response.data;
            if(data){
            	db.transaction(function(transaction) {
            		for(var i=0;i<data.length;i++){
            			transaction.executeSql('INSERT INTO Allergene  VALUES (?,?)', [data[i].id, data[i].descrizione]);
            		}
            		 
            	});
            }else{
                console.log("LOGIN "+response.data.error);
            }
           
	  });
    }
});