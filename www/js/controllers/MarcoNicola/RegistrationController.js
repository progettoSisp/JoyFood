/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('registrationController', function(registrationService,$scope,$http) {
	
	ons.ready(function() {
	       console.log("REG");
	       
	       $scope.dialogs = {};

	       $scope.show = function(dlg) {
	         if (!$scope.dialogs[dlg]) {
	           ons.createDialog(dlg).then(function(dialog) {
	             $scope.dialogs[dlg] = dialog;
	             dialog.show();
	           });
	         } else {
	           $scope.dialogs[dlg].show();
	         }
	       }
	       
	       
	       
	      });
	
	 $scope.master = {};
	 
	 
	 
	
	
	 $scope.next= function(user){
		 var errore = false;
		 if(user){
		 if(!user.username || !user.password1 || !user.password2 || !user.cognome)
			 errore = true;
		 var passwordNumber = false;
		 var passwordString = false;
		 if(user.password1){
			 passwordNumber = /\d/.test(user.password1);
			 passwordString = /[a-zA-Z]/.test(user.password1);
			 
			 }else{
				 $scope.passwordValida = false;
				 errore =true;
			 }
		 
		 
		 if(passwordNumber&&passwordString){
			 
			 $scope.passwordValida = true;
		 }else{
			 $scope.passwordValida = false;
			 
		 }
		 console.warn("password 1 " + user.password1);
		 console.warn("password 2 " + user.password2);
		 if(user.password1 != user.password2){
			// console.log("password non corrispondente");
			 $scope.passwordDueValida = false;
			 errore = true;
			 
		 }else{
			// console.log("password corrispondente");
			 $scope.passwordDueValida = true;
			 
		 }
	  
		 
		 console.log("Password 2 Valida : " + $scope.passwordDueValida);
		 $scope.inviato = true;
		 registrationService.saveUser(user);
		 if(!errore)
		 myNavigator.pushPage("html/MarcoNicola/registration_2.html")
	 
		 }else{
			 
			 $scope.inviato = true;
			 
			 
		 }
		 
		 
		 
		 }
	 
	 $scope.pagina2= function(temp){
		 console.log(temp);
		 var user=registrationService.getUser();
		 
		 $scope.inviato2 = true;
		 var settings = {
				  "async": true,
				  "crossDomain": true,
				  "url": "http://joyfoodamministratore-sisp.rhcloud.com/user/register",
				  "method": "POST",
				  "headers": {
				    "content-type": "application/x-www-form-urlencoded",
				    "cache-control": "no-cache",
				    "postman-token": "be255aa4-2a8f-b146-c05f-36b49a1acc31"
				  },
				  "data": {
				    "user": user.username,
				    "password": user.password1,
				    "mail": temp.email1,
				    "nome": user.nome,
				    "cognome": user.cognome,
				    "sesso": "M",
				    "codFiscale": temp.codiceFiscale,
				    "statoNascita": "Italia",
				    "provinciaNascita": "MI",
				    "comuneNascita": temp.comuneNascita,
				    "provinciaResidenza": "MB",
				    "capNascita": "20826",
				    "comuneResidenza": "Misinto",
				    "indirizzoResidenza": "Via G. Garibaldi 29",
				    "capResidenza": "20826",
				    "telefono": temp.telefono
				  }
				}
		 		console.log(settings);
				$.ajax(settings).done(function (response) {
					myNavigator.pushPage("html/MarcoNicola/conferma.html")
				});
	 }
		
     $scope.reset = function() {
         $scope.user = angular.copy($scope.master);
         if($("#password1"))
         $("#password1").val("");
         if($("#password2"))
         $("#password2").val("");
         if($("#codicefiscale"))
        $("#codicefiscale").val("");
        if($("#email1"))
        $("#email1").val("");
        if($("#email2"))
        $("#email2").val("");
     };
	

});

