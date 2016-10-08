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
    	 db= window.openDatabase("database", "1.0", "joyfooddatabase", 1000000);
    	 myNavigator.resetToPage('slidingmenu.html');
    	console.log("https://joyfoodamministratore-sisp.rhcloud.com/login?user="+$scope.field1+"&password="+$scope.field2);
    	 $http.get("https://joyfoodamministratore-sisp.rhcloud.com/login?user="+$scope.field1+"&password="+$scope.field2)
         .then(function(response) {
        	 console.log(response);
        	 console.log(angular.fromJson(response.data));
        	 var status=angular.fromJson(response.data);
        	 console.log(status.result);
             if(status.result==="ok"){
                 myNavigator.resetToPage('slidingmenu.html')
                 console.log("LOGIN "+response.data.result);
                 db= window.openDatabase("database", "1.0", "joyfooddatabase", 1000000);
             	db.transaction(function(transaction) {
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
             }else{
                 console.log("LOGIN "+response.data.error);
             }

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