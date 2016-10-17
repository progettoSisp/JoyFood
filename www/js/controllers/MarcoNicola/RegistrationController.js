/**
 * Created by Aerdna on 13-Sep-16.
 */
myApp.controller('registrationController', function(registrationService,$scope,$http) {
	
	ons.ready(function() {
	       console.log("REG");
	      });
	
	 $scope.master = {};
	 
	 $scope.next= function(user){
		 userService.saveUser(user);
		 myNavigator.pushPage("html/MarcoNicola/registration_2.html")
	 }
	 
	 $scope.pagina2= function(temp){
		 console.log(temp);
		 var user=userService.getUser();
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
				    "password": user.password,
				    "mail": temp.email,
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
     };
	

});

